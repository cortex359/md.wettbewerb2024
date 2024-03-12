import sys
import time

from utils import input
from utils import score

def get_adj(nodes, edges):
    adj = {}
    for node in nodes.iterrows():
        adj[node[1].node] = []
    for edge in edges.iterrows():
        adj[edge[1].node_0].append(edge[1].node_1)
        adj[edge[1].node_1].append(edge[1].node_0)
    return adj

def get_nodes_with_single_edge(adj_list):
    return[single_edges for single_edges in adj_list.keys() if len(adj_list[single_edges]) == 1]


