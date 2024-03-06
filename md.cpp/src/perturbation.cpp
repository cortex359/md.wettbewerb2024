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

// rotate node a around node b by an angle
void rotate_node(std::shared_ptr<Node>& node_a, const std::shared_ptr<Node>& node_b, double angle) {
    if (node_a->node == node_b->node) return;
    double x = node_a->x - node_b->x;
    double y = node_a->y - node_b->y;
    node_a->x = node_b->x + x * std::cos(angle) - y * std::sin(angle);
    node_a->y = node_b->y + x * std::sin(angle) + y * std::cos(angle);
}

// calculate center of mass of nodes
std::pair<double, double> calc_center_of_mass(const std::vector<std::shared_ptr<Node>>& nodes) {
    double x = 0.0;
    double y = 0.0;
    for (const auto& node : nodes) {
        x += node->x;
        y += node->y;
    }
    return {x / nodes.size(), y / nodes.size()};
}

// decide which node is further away from the center of mass
std::pair<std::shared_ptr<Node>, std::shared_ptr<Node>> decide_further_away(const std::shared_ptr<Node>& node_0, const std::shared_ptr<Node>& node_1, const std::pair<double, double>& center_of_mass) {
    std::shared_ptr<Node> further_away = node_0;
    std::shared_ptr<Node> closer = node_1;
    double distance_further_away = std::hypot(further_away->x - center_of_mass.first, further_away->y - center_of_mass.second);
    double distance_closer = std::hypot(closer->x - center_of_mass.first, closer->y - center_of_mass.second);
    if (distance_closer > distance_further_away) {
        std::swap(further_away, closer);
    }
    return {further_away, closer};
}

// move node a further away from node b by a factor
void move_node_further_away(const std::shared_ptr<Node>& node_a, const std::shared_ptr<Node>& node_b, double factor) {
    if (node_a->node == node_b->node) return;
    double distance = std::hypot(node_a->x - node_b->x, node_a->y - node_b->y);
    double c = node_a->radius + node_b->radius - distance;
    c *= factor;
    node_a->x += (node_a->x - node_b->x) * c / distance;
    node_a->y += (node_a->y - node_b->y) * c / distance;
}

unsigned long int optimize_positions_v2(
        std::vector<std::shared_ptr<Node>>& output_nodes,
        std::vector<Edge>& output_edges,
        const unsigned int k,
        int runtime) {
    std::random_device rd;
    std::mt19937 rng(rd());
    std::uniform_real_distribution positiv_dist(0.0, 1.0);
    std::uniform_real_distribution dist(-1.0, 1.0);
    std::normal_distribution normal_dist(0.0, 1.0);
    double temperature = 1.0; // Initial temperature for simulated annealing
    double cooling_rate = 0.99; // Cooling rate for simulated annealing

    const auto start_time{std::chrono::steady_clock::now()};
    double current_score = calc_score(output_nodes, output_edges, k).total_score;

    auto center_of_mass = calc_center_of_mass(output_nodes);

    unsigned long int iterations = 0;
    while (std::chrono::duration_cast<std::chrono::seconds>(std::chrono::steady_clock::now() - start_time).count() < runtime) {
        if (iterations % 31 < 20) {

            // Identifiziere Knoten mit maximaler Überlappung
            double max_overlap = 0.0;
            std::pair<unsigned int, unsigned int> max_overlap_nodes;
            for (size_t i = 0; i < output_nodes.size(); ++i) {
                for (size_t j = i + 1; j < output_nodes.size(); ++j) {
                    if (double overlap = calc_overlap(*output_nodes[i], *output_nodes[j]); overlap > max_overlap) {
                        max_overlap = overlap;
                        max_overlap_nodes = std::make_pair(i, j);
                    }
                }
            }

            // Reduce max overlapping or revert
            auto [copy_nodes, copy_edges] = copy_nodes_edges(output_nodes, output_edges);
            // Reduce max overlapping
            auto [overlapping_further_away, overlapping_closer] = decide_further_away(
                    copy_nodes[max_overlap_nodes.first], copy_nodes[max_overlap_nodes.second], center_of_mass);
            move_node_further_away(overlapping_further_away, overlapping_closer, positiv_dist(rng));

            std::vector<Edge> updated_edges = update_angles(copy_edges, copy_nodes);
            if (double new_score = calc_score(copy_nodes, updated_edges, k).total_score;
                    new_score >= current_score) {
                output_nodes = copy_nodes;
                output_edges = updated_edges;
                current_score = new_score;
            }
            //----

        } else {
            // Identifiziere Knoten mit maximaler Winkelabweichung oder Abstand
            std::pair<unsigned int, unsigned int> max_angle_node_indices;
            std::pair<unsigned int, unsigned int> max_distance_node_indices;

            double max_angle = 0.0;
            double max_distance = 0.0;

            for (const auto &output_edge: output_edges) {
                // Winkelberechnung
                double angle_diff = std::fabs(output_edge.target_angle - output_edge.angle);
                angle_diff = std::min(angle_diff, 2.0 * M_PI - angle_diff);
                if (angle_diff > max_angle) {
                    max_angle = angle_diff;
                    max_angle_node_indices = {output_edge.node_0, output_edge.node_1};
                }

                // Abstandsberechnung
                if (double distance = calc_distance(output_nodes[output_edge.node_0], output_nodes[output_edge.node_1]);
                        distance > max_distance) {
                    max_distance = distance;
                    max_distance_node_indices = {output_edge.node_0, output_edge.node_1};
                }
            }

            if (iterations % 31 != 30) {
                // Reduce max distance or revert
                auto [copy_nodes2, copy_edges2] = copy_nodes_edges(output_nodes, output_edges);
                // Reduce max distance
                auto [distance_further_away, distance_closer] = decide_further_away(
                        copy_nodes2[max_distance_node_indices.first], copy_nodes2[max_distance_node_indices.second],
                        center_of_mass);
                move_node_further_away(distance_further_away, distance_closer, positiv_dist(rng));
                std::vector<Edge> updated_edges = update_angles(copy_edges2, copy_nodes2);
                if (double new_score = calc_score(copy_nodes2, updated_edges, k).total_score;
                        new_score >= current_score) {
                    output_nodes = copy_nodes2;
                    output_edges = updated_edges;
                    current_score = new_score;
                }
                //----

            } else {

                // Reduce max angle or revert
                auto [copy_nodes3, copy_edges3] = copy_nodes_edges(output_nodes, output_edges);
                // rotate
                rotate_node(copy_nodes3[max_angle_node_indices.first], copy_nodes3[max_angle_node_indices.second],
                            normal_dist(rng) * max_angle);
                std::vector<Edge> updated_edges = update_angles(copy_edges3, copy_nodes3);
                // Revert if the new score is worse, considering the temperature for simulated annealing
                // || exp((new_score - current_score) / temperature) > dist(rng)
                if (double new_score = calc_score(copy_nodes3, updated_edges, k).total_score;
                        new_score >= current_score) {
                    output_nodes = copy_nodes3;
                    output_edges = updated_edges;
                    current_score = new_score;
                }
                //----
            }
        }

        // print name of relevant nodes in each category
        //std::cout << "Max overlap nodes: " << output_nodes[max_overlap_nodes.first]->node << " and " << output_nodes[max_overlap_nodes.second]->node << " with " << max_overlap << std::endl;
        //std::cout << "Max angle nodes: " << output_nodes[max_angle_node_indices.first]->node << " and " << output_nodes[max_angle_node_indices.second]->node << " with " << max_angle <<std::endl;
        //std::cout << "Max distance nodes: " << output_nodes[max_distance_node_indices.first]->node << " and " << output_nodes[max_distance_node_indices.second]->node << " with " << max_distance << std::endl;


        //printScore(calc_score(output_nodes, output_edges, k), std::to_string(iterations));
        iterations++;

        // Cool down the temperature
        temperature *= cooling_rate;
    }
    return iterations;
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
    double max_score = current_score;
    auto max_result = copy_nodes_edges(output_nodes, output_edges);

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
                // Save the best results, so they don't get lost if the score gets worse
                if (new_score > max_score) {
                    max_score = new_score;
                    max_result = copy_nodes_edges(output_nodes, updated_edges);
                }
                current_score = new_score; // Update current score
                output_edges = updated_edges; // Update the edges
            }
        }
        ++iterations;

        // Cool down the temperature
        temperature *= cooling_rate;
    }

    if (max_score > current_score) {
        std::cout << "We endet up at " << current_score << " but our maximum was " << max_score << " so we revert back." << std::endl;
        output_nodes = std::get<0>(max_result);
        output_edges = std::get<1>(max_result);
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