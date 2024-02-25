#include "perturbation.h"
#include "utils.h"

double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist) {
    return coordinate + max_perturbation * dist(rng);
}

unsigned long int optimize_positions(
                        const std::vector<Edge>& input_edges,
                        std::vector<Node>& output_nodes,
                        std::vector<Edge>& output_edges,
                        int runtime,
                        double temperature = 1.0, // Initial temperature for simulated annealing
                        double cooling_rate = 0.99, // Cooling rate for simulated annealing
                        double max_perturbation = 0.1 // Define the maximum perturbation for x and y coordinates
) {
    std::random_device rd;
    std::mt19937 rng(rd());
    std::uniform_real_distribution dist(-1.0, 1.0);

    const auto start_time{std::chrono::steady_clock::now()};
    double current_score = calc_score(output_nodes, input_edges, output_edges).total_score;

    unsigned long int iterations = 0;
    while (std::chrono::duration_cast<std::chrono::seconds>(std::chrono::steady_clock::now() - start_time).count() < runtime) {
        for (auto& node : output_nodes) {

            // Save the current position
            double original_x = node.x;
            double original_y = node.y;
            auto original_output_edges = output_edges;

            // Perturb the position
            node.x = perturb(node.x, max_perturbation, rng, dist);
            node.y = perturb(node.y, max_perturbation, rng, dist);

            // Update the edges
            update_angles(output_edges);

            // Calculate the score with the new position
            double new_score = calc_score(output_nodes, input_edges, output_edges).total_score;

            // Revert if the new score is worse, considering the temperature for simulated annealing
            if (new_score < current_score && exp((new_score - current_score) / temperature) < dist(rng)) {
                node.x = original_x;
                node.y = original_y;
                output_edges = original_output_edges;
            } else {
                current_score = new_score; // Update current score
            }
        }
        ++iterations;

        // Cool down the temperature
        temperature *= cooling_rate;
    }
    return iterations;
}

void update_angles(std::vector<Edge>& output_edges) {
    for (auto& edge : output_edges) {
        edge.angle = calc_angle(*edge.node_0, *edge.node_1);
    }
}