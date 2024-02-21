import pandas as pd


def read_to_df(file_path: str) -> pd.DataFrame:
    """
    This function takes the output file and returns a pandas DataFrame.

    Parameters:
    file_path (str): The path to the output file.

    Returns:
    pd.DataFrame: A DataFrame with columns  ['x', 'y', 'radius', 'node', 'idx'] containing the node data.

    Raises:
    ValueError: If the output file cannot be parsed into the expected format.
    """
    with open(file_path, 'r') as f:
        nodes_list = [line.split() for line in f.read().strip().split('\n')]

    # nodes_list → nodes_df
    try:
        nodes_df = pd.DataFrame(nodes_list, columns=['x', 'y', 'radius', 'node', 'idx'])
        nodes_df = nodes_df.astype({'x': float, 'y': float, 'radius': float, 'node': str, 'idx': int})
    except ValueError as error:
        exit(f'❌ Error parsing output file: {error}.')
    nodes_df.set_index('idx', inplace=True)

    return nodes_df
