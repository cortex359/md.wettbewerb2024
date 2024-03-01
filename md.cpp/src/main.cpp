#include "score.h"
#include "perturbation.h"
#include "utils.h"
#include <iostream>

#define verbose false

void test_input_edges(const std::vector<Edge> &input_edges, const std::vector<std::shared_ptr<Node>> &input_nodes) {
    for (const auto &edge: input_edges) {
        std::cout << "Edge: " << input_nodes[edge.node_0]->node << " " << input_nodes[edge.node_1]->node << " " << edge.angle << std::endl;
    }
}

void score_files(const std::string &input_file, const std::vector<std::string> &output_files) {
    auto [input_nodes, input_edges] = read_input_file(input_file);
    if (verbose) test_input_edges(input_edges, input_nodes);

    std::vector<std::shared_ptr<Node>> output_nodes;
    std::vector<Edge> output_edges;

    for (const std::string &outputFile: output_files) {
        output_nodes = read_output_nodes(outputFile);
        output_edges = get_output_edges(input_edges, output_nodes);

        Score score = calc_score(output_nodes, input_edges, output_edges);
        printScore(score, outputFile);
    }
}

unsigned long optimize_file(const std::string &input_file, const std::string &output_file, int runtime, double max_perturbation, double temperature, double cooling_rate, bool dry_run = false) {
    auto [input_nodes, input_edges] = read_input_file(input_file);
    if (verbose) test_input_edges(input_edges, input_nodes);

    std::vector<std::shared_ptr<Node>> output_nodes = read_output_nodes(output_file);
    std::vector<Edge> output_edges = get_output_edges(input_edges, output_nodes);

    Score start_score = calc_score(output_nodes, input_edges, output_edges);

    auto iterations = optimize_positions(input_edges, output_nodes, output_edges, runtime, temperature, cooling_rate, max_perturbation);

    Score case_score = calc_score(output_nodes, input_edges, output_edges);
    std::cout << "Final Score: " << case_score.total_score << " (Overlap: " << case_score.overlap << ", Distance " <<
              case_score.distance << ", Angle: " << case_score.angle << ")" << std::endl;

    if (start_score.total_score < std::floor(case_score.total_score)) {
        std::cout << "Score improved by " << case_score.total_score - start_score.total_score << std::endl;
        save_nodes(output_nodes, output_file, case_score.total_score, dry_run);
    } else {
        std::cout << "Score did not improve" << std::endl;
    }

    return iterations;
}

int main(int argc, char *argv[]) {
    // Commandline Arguments
    bool score_only = false;
    bool dry_run = false;
    int runtime = 0; // number of seconds to run the optimization
    double max_perturbation = 0.0; // maximum perturbation for x and y coordinates
    double temperature = 0.0; // Initial temperature for simulated annealing
    double cooling_rate = 0.0; // Cooling rate for simulated annealing

    std::string input_file;
    std::vector<std::string> output_files;
    for (int i = 1; i < argc; ++i) {
        std::string arg = argv[i];
        if (arg == "-h" || arg == "--help") {
            std::cerr << "Usage: " << argv[0] << " [-h|--help] [-v|--version]" << std::endl;
            std::cerr << "       " << argv[0] << " [-s|--score] input_file output_file [output_file_2, ...]"
                      << std::endl;
            std::cerr << "       " << argv[0]
                      << " input_file output_file [seconds=10] [max_pertubation=0.1] [temperature=1.0] [cooling_rate=0.99]"
                      << std::endl;
            return 0;
        }
        if (arg == "-v" || arg == "--version") {
            std::cout << "Version " << VERSION << std::endl;
            return 0;
        }
        if (arg == "-n" || arg == "--dry-run") {
            dry_run = true;
        } else if (arg == "-s" || arg == "--score") {
            score_only = true;
        } else if (input_file.empty()) {
            input_file = arg;
        } else if (output_files.empty() || score_only) {
            output_files.push_back(arg);
        } else if (runtime == 0) {
            try {
                runtime = std::stoi(arg);
            } catch (const std::invalid_argument &e) {
                std::cerr << "Invalid argument for runtime" << std::endl;
                return 1;
            }
        } else if (max_perturbation == 0.0) {
            try {
                max_perturbation = std::stod(arg);
            } catch (const std::invalid_argument &e) {
                std::cerr << "Invalid argument for max_perturbation" << std::endl;
                return 1;
            }
        } else if (temperature == 0.0) {
            try {
                temperature = std::stod(arg);
                if (temperature <= 0.0) {
                    throw std::invalid_argument("Temperature must be greater than 0");
                }
            } catch (const std::invalid_argument &e) {
                std::cerr << "Invalid argument for temperature" << std::endl;
                return 1;
            }
        } else if (cooling_rate == 0.0) {
            try {
                cooling_rate = std::stod(arg);
                if (cooling_rate <= 0.0 || cooling_rate >= 1.0) {
                    throw std::invalid_argument("Cooling rate must be between 0 and 1");
                }
            } catch (const std::invalid_argument &e) {
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
    if (runtime == 0) {
        runtime = 10;
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

    score_files(input_file, output_files);

    if (score_only) return 0;

    auto time_global_start = std::chrono::high_resolution_clock::now();

    auto iterations = optimize_file(input_file, output_files.back(), runtime, max_perturbation, temperature, cooling_rate);

    auto time_global_stop = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> total_elapsed = time_global_stop - time_global_start;
    std::chrono::duration<double, std::nano> total_elapsed_ns = time_global_stop - time_global_start;

    if (total_elapsed.count() > 60000) {
        std::cout << "Total Time: " << total_elapsed.count() / 60000 << " min " << static_cast<int>(std::fmod(
                total_elapsed.count(), 60000)) / 1000 << " s" << std::endl;
    } else if (total_elapsed.count() > 1000) {
        std::cout << "Total Time: " << total_elapsed.count() / 1000 << " s" << std::endl;
    } else {
        std::cout << "Total Time: " << total_elapsed.count() << " ms" << std::endl;
    }
    std::cout << "Iterations: " << iterations << std::endl;
    std::cout << "Time per 1000 iterations: " << (total_elapsed_ns.count() / static_cast<double>(iterations) / 1000)
              << " µs/iterations" << std::endl;

    return 0;
}
