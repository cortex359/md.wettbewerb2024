#!/usr/bin/zsh

### Start of Slurm SBATCH definitions
# Ask for eight tasks (same as 8 cores for this example)
#SBATCH --ntasks=1

### Submit the job to the devel partition for testing
#SBATCH --partition=devel

### Ask for one node, use several nodes in case you need additional resources
#SBATCH --nodes=1

# Ask for the maximum memory per core (most CLAIX-2023 nodes: 2.7GB per cpu)
#SBATCH --mem-per-cpu=10M

# Ask for up to 15 Minutes of runtime
#SBATCH --time=00:03:00

# Name the job
#SBATCH --job-name=test_v1

# Declare a file where the STDOUT/STDERR outputs will be written
#SBATCH --output=output.%J.txt

### end of Slurm SBATCH definitions

### your program goes here
# `srun` runs `ntasks` instances of your programm `hostname`

srun ./md.cpp/cmake-build-release/graph_optimization ./input_files/Deutschlands_Nachbarn.txt ./result_files/Deutschlands_Nachbarn_score_4215.985161.txt 160 0.001
