#!/usr/bin/zsh

### Start of Slurm SBATCH definitions
# Ask for eight tasks (same as 8 cores for this example)
#SBATCH --ntasks=4

### Submit the job to the devel partition for testing
#SBATCH --partition=devel

### Ask for one node, use several nodes in case you need additional resources
#SBATCH --nodes=1

# Ask for the maximum memory per core (most CLAIX-2023 nodes: 2.7GB per cpu)
#SBATCH --mem-per-cpu=50M

# Ask for up to 15 Minutes of runtime
#SBATCH --time=00:03:00

# Name the job
#SBATCH --job-name=test_v3

# Declare a file where the STDOUT/STDERR outputs will be written
#SBATCH --output=output.%J.txt

### end of Slurm SBATCH definitions

### your program goes here
# `srun` runs `ntasks` instances of your programm `hostname`

runtime=160
max_perturbation=0.001

setopt numeric_glob_sort

if [[ ${${(s./.)PWD}[-1]} != "md.wettbewerb2024" ]]; then {
    print -Pu2 "%F{red}calc_overview must be run from md.wettbewerb2024 dir.%f"
    return 1
}; fi

print -Pu2 "%F{blue}Running all for $1 seconds and with max_perturbation=$2%f"

typeset -A scores=()
    cd -q result_files
    for f in *_score_*.txt(on) ; do {
    test_case=${${(s._score_.)f}[1]}
    scores+=( [${test_case}]=${f} )
}; done

cd -q ..
for k v in ${(Akv)scores} ; do {
    srun ./bin/graph_optimization input_files/${k}.txt result_files/${v} ${runtime} ${max_perturbation}
}; done
