# Practice: Simple HTTP Server

## Tasks

### Task 1
Create a minimal HTTP server using Node.js `http` module that listens on port 3000 and returns "Hello, World!" for any GET request.

### Task 2
Extend the server to handle different routes:
- `GET /` → "Welcome"
- `GET /health` → JSON `{ "status": "ok" }`
- `GET /time` → JSON with current timestamp
- Any other path → 404 with "Not Found"

### Task 3
Add request logging: log method, URL, and response status code for each request. Use a simple format like `GET /health 200`.

### Task 4
Implement a simple in-memory key-value store via API:
- `GET /store/:key` → return value or 404
- `POST /store` with body `{ "key": "x", "value": "y" }` → store and return 201
- `DELETE /store/:key` → remove and return 204

### Task 5
Add environment variable support: read `PORT` from `process.env` (default 3000). Add graceful shutdown on SIGTERM: stop accepting new connections, wait for in-flight requests to complete, then exit.
