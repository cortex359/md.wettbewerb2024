#!/usr/bin/env zsh

if [[ ${${(s./.)PWD}[-1]} != "md.wettbewerb2024" ]]; then {
    print -Pu2 "%F{red}source init.zsh must be run from md.wettbewerb2024 dir.%f"
    return 1
}; fi

if [[ ${HOSTNAME[-22,-1]} == hpc.itc.rwth-aachen.de ]]; then {
    python="python3.11"
}; else {
    python="python"
}; fi

if [[ ! -d venv ]]; then {
    ${python} -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
}; fi

source venv/bin/activate

path+=( "${PWD}/bin" )

setopt numeric_glob_sort
