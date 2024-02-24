//
// Created by cthelen on 24.02.24.
//

#include "perturbation.h"
#include <vector>
#include <map>
#include <cmath>
#include <iterator>
#include <random>

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
    std::uniform_real_distribution dist(-1.0, 1.0);

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
