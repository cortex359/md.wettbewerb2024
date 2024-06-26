#ifndef PERTURBATION_H
#define PERTURBATION_H

#include "score.h"
#include <vector>
#include <cmath>
#include <random>
#include <chrono>
#include <set>

double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist);
unsigned long int optimize_positions(std::vector<std::shared_ptr<Node>>& output_nodes,
                                     std::vector<Edge>& output_edges,
                                     unsigned int k,
                                     int runtime,
                                     double temperature,
                                     double cooling_rate,
                                     double max_perturbation);
unsigned long int optimize_positions_v2(
        std::vector<std::shared_ptr<Node>>& output_nodes,
        std::vector<Edge>& output_edges,
        unsigned int k,
        int runtime);
std::vector<Edge> update_angles(const std::vector<Edge>& output_edges, const std::vector<std::shared_ptr<Node>>& nodes);
void rescale_nodes(const std::vector<std::shared_ptr<Node>>& scaled_nodes, double scaling_factor);

#endif //PERTURBATION_H