//
// Created by cthelen on 24.02.24.
//
# include "graph_optimization.h"

double calc_overlap(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    double dist = std::hypot(node_a.x - node_b.x, node_a.y - node_b.y);
    double R = node_a.radius + node_b.radius;
    return dist >= R ? 0.0 : (R - dist) / R;
}

double calc_overlap_max(const std::map<std::string, Node>& output_nodes) {
    double overlap_max = 0.0;
    for (auto it_a = output_nodes.begin(); it_a != output_nodes.end(); ++it_a) {
        for (auto it_b = std::next(it_a); it_b != output_nodes.end(); ++it_b) {
            overlap_max = std::max(overlap_max, calc_overlap(it_a->second, it_b->second));
        }
    }
    return overlap_max;
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

double calc_distance(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    double dist = std::hypot(node_a.x - node_b.x, node_a.y - node_b.y);
    double R = node_a.radius + node_b.radius;
    return dist < R ? 0.0 : (dist - R) / R;
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
    const double overlap = calc_overlap_max(output_nodes) * 100;
    const double distance = calc_distance_max(output_nodes, edges) * 100;
    const double angle = calc_angle_max(input_nodes, output_nodes, edges) * 100;
    const double total_score = 1000. * (n + k) / (1 + 2 * overlap + distance + 0.1 * angle);
    const Score score = {n, k, overlap, distance, angle, total_score};
    return score;
}