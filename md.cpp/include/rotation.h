#ifndef ROTATION_H
#define ROTATION_H

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
#include "score.h"

void rotate_file(const std::string &input_file, const std::string &output_file, bool dry_run);

[[maybe_unused]] Score left_right_rotation(std::vector<std::shared_ptr<Node>> &output_nodes, std::vector<Edge> &output_edges, unsigned int k);

#endif //ROTATION_H
