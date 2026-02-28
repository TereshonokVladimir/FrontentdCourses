# Practice: Load Test

## Tasks

### Task 1
Write a simple load test script that sends 100 GET requests to `http://localhost:3000/health` sequentially. Measure and log: total time, average latency, min, max. Use `fetch` or `http.get`. Output results in a readable format.

### Task 2
Upgrade to concurrent requests. Send 100 requests with a concurrency of 10 (10 at a time). Use `Promise.all` with chunks or a concurrency limiter. Measure latency percentiles (P50, P95, P99). Report success rate and any errors.

### Task 3
Implement a configurable load test: accept CLI args for `url`, `totalRequests`, `concurrency`, and `duration` (run for N seconds instead of N requests). Support both "total requests" and "requests per second" modes. Output a summary with RPS, latency percentiles, and error count.

### Task 4
Add ramp-up and steady-state phases. Start with 1 RPS, increase to target over 30 seconds, hold for 2 minutes, then ramp down. Graph or log RPS and latency over time (e.g., per 10-second window). Identify if latency degrades under sustained load.

### Task 5
Build a load test that mimics production traffic patterns. Support multiple endpoints with different weights (e.g., 70% GET /api/users, 20% GET /api/orders, 10% POST /api/orders). Use a CSV or JSON config for the scenario. Add optional think time (delay between requests per virtual user). Integrate with a simple results dashboard: real-time RPS and latency chart (e.g., terminal-based or HTML file output).
