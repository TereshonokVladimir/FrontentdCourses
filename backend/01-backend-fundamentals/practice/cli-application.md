# Practice: CLI Application

## Tasks

### Task 1
Create a CLI script that accepts a name as argument and prints "Hello, {name}!". Use `process.argv` to read arguments. Example: `node greet.js Alice` → "Hello, Alice!".

### Task 2
Build a simple calculator CLI: `node calc.js add 2 3` → 5, `node calc.js multiply 4 5` → 20. Support add, subtract, multiply, divide. Validate input (numbers only).

### Task 3
Create a file line counter: `node wc.js file.txt` prints the number of lines in the file. Handle missing file with error message and exit code 1.

### Task 4
Build a JSON pretty-printer CLI: `node pretty.js file.json` reads the file, parses JSON, and outputs formatted JSON. Handle parse errors gracefully.

### Task 5
Create a mini HTTP client CLI: `node fetch.js GET https://api.example.com/users` performs the request and prints the response body. Support GET and POST (with optional body from stdin). Handle errors and non-2xx status codes.
