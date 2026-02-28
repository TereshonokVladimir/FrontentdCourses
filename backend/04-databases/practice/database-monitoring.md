# Practice: Database Monitoring

## Tasks

### Task 1
Implement basic DB health checks: (1) `SELECT 1` connectivity check, (2) connection pool stats (total, idle, waiting), (3) database size query (`pg_database_size`). Expose as `GET /health/db` returning `{ status, latency_ms, pool, size_mb }`. Use in a readiness probe. Add a simple alert: if latency > 1s or pool exhausted, log warning.

### Task 2
Add query performance monitoring. Enable `pg_stat_statements`. Create an endpoint or script that returns: top 10 queries by total time, mean time, and call count. Include query text (truncated to 200 chars). Add a "slow query" threshold: flag queries with mean time > 100ms. Run periodically (e.g., every minute) and log or store results. Consider a simple in-memory ring buffer of recent slow queries.

### Task 3
Implement table and index statistics. Query `pg_stat_user_tables` for: seq_scan, idx_scan, n_tup_ins, n_tup_upd, n_tup_del. Query `pg_stat_user_indexes` for index usage. Create a report: tables with high seq_scan and low idx_scan (candidates for new indexes), unused indexes (idx_scan = 0). Output as table or JSON. Add a "recommendations" section based on heuristics.

### Task 4
Add replication monitoring (if applicable). Query `pg_stat_replication` on primary: client_addr, state, sent_lsn, write_lsn, flush_lsn, replay_lsn. Calculate lag (bytes or approximate seconds). Expose in health endpoint. Add dead connection detection: track connections that haven't completed a query in X minutes. Use `pg_stat_activity` to list active queries and connections. Create an endpoint that shows long-running queries (> 30s) with option to terminate (use `pg_terminate_backend` with caution).

### Task 5
Build a simple monitoring dashboard (CLI or HTML). Aggregate: (1) health status, (2) top slow queries, (3) table/index stats, (4) replication lag, (5) active connections and long-running queries. Refresh every 30 seconds. Add export to JSON for integration with external monitoring (Prometheus, Datadog). Implement a "baseline" feature: store current metrics, compare future runs to baseline, flag significant changes (e.g., query time 2x baseline). Document how to deploy and use the dashboard.
