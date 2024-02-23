#!/usr/bin/env zsh

function run_test() {
run_solver=$1

{
${run_solver} -s input_files/GNI_per_capita_Afro-Eurasia.txt result_files/GNI_per_capita_Afro-Eurasia_score_{3343.781396.txt,3347.178527.txt,3350.083103.txt,3352.215870.txt}
${run_solver} -s input_files/Instant_Noodle_Consumption_Eurasia.txt result_files/Instant_Noodle_Consumption_Eurasia_score_{43.5884.txt,582.719813.txt,812.466111.txt,940.288691.txt,1643.291773.txt,2164.204787.txt,2451.775197.txt,2672.289329.txt,2679.104574.txt,2693.378558.txt}
${run_solver} -s input_files/Deutschlands_Nachbarn.txt result_files/Deutschlands_Nachbarn_score_{171.62.txt,1031.898990.txt,2122.297626.txt,2148.279886.txt,2166.032515.txt}
${run_solver} -s input_files/Area_Americas.txt result_files/Area_Americas_score_{690.870329.txt,710.515235.txt,763.411003.txt,836.836568.txt,1127.457673.txt,1139.784260.txt,1283.180516.txt,2378.294021.txt}
} >| /tmp/test_solver.output

diff -s ./tests/test_solver.output /tmp/test_solver.output
}

run_test "./md.cpp/cmake-build-debug/md_cpp"
run_test "./md.cpp/cmake-build-release/md_cpp"
