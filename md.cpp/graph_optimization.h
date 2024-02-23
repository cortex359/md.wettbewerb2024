//
// Created by cthelen on 23.02.24.
// graph_optimization.h
//

#ifndef GRAPH_OPTIMIZATION_H
#define GRAPH_OPTIMIZATION_H

#include <string>
#include <vector>
#include <map>
#include <random>

// Constant for version
const auto VERSION = "1.0.1";

// Node structure for input graph
struct Node {
    std::string id;
    double value;
    double x;
    double y;
};

// Edge structure for input graph
struct Edge {
    std::string node_0;
    std::string node_1;
};

// Node structure for output graph
struct OutputNode {
    double x;
    double y;
    double radius;
    std::string node;
    int idx;
};

// Score structure for optimization results
struct Score {
    unsigned int n;
    unsigned int k;
    double overlap;
    double distance;
    double angle;
    double total_score;
};

// Function declarations
std::map<std::string, Node> read_input_nodes(const std::string& file_path);
std::vector<Edge> read_edges(const std::string& file_path);
std::map<std::string, OutputNode> read_output_nodes(const std::string& file_path);
double calc_overlap(const OutputNode& node_a, const OutputNode& node_b);
double calc_distance(const OutputNode& node_a, const OutputNode& node_b);
double calc_angle(const Node& node_a, const Node& node_b);
double calc_angle(const OutputNode& node_a, const OutputNode& node_b);
double calc_angle_max(const std::map<std::string, Node>& input_nodes,
                      const std::map<std::string, OutputNode>& output_nodes,
                      const std::vector<Edge>& edges);
double calc_overlap_fast(const std::map<std::string, OutputNode>& output_nodes);
double calc_distance_max(const std::map<std::string, OutputNode>& output_nodes,
                         const std::vector<Edge>& edges);
Score calc_score(const std::map<std::string, Node>& input_nodes,
                 const std::map<std::string, OutputNode>& output_nodes,
                 const std::vector<Edge>& edges);
double perturb(double coordinate, double max_perturbation, std::mt19937& rng, std::uniform_real_distribution<>& dist);
void optimize_positions(const std::map<std::string, Node>& input_nodes,
                        std::map<std::string, OutputNode>& output_nodes,
                        const std::vector<Edge>& edges,
                        int iterations,
                        double temperature,
                        double cooling_rate,
                        double max_perturbation);
void save_nodes(std::map<std::string, OutputNode>& nodes_output, std::string& save_file, double& total_score);

#endif // GRAPH_OPTIMIZATION_H