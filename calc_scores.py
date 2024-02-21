import pandas as pd
from utils import score
from utils import input
import math
import numpy as np
import itertools


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


def calc_angle_max(df_in, df_out):
    alpha = [(calc_angle(df_in, node_a, node_b), calc_angle(df_out, node_a, node_b)) for node_a, node_b in
             itertools.combinations(df_in.index, 2) if (node_a, node_b) in edges or (node_b, node_a) in edges]
    return max([min(abs(a0 - a1), 2 - abs(a0 - a1)) for a0, a1 in alpha])


def calc_overlap_fast(df):
    return max([calc_overlap(df, node_a, node_b) for node_a, node_b in itertools.combinations(df.index, 2)])


def calc_distance_max(df):
    return max([calc_distance(df, node_a, node_b) for node_a, node_b in itertools.combinations(df.index, 2) if
                (node_a, node_b) in edges or (node_b, node_a) in edges])


def calc_score(input_nodes, output_nodes, edges):
    overlap = calc_overlap_fast(output_nodes) * 100
    distance = calc_distance_max(output_nodes) * 100
    angle = calc_angle_max(input_nodes, output_nodes) * 100
    n = input_nodes.shape[0]
    k = len(edges)
    print(f"n={n}, k={k}\nOverlap: {overlap}\nDistance: {distance}\nAngle: {angle}")
    return 1000 * (n + k) / (1 + 2 * overlap + distance + 0.1 * angle)


test_cases = ["Area_Afro-Eurasia", "Area_Americas", "Area_Asia", "Area_Europe", "CO2_Production_Afro-Eurasia",
              "Deutschlands_Nachbarn", "GNI_per_capita_Afro-Eurasia", "Instant_Noodle_Consumption_Eurasia",
              "Population_Afro-Eurasia", "Population_Americas", "Population_Density_Afro-Eurasia",
              "Population_Density_Americas"]

for test_case in test_cases:
    nodes_input, edges = input.read_to_df(f"input_files/{test_case}.txt")
    edges = list(zip(edges.node_0.to_list(), edges.node_1.to_list()))
    nodes_output = score.read_to_df(f"result_files/{test_case}.txt.out")
    nodes_output.set_index("node", inplace=True)
    print(f"\n{test_case}")
    print(f"Score: {calc_score(nodes_input, nodes_output, edges)}")
