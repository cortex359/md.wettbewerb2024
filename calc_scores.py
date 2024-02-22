import sys

import pandas as pd
from utils import score
from utils import input
import math
import numpy as np
import itertools
import time



def score_files(input_file, output_file):
    nodes_input, edges = input.read_to_df(input_file)
    edges = list(zip(edges.node_0.to_list(), edges.node_1.to_list()))
    nodes_output = score.read_to_df(output_file)
    nodes_output.set_index("node", inplace=True)

    #time_start = time.perf_counter_ns()
    n, k, overlap, distance, angle, total_score = score.calc_score(nodes_input, nodes_output, edges)
    #time_stop = time.perf_counter_ns()
    print(f"{input_file.split('/')[-1][:-4]}")
    #print(f"Time: {(time_stop - time_start) / 1000} µs")
    print(
        f"Score: {total_score:.2f} (n={n}, k={k}, overlap={overlap:.2f}, distance={distance:.2f}, angle={angle:.2f})\n")


time_global_start = time.perf_counter_ns()

if len(sys.argv) >= 4 and sys.argv[1] == "-f":
    input_file = sys.argv[2]
    output_file = sys.argv[3]
    score_files(input_file, output_file)
    exit(0)

test_cases = ["Area_Afro-Eurasia", "Area_Americas", "Area_Asia", "Area_Europe", "CO2_Production_Afro-Eurasia",
              "Deutschlands_Nachbarn", "GNI_per_capita_Afro-Eurasia", "Instant_Noodle_Consumption_Eurasia",
              "Population_Afro-Eurasia", "Population_Americas", "Population_Density_Afro-Eurasia",
              "Population_Density_Americas"]

for test_case in test_cases:
    input_file = f"input_files/{test_case}.txt"
    output_file = f"result_files/{test_case}.txt.out"
    score_files(input_file, output_file)


time_global_stop = time.perf_counter_ns()
print(f"Total Time: {(time_global_stop - time_global_start) / 1e6} ms")
