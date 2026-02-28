# Practice: Profiling Tool

## Tasks

### Task 1
Create a simple middleware that measures request duration and logs it. Log method, path, status code, and duration in milliseconds. Use `performance.now()` for timing.

### Task 2
Extend the middleware to track percentiles (P50, P95, P99) per route. Maintain a rolling window of the last 1000 request durations per path. Expose a `/metrics` endpoint that returns these percentiles as JSON.

### Task 3
Add CPU profiling capability: when `?profile=1` is in the query string, start a 5-second CPU profile and return a download link or the profile data. Use Node.js `--prof` or the `v8` module if available.

### Task 4
Implement a memory snapshot endpoint. On `GET /debug/heap`, take a heap snapshot (or summary) and return allocation statistics: total heap size, used heap, external memory. Protect with an auth check or environment guard (only in development).

### Task 5
Build a lightweight flame graph generator. Capture stack samples at 1ms intervals for a configurable duration (e.g., 10 seconds). Aggregate samples into a tree structure (function → children with counts). Expose as JSON or render a simple ASCII flame graph. Integrate with a `?flame=1` trigger on any request.
