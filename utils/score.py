import pandas as pd
import math
import numpy as np
import itertools


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
    nodes_df.set_index('idx', inplace=True)

    return nodes_df


def calc_overlap(df, node_a, node_b):
    # ignore identical nodes
    if node_a == node_b:
        return 0
    # calculate overlap of two nodes
    node_a = df.loc[node_a]
    node_b = df.loc[node_b]
    # dist = ((node_a.x - node_b.x) ** 2 + (node_a.y - node_b.y) ** 2) ** 0.5
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


def calc_distance_max(df, edges):
    return max([calc_distance(df, node_a, node_b) for node_a, node_b in itertools.combinations(df.index, 2) if
                (node_a, node_b) in edges or (node_b, node_a) in edges])


def calc_score(input_nodes, output_nodes, edges):
    n = input_nodes.shape[0]
    k = len(edges)
    overlap = calc_overlap_fast(output_nodes) * 100
    distance = calc_distance_max(output_nodes, edges) * 100
    angle = calc_angle_max(input_nodes, output_nodes, edges) * 100
    total_score = 1000 * (n + k) / (1 + 2 * overlap + distance + 0.1 * angle)
    return n, k, overlap, distance, angle, total_score
