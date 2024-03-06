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

void copy_input_values(const std::vector<std::shared_ptr<Node>>& input_nodes, std::vector<std::shared_ptr<Node>>& output_nodes) {
    for (const auto& input_node : input_nodes) {
        auto it = std::find_if(output_nodes.begin(), output_nodes.end(), [&input_node](const std::shared_ptr<Node>& node) { return node->node == input_node->node; });
        if (it == output_nodes.end()) {
            throw parsing_file_exception("Node " + input_node->node + " not found in output file");
        }
        (*it)->value = input_node->value;
    }
}

void save_nodes(const std::vector<std::shared_ptr<Node>>& nodes_output, std::string save_file, const double& total_score, const bool dry_run) {
    if (std::size_t pos = save_file.find("_score_"); pos != std::string::npos) {
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    } else {
        pos = save_file.rfind(".txt");
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    }

    std::ostream* out_stream = &std::cout;
    std::ofstream out_file_stream;
    if (dry_run) {
        std::cout << "Dry run, no output saved." << std::endl << std::endl;
    } else if (std::ifstream file(save_file); file) {
        std::cerr << "File " << save_file << " already exists." << std::endl;
        std::cerr << "Writing output to stdout:" << std::endl << std::endl;
    } else {
        std::cout << "Saving to file " << save_file << std::endl;
        out_file_stream.open(save_file);
        out_stream = &out_file_stream;
    }

    int idx = 0;
    for (const auto& node : nodes_output) {
        // double precision in C++ is at max 15 digits
        *out_stream << std::setprecision(10) << node->x << " " << node->y << " " << std::setprecision(15) <<
                    node->radius << " " << node->node << " " << idx << std::endl;
        ++idx;
    }

    out_file_stream.close();
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
