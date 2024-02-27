import sys
import time

from utils import score

time_global_start = time.perf_counter_ns()

if len(sys.argv) >= 4 and sys.argv[1] == "-f":
    input_file = sys.argv[2]
    output_file = sys.argv[3]
    score.score_files(input_file, output_file)
    exit(0)

test_cases = ["Area_Afro-Eurasia", "Area_Americas", "Area_Asia", "Area_Europe", "CO2_Production_Afro-Eurasia",
              "Deutschlands_Nachbarn", "GNI_per_capita_Afro-Eurasia", "Instant_Noodle_Consumption_Eurasia",
              "Population_Afro-Eurasia", "Population_Americas", "Population_Density_Afro-Eurasia",
              "Population_Density_Americas"]

total_score = 0.0
for test_case in test_cases:
    input_file = f"input_files/{test_case}.txt"
    output_file = f"result_files/{test_case}.txt.out"
    total_score += score.score_files(input_file, output_file)


time_global_stop = time.perf_counter_ns()
print(f"Total Time: {(time_global_stop - time_global_start) / 1e6} ms")
print(f"Total Score: {total_score:.2f}")
