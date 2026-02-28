# Connection Pooling

## Concept

Connection pooling maintains a reusable set of database connections instead of creating a new connection per request. Connections are checked out, used, and returned to the pool, reducing connection overhead.

## Why It Matters

Creating a DB connection involves TCP handshake, TLS negotiation, and authentication—often 10–50ms. At high request rates, this dominates latency. Pools amortize this cost and respect database connection limits.

## Key Concepts

- **Pool size**: Balance between concurrency and DB connection limits
- **Idle timeout**: Close idle connections to free resources
- **Connection timeout**: Fail fast if pool exhausted
- **Health checks**: Validate connections before use; remove stale ones
- **Per-process vs shared**: Node.js typically one pool per process

## Code Example

```javascript
const { Pool } = require('pg')
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})

async function getOrder(id) {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM orders WHERE id = $1', [id])
    return result.rows[0]
  } finally {
    client.release()
  }
}
```

## Under the Hood

The pool maintains a queue of idle connections. `connect()` returns an idle connection or waits for one to be released. Connections can go stale (network drop, DB restart); pools validate or recreate them.

## Common Mistakes

- Pool too large (exceeds DB max_connections; memory waste)
- Pool too small (requests queue; increased latency)
- Not releasing connections (leak; pool exhaustion)
- One pool per request (defeats the purpose)

## Best Practices

- Size pool to DB limits and expected concurrency (often max = 2–4 × CPU cores per process)
- Always release connections (use try/finally)
- Set connection timeout to fail fast under load
- Monitor pool utilization and wait times

## Summary

Connection pooling is essential for database performance. Reuse connections, size the pool correctly, and always release back to the pool.
