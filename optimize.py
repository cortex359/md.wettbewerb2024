import sys
import time

from utils import input
from utils import score

time_global_start = time.perf_counter_ns()

if len(sys.argv) == 4 and sys.argv[1] == "-s":
    input_file = sys.argv[2]
    output_file = sys.argv[3]
    score.score_files(input_file, output_file)
    exit(0)
if len(sys.argv) == 3:
    input_file = sys.argv[1]
    output_file = sys.argv[2]
else:
    print("Usage: optimize.py [-s] input_file output_file")
    exit(1)

nodes_input, edges, k = input.read_to_df(input_file)
edges = list(zip(edges.node_0.to_list(), edges.node_1.to_list()))
nodes_output = score.read_to_df(output_file)
nodes_output.set_index("node", inplace=True)

n, start_overlap, start_distance, start_angle, start_score = score.calc_score(nodes_input, nodes_output, edges, k)

print(f"Initial Score: {start_score:.2f}")

