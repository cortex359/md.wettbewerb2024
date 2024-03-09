import os

import pandas as pd


def read_to_df(file_path: str) -> (pd.DataFrame, pd.DataFrame, int):
    """
    This function takes a file path as input and returns a tuple of a pandas DataFrame and a list of tuples.

    Parameters:
    file_path (str): The path to the input file.

    Returns:
    pd.DataFrame: A DataFrame with columns ['node', 'value', 'x', 'y'] containing the node data.
    pd.DataFrame: A DataFrame with columns ['node_0', 'node_1'] containing the node pairs with a connecting edge.

    Raises:
    ValueError: If the input file cannot be parsed into the expected format.
    """
    with open(file_path, 'r') as f:
        nodes_raw, edges_raw = f.read().strip().split('\n\n')

    # nodes_raw → nodes_list → nodes_df
    nodes_list = [line.split() for line in nodes_raw.split('\n')]
    try:
        nodes_df = pd.DataFrame(nodes_list, columns=['node', 'value', 'x', 'y'])
        nodes_df = nodes_df.astype({'node': str, 'value': float, 'x': float, 'y': float})
    except ValueError as error:
        exit(f'❌ Error parsing input file: {error}.')
    nodes_df.set_index('node', inplace=True, drop=False, verify_integrity=True)

    # edges_raw → edges_list → edges_df
    edges_list = [tuple(line.split()) for line in edges_raw.split('\n')]
    # k muss vor dem Entfernen von Duplikaten gespeichert werden
    k: int = len(edges_list)
    edges_list = remove_edge_duplicates(edges_list)
    edges_df = pd.DataFrame(edges_list, columns=['node_0', 'node_1'])

    return nodes_df, edges_df, k


def remove_edge_duplicates(edges: list[tuple]) -> list[tuple]:
    for a, b in edges:
        reverse = (b, a)
        if edges.count(reverse) > 0:
            edges.remove(reverse)
    return edges

def read_to_lists(file_path: str) -> (dict[str, tuple[float, float, float]], list[tuple[str, str]]):
    """
    This function takes a file path as input and returns a dict with {node: (value, x, y)} and a list of edges.

    Parameters:
    file_path (str): The path to the input file.

    Returns:
    dict: A dictionary with keys as node names and values as tuples mapping node -> (value, x, y).
    list: A list of tuples where each tuple contains a pair of nodes with a connecting edge.

    Raises:
    ValueError: If the input file cannot be parsed into the expected format.
    """
    with open(file_path, 'r') as f:
        nodes_raw, edges_raw = f.read().strip().split('\n\n')

    # nodes_raw → nodes_list → nodes_dict
    nodes_list = [line.split() for line in nodes_raw.split('\n')]
    nodes_dict = {node: (float(value), float(x), float(y)) for node, value, x, y in nodes_list}

    # edges_raw → edges_list
    edges_list = [tuple(line.split()) for line in edges_raw.split('\n')]
    edges_list = remove_edge_duplicates(edges_list)
    return nodes_dict, edges_list

def get_highest_score_file(file: str, result_path="result_files/", input_path="input_files/") -> (str, str):
    # get files in direcotry, starting with string
    input_file = [f for f in os.listdir(input_path) if f.startswith(file)]
    if len(input_file) == 0:
        raise FileNotFoundError(f"❌ Error: No input file found at {input_path}{file}.")
    if len(input_file) > 1:
        raise FileExistsError(f"❌ Error: Multiple input files found at {input_path}{file}.")

    output_files = [f for f in os.listdir(result_path) if f.startswith(file)]
    if len(output_files) == 0:
        raise FileNotFoundError(f"❌ Error: No output file found at {result_path}{file}.")
    file_score_pairs = []
    for output_file in output_files:
        if output_file.find("_score_") == -1:
            continue
        file_score_pairs.append((float(output_file.split("_score_")[1].split(".txt")[0]), output_file))

    sorted(file_score_pairs, key=lambda x: x[0], reverse=True)
    return f"{input_path}{input_file[0]}", f"{result_path}{file_score_pairs[0][1]}"
