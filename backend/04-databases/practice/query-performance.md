# Practice: Query Performance

## Tasks

### Task 1
Identify the slowest queries in your application. Use `pg_stat_statements` (enable extension, query `pg_stat_statements` for mean time, calls, total time). Or add query logging with timing. Create a report: top 10 slowest queries by mean time. Output query text (truncated), mean_time_ms, calls. Run against a dev/staging DB.

### Task 2
Implement query timing middleware: wrap your DB client so every query is logged with duration. Log to console in dev (query + params truncated + ms). In production, send to a metrics system or log aggregator (simulate with a simple in-memory store). Add a `getSlowQueries(thresholdMs)` that returns queries exceeding the threshold.

### Task 3
Optimize a known slow query. Take a query that does a full table scan (e.g., `SELECT * FROM orders WHERE user_id = $1` without index). Run EXPLAIN ANALYZE before. Add index. Run again. Document: before/after plan, execution time, index size. Add a second optimization: rewrite a query that uses `SELECT *` to select only needed columns. Measure row size reduction.

### Task 4
Implement query result streaming for a large result set. Instead of loading all rows into memory, use a cursor or stream. For PostgreSQL: use `cursor` with `FETCH 1000` in a loop, or `pg-query-stream`. Process rows in batches (e.g., transform and write to file or another DB). Ensure connection is released when done. Handle backpressure.

### Task 5
Build a query performance dashboard (CLI or simple HTML). Data source: `pg_stat_statements` or your timing middleware. Show: (1) slowest queries, (2) most frequently called queries, (3) queries with highest total time. Add filters: by table, by time range. Add a "suggest index" feature: for a query with seq scan, suggest index on WHERE columns. Use heuristics (e.g., if WHERE has equality on column X, suggest index on X). Output as table or JSON.
