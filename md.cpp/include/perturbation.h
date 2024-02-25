#ifndef PERTURBATION_H
#define PERTURBATION_H

#include "score.h"
#include <vector>
#include <cmath>
#include <random>
#include <chrono>

double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist);
unsigned long int optimize_positions(const std::vector<Edge>& input_edges,
                                     std::vector<Node>& output_nodes,
                                     std::vector<Edge>& output_edges,
                                     int runtime,
                                     double temperature,
                                     double cooling_rate,
                                     double max_perturbation);
void update_angles(std::vector<Edge>& output_edges);

#endif //PERTURBATION_H