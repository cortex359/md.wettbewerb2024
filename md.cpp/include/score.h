#ifndef GRAPH_OPTIMIZATION_H
#define GRAPH_OPTIMIZATION_H

#include<string>
#include <vector>
#include <map>
#include <random>
#include <memory>

// Constant for version
const auto VERSION = "1.0.3";

// Node structure for input graph
struct Node {
    const std::string node;
    const double value;
    double radius;
    double x;
    double y;
    //std::vector<Node*> neighbors;
};

struct Edge {
    std::shared_ptr<Node> node_0;
    std::shared_ptr<Node> node_1;
    double angle = -1.0;
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
double find_angle_max(const std::vector<Edge>& input_edges,
                      const std::vector<Edge>& output_edges);

double calc_overlap(const Node& node_a, const Node& node_b);
double calc_overlap_max(const std::vector<Node>& nodes);

double calc_distance(const std::shared_ptr<Node>& node_a, const std::shared_ptr<Node>& node_b);
double calc_distance_max(const std::vector<Edge>& edges);

Score calc_score(const std::vector<Node>& output_nodes,
                 const std::vector<Edge>& input_edges,
                 const std::vector<Edge>& output_edges);

#endif // GRAPH_OPTIMIZATION_H
