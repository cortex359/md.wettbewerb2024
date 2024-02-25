#ifndef UTILS_H
#define UTILS_H

#include "score.h"
#include <stdexcept>
#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <map>
#include <cmath>
#include <algorithm>
#include <iomanip>
#include <iterator>

std::pair<std::vector<Node>, std::vector<Edge>> read_input_file(const std::string& file_path);
std::vector<Node> read_output_nodes(const std::string& file_path);
void save_nodes(const std::vector<Node>& nodes_output, std::string& save_file, const double& total_score);
std::vector<Edge> get_output_edges(const std::vector<Edge>& input_edges, std::vector<Node>& output_nodes);

#endif //UTILS_H
