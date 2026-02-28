# Practice: REST API Server

## Tasks

### Task 1
Build a minimal HTTP server using the `http` module (no Express). Handle `GET /health` returning `{ "status": "ok" }` and `GET /` returning "Hello World". Listen on port 3000.

### Task 2
Add `GET /users` and `POST /users`. Store users in an in-memory array. POST accepts `{ "name": "...", "email": "..." }`. Return 201 with the created user (include generated id). GET returns all users.

### Task 3
Add `GET /users/:id` and `DELETE /users/:id`. Return 404 if user not found. Parse the URL to extract the id. Return appropriate status codes (200, 204, 404).

### Task 4
Implement request body parsing for POST. Read the request stream, parse JSON, and validate that `name` and `email` are present and non-empty. Return 400 with `{ "error": "Invalid input" }` for invalid bodies.

### Task 5
Add CORS headers (Access-Control-Allow-Origin: *) for all responses. Implement `OPTIONS` preflight handling. Add a global error handler that catches uncaught errors and returns 500 with a generic message. Support `Content-Type: application/json` for all JSON responses.