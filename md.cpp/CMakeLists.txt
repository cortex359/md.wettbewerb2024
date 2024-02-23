cmake_minimum_required(VERSION 3.28)
project(md_cpp)

set(CMAKE_CXX_STANDARD 17)

add_executable(md_cpp score_calc.cpp
        graph_optimization.h)
