import math
import sys

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
test_case_id = sys.argv[1]
test_case = test_cases[int(test_case_id)]
print(test_case_id, test_case)

input_file, output_file = input.get_highest_score_file(test_case)
print(input_file, output_file)

nodes_input, edges_df, k = input.read_to_df(input_file)
nodes_output = score.read_to_df(output_file)


output_edges = score.output_edges(edges_df, nodes_input, nodes_output)
edges = list(zip(edges_df.node_0.to_list(), edges_df.node_1.to_list()))

n, overlap, distance, angle, total_score = score.calc_score(nodes_input, nodes_output, edges, k)

px = 1/plt.rcParams['figure.dpi']  # pixel in inches
fig_scale_factor = 1.8 * px
fig, ax = plt.subplots(1, 1, figsize=(20, 20))
ax.set_title(f"{test_case.replace('_', ' ')} (n:{n} k:{k})\nScore: {total_score:.2f}, max. Overlap: {overlap:.2f}, avg. Distance: {distance:.2f}, avg. Angle: {angle:.2f}")

colors = cm.Spectral(np.linspace(0, 1, len(nodes_output)))

for node, row in nodes_output.iterrows():
    ax.add_patch(plt.Circle((row.x, row.y), row.radius, facecolor=colors[int(row.idx)], alpha=0.5))
    ax.text(row.x, row.y, node, fontsize=6, ha='center', va='center')


for edge, row in output_edges.iterrows():
    node_a = nodes_output.loc[row.node_0]
    node_b = nodes_output.loc[row.node_1]
    ax.plot([node_a.x, node_b.x], [node_a.y, node_b.y], color='grey', lw=0.5, alpha=0.3)
    annotation_xy = ((node_a.x + node_b.x) / 2, (node_a.y + node_b.y) / 2)

    # Plain stats
    # ax.annotate(f"D:{row.distance:.2f}\nA:{row.angle_diff:.2f}", xy=annotation_xy, fontsize=4)

    # Weighted stats
    w_angle = row.angle_diff
    if row.distance > 0:
        w_distance = row.distance
        ax.annotate(f"D:{w_distance:.2f}\nA:{w_angle:.2f}", xy=annotation_xy, fontsize=4)
    ax.annotate(f"A:{w_angle:.2f}", xy=annotation_xy, fontsize=4)

def alt_score(_n, _k, _overlap, _distance, _angle):
    return 1000. * (_n + _k) / (1 + 0.1 * (_overlap ** 2) + 0.05 * (_distance ** 2) + 0.05 * (_angle ** 2))

print("Most overlaping nodes:")
for node_0, node_1, overlap in score.overlapping_nodes(nodes_output)[0:10]:
    print("{:3s} {:3s} {:7.3f} {:7.2f}".format(node_0, node_1, overlap * 100, alt_score(n, k, overlap, distance, angle)))

print("Angles:")
print(output_edges.angle_diff.describe())

print("Distances")
print(output_edges.distance.describe())


ax.set_aspect('equal')
ax.axis("off")
ax.plot()
#plt.show()
fig.savefig(f"plots/{test_case}.svg")
