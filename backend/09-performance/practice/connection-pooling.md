# Practice: Connection Pooling

## Tasks

### Task 1
Create a minimal connection pool for a mock database. The pool should maintain up to 5 connections. Implement `acquire()` (returns a connection or waits) and `release(conn)`. Use a queue for waiting callers when the pool is exhausted. Simulate connections with simple objects `{ id, inUse }`.

### Task 2
Add connection lifecycle: `idleTimeoutMillis` (close idle connections after 30 seconds) and `connectionTimeoutMillis` (fail acquire after 5 seconds if no connection available). Track last-used time per connection. Add a periodic cleanup task for idle connections.

### Task 3
Integrate with a real database (PostgreSQL or MySQL). Create a pool with `pg.Pool` or `mysql2.createPool`. Implement a `withConnection(fn)` helper that acquires, runs `fn(client)`, and releases in a try/finally. Use it in a sample query handler.

### Task 4
Add connection health validation. Before returning a connection from the pool, run a lightweight query (e.g., `SELECT 1`) to verify it's alive. If the query fails, discard the connection and create a new one. Handle connection errors gracefully (retry or return a fresh connection).

### Task 5
Implement pool metrics: track `totalConnections`, `idleConnections`, `activeConnections`, `waitingRequests`, and `acquireWaitTime`. Expose a `/pool/stats` endpoint. Add optional integration with a metrics system (e.g., Prometheus). Implement pool sizing recommendations based on observed `waitingRequests` and `acquireWaitTime`.
