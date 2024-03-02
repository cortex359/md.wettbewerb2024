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

std::pair<std::vector<std::shared_ptr<Node>>, std::vector<Edge>> read_input_file(const std::string &file_path);
std::vector<std::shared_ptr<Node>> read_output_nodes(const std::string& file_path);
void save_nodes(const std::vector<std::shared_ptr<Node>>& nodes_output, std::string save_file, const double& total_score, bool dry_run);
std::vector<Edge> get_output_edges(const std::vector<Edge>& input_edges, const std::vector<std::shared_ptr<Node>>& output_nodes);
void rotate_nodes_by_angle_diff(std::vector<std::shared_ptr<Node>>& output_nodes, const std::vector<Edge>& input_edges, std::vector<Edge>& output_edges, float factor);

void rotate_file(const std::string &input_file, const std::string &output_file, bool dry_run = false);
Score left_right_rotation(std::vector<std::shared_ptr<Node>> &output_nodes, const std::vector<Edge> &input_edges, std::vector<Edge> &output_edges);

#endif //UTILS_H