# Database Optimization

## Concept

Database optimization improves query speed, throughput, and resource usage through schema design, indexing, query tuning, connection management, and hardware/config tuning.

## Why It Matters

Databases are often the bottleneck in backend systems. Slow queries block requests, exhaust connections, and limit scalability. Proper optimization can yield 10–100x improvements and reduce infrastructure costs.

## Key Concepts

- **Indexing**: B-tree, hash, partial indexes; right index for the right query
- **Query planning**: EXPLAIN/EXPLAIN ANALYZE to understand execution
- **Connection pooling**: Reuse connections; avoid per-request connection overhead
- **Schema design**: Normalization vs denormalization; partitioning for large tables
- **Configuration**: Buffer sizes, work_mem, shared_buffers (PostgreSQL)

## Code Example

```javascript
// Use connection pool, not new connection per request
const pool = new Pool({ max: 20, idleTimeoutMillis: 30000 })
const result = await pool.query(
  'SELECT id, name FROM users WHERE status = $1',
  ['active']
)
```

## Under the Hood

Databases use query planners to choose execution plans. Indexes reduce full table scans. Connection pooling avoids TCP handshake and auth overhead. WAL and checkpoint tuning affect write throughput.

## Common Mistakes

- No indexes on filtered/sorted columns
- N+1 queries (one query per related record)
- Fetching entire rows when only few columns needed
- Oversized connection pools (contention, memory)
- Ignoring slow query logs

## Best Practices

- Index columns in WHERE, JOIN, ORDER BY
- Use EXPLAIN to verify index usage
- Pool connections; size pool to DB limits
- Monitor slow queries; set up alerts
- Consider read replicas for read-heavy workloads

## Summary

Database optimization is systematic: schema, indexes, queries, pooling, and config. Measure, tune, and monitor continuously.
