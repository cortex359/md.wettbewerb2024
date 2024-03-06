#include <stdexcept>
# include "score.h"

/**
 * @brief Calculates the relative overlap between two nodes.
 *
 * The releative overlap is calculated as (R - dist) / R = 1 - (dist / R), where dist is the distance between the two
 * nodes and R is the sum of their radii.
 * If the distance is greater than R, the overlap is 0.
 *
 * @param node_a First node.
 * @param node_b Second node.
 * @return Overlap between the two nodes.
 */
double calc_overlap(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    double dist = std::hypot(node_a.x - node_b.x, node_a.y - node_b.y);
    double R = node_a.radius + node_b.radius;
    return dist >= R ? 0.0 : (R - dist) / R;
}

double calc_overlap_max(const std::vector<std::shared_ptr<Node>>& nodes) {
    double overlap_max = 0.0;
    // Ein Overlap kann zwischen allen Nodes entstehen, unabhängig davon, ob sie durch eine Edge verbunden sind.
    for (auto it_a = nodes.begin(); it_a != nodes.end(); ++it_a) {
        for (auto it_b = std::next(it_a); it_b != nodes.end(); ++it_b) {
            overlap_max = std::max(overlap_max, calc_overlap(**it_a, **it_b));
        }
    }
    return overlap_max;
}

double calc_angle(const Node& node_a, const Node& node_b) {
    if (node_a.node == node_b.node) {
        return 0.0;
    }
    return std::atan2(node_a.y - node_b.y, node_a.x - node_b.x);
}

double calc_angle_avg(const std::vector<Edge>& edges) {
    double angle_avg = 0.0;
    for (const auto& edge : edges) {
        double angle_diff = std::fabs(edge.target_angle - edge.angle);
        angle_avg += std::min(angle_diff, 2.0 * M_PI - angle_diff);
    }
    return angle_avg / static_cast<double>(edges.size());
}

double calc_distance(const std::shared_ptr<Node>& node_a, const std::shared_ptr<Node>& node_b) {
    if (node_a->node == node_b->node) {
        return 0.0;
    }
    double dist = std::hypot(node_a->x - node_b->x, node_a->y - node_b->y);
    double R = node_a->radius + node_b->radius;
    return dist < R ? 0.0 : (dist - R) / R;
}

double calc_distance_avg(const std::vector<Edge>& edges, const std::vector<std::shared_ptr<Node>>& nodes) {
    double distances = 0.0;
    for (const auto& edge : edges) {
        distances += calc_distance(nodes[edge.node_0], nodes[edge.node_1]);
    }
    return distances / static_cast<double>(edges.size());
}

Score calc_score(const std::vector<std::shared_ptr<Node>>& output_nodes,
                 const std::vector<Edge>& output_edges,
                 const unsigned int k) {
    const auto n = static_cast<unsigned int>(output_nodes.size());
    const double overlap = calc_overlap_max(output_nodes) * 100;
    const double distance = calc_distance_avg(output_edges, output_nodes) * 100;
    const double angle = calc_angle_avg(output_edges) * 100 / M_PI;
    const double total_score = 1000. * (n + k) / (1 + 0.1 * overlap * overlap + 0.05 * distance * distance + 0.05 * angle * angle);
    return Score({n, k, overlap, distance, angle, total_score});
}

void printScore(const Score& score, const std::string& file = "") {
    printf("Score %9.3f  (Overlap: %8.4f, Distance: %8.4f, Angle: %8.4f, n: %3d, k: %3d) %s\n",
           score.total_score, score.overlap, score.distance, score.angle,
           score.n, score.k, file.c_str());
}
