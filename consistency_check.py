# %% [markdown]
# # Mathe-dual e. V. - Programmierwettbewerb 2023

# %%
try:
    cfg = get_ipython().config 
    RUNNING_IN_NOTEBOOK = True
except NameError:
    RUNNING_IN_NOTEBOOK = False

# print('Running in notebook:', RUNNING_IN_NOTEBOOK)

# %%
OUTPUT_RELATION_TOLERANCE = 0.0001

# %%
import os
import pandas as pd

if RUNNING_IN_NOTEBOOK:
    BASE_DIR = os.path.join(os.path.pardir)
else:
    BASE_DIR = os.getcwd()

def read_input_file(file_path, debug=False):
    with open(os.path.join(BASE_DIR, file_path), 'r') as f:
        data_raw, adj_list_raw = f.read().strip().split('\n\n')
    
    data = data_raw.split('\n')
    adj_list = adj_list_raw.split('\n')

    data = [line.split() for line in data]
    try:
        data = pd.DataFrame(data, columns=['country_code', 'value', 'x', 'y'])
    except ValueError as error:
        exit(f'❌ Error reading input file: {error}.')

    try:
        data = data.astype({'country_code': str, 'value': float, 'x': float, 'y': float})
    except ValueError as error:
        exit(f'❌ Error parsing input file: {error}.')

    data.set_index('country_code', inplace=True)

    adj_list = [line.split() for line in adj_list]
    adj_list = pd.DataFrame(adj_list, columns=['country_code', 'country_code_bordering'])

    if debug:
        print(data.head())
        print(adj_list.head())

    return data, adj_list

def read_output_file(file_path, debug=False):
    with open(os.path.join(BASE_DIR, file_path), 'r') as f:
        data_raw = f.read().strip()

    data = data_raw.split('\n')
    data = [line.split() for line in data]
    try:
        data = pd.DataFrame(data, columns=['x', 'y', 'radius', 'country_code', 'idx'])
    except ValueError as error:
        exit(f'❌ Error reading output file: {error}.')

    try:
        data = data.astype({'x': float, 'y': float, 'radius': float, 'country_code': str, 'idx': int})
    except ValueError as error:
        exit(f'❌ Error parsing output file: {error}.')

    data.set_index('idx', inplace=True)

    if debug:
        print(data.head())

    return data

# %%
def check_output_relations(input, output):
    # Given the target radii, check that the output relations are correct within a tolerance (OUTPUT_RELATION_TOLERANCE)
    # Create a relation matrix (symmetric) from the output and compare it to the input relations
    # Return True if the relations are correct, False otherwise

    # Set country code as index
    # input.set_index('country_code', inplace=True)
    output.set_index('country_code', inplace=True)

    # Sort index alphabetically
    input.sort_index(inplace=True)
    output.sort_index(inplace=True)

    # Create a relation matrix from the input and output
    input_relations = pd.DataFrame(index=input.index, columns=input.index, dtype=float)
    output_relations = pd.DataFrame(index=output.index, columns=output.index, dtype=float)

    for i, row in input.iterrows():
        for j, col in input.iterrows():
            input_relations.loc[i, j] = row['value'] / col['value']

    for i, row in output.iterrows():
        for j, col in output.iterrows():
            output_relations.loc[i, j] = row['radius'] / col['radius']

    # Difference
    diff = input_relations - (output_relations * output_relations)
    diff = diff.abs()

    #print(diff)

    if RUNNING_IN_NOTEBOOK:
        print('Input relations:')
        display(input_relations)
        print('Output relations:')
        display(output_relations)
        print('Difference between input and output relations:')
        display(diff)

    # Check if the difference is within the tolerance
    within_tolerance = True
    for i, row in diff.iterrows():
        for j, col in diff.iterrows():
            if diff.loc[i, j] > OUTPUT_RELATION_TOLERANCE:
                within_tolerance = False
                break

    return within_tolerance

# %%
def check_consistency(input_file_path, output_file_path, debug=False):
    print("Checking consistency between input and output files...")
    print("Input file:", input_file_path)
    print("Output file:", output_file_path)

    data, adj_list = read_input_file(input_file_path, debug=debug)
    output = read_output_file(output_file_path, debug=debug)

    # get output file name
    output_file_name = os.path.basename(output_file_path)
    
    # Check that the output file:
    # -> contains each country from the input 
    missing_countries = set(data.index) - set(output['country_code'])
    if len(missing_countries) > 0:
        exit(f"❌ {output_file_name}: Missing countries: {missing_countries}")
    
    print(f"✅ {output_file_name}: All countries are present in the output file.")

    # -> exactly once
    if output['country_code'].duplicated().any():
        exit(f"❌ {output_file_name}: These countries appear more than once in the output file: {output[output['country_code'].duplicated()]['country_code'].to_list()}")
    
    print(f"✅ {output_file_name}: All countries appear exactly once in the output file.")

    # -> ordered by the index
    for i, idx in enumerate(output.index):
        if int(i) != int(idx):
            exit(f"❌ {output_file_name}: Index {idx} [{output['country_code'].iloc[i]}] is not in the correct order. (Expected {i}.)")

    print(f"✅ {output_file_name}: Indices are in the correct order.")

    # -> while preserving the order of countries from the input file
    for i, country in enumerate(data.index):
        if country != output['country_code'].iloc[i]:
            exit(f"❌ {output_file_name}: Country {output['country_code'].iloc[i]} is not in the correct order. (Expected {country} at position {i}.)")
    
    print(f"✅ {output_file_name}: Countries are in the same order as in the input file.")

    # Check for consistency between the input and output files
    if check_output_relations(data, output):
        print(f"✅ {output_file_name}: Output relations are consistent with the input.")
    else:
        exit(f"❌ {output_file_name}: Output relations are not consistent with the input.")

    exit(0)
    

# %%
# if script is called with parameters, use them instead of the default values
if __name__ == "__main__":
    import sys
    if len(sys.argv) == 3:
        input_file_path = sys.argv[1]
        output_file_path = sys.argv[2]

        print(f"Checking consistency of {input_file_path} and {output_file_path}...")
        check_consistency(input_file_path, output_file_path, debug=False)
    else:
        print("Usage: python consistency_check.py <input_file_path> <output_file_path>")
        print("Example: python consistency_check.py deutschlandsNachbarn.txt deutschlandsNachbarn.txt.out")
        print("If no parameters are given, the default values are used.")
        print("Default values: input_file_path = 'input_files/deutschlandsNachbarn.txt', output_file_path = 'result_files/deutschlandsNachbarn.txt.out'")

# %%
if RUNNING_IN_NOTEBOOK:
    input_file = 'input_files/europe_area.txt'
    output_file = 'result_files/europe_area.txt.out'

    check_consistency(input_file, output_file, debug=True)


