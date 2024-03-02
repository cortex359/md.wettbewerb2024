#include "utils.h"
#include "score.h"

#define verbose false

struct parsing_file_exception : public std::runtime_error {
    using runtime_error::runtime_error;
};

void removeSymmetricPairs(std::vector<std::pair<std::string, std::string>>& vec) {
    auto it = vec.begin();
    while (it != vec.end()) {
        // search reversed pair
        auto toFind = std::make_pair(it->second, it->first);
        if (auto found = std::find(it + 1, vec.end(), toFind); found != vec.end()) {
            vec.erase(found);
        }
        ++it;
    }
}

std::tuple<std::vector<std::shared_ptr<Node>>, std::vector<Edge>, unsigned int> read_input_file(const std::string &file_path) {
    std::vector<std::shared_ptr<Node>> nodes;
    std::vector<Edge> edges;
    std::vector<std::pair<std::string, std::string>> edges_str;
    std::ifstream file(file_path);
    std::string line;
    std::string name;
    std::string node_0;
    std::string node_1;
    double x;
    double y;
    double value;

    // open file
    if (!file.is_open() || !file.good()) {
        std::cerr << "File " << file_path << " does not exist." << std::endl;
        throw parsing_file_exception("Failed to open file: " + file_path);
    }

    while (std::getline(file, line) && !line.empty() && line != "\r") {
        std::istringstream iss(line);
        iss >> name >> value >> x >> y;
        nodes.push_back(std::make_shared<Node>(Node({name, value, sqrt(value), x, y})));
    }

    while (std::getline(file, line)) {
        std::istringstream iss(line);
        iss >> node_0 >> node_1;
        edges_str.emplace_back(node_0, node_1);
    }
    file.close();

    if (nodes.empty()) {
        throw parsing_file_exception("No nodes found in file: " + file_path);
    }
    if (edges_str.empty()) {
        throw parsing_file_exception("No edges found in file: " + file_path);
    }
    auto k = static_cast<unsigned int>(edges_str.size());

    removeSymmetricPairs(edges_str);
    if (verbose) std::cout << "Reduced edges from " << k << " to " << edges_str.size() << std::endl;

    for (const auto &edge : edges_str) {
        // find Node with name edge.first and edge.second
        auto it_0 = std::find_if(nodes.begin(), nodes.end(), [&edge](const std::shared_ptr<Node>& node) { return node->node == edge.first; });
        auto it_1 = std::find_if(nodes.begin(), nodes.end(), [&edge](const std::shared_ptr<Node>& node) { return node->node == edge.second; });
        if (it_0 == nodes.end() || it_1 == nodes.end()) {
            throw parsing_file_exception("Node " + edge.first + " or " + edge.second + " not found in file: " + file_path);
        }

        // find index of node in node vecotr
        auto idx_0 = static_cast<unsigned int>(std::distance(nodes.begin(), it_0));
        auto idx_1 = static_cast<unsigned int>(std::distance(nodes.begin(), it_1));
        if (verbose) std::cout << "Edge from idx " << idx_0 << " to " << idx_1 << std::endl;

        // and also create a List of edges for faster access
        auto node_a = *it_0;
        auto node_b = *it_1;
        double input_angle = calc_angle(*node_a, *node_b);
        edges.emplace_back(Edge{idx_0, idx_1, input_angle, input_angle});
    }
    if (verbose) std::cout << "Read " << nodes.size() << " nodes and " << edges.size() << " edges from file: " << file_path << std::endl;
    return std::make_tuple(nodes, edges, k);
}

std::vector<std::shared_ptr<Node>> read_output_nodes(const std::string& file_path) {
    std::vector<std::shared_ptr<Node>> nodes;
    std::ifstream file(file_path);
    std::string line;
    std::string name;
    std::string node_0;
    std::string node_1;
    double x;
    double y;
    double radius;
    unsigned int idx_read;
    unsigned int idx = 0;

    // open file
    if (!file.is_open() || !file.good()) {
        std::cerr << "File " << file_path << " does not exist." << std::endl;
        throw parsing_file_exception("Failed to open file: " + file_path);
    }

    while (std::getline(file, line) && !line.empty() && line != "\r") {
        std::istringstream iss(line);
        iss >> x >> y >> radius >> name >> idx_read;
        if (idx_read != idx) {
            throw parsing_file_exception("Invalid index in file: " + file_path + " at line: " + std::to_string(idx));
        }
        ++idx;
        nodes.push_back(std::make_shared<Node>(Node({name, -1.0, radius, x, y})));
    }
    if (nodes.empty()) {
        throw parsing_file_exception("No nodes found in output file: " + file_path);
    }
    file.close();

    return nodes;
}

std::vector<Edge> get_output_edges(const std::vector<Edge>& input_edges, const std::vector<std::shared_ptr<Node>>& output_nodes) {
    std::vector<Edge> output_edges;
    output_edges.reserve(input_edges.size());

    for (const auto& input_edge : input_edges) {
        if (verbose) std::cout << "Looking for nodes " << input_edges.size() << " in output file." << std::endl;

        auto new_edge = Edge{input_edge.node_0, input_edge.node_1, calc_angle(*output_nodes[input_edge.node_0], *output_nodes[input_edge.node_1]), input_edge.target_angle};
        output_edges.push_back(new_edge);
    }
    return output_edges;
}


void save_nodes(const std::vector<std::shared_ptr<Node>>& nodes_output, std::string save_file, const double& total_score, const bool dry_run) {

    if (std::size_t pos = save_file.find("_score_"); pos != std::string::npos) {
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    } else {
        pos = save_file.rfind(".txt");
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    }

    // check if save_file already exists
    if (std::ifstream file(save_file); file || dry_run) {
        if (dry_run) {
            std::cout << "Dry run, no output saved." << std::endl;
        } else {
            std::cerr << "File " << save_file << " already exists." << std::endl;
        }
        std::cerr << "Writing output to stdout:" << std::endl << std::endl;

        int idx = 0;
        for (const auto& node : nodes_output) {
            std::cout << std::setprecision(10) << node->x << " " << node->y << " " << std::setprecision(17) <<
                      node->radius << " " << node->node << " " << idx << std::endl;
            ++idx;
        }
    } else {
        std::cout << "Saving to file " << save_file << std::endl;
        std::ofstream output_file(save_file);
        int idx = 0;
        for (const auto& node : nodes_output) {
            output_file << std::setprecision(10) << node->x << " " << node->y << " " << std::setprecision(17) <<
                        node->radius << " " << node->node << " " << idx << std::endl;
            ++idx;
        }
        output_file.close();
    }
}

std::tuple<std::vector<std::shared_ptr<Node>>, std::vector<Edge>> copy_nodes_edges(const std::vector<std::shared_ptr<Node>>& nodes, const std::vector<Edge>& edges) {
    std::vector<std::shared_ptr<Node>> nodes_copy;
    std::vector<Edge> edges_copy;

    for (const auto& node : nodes) {
        nodes_copy.push_back(std::make_shared<Node>(Node({node->node, node->value, node->radius, node->x, node->y})));
    }

    for (const auto& edge : edges) {
        edges_copy.push_back(Edge{edge.node_0, edge.node_1, edge.angle, edge.target_angle});
    }

    return std::make_tuple(nodes_copy, edges_copy);
}

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



Score left_right_rotation(std::vector<std::shared_ptr<Node>> &output_nodes, std::vector<Edge> &output_edges, const unsigned int k) {
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

void rotate_file(const std::string &input_file, const std::string &output_file, bool dry_run) {
    auto [input_nodes, input_edges, k] = read_input_file(input_file);
    std::vector<std::shared_ptr<Node>> output_nodes = read_output_nodes(output_file);
    std::vector<Edge> output_edges = get_output_edges(input_edges, output_nodes);

    Score start_score = calc_score(output_nodes, output_edges, k);
    Score case_score = left_right_rotation(output_nodes, output_edges, k);

    if (start_score.total_score < std::floor(case_score.total_score)) {
        std::cout << "Score improved by " << case_score.total_score - start_score.total_score << std::endl;
        save_nodes(output_nodes, output_file, case_score.total_score, dry_run);
    } else {
        std::cout << "Score did not improve" << std::endl;
    }
}