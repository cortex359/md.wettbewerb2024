# :trophy: Programmierwettbewerb 2024 (Mathe-dual e.V.)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

![scores.gif](media%2Fscores.gif)

## :3rd_place_medal: Team τ
  - Christian Rene Thelen [christian.thelen@rwth-aachen.de](mailto:christian.thelen@rwth-aachen.de) :octocat: [@cortex359](https://github.com/cortex359)


![](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![](https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white)
![](https://img.shields.io/badge/SciPy-654FF0?style=for-the-badge&logo=SciPy&logoColor=white)

---

## Mathe-dual e.V.

:de: [Blog Post](https://mathe-dual.de/index.php/2-uncategorised/52-siegerehrung-und-preisverleihung-programmierwettbewerb-2023) über die Siegerehrung, [Finale Auswertung](https://wettbewerb.mathe-dual.de/)
und [Vergleichsübersicht](https://wettbewerb.mathedual.de/index_main.html),
sowie allgemeine [Informationen](https://www.mathe-dual.de/index.php/wettbewerb-link) über den Wettbewerb auf [mathe-dual.de](https://www.mathe-dual.de).



## Installation

In order to use the python scripts, some packages need to be installed in your environment.

```zsh
pip install -r requirements.txt
```

## Web crawler

### Usage
Generate relative score tables:

Fetch snapshots with `python webcrawler.py` and extract current snapshot.zip:

```zsh
snapshot="snapshot_060323_2300"
teams=( koeln coca-cola-und-nutella uka ets fabio-palmen bug-prevention horst )

for t in $teams; do
  mkdir "web/data/${t}/${snapshot}"
  unzip -d "web/data/${t}/${snapshot}" "web/data/${t}/${snapshot}.zip"
done
```

Enter the group directory and extract tables:

```zsh
for t in ${teams}; do
  for i in {01..14} ; do
    pcre2grep -Me '(?:<pre>)([^<]+[\n\s]*)+(?:<\/pre>)' -m1 --output '$1' web/data/${t}/${snapshot}/forest${i}.txt.html >| web/data/${t}/${t}.forest${i}.table
  done
done
```

parse tables and save relative scores:

```zsh
{
  for i in {01..14} ; do
    python web/score_webtable.py forest${i} ${teams};
  done
} >| web/relative_score_tables/overview-$(date +'%F_%H-%M').md
```
![](https://forthebadge.com/images/badges/works-on-my-machine.svg)
