# Connection Pooling

## Concept

Connection pooling maintains a reusable set of database connections. Instead of opening a new connection per request, the app borrows from the pool and returns it when done. Pools limit max connections and avoid connection exhaustion.

## Why It Matters

Each PostgreSQL connection consumes ~5–10 MB. Opening connections is slow (TCP, auth). High-traffic backends exhaust the database connection limit without pooling. PgBouncer, pg-pool, and similar tools are essential in production.

## Key Concepts

- Pool size: max connections (typically 10–100 per app instance)
- Transaction vs session pooling: PgBouncer transaction mode returns connection after each transaction
- Connection lifecycle: acquire, use, release
- Timeout: max wait for connection, idle timeout
- Health checks: verify connection before use

## Code Example

```javascript
// Node.js with pg
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})

async function getOrder(id) {
  const client = await pool.connect()
  try {
    const res = await client.query('SELECT * FROM orders WHERE id = $1', [id])
    return res.rows[0]
  } finally {
    client.release()
  }
}
```

## Under the Hood

Pool maintains a queue of connections. acquire() returns an idle connection or waits. release() returns it to the pool. Idle connections are closed after timeout. PgBouncer sits between app and PostgreSQL, multiplexing many app connections to fewer DB connections.

## Common Mistakes

- Pool size >= database max_connections (exhaust DB)
- Not releasing connections (leak, pool exhaustion)
- Pool per request instead of singleton
- Ignoring connection errors (retry, circuit breaker)

## Best Practices

- Single pool per process, shared across requests
- Always release in finally block
- Size pool: (DB max_connections) / (app instances)
- Use PgBouncer for transaction pooling at scale

## Summary

Connection pooling: reuse connections, limit count. Pool per process, always release. PgBouncer for transaction pooling. Size for DB limit.
