#include "perturbation.h"
#include "utils.h"


double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist) {
    return coordinate + max_perturbation * dist(rng);
}

void rescale_nodes(const std::vector<std::shared_ptr<Node>>& scaled_nodes, double scaling_factor) {
    scaling_factor /= std::sqrt(2 * M_PI);
    for (auto &node: scaled_nodes) {
        node->radius = std::sqrt(node->value) * scaling_factor;
    }
}

// Funktion, um die relevanten Knoten zu identifizieren
std::set<unsigned int> find_relevant_nodes(
        const std::vector<Edge>& output_edges,
        const std::vector<std::shared_ptr<Node>>& output_nodes) {

    // Identifiziere Knoten mit maximaler Überlappung
    double max_overlap = 0.0;
    std::pair<unsigned int, unsigned int> max_overlap_nodes;
    for (size_t i = 0; i < output_nodes.size(); ++i) {
        for (size_t j = i + 1; j < output_nodes.size(); ++j) {
            double overlap = calc_overlap(*output_nodes[i], *output_nodes[j]);
            if (overlap > max_overlap) {
                max_overlap = overlap;
                max_overlap_nodes = std::make_pair(i, j);
            }
        }
    }

    // Identifiziere Knoten mit maximaler Winkelabweichung oder Abstand
    std::pair<unsigned int, unsigned int> max_angle_node_indices;
    std::pair<unsigned int, unsigned int> max_distance_node_indices;

    double max_angle = 0.0;
    double max_distance = 0.0;

    for (const auto & output_edge : output_edges) {
        // Winkelberechnung
        double angle_diff = std::fabs(output_edge.target_angle - output_edge.angle);
        angle_diff = std::min(angle_diff, 2.0 * M_PI - angle_diff);
        if (angle_diff > max_angle) {
            max_angle = angle_diff;
            max_angle_node_indices = {output_edge.node_0, output_edge.node_1};
        }

        // Abstandsberechnung
        double distance = calc_distance(output_nodes[output_edge.node_0], output_nodes[output_edge.node_1]);
        if (distance > max_distance) {
            max_distance = distance;
            max_distance_node_indices = {output_edge.node_0, output_edge.node_1};
        }
    }

    // Füge die gefundenen relevanten Knoten in ein Set ein, um Duplikate zu vermeiden
    std::set<unsigned int> relevant_nodes;
    relevant_nodes.insert(max_overlap_nodes.first);
    relevant_nodes.insert(max_overlap_nodes.second);
    relevant_nodes.insert(max_angle_node_indices.first);
    relevant_nodes.insert(max_angle_node_indices.second);
    relevant_nodes.insert(max_distance_node_indices.first);
    relevant_nodes.insert(max_distance_node_indices.second);

    return relevant_nodes;
}

unsigned long int optimize_positions(
                        std::vector<std::shared_ptr<Node>>& output_nodes,
                        std::vector<Edge>& output_edges,
                        const unsigned int k,
                        int runtime,
                        double temperature = 1.0, // Initial temperature for simulated annealing
                        double cooling_rate = 0.99, // Cooling rate for simulated annealing
                        double max_perturbation = 0.1 // Define the maximum perturbation for x and y coordinates
) {
    std::random_device rd;
    std::mt19937 rng(rd());
    std::uniform_real_distribution dist(-1.0, 1.0);

    const auto start_time{std::chrono::steady_clock::now()};
    double current_score = calc_score(output_nodes, output_edges, k).total_score;

    unsigned long int iterations = 0;
    while (std::chrono::duration_cast<std::chrono::seconds>(std::chrono::steady_clock::now() - start_time).count() < runtime) {
        auto relevant_nodes = find_relevant_nodes(output_edges, output_nodes);
        for (unsigned int idx : relevant_nodes) {
            auto& node = output_nodes[idx];

            // Save the current position
            double original_x = node->x;
            double original_y = node->y;

            // Perturb the position
            double relative_perturbation = max_perturbation * node->radius;
            node->x = perturb(node->x, relative_perturbation, rng, dist);
            node->y = perturb(node->y, relative_perturbation, rng, dist);

            // Update the edges
            const std::vector<Edge> updated_edges = update_angles(output_edges, output_nodes);

            // Calculate the score with the new position
            double new_score = calc_score(output_nodes, updated_edges, k).total_score;

            // Revert if the new score is worse, considering the temperature for simulated annealing
            if (new_score < current_score && exp((new_score - current_score) / temperature) < dist(rng)) {
                node->x = original_x;
                node->y = original_y;
            } else {
                current_score = new_score; // Update current score
                output_edges = updated_edges; // Update the edges
            }
        }
        ++iterations;

        // Cool down the temperature
        temperature *= cooling_rate;
    }
    return iterations;
}

std::vector<Edge> update_angles(const std::vector<Edge>& output_edges, const std::vector<std::shared_ptr<Node>>& nodes) {
    auto updated_edges = output_edges;
    for (auto& edge : updated_edges) {
        edge.angle = calc_angle(*nodes[edge.node_0], *nodes[edge.node_1]);
    }
    return updated_edges;
}