#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <map>
#include <cmath>
#include <chrono>
#include <algorithm>
#include <iomanip>
#include <iterator>
#include <random>

#include "graph_optimization.h"

std::map<std::string, Node> read_input_nodes(const std::string& file_path) {
    std::map<std::string, Node> nodes;
    std::ifstream file(file_path);
    std::string line, id;
    double value, x, y;
    // std::cout << "Running read_input_nodes on file " << file_path << std::endl;
    // check if file exists
    if (!file) {
        std::cerr << "File " << file_path << " does not exist." << std::endl;
        return nodes;
    }
    unsigned int idx = 0;
    while (std::getline(file, line) && !line.empty()) {
        std::istringstream iss(line);
        iss >> id >> value >> x >> y;
        nodes[id] = {idx, id, value, sqrt(value), x, y};
        ++idx;
    }

    return nodes;
}

std::vector<Edge> read_edges(const std::string& file_path) {
    std::vector<Edge> edges;
    std::ifstream file(file_path);
    std::string line, node_0, node_1;

    bool skip = true;
    while (std::getline(file, line)) {
        if (line.empty()) {
            skip = false;
            continue;
        }
        if (skip) {
            continue;
        }
        std::istringstream iss(line);
        iss >> node_0 >> node_1;
        // std::cout << "Reading edge: " << node_0 << " " << node_1 << std::endl;
        edges.push_back({node_0, node_1});
    }

    return edges;
}

std::map<std::string, Node> read_output_nodes(const std::string& file_path) {
    std::map<std::string, Node> nodes;
    std::ifstream file(file_path);
    std::string line, name;
    double x, y, radius;
    unsigned int idx;

    // check if file exists
    if (!file) {
        std::cerr << "File " << file_path << " does not exist." << std::endl;
        return nodes;
    }
    while (std::getline(file, line)) {
        std::istringstream iss(line);
        iss >> x >> y >> radius >> name >> idx;
        nodes[name] = Node({idx, name, radius*radius, radius, x, y});
    }

    return nodes;
}

double calc_overlap(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    double dist = std::hypot(node_a.x - node_b.x, node_a.y - node_b.y);
    double R = node_a.radius + node_b.radius;
    return dist >= R ? 0.0 : (R - dist) / R;
}

double calc_distance(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    double dist = std::hypot(node_a.x - node_b.x, node_a.y - node_b.y);
    double R = node_a.radius + node_b.radius;
    return dist < R ? 0.0 : (dist - R) / R;
}

double calc_angle(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    return std::atan2(node_a.y - node_b.y, node_a.x - node_b.x) / M_PI;
}

double calc_angle_max(const std::map<std::string, Node>& input_nodes,
                      const std::map<std::string, Node>& output_nodes,
                      const std::vector<Edge>& edges) {
    double angle_max = 0.0;
    for (const auto& [node_0, node_1] : edges) {
        const auto& input_a = input_nodes.at(node_0);
        const auto& input_b = input_nodes.at(node_1);
        const auto& output_a = output_nodes.at(node_0);
        const auto& output_b = output_nodes.at(node_1);
        double angle_diff = std::fabs(calc_angle(input_a, input_b) - calc_angle(output_a, output_b));
        angle_max = std::max(angle_max, std::min(angle_diff, 2.0 - angle_diff));
    }
    return angle_max;
}

double calc_overlap_fast(const std::map<std::string, Node>& output_nodes) {
    double overlap_max = 0.0;
    for (auto it_a = output_nodes.begin(); it_a != output_nodes.end(); ++it_a) {
        for (auto it_b = std::next(it_a); it_b != output_nodes.end(); ++it_b) {
            overlap_max = std::max(overlap_max, calc_overlap(it_a->second, it_b->second));
        }
    }
    return overlap_max;
}

double calc_distance_max(const std::map<std::string, Node>& output_nodes,
                         const std::vector<Edge>& edges) {
    double distance_max = 0.0;
    for (const auto& [node_0, node_1] : edges) {
        const auto& node_a = output_nodes.at(node_0);
        const auto& node_b = output_nodes.at(node_1);
        distance_max = std::max(distance_max, calc_distance(node_a, node_b));
    }
    return distance_max;
}

Score calc_score(const std::map<std::string, Node>& input_nodes,
                 const std::map<std::string, Node>& output_nodes,
                 const std::vector<Edge>& edges) {
    const auto n = static_cast<u_int>(input_nodes.size());
    const auto k = static_cast<u_int>(edges.size());
    double overlap = calc_overlap_fast(output_nodes) * 100;
    double distance = calc_distance_max(output_nodes, edges) * 100;
    double angle = calc_angle_max(input_nodes, output_nodes, edges) * 100;
    double total_score = 1000. * (n + k) / (1 + 2 * overlap + distance + 0.1 * angle);
    Score score = {n, k, overlap, distance, angle, total_score};
    return score;
}

double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist) {
    return coordinate + max_perturbation * dist(rng);
}

void optimize_positions(const std::map<std::string, Node>& input_nodes,
                        std::map<std::string, Node>& output_nodes,
                        const std::vector<Edge>& edges,
                        int iterations,
                        double temperature = 1.0, // Initial temperature for simulated annealing
                        double cooling_rate = 0.99, // Cooling rate for simulated annealing
                        double max_perturbation = 0.1 // Define the maximum perturbation for x and y coordinates
) {
    std::random_device rd;
    std::mt19937 rng(rd());
    std::uniform_real_distribution<> dist(-1.0, 1.0);

    double current_score = calc_score(input_nodes, output_nodes, edges).total_score;

    for (int i = 0; i < iterations; ++i) {
        for (auto& node_pair : output_nodes) {
            Node& node = node_pair.second;

            // Save the current position
            double original_x = node.x;
            double original_y = node.y;

            // Perturb the position
            node.x = perturb(node.x, max_perturbation, rng, dist);
            node.y = perturb(node.y, max_perturbation, rng, dist);

            // Calculate the score with the new position
            double new_score = calc_score(input_nodes, output_nodes, edges).total_score;

            // Revert if the new score is worse, considering the temperature for simulated annealing
            if (new_score < current_score && exp((new_score - current_score) / temperature) < dist(rng)) {
                node.x = original_x;
                node.y = original_y;
            } else {
                current_score = new_score; // Update current score
            }
        }

        // Cool down the temperature
        temperature *= cooling_rate;
    }
}

void save_nodes(const std::map<std::string, Node>& nodes_output, std::string& save_file, const double & total_score) {
    // sort nodes_output by node.second.idx
    std::vector<Node> sorted_nodes_output;
    for (const auto& node : nodes_output) {
        sorted_nodes_output.push_back(node.second);
    }
    std::sort(sorted_nodes_output.begin(), sorted_nodes_output.end(), [](const Node& a, const Node& b) {
        return a.idx < b.idx;
    });

    if (std::size_t pos = save_file.find("_score_"); pos != std::string::npos) {
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    } else {
        pos = save_file.rfind(".txt");
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    }

    std::cerr << "Saving to file " << save_file << std::endl;

    // check if save_file allready exists
    if (std::ifstream file(save_file); file) {
        std::cerr << "File " << save_file << " already exists." << std::endl;
        return;
    } else {
        std::ofstream output_file_sorted(save_file);
        for (const auto& node : sorted_nodes_output) {
            output_file_sorted << std::setprecision(10) << node.x << " " << node.y << " " << std::setprecision(17) <<
                node.radius << " " << node.node << " " << node.idx << std::endl;
        }
        output_file_sorted.close();
    }
}

int main(int argc, char* argv[]) {
    // Commandline Arguments
    bool score_only = false;
    int iterations = 0; // number of iterations for the optimization
    double max_perturbation = 0.0; // maximum perturbation for x and y coordinates
    double temperature = 0.0; // Initial temperature for simulated annealing
    double cooling_rate = 0.0; // Cooling rate for simulated annealing

    std::string input_file;
    std::vector<std::string> output_files;
    for (int i = 1; i < argc; ++i) {
        std::string arg = argv[i];
        if (arg == "-h" || arg == "--help") {
            std::cerr << "Usage: " << argv[0] << " [-h|--help] [-v|--version]" << std::endl;
            std::cerr << "       " << argv[0] << " [-s|--score] input_file output_file [output_file_2, ...]" << std::endl;
            std::cerr << "       " << argv[0] << " input_file output_file [iterations=200] [max_pertubation=0.1] [temperature=1.0] [cooling_rate=0.99]" << std::endl;
            return 0;
        }
        if (arg == "-v" || arg == "--version") {
            std::cout << "Version " << VERSION << std::endl;
            return 0;
        }
        if (arg == "-s" || arg == "--score") {
            score_only = true;
        } else if (input_file.empty()) {
            input_file = arg;
        } else if (output_files.empty() || score_only) {
            output_files.push_back(arg);
        } else if (iterations == 0) {
            try {
                iterations = std::stoi(arg);
            } catch (const std::invalid_argument& e) {
                std::cerr << "Invalid argument for iterations" << std::endl;
                return 1;
            }
        } else if (max_perturbation == 0.0) {
            try {
                max_perturbation = std::stod(arg);
            } catch (const std::invalid_argument& e) {
                std::cerr << "Invalid argument for max_perturbation" << std::endl;
                return 1;
            }
        } else if (temperature == 0.0) {
            try {
                temperature = std::stod(arg);
                if (temperature <= 0.0) {
                    throw std::invalid_argument("Temperature must be greater than 0");
                }
            } catch (const std::invalid_argument& e) {
                std::cerr << "Invalid argument for temperature" << std::endl;
                return 1;
            }
        } else if (cooling_rate == 0.0) {
            try {
                cooling_rate = std::stod(arg);
                if (cooling_rate <= 0.0 || cooling_rate >= 1.0) {
                    throw std::invalid_argument("Cooling rate must be between 0 and 1");
                }
            } catch (const std::invalid_argument& e) {
                std::cerr << "Invalid argument for cooling_rate" << std::endl;
                return 1;
            }
        } else {
            std::cerr << "Too many arguments" << std::endl;
            return 1;
        }
    }

    if (input_file.empty() || output_files.empty()) {
        std::cerr << "No input file or output file specified" << std::endl;
        return 1;
    }
    if (iterations == 0) {
        iterations = 200;
    }
    if (max_perturbation == 0.0) {
        max_perturbation = 0.1;
    }
    if (temperature == 0.0) {
        temperature = 1.0;
    }
    if (cooling_rate == 0.0) {
        cooling_rate = 0.99;
    }

    auto time_global_start = std::chrono::high_resolution_clock::now();

    auto nodes_input = read_input_nodes(input_file);
    auto edges = read_edges(input_file);
    std::map<std::string, Node> nodes_output;
    std::string output_file;
    Score start_score = {0, 0, 0, 0, 0, 0};
    for (const std::string& ofile : output_files) {
        output_file = ofile;
        nodes_output = read_output_nodes(output_file);
        start_score = calc_score(nodes_input, nodes_output, edges);
        std::cout << output_file << std::endl;
        std::cout << "Score:       " << start_score.total_score << " (Overlap: " << start_score.overlap << ", Distance "
            << start_score.distance << ", Angle: " << start_score.angle << ")" << std::endl;
    }

    if (score_only) return 0;

    // Optimize the positions of the nodes
    optimize_positions(nodes_input, nodes_output, edges, iterations, temperature, cooling_rate, max_perturbation);

    // Calculate score
    Score case_score = calc_score(nodes_input, nodes_output, edges);
    std::cout << "Final Score: " << case_score.total_score << " (Overlap: " << case_score.overlap << ", Distance " <<
        case_score.distance << ", Angle: " << case_score.angle << ")" << std::endl;

    if (start_score.total_score < std::floor(case_score.total_score)) {
        std::cout << "Score improved by " << case_score.total_score - start_score.total_score << std::endl;
        std::cout << "Saving output to file" << std::endl;
        save_nodes(nodes_output, output_file, case_score.total_score);
    } else {
        std::cout << "Score did not improve" << std::endl;
    }

    auto time_global_stop = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> total_elapsed = time_global_stop - time_global_start;

    if (total_elapsed.count() > 60000) {
        std::cout << "Total Time: " << total_elapsed.count() / 60000 << " min " << (int)std::fmod(
            total_elapsed.count(), 60000) / 1000 << " s" << std::endl;
    } else if (total_elapsed.count() > 1000) {
        std::cout << "Total Time: " << total_elapsed.count() / 1000 << " s" << std::endl;
    } else {
        std::cout << "Total Time: " << total_elapsed.count() << " ms" << std::endl;
    }

    return 0;
}
