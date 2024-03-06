#!/usr/bin/zsh

### Start of Slurm SBATCH definitions
# Ask for eight tasks (same as 8 cores for this example)
#SBATCH --ntasks=8

#SBATCH --array=1-12

### Ask for one node, use several nodes in case you need additional resources
#SBATCH --nodes=2

# Ask for the maximum memory per core (most CLAIX-2023 nodes: 2.7GB per cpu)
#SBATCH --mem-per-cpu=20M

#SBATCH --time=00:02:00

# Name the job
#SBATCH --job-name=run_01

# Declare a file where the STDOUT/STDERR outputs will be written
#SBATCH --output=output.%A_%a.txt

### end of Slurm SBATCH definitions

### your program goes here
# `srun` runs `ntasks` instances of your programm `hostname`

runtime=100
max_perturbation=0.01

setopt numeric_glob_sort

if [[ ${${(s./.)PWD}[-1]} != "md.wettbewerb2024" ]]; then {
    print -Pu2 "%F{red}calc_overview must be run from md.wettbewerb2024 dir.%f"
    return 1
}; fi

print -Pu2 "%F{blue}Running all for ${runtime} seconds and with max_perturbation=${max_perturbation}%f"

typeset -A scores=()
cd -q result_files
for f in *_score_*.txt(on) ; do {
    test_case=${${(s._score_.)f}[1]}
    scores+=( [${test_case}]=${f} )
}; done

cd -q ..
typeset -a jobs=()
for k v in ${(Akv)scores} ; do {
    jobs+=( "${k}" )
}; done

srun ./bin/graph_optimization input_files/${jobs[${SLURM_ARRAY_TASK_ID}]}.txt result_files/${scores[${jobs[${SLURM_ARRAY_TASK_ID}]}]} ${runtime} ${max_perturbation}

