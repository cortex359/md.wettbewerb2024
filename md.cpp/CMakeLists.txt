cmake_minimum_required(VERSION 3.26.5)
project(md_cpp)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

include_directories(include)

add_executable(graph_optimization src/main.cpp src/score.cpp src/utils.cpp src/perturbation.cpp
        src/rotation.cpp)
