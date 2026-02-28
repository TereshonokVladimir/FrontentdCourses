# Practice: Database Tuning

## Tasks

### Task 1
Document the key configuration parameters for your database (PostgreSQL or MySQL). For PostgreSQL: `shared_buffers`, `work_mem`, `effective_cache_size`, `max_connections`. Explain what each does and suggest starter values for a small (1GB RAM) and medium (8GB RAM) instance.

### Task 2
Create a script that identifies the top 10 slowest queries from the database. Use `pg_stat_statements` (PostgreSQL) or `performance_schema` (MySQL). Output: query text (truncated), total time, call count, mean time. Add instructions for enabling the extension if needed.

### Task 3
Implement connection pool sizing. Given `max_connections` on the DB and the number of application instances, calculate recommended pool size per instance. Create a config validator: warn if `pool_size * instances > max_connections * 0.8`. Add a startup check that fails if the DB rejects connections (e.g., too many).

### Task 4
Set up a slow query log. Configure the database to log queries exceeding 100ms. Create a script that parses the log and aggregates: which queries are slowest, how often they run. Output a report with recommendations (add index, optimize query, etc.).

### Task 5
Build a database performance dashboard. Collect metrics: (1) connections (active, idle, max), (2) cache hit ratio (PostgreSQL: `pg_stat_database`), (3) slow query count, (4) replication lag (if applicable). Expose as JSON or integrate with a simple HTML dashboard. Add alerts: connection pool exhaustion, cache hit ratio < 95%, replication lag > 10s. Document how to run and interpret.
