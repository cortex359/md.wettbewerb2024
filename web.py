import os
import requests
from datetime import datetime

# URL of the image to fetch
image_url = "https://wettbewerb.mathe-dual.de/scores.png"

# Folder to save the image
image_folder = "../media/"

# Ensure the folder exists
os.makedirs(image_folder, exist_ok=True)

# Get the image response
response = requests.get(image_url, stream=True)

# Check if the request was successful
if response.status_code == 200:
    # Get the Last-Modified header
    last_modified = response.headers.get('Last-Modified')

    # If the Last-Modified header is present
    if last_modified:
        # Parse the Last-Modified header to a datetime object
        last_modified_time = datetime.strptime(last_modified, '%a, %d %b %Y %H:%M:%S %Z')
        # Format the datetime object to a string for the filename
        timestamp_str = last_modified_time.strftime('%Y-%m-%d_%H.%M.%S')
    else:
        # If the Last-Modified header is not present, use the current timestamp
        timestamp_str = datetime.now().strftime('%Y-%m-%d_%H.%M.%S')

    # Create the image filename with the timestamp
    filename = os.path.join(image_folder, f"{timestamp_str}.png")

    # Check if the file already exists
    if not os.path.exists(filename):
        # Save the image
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Image saved as {filename}")
    else:
        print(f"Image already exists: {filename}")
else:
    print(f"Failed to retrieve the image. Status code: {response.status_code}")

