#include "graph_optimization.h"
#include "utils.h"
#include "perturbation.h"
#include <iostream>


int main(int argc, char* argv[]) {
    // Commandline Arguments
    bool score_only = false;
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
            std::cerr << "       " << argv[0] << " [-s|--score] input_file output_file [output_file_2, ...]" << std::endl;
            std::cerr << "       " << argv[0] << " input_file output_file [seconds=10] [max_pertubation=0.1] [temperature=1.0] [cooling_rate=0.99]" << std::endl;
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
        } else if (runtime == 0) {
            try {
                runtime = std::stoi(arg);
            } catch (const std::invalid_argument& e) {
                std::cerr << "Invalid argument for runtime" << std::endl;
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


    auto nodes_input = read_input_nodes(input_file);
    auto edges = read_edges(input_file);
    std::map<std::string, Node> nodes_output;
    std::string output_file;
    Score start_score = {0, 0, -1.0, -1.0, -1.0, -1.0};
    for (const std::string& ofile : output_files) {
        output_file = ofile;
        nodes_output = read_output_nodes(output_file);
        start_score = calc_score(nodes_input, nodes_output, edges);
        std::cout << output_file << std::endl;
        std::cout << "Score:       " << start_score.total_score << " (Overlap: " << start_score.overlap << ", Distance "
                  << start_score.distance << ", Angle: " << start_score.angle << ")" << std::endl;
    }

    start_score = calc_score(nodes_input, nodes_output, edges);
    if (score_only) return 0;

    auto time_global_start = std::chrono::high_resolution_clock::now();

    // Optimize the positions of the nodes
    const auto iterations = optimize_positions(nodes_input, nodes_output, edges, runtime, temperature, cooling_rate, max_perturbation);

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
    std::cout << "Time per 1000 iterations: " << (total_elapsed_ns.count() / static_cast<double>(iterations) / 1000) << " µs/iterations" << std::endl;

    return 0;
}
