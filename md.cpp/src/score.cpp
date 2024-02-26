#include <stdexcept>
#include <iostream>
# include "score.h"

double calc_overlap(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    double dist = std::hypot(node_a.x - node_b.x, node_a.y - node_b.y);
    double R = node_a.radius + node_b.radius;
    return dist >= R ? 0.0 : (R - dist) / R;
}

double calc_overlap_max(const std::vector<Node>& nodes) {
    double overlap_max = 0.0;
    for (auto it_a = nodes.begin(); it_a != nodes.end(); ++it_a) {
        for (auto it_b = std::next(it_a); it_b != nodes.end(); ++it_b) {
            overlap_max = std::max(overlap_max, calc_overlap(*it_a, *it_b));
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

double find_angle_max(const std::vector<Edge>& input_edges,
                      const std::vector<Edge>& output_edges) {
    if (input_edges.size() != output_edges.size()) {
        throw std::invalid_argument("Input and output edges must have the same size.");
    }

    double angle_max = 0.0;
    for (int i = 0; i < input_edges.size(); ++i) {
        double angle_diff = std::fabs(input_edges[i].angle - output_edges[i].angle);
        angle_max = std::max(angle_max, std::min(angle_diff, 2.0 - angle_diff));
    }
    return angle_max;
}

double calc_distance(const std::shared_ptr<Node>& node_a, const std::shared_ptr<Node>& node_b) {
    if (node_a->node == node_b->node) {
        return 0.0;
    }
    double dist = std::hypot(node_a->x - node_b->x, node_a->y - node_b->y);
    double R = node_a->radius + node_b->radius;
    return dist < R ? 0.0 : (dist - R) / R;
}

double calc_distance_max(const std::vector<Edge>& edges) {
    double distance_max = 0.0;
    for (const auto& [node_a, node_b, a] : edges) {
        distance_max = std::max(distance_max, calc_distance(node_a, node_b));
    }
    return distance_max;
}

Score calc_score(const std::vector<Node>& output_nodes,
                 const std::vector<Edge>& input_edges,
                 const std::vector<Edge>& output_edges) {
    const auto k = static_cast<unsigned int>(input_edges.size());
    const auto n = static_cast<unsigned int>(output_nodes.size());
    const double overlap = calc_overlap_max(output_nodes) * 100;
    const double distance = calc_distance_max(output_edges) * 100;
    const double angle = find_angle_max(input_edges, output_edges) * 100;
    const double total_score = 1000. * (n + k) / (1 + 2 * overlap + distance + 0.1 * angle);
    return Score({n, k, overlap, distance, angle, total_score});
}

double get_total_score(const std::vector<Node>& output_nodes,
                       const std::vector<Edge>& input_edges,
                       const std::vector<Edge>& output_edges) {
    const auto k = static_cast<unsigned int>(input_edges.size());
    const auto n = static_cast<unsigned int>(output_nodes.size());
    const double overlap = calc_overlap_max(output_nodes) * 100;
    const double distance = calc_distance_max(output_edges) * 100;
    const double angle = find_angle_max(input_edges, output_edges) * 100;
    const double total_score = 1000. * (n + k) / (1 + 2 * overlap + distance + 0.1 * angle);
    std::cout << "Final Score: " << total_score << " (Overlap: " << overlap << ", Distance " <<
              distance << ", Angle: " << angle << ")" << std::endl;

    return total_score;
}