#include "score.h"
#include "perturbation.h"
#include "utils.h"
#include "rotation.h"
#include <iostream>

#define verbose false

void test_input_edges(const std::vector<Edge> &input_edges, const std::vector<std::shared_ptr<Node>> &input_nodes) {
    for (const auto &edge: input_edges) {
        std::cout << "Edge: " << input_nodes[edge.node_0]->node << " " << input_nodes[edge.node_1]->node << " " << edge.angle << std::endl;
    }
}

void score_files(const std::string &input_file, const std::vector<std::string> &output_files) {
    auto [input_nodes, input_edges, k] = read_input_file(input_file);
    if (verbose) test_input_edges(input_edges, input_nodes);

    std::vector<std::shared_ptr<Node>> output_nodes;
    std::vector<Edge> output_edges;

    for (const std::string &outputFile: output_files) {
        output_nodes = read_output_nodes(outputFile);
        output_edges = get_output_edges(input_edges, output_nodes);

        Score score = calc_score(output_nodes, output_edges, k);
        printScore(score, outputFile);
    }
}

unsigned long optimize_file(const std::string &input_file, const std::string &output_file, int runtime, double max_perturbation, double temperature, double cooling_rate, bool dry_run = false) {
    auto [input_nodes, input_edges, k] = read_input_file(input_file);
    if (verbose) test_input_edges(input_edges, input_nodes);

    std::vector<std::shared_ptr<Node>> output_nodes = read_output_nodes(output_file);
    std::vector<Edge> output_edges = get_output_edges(input_edges, output_nodes);

    Score start_score = calc_score(output_nodes, output_edges, k);

    auto iterations = optimize_positions(output_nodes, output_edges, k, runtime, temperature, cooling_rate, max_perturbation);
    //auto iterations = optimize_positions_v2(output_nodes, output_edges, k, runtime);

    Score case_score = calc_score(output_nodes, output_edges, k);

    if (std::ceil(start_score.total_score) < std::floor(case_score.total_score)) {
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
    bool rotate_only = false;
    bool rescale = false;
    int runtime = 0; // number of seconds to run the optimization
    double max_perturbation = 0.0; // maximum perturbation for x and y coordinates
    double temperature = 0.0; // Initial temperature for simulated annealing
    double cooling_rate = 0.0; // Cooling rate for simulated annealing

    int rescale_steps = 0;
    double rescale_step_size = 0.0;
    double rescale_offset = 0.0;

    std::string input_file;
    std::vector<std::string> output_files;
    for (int i = 1; i < argc; ++i) {
        std::string arg = argv[i];
        if (arg == "-h" || arg == "--help") {
            std::cerr << "Usage: " << argv[0] << " [-h|--help] [-v|--version]" << std::endl;
            std::cerr << "       " << argv[0] << " [-s|--score] input_file output_file [output_file_2, ...]" << std::endl;
            std::cerr << "       " << argv[0] << " input_file output_file [seconds=10] [max_pertubation=0.01] [temperature=1.0] [cooling_rate=0.99]" << std::endl;
            std::cerr << "       " << argv[0] << " --rescale input_file output_file [seconds=10] [steps=100] [step_size=0.1] [offset=0]" << std::endl;
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
        } else if (arg == "-r" || arg == "--rotate") {
            rotate_only = true;
        } else if (arg == "--rescale") {
            rescale = true;
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
        } else if (rescale) {
            if (rescale_steps == 0) {
                try {
                    rescale_steps = std::stoi(arg);
                } catch (const std::invalid_argument &e) {
                    std::cerr << "Invalid argument for rescale_steps" << std::endl;
                    return 1;
                }
            } else if (rescale_step_size == 0.0) {
                try {
                    rescale_step_size = std::stod(arg);
                } catch (const std::invalid_argument &e) {
                    std::cerr << "Invalid argument for step_size" << std::endl;
                    return 1;
                }
            } else if (rescale_offset == 0.0) {
                try {
                    rescale_offset = std::stod(arg);
                } catch (const std::invalid_argument &e) {
                    std::cerr << "Invalid argument for offset" << std::endl;
                    return 1;
                }
            } else {
                std::cerr << "Too many arguments" << std::endl;
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

    if (runtime == 0) runtime = 10;
    if (max_perturbation == 0.0) max_perturbation = 0.01;
    if (temperature == 0.0) temperature = 1.0;
    if (cooling_rate == 0.0) cooling_rate = 0.99;

    if (rescale) {
        if (rescale_steps == 0) rescale_steps = 100;
        if (rescale_step_size == 0.0) rescale_step_size = 0.1;
        if (rescale_offset == 0.0) rescale_offset = 0.0;
    }

    score_files(input_file, output_files);

    if (score_only) return 0;

    if (rotate_only) {
        rotate_file(input_file, output_files[0], dry_run);
        return 0;
    }

    if (rescale) {
        auto [input_nodes, input_edges, k] = read_input_file(input_file);
        std::vector<std::shared_ptr<Node>> output_nodes = read_output_nodes(output_files[0]);
        copy_input_values(input_nodes, output_nodes);
        std::vector<Edge> output_edges = get_output_edges(input_edges, output_nodes);

        Score start_score = calc_score(output_nodes, output_edges, k);
        printScore(start_score, "start");

        auto best_results = copy_nodes_edges(output_nodes, output_edges);
        Score best_score = start_score;
        for (int i = 1; i < rescale_steps; i++) {
            double factor = i * rescale_step_size + rescale_offset;
            auto [copy_nodes, copy_edges] = copy_nodes_edges(output_nodes, output_edges);

            rescale_nodes(copy_nodes, factor);

            Score rescale_score = calc_score(copy_nodes, copy_edges, k);
            printScore(rescale_score, "rescale by " + std::to_string(factor));

            optimize_positions(copy_nodes, copy_edges, k, runtime / rescale_steps, temperature, cooling_rate, max_perturbation);
            //optimize_positions_v2(copy_nodes, copy_edges, k, runtime / rescale_steps);
            Score case_score = calc_score(copy_nodes, copy_edges, k);
            printScore(case_score, "           -> " + std::to_string(factor));
            if (case_score.total_score > best_score.total_score) {
                std::cout << "Score improved by " << case_score.total_score - start_score.total_score << std::endl;
                best_results = copy_nodes_edges(copy_nodes, copy_edges);
                best_score = case_score;
            }
        }

        if (start_score.total_score < std::floor(best_score.total_score)) {
            std::cout << "Total score improvement by " << best_score.total_score - start_score.total_score << std::endl;
            auto const& [best_nodes, best_edges] = best_results;
            save_nodes(best_nodes, output_files.back(), best_score.total_score, dry_run);
        } else {
            std::cout << "Total score did not improve." << std::endl;
        }
        return 0;
    }

    auto time_global_start = std::chrono::high_resolution_clock::now();

    auto iterations = optimize_file(input_file, output_files.back(), runtime, max_perturbation, temperature, cooling_rate, dry_run);

    auto time_global_stop = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> total_elapsed = time_global_stop - time_global_start;
    std::chrono::duration<double, std::micro> total_elapsed_mms = time_global_stop - time_global_start;

    if (total_elapsed.count() > 60000) {
        std::cout << "Total Time: " << total_elapsed.count() / 60000 << " min " << static_cast<int>(std::fmod(
                total_elapsed.count(), 60000)) / 1000 << " s" << std::endl;
    } else if (total_elapsed.count() > 1000) {
        std::cout << "Total Time: " << total_elapsed.count() / 1000 << " s" << std::endl;
    } else {
        std::cout << "Total Time: " << total_elapsed.count() << " ms" << std::endl;
    }

    printf("%lu iterations, %.2f iterations per second, avg. time per iteration %.4f µs\n",
           iterations,
           (static_cast<double>(iterations) / total_elapsed.count() * 1000),
           (total_elapsed_mms.count() / static_cast<double>(iterations)));

    return 0;
}
