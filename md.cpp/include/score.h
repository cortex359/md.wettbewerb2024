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
const auto VERSION = "1.0.3";

// Node structure for input graph
struct Node {
    unsigned int idx;
    std::string node;
    double value;
    double radius;
    double x;
    double y;
};

// Edge structure for input graph
struct Edge {
    std::string node_0;
    std::string node_1;
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

double calc_angle(const Node& node_a, const Node& node_b);
double calc_angle_max(const std::map<std::string, Node>& input_nodes,
                      const std::map<std::string, Node>& output_nodes,
                      const std::vector<Edge>& edges);

double calc_overlap(const Node& node_a, const Node& node_b);
double calc_overlap_max(const std::map<std::string, Node>& output_nodes);

double calc_distance(const Node& node_a, const Node& node_b);
double calc_distance_max(const std::map<std::string, Node>& output_nodes,
                         const std::vector<Edge>& edges);

Score calc_score(const std::map<std::string, Node>& input_nodes,
                 const std::map<std::string, Node>& output_nodes,
                 const std::vector<Edge>& edges);


#endif // GRAPH_OPTIMIZATION_H