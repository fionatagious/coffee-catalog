import csv
import json
import sys

def csv_to_json(csv_file_path, json_file_path):
  try:
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)
        data = list(reader)

    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=2)

    print(f"JSON saved to {json_file_path}")
  except Exception as e:
    print(f"Error: {e}")

# Example usage
if __name__ == "__main__":
  # Replace these paths with your actual file paths
  csv_path = 'file.csv'
  json_path = 'coffee_varieties.json'
  csv_to_json(csv_path, json_path)
