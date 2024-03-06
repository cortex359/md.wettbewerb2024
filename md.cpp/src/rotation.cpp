//
// Seit Midterm unnötige Funktionen
//
#include "rotation.h"
#include "score.h"
#include "utils.h"

// Hilfsfunktion zur Rotation eines Punktes um einen gegebenen Winkel
void rotate_point(double& x, double& y, double angle) {
    double cos_angle = std::cos(angle);
    double sin_angle = std::sin(angle);

    double rotated_x = x * cos_angle - y * sin_angle;
    double rotated_y = x * sin_angle + y * cos_angle;

    x = rotated_x;
    y = rotated_y;
}

// Funktion, die alle Nodes um die Differenz der größten und der zweitgrößten Winkeldifferenz rotiert
void rotate_nodes_by_angle_diff(std::vector<std::shared_ptr<Node>>& output_nodes,
                                std::vector<Edge>& output_edges,
                                const float factor) {
    std::vector<double> angle_diffs;

    // Berechne Winkeldifferenzen für alle Kanten.
    for (auto const & output_edge : output_edges) {
        double angle_diff = std::fabs(output_edge.target_angle - output_edge.angle);
        angle_diff = std::min(angle_diff, 2 * M_PI - angle_diff); // Korrigiere Winkel zu [0, π]
        angle_diffs.push_back(angle_diff);
    }

    // Sortiere die Winkeldifferenzen und finde die zwei größten.
    std::nth_element(angle_diffs.begin(), angle_diffs.begin() + 1, angle_diffs.end(), std::greater<>());
    double largest_angle_diff = angle_diffs[0];
    double second_largest_angle_diff = angle_diffs[1];

    // Berechne den Winkel um den alle Knoten rotiert werden müssen.
    double rotation_angle = (largest_angle_diff - second_largest_angle_diff) * factor;
    if (std::fabs(rotation_angle) < 0.001) return ;

    std::cout << "Largest angle diff: " << largest_angle_diff * 100 / M_PI << ", second largest angle diff: " << second_largest_angle_diff * 100 / M_PI << std::endl;

    // Rotiere alle Knoten um diesen Winkel.
    for (auto const& node : output_nodes) {
        rotate_point(node->x, node->y, rotation_angle);
    }

    for (auto& edge : output_edges) {
        edge.angle = calc_angle(*output_nodes[edge.node_0], *output_nodes[edge.node_1]);
    }
}

// useless since Midterm
[[maybe_unused]] Score left_right_rotation(std::vector<std::shared_ptr<Node>> &output_nodes, std::vector<Edge> &output_edges, const unsigned int k) {
    Score case_score = calc_score(output_nodes, output_edges, k);
    printScore(case_score, "before Rotation");

    auto before_rotation = copy_nodes_edges(output_nodes, output_edges);

    rotate_nodes_by_angle_diff(output_nodes, output_edges, -0.5);
    Score after_rotation_score = calc_score(output_nodes, output_edges, k);
    printScore(after_rotation_score, "-0.5");

    if (after_rotation_score.total_score > case_score.total_score) {
        case_score = after_rotation_score;
    } else {
        std::tie(output_nodes, output_edges) = before_rotation;
    }

    before_rotation = copy_nodes_edges(output_nodes, output_edges);
    rotate_nodes_by_angle_diff(output_nodes, output_edges, 0.5);
    after_rotation_score = calc_score(output_nodes, output_edges, k);
    printScore(after_rotation_score, "0.5");

    if (after_rotation_score.total_score > case_score.total_score) {
        case_score = after_rotation_score;
    } else {
        std::tie(output_nodes, output_edges) = before_rotation;
    }
    return case_score;
}

// useless since Midterm
std::pair<std::vector<std::shared_ptr<Node>>, std::vector<Edge>> rotate_all_nodes_by_angle(const std::vector<std::shared_ptr<Node>>& nodes, const std::vector<Edge>& edges, const double angle) {
    auto [rotated_nodes, rotated_edges] = copy_nodes_edges(nodes, edges);
    for (const auto &node: rotated_nodes) {
        rotate_point(node->x, node->y, angle);
    }
    for (auto &edge: rotated_edges) {
        edge.angle = calc_angle(*rotated_nodes[edge.node_0], *rotated_nodes[edge.node_1]);
    }
    return std::make_pair(rotated_nodes, rotated_edges);
}

// useless since Midterm
Score optimize_rotation(std::vector<std::shared_ptr<Node>>& output_nodes, std::vector<Edge>& output_edges, const unsigned int k) {
    Score max_score = calc_score(output_nodes, output_edges, k);
    auto [optimal_nodes, optimal_edges] = copy_nodes_edges(output_nodes, output_edges);
    for (int i = 0; i < 3600; i++) {
        auto [rotated_nodes, rotated_edges] = rotate_all_nodes_by_angle(output_nodes, output_edges, i * 0.1 * M_PI / 180);
        Score case_score = calc_score(rotated_nodes, rotated_edges, k);
        printScore(case_score, "Rotation " + std::to_string(i * 0.1) + "°");

        if (case_score.total_score > max_score.total_score) {
            max_score = case_score;
            optimal_nodes = rotated_nodes;
            optimal_edges = rotated_edges;
        }
    }
    output_nodes = optimal_nodes;
    output_edges = optimal_edges;
    return max_score;
}

// useless since Midterm
void rotate_file(const std::string &input_file, const std::string &output_file, bool dry_run) {
    auto [input_nodes, input_edges, k] = read_input_file(input_file);
    std::vector<std::shared_ptr<Node>> output_nodes = read_output_nodes(output_file);
    std::vector<Edge> output_edges = get_output_edges(input_edges, output_nodes);

    Score start_score = calc_score(output_nodes, output_edges, k);
    Score case_score = optimize_rotation(output_nodes, output_edges, k);

    if (std::ceil(start_score.total_score) < std::floor(case_score.total_score)) {
        std::cout << "Score improved by " << case_score.total_score - start_score.total_score << std::endl;
        save_nodes(output_nodes, output_file, case_score.total_score, dry_run);
    } else {
        std::cout << "Score did not improve" << std::endl;
    }
}