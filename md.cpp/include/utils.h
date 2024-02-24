//
// Created by cthelen on 24.02.24.
//

#ifndef UTILS_H
#define UTILS_H

#include "graph_optimization.h"

std::map<std::string, Node> read_input_nodes(const std::string& file_path);
std::vector<Edge> read_edges(const std::string& file_path);
std::map<std::string, Node> read_output_nodes(const std::string& file_path);
void save_nodes(const std::map<std::string, Node>& nodes_output, std::string& save_file, const double & total_score);

#endif //UTILS_H
