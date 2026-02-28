# Practice: Bottleneck Identification

## Tasks

### Task 1
Create a script that simulates a slow endpoint. The endpoint does: (1) 50ms CPU work, (2) 100ms DB query, (3) 80ms external API call. Run sequentially. Measure total time. Then parallelize (2) and (3) and measure again. Document the improvement and identify the critical path.

### Task 2
Build a request breakdown middleware. For each request, record time spent in: (1) middleware, (2) route handler, (3) DB queries (wrap pool.query), (4) external HTTP calls (wrap fetch). Output a summary per request: `{ total: 150, db: 80, http: 50, other: 20 }`. Log when a single component exceeds 50% of total.

### Task 3
Implement a simple profiler that samples the event loop. Every 1ms, capture the current stack (if possible) or at least mark "in handler" vs "idle". Run a load test and analyze: what percentage of time is the event loop busy? Correlate with request latency. Use `async_hooks` or similar if available.

### Task 4
Create a bottleneck report. Given metrics (request duration, DB duration, cache duration, external API duration), compute the contribution of each component. Output: "DB accounts for 60% of P99 latency; consider indexing or caching." Run against a real or mock API and produce the report.

### Task 5
Build an automated bottleneck detection system. Under load (e.g., 100 RPS for 2 minutes), collect: (1) per-endpoint latency breakdown, (2) resource utilization (CPU, memory, event loop), (3) downstream latency (DB, Redis, external). Identify the top 3 bottlenecks. Output a prioritized recommendation list: "1. Add index on orders.user_id (saves ~80ms P99). 2. Cache user lookup (saves ~50ms). 3. Increase DB connection pool (reduces queue time)." Integrate with profiling data if available. Document assumptions and limitations.
