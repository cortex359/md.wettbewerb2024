#include "utils.h"
#include "score.h"


#define verbose false
struct parsing_file_exception : public std::runtime_error {
    using runtime_error::runtime_error;
};

std::pair<std::vector<std::shared_ptr<Node>>, std::vector<Edge>> read_input_file(const std::string &file_path) {
    std::vector<std::shared_ptr<Node>> nodes;
    std::vector<Edge> edges_new;
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
        edges_new.emplace_back(Edge{idx_0, idx_1, calc_angle(*node_a, *node_b)});
    }
    if (verbose) std::cout << "Read " << nodes.size() << " nodes and " << edges_new.size() << " edges from file: " << file_path << std::endl;
    return std::make_pair(nodes, edges_new);
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

        auto new_edge = Edge{input_edge.node_0, input_edge.node_1, calc_angle(*output_nodes[input_edge.node_0], *output_nodes[input_edge.node_1])};
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