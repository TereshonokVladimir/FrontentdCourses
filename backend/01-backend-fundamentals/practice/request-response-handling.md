# Practice: Request-Response Handling

## Tasks

### Task 1
Create an HTTP server that parses the request URL and returns different responses based on the path. Use `url.parse` or `new URL()`. Log the parsed pathname and query string.

### Task 2
Implement a server that reads JSON from POST body. For `POST /echo`, parse the body and return it as JSON. Return 400 if body is invalid JSON. Set `Content-Type: application/json` on response.

### Task 3
Build a server that supports both JSON and form-urlencoded bodies. Detect `Content-Type` header and parse accordingly. Return 415 for unsupported types.

### Task 4
Create a middleware-style request logger: a function that wraps a handler and logs request start, completion, and duration. Use it for all routes.

### Task 5
Implement a simple error handler: wrap handlers in try/catch, return 500 with `{ "error": "Internal server error" }` for uncaught errors, and log the full error server-side. Ensure no stack traces are sent to the client.
