import math

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from utils import input
from utils import score

test_cases = ["Area_Afro-Eurasia", "Area_Americas", "Area_Asia", "Area_Europe",
              "CO2_Production_Afro-Eurasia", "Deutschlands_Nachbarn", "GNI_per_capita_Afro-Eurasia", "Instant_Noodle_Consumption_Eurasia",
              "Population_Afro-Eurasia", "Population_Americas",
              "Population_Density_Afro-Eurasia", "Population_Density_Americas"]
test_case = test_cases[6]

nodes_input, edges_df, k = input.read_to_df(f"input_files/{test_case}.txt")
nodes_output = score.read_to_df(f"../tau/result_files/{test_case}.txt.out")


output_edges = score.output_edges(edges_df, nodes_input, nodes_output)
edges = list(zip(edges_df.node_0.to_list(), edges_df.node_1.to_list()))

px = 1/plt.rcParams['figure.dpi']  # pixel in inches
fig_scale_factor = 1.8 * px
fig, ax = plt.subplots(1, 1, figsize=(20, 20))
ax.set_title(f"{test_case}")

colors = cm.Spectral(np.linspace(0, 1, len(nodes_output)))

for node, row in nodes_output.iterrows():
    ax.add_patch(plt.Circle((row.x, row.y), row.radius, facecolor=colors[int(row.idx)], alpha=0.5))
    ax.text(row.x, row.y, node, fontsize=6, ha='center', va='center')
    #ax.annotate(node, xy=(row.x, row.y), xycoords='data', fontsize=10)

for node_0, node_1 in edges:
    node_a = nodes_output.loc[node_0]
    node_b = nodes_output.loc[node_1]
    ax.plot([node_a.x, node_b.x], [node_a.y, node_b.y], 'g-', lw=0.5, alpha=0.3)

for edge, row in output_edges.iterrows():
    node_a = nodes_output.loc[row.node_0]
    node_b = nodes_output.loc[row.node_1]
    ax.plot([node_a.x, node_b.x], [node_a.y, node_b.y], 'r-', lw=0.5, alpha=0.3)
    #relation = node_a.radius/(node_a.radius + node_b.radius)
    #delta_x = node_a.x - node_b.x
    #delta_y = node_a.y - node_b.y
    #distance = np.hypot(delta_x, delta_y)
    #annotation_xy = ((node_a.x - node_b.x) * relation + node_a.x, (node_a.y - node_b.y) * relation + node_a.y)
    annotation_xy = ((node_a.x + node_b.x) / 2, (node_a.y + node_b.y) / 2)

    # Plain stats
    # ax.annotate(f"D:{row.distance:.2f}\nA:{row.angle_diff:.2f}", xy=annotation_xy, fontsize=4)

    # Weighted stats
    w_angle = 0.05 * (row.angle_diff * row.angle_diff)
    if row.distance > 0:
        w_distance = 0.05 * (row.distance * row.distance)
        ax.annotate(f"D:{w_distance:.2f}\nA:{w_angle:.2f}", xy=annotation_xy, fontsize=4)
    ax.annotate(f"A:{w_angle:.2f}", xy=annotation_xy, fontsize=4)

for node_0, node_1, overlap in score.overlapping_nodes(nodes_output)[0:5]:
    print(node_0, node_1, overlap * 100, (overlap * overlap * 1000))



ax.set_aspect('equal')
ax.axis("off")
ax.plot()
#plt.show()
fig.savefig(f"plots/{test_case}.svg")
