# Practice: File Processing Script

## Tasks

### Task 1
Write a script that reads a text file and prints each line with a line number. Example: `1: first line`, `2: second line`. Use `fs.readFile` and split by newline.

### Task 2
Create a script that reads a CSV file (comma-separated) and outputs JSON. First row is headers. Example: `name,age` / `Alice,30` → `[{"name":"Alice","age":"30"}]`.

### Task 3
Build a log parser: read a log file, extract lines containing "ERROR", and output them to a separate file. Use streams to handle large files.

### Task 4
Create a script that merges multiple JSON files into one array. Usage: `node merge.js file1.json file2.json -o output.json`. Validate that each file is valid JSON.

### Task 5
Build a config transformer: read a JSON config file, apply environment variable overrides (e.g., `DATABASE_URL` overrides `config.database.url`), and output the merged config. Support `--env production` to load `config.production.json` overrides.
