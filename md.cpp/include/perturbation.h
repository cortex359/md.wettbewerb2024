//
// Created by cthelen on 24.02.24.
//

#ifndef PERTUBATION_H
#define PERTUBATION_H

#include "graph_optimization.h"
#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <map>
#include <cmath>
#include <chrono>
#include <algorithm>
#include <iomanip>
#include <iterator>
#include <random>

double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist);
void optimize_positions(const std::map<std::string, Node>& input_nodes,
                        std::map<std::string, Node>& output_nodes,
                        const std::vector<Edge>& edges,
                        int iterations,
                        double temperature,
                        double cooling_rate,
                        double max_perturbation);

#endif //PERTUBATION_H
