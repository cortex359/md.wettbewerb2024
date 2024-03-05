import pandas as pd
import math
import numpy as np
import itertools
from utils import input

def read_to_df(file_path: str) -> pd.DataFrame:
    """
    This function takes the output file and returns a pandas DataFrame.

    Parameters:
    file_path (str): The path to the output file.

    Returns:
    pd.DataFrame: A DataFrame with columns  ['x', 'y', 'radius', 'node', 'idx'] containing the node data.

    Raises:
    ValueError: If the output file cannot be parsed into the expected format.
    """
    with open(file_path, 'r') as f:
        nodes_list = [line.split() for line in f.read().strip().split('\n')]

    # nodes_list → nodes_df
    try:
        nodes_df = pd.DataFrame(nodes_list, columns=['x', 'y', 'radius', 'node', 'idx'])
        nodes_df = nodes_df.astype({'x': float, 'y': float, 'radius': float, 'node': str, 'idx': int})
    except ValueError as error:
        exit(f'❌ Error parsing output file: {error}.')
    nodes_df.set_index('node', inplace=True)

    return nodes_df


def calc_overlap(df, node_a, node_b):
    # ignore identical nodes
    if node_a == node_b:
        return 0
    # calculate overlap of two nodes
    node_a = df.loc[node_a]
    node_b = df.loc[node_b]
    dist = np.hypot(node_a.x - node_b.x, node_a.y - node_b.y)
    R = node_a.radius + node_b.radius
    return 0 if dist >= R else (R - dist) / R


def calc_distance(df, node_a, node_b):
    # ignore identical nodes
    if node_a == node_b:
        return 0
    # calculate overlap of two nodes
    node_a = df.loc[node_a]
    node_b = df.loc[node_b]
    dist = np.hypot(node_a.x - node_b.x, node_a.y - node_b.y)
    R = node_a.radius + node_b.radius
    return 0 if dist < R else (dist - R) / R


def calc_angle(df, node_a, node_b):
    # ignore identical nodes
    if node_a == node_b:
        return 0
    # calculate angle of two nodes
    node_a = df.loc[node_a]
    node_b = df.loc[node_b]
    delta_x = node_a.x - node_b.x
    delta_y = node_a.y - node_b.y
    return math.atan2(delta_y, delta_x) / math.pi


def calc_angle_max(df_in, df_out, edges):
    alpha = [(calc_angle(df_in, node_a, node_b), calc_angle(df_out, node_a, node_b)) for node_a, node_b in
             itertools.combinations(df_in.index, 2) if (node_a, node_b) in edges or (node_b, node_a) in edges]
    return max([min(abs(a0 - a1), 2 - abs(a0 - a1)) for a0, a1 in alpha])


def calc_overlap_fast(df):
    return max([calc_overlap(df, node_a, node_b) for node_a, node_b in itertools.combinations(df.index, 2)])

def overlapping_nodes(df):
    overlaps = [(node_a, node_b, calc_overlap(df, node_a, node_b)) for node_a, node_b in itertools.combinations(df.index, 2)]
    return sorted([a for a in overlaps if a[2] > 0], key=lambda x: x[2], reverse=True)

def calc_distance_max(df, edges):
    return max([calc_distance(df, node_a, node_b) for node_a, node_b in itertools.combinations(df.index, 2)
                if (node_a, node_b) in edges or (node_b, node_a) in edges])

def calc_distance_avg(df, edges):
    return np.mean([calc_distance(df, node_a, node_b) for node_a, node_b in edges])

def calc_angle_avg(df_in, df_out, edges):
    alpha = [(calc_angle(df_in, node_a, node_b), calc_angle(df_out, node_a, node_b)) for node_a, node_b in
             itertools.combinations(df_in.index, 2) if (node_a, node_b) in edges or (node_b, node_a) in edges]
    return np.mean([min(abs(a0 - a1), 2 - abs(a0 - a1)) for a0, a1 in alpha])


def calc_score(input_nodes, output_nodes, edges, k):
    n = input_nodes.shape[0]
    overlap = calc_overlap_fast(output_nodes) * 100
    distance = calc_distance_avg(output_nodes, edges) * 100
    angle = calc_angle_avg(input_nodes, output_nodes, edges) * 100
    total_score = 1000. * (n + k) / (1 + 0.1 * (overlap * overlap) + 0.05 * (distance * distance) + 0.05 * (angle * angle))
    return n, overlap, distance, angle, total_score


def calc_score_with_np(input_nodes, output_nodes, edges, k):
    # liste mit allen Node Kombinationen \subset Nodes^2
    # für Distance und Angel erweitern wir die Matrix um die Spalten
    np.hypot(node_a.x - node_b.x, node_a.y - node_b.y)
    edges['distance'] = edges.apply(lambda x: calc_distance(output_nodes, x.node_0, x.node_1), axis=1)
    edges['target_angle'] = edges.apply(lambda x: calc_angle(input_nodes, x.node_0, x.node_1), axis=1)
    edges['R'] = edges.apply(lambda x: input_nodes.loc[x.node_0].radius + input_nodes.loc[x.node_1].radius, axis=1)

    edges['angle'] = edges['target_angle']
    edges['angle_diff'] = edges.apply(lambda x: min(abs(x.target_angle - calc_angle(output_nodes, x.node_0, x.node_1)),
                                              2 - abs(x.target_angle - calc_angle(output_nodes, x.node_0, x.node_1))), axis=1)


def output_edges(input_edges: pd.DataFrame, input_nodes: pd.DataFrame, output_nodes: pd.DataFrame):
    edges = input_edges.copy()
    edges['distance'] = edges.apply(lambda x: calc_distance(output_nodes, x.node_0, x.node_1) * 100, axis=1)
    edges['target_angle'] = edges.apply(lambda x: calc_angle(input_nodes, x.node_0, x.node_1), axis=1)
    edges['angle'] = edges.apply(lambda x: calc_angle(output_nodes, x.node_0, x.node_1), axis=1)
    edges['angle_diff'] = edges.apply(lambda x: min(abs(x.target_angle - x.angle), 2 - abs(x.target_angle - x.angle)) * 100, axis=1)
    return edges

def score_files(input_file, output_file):
    nodes_input, edges, k = input.read_to_df(input_file)
    edges = list(zip(edges.node_0.to_list(), edges.node_1.to_list()))
    nodes_output = read_to_df(output_file)

    n, overlap, distance, angle, total_score = calc_score(nodes_input, nodes_output, edges, k)
    print(f"{input_file.split('/')[-1][:-4]}")

    print(
        f"Score: {total_score:.2f} (n={n}, k={k}, overlap={overlap:.2f}, distance={distance:.2f}, angle={angle:.2f})\n")

    return total_score
