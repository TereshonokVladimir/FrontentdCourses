# Practice: JSON Parser

## Tasks

### Task 1
Create a function `parseJSON(str)` that parses a JSON string and returns the value. Use `JSON.parse` for now. Handle errors: catch `SyntaxError` and throw a custom error with position info if possible. Support `reviver` as second argument (pass through to JSON.parse).

### Task 2
Implement a streaming JSON parser: input is a Readable stream of chunks; output is a stream of top-level values for NDJSON (newline-delimited JSON). Each line is a separate JSON value. Emit each parsed object. Handle chunks that split in the middle of a line.

### Task 3
Build a JSON parser that supports comments (// and /* */) and trailing commas. Preprocess the string to remove them, then call JSON.parse. Ensure the preprocessing is correct for strings (don't remove // inside strings). Handle edge cases: empty input, only whitespace.

### Task 4
Implement a simple recursive descent parser for a subset of JSON: objects, arrays, strings, numbers, true/false/null. No `JSON.parse`. Support nested structures. Return the parsed value. Report errors with line/column. Start with: object, array, string, number, literal.

### Task 5
Add a streaming JSON array parser: input is `[{"a":1},{"a":2}]` as a stream. Emit each object as it is fully parsed. Use a state machine: expect `[`, then objects separated by `,`, then `]`. Buffer chunks until a complete object is available. Handle numbers and nested objects. Emit errors for invalid JSON.