# Practice: Connection Pool

## Tasks

### Task 1
Create a connection pool using `pg.Pool` with config: `max: 20`, `idleTimeoutMillis: 30000`, `connectionTimeoutMillis: 2000`. Export a `getPool()` that returns a singleton pool. Create a `query(sql, params)` helper that acquires a client, runs the query, releases the client, and returns rows. Handle connection errors.

### Task 2
Implement `withTransaction(fn)` that acquires a client, calls `BEGIN`, runs `fn(client)`, then `COMMIT` on success or `ROLLBACK` on error. The callback receives the client. Use `pool.connect()` and ensure `client.release()` is always called (finally block). Support async callbacks.

### Task 3
Add pool health check: `checkPoolHealth()` that runs `SELECT 1` and returns `{ ok: true }` or `{ ok: false, error }`. Add pool metrics: `getPoolStats()` returning `{ total, idle, waiting }` (use pool.totalCount, pool.idleCount, pool.waitingCount if available, or approximate). Expose as an endpoint or for monitoring.

### Task 4
Implement connection pool with PgBouncer support. Use transaction mode: connection is returned to pool after each transaction (not after each query). Document that long-lived prepared statements may not work. Add config for `host`, `port`, `database` with env vars. Support both direct PostgreSQL and PgBouncer connection strings.

### Task 5
Build a pool that supports read replicas. Create two pools: `primaryPool` and `replicaPool`. Implement `queryPrimary(sql, params)` and `queryReplica(sql, params)`. Add `query(sql, params, { useReplica: boolean })` that routes based on flag. For `withTransaction`, always use primary. Add a `getConnection(role: 'primary' | 'replica')` for advanced use. Handle replica unavailable (fallback to primary with warning).
