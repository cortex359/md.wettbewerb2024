#ifndef GRAPH_OPTIMIZATION_H
#define GRAPH_OPTIMIZATION_H

#include <string>
#include <vector>
#include <map>
#include <random>
#include <memory>

// Constant for version
const auto VERSION = "2.0.1";

// Node structure for input graph
struct Node {
    const std::string node;
    double value;
    double radius;
    double x;
    double y;
};

struct Edge {
    unsigned int node_0 = -1;
    unsigned int node_1 = -1;
    double angle = -1.0;
    double target_angle = -1.0;
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

double calc_overlap(const Node& node_a, const Node& node_b);

double calc_distance(const std::shared_ptr<Node>& node_a, const std::shared_ptr<Node>& node_b);

Score calc_score(const std::vector<std::shared_ptr<Node>>& output_nodes,
                 const std::vector<Edge>& output_edges,
                 unsigned int k);

double calc_overlap_max(const std::vector<std::shared_ptr<Node>>& nodes);

void printScore(const Score& score, const std::string& file);

#endif // GRAPH_OPTIMIZATION_H
