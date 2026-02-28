# Connection Pool Configuration

## Concept

Connection pool configuration tunes pool size, timeouts, and health checks for production workloads. Wrong settings cause connection exhaustion, timeouts, or resource waste. Configuration depends on database limits, concurrency, and instance count.

## Why It Matters

A misconfigured pool is a common production issue. Too small: requests queue and time out. Too large: exceeds DB max_connections, wastes memory. Proper configuration prevents outages and optimizes resource use.

## Key Concepts

- **max**: Maximum connections in pool; size for expected concurrency
- **min**: Minimum idle connections; avoid cold start
- **idleTimeoutMillis**: Close idle connections to free resources
- **connectionTimeoutMillis**: Fail fast when pool exhausted
- **Formula**: total_pool_size ≤ db_max_connections / num_app_instances

## Code Example

```javascript
const pool = new Pool({
  max: 10,                      // Per process
  min: 2,                       // Keep 2 warm
  idleTimeoutMillis: 30000,     // Close idle after 30s
  connectionTimeoutMillis: 5000 // Wait max 5s for connection
})
// With 4 app instances: 40 total connections to DB
// Ensure DB max_connections >= 40 + buffer
```

## Under the Hood

Pool maintains a queue of idle connections. `connect()` returns idle or creates new (up to max). Idle timeout runs a timer; connection timeout applies when waiting for a free slot. Stale connections are detected via validation queries.

## Common Mistakes

- max larger than DB allows per instance
- No connection timeout (hangs when pool exhausted)
- idleTimeout too short (churn) or too long (resource hold)
- Not accounting for all consumers (workers, cron, background jobs)

## Best Practices

- Size pool: max = (db_max_connections - buffer) / app_instances
- Set connectionTimeoutMillis to fail fast (2–5s)
- Use validation/keepalive to detect stale connections
- Monitor pool utilization and wait times

## Summary

Pool configuration balances concurrency, DB limits, and resource use. Size for DB limits, set timeouts, and monitor in production.
