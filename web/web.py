import os
import requests
from datetime import datetime
import pytz
from webcrawler import refresh_scores

# Set the local timezone
local_tz = pytz.timezone('Europe/Berlin')

# URL of the image to fetch
image_url = "https://wettbewerb.mathe-dual.de/scores.png"

# Folder to save the image
image_folder = "../media/scores/"

# Ensure the folder exists
os.makedirs(image_folder, exist_ok=True)

# Get the image response
response = requests.get(image_url, stream=True)

# Check if the request was successful
if response.status_code == 200:
    file_hint = ''

    # Get the Last-Modified header
    last_modified = response.headers.get('Last-Modified')
    # If the Last-Modified header is present
    if last_modified:
        # Parse the Last-Modified header to a datetime object
        last_modified_time = datetime.strptime(last_modified, '%a, %d %b %Y %H:%M:%S %Z')
        # Adjust the time to the local timezone
        last_modified_time = last_modified_time.replace(tzinfo=pytz.utc).astimezone(local_tz)
    else:
        # If the Last-Modified header is not present, use the current timestamp
        last_modified_time = datetime.now(tz=local_tz)
        file_hint = '.download_time'

    # Format the datetime object to a string for the filename
    timestamp_str = last_modified_time.strftime('%Y-%m-%d_%H.%M.%S')

    # Create the image filename with the timestamp
    filename = os.path.join(image_folder, f"{timestamp_str}{file_hint}.png")

    # Check if the file already exists
    if not os.path.exists(filename):
        # Save the image
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Image saved as {filename}")

        refresh_scores(last_modified_time)

    else:
        delta_time = datetime.now(tz=local_tz) - last_modified_time
        delta_time_str = f"{delta_time.seconds // 3600}h {(delta_time.seconds // 60) % 60}m {delta_time.seconds % 60}s"
        print(f"No changes since {delta_time_str}.")
else:
    print(f"Failed to retrieve the image. Status code: {response.status_code}")
