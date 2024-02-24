//
// Created by cthelen on 24.02.24.
//

#include "utils.h"
#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <map>
#include <cmath>
#include <algorithm>
#include <iomanip>
#include <iterator>

std::map<std::string, Node> read_input_nodes(const std::string& file_path) {
    std::map<std::string, Node> nodes;
    std::ifstream file(file_path);
    std::string line, id;
    double value, x, y;

    // check if file exists
    if (!file) {
        throw std::runtime_error("Failed to open file: " + file_path);
    }

    unsigned int idx = 0;
    while (std::getline(file, line) && !line.empty()) {
        std::istringstream iss(line);
        iss >> id >> value >> x >> y;
        nodes[id] = {idx, id, value, sqrt(value), x, y};
        ++idx;
    }
    file.close();
    return nodes;
}

std::vector<Edge> read_edges(const std::string& file_path) {
    std::vector<Edge> edges;
    std::string line;
    std::string node_0, node_1;
    std::ifstream file(file_path);
    if (!file) {
        throw std::runtime_error("Failed to open file: " + file_path);
    }

    // detect empty line as beginning of edges
    while (std::getline(file, line) && !line.empty() && line != "\r");
    while (std::getline(file, line)) {
        std::istringstream iss(line);
        iss >> node_0 >> node_1;
        edges.push_back({node_0, node_1});
    }

    if (edges.empty()) {
        throw std::runtime_error("No edges found in file: " + file_path);
    }
    file.close();
    return edges;
}

std::map<std::string, Node> read_output_nodes(const std::string& file_path) {
    std::map<std::string, Node> nodes;
    std::string line, name;
    double x, y, radius;
    unsigned int idx;
    std::ifstream file(file_path);
    if (!file) {
        throw std::runtime_error("Failed to open file: " + file_path);
    }

    // check if file exists
    if (!file) {
        std::cerr << "File " << file_path << " does not exist." << std::endl;
        return nodes;
    }
    while (std::getline(file, line)) {
        std::istringstream iss(line);
        iss >> x >> y >> radius >> name >> idx;
        nodes[name] = Node({idx, name, radius*radius, radius, x, y});
    }
    file.close();
    return nodes;
}

void save_nodes(const std::map<std::string, Node>& nodes_output, std::string& save_file, const double & total_score) {
    // sort nodes_output by node.second.idx
    std::vector<Node> sorted_nodes_output;
    for (const auto& node : nodes_output) {
        sorted_nodes_output.push_back(node.second);
    }
    std::sort(sorted_nodes_output.begin(), sorted_nodes_output.end(), [](const Node& a, const Node& b) {
        return a.idx < b.idx;
    });

    if (std::size_t pos = save_file.find("_score_"); pos != std::string::npos) {
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    } else {
        pos = save_file.rfind(".txt");
        save_file = save_file.substr(0, pos) + "_score_" + std::to_string(total_score) + ".txt";
    }

    std::cerr << "Saving to file " << save_file << std::endl;

    // check if save_file allready exists
    if (std::ifstream file(save_file); file) {
        std::cerr << "File " << save_file << " already exists." << std::endl;
        return;
    } else {
        std::ofstream output_file_sorted(save_file);
        for (const auto& node : sorted_nodes_output) {
            output_file_sorted << std::setprecision(10) << node.x << " " << node.y << " " << std::setprecision(17) <<
                               node.radius << " " << node.node << " " << node.idx << std::endl;
        }
        output_file_sorted.close();
    }
}