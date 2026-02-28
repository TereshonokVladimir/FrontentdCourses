# Practice: HTTP Proxy

## Tasks

### Task 1
Create an HTTP proxy server. For each incoming request, forward it to a target URL (e.g., `http://localhost:3001`). Use `http.request` to create the upstream request. Copy method, headers, and body. Pipe the response back to the client. Handle errors (upstream down, timeout).

### Task 2
Add path rewriting: `proxy /api -> http://backend/api`. Strip or replace the path prefix. Support configurable target and path mapping. Preserve query string. Handle `Host` header correctly for the upstream.

### Task 3
Implement response buffering: for small responses, buffer and modify. Add a custom header `X-Proxy-By: my-proxy` to all responses. Support a transform function that can modify the response body (e.g., inject a script). For large responses, stream without buffering.

### Task 4
Add load balancing: multiple upstream targets. Round-robin or random selection. On upstream failure (connection refused, timeout), try the next target. Track healthy/unhealthy (simple: mark unhealthy on 5xx, retry after 30s). Return 502 if all targets fail.

### Task 5
Implement request/response logging. Log method, path, status, duration, and client IP. Use a structured format (JSON). Add a `--verbose` mode that logs headers (excluding Authorization). Support log rotation (write to a file with date in name, or use a simple append). Ensure the proxy handles chunked encoding and keep-alive correctly.