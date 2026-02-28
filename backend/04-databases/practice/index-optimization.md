# Practice: Index Optimization

## Tasks

### Task 1
Given a slow query `SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC`, add an index to optimize it. Create a composite index on `(user_id, created_at DESC)`. Use EXPLAIN ANALYZE before and after to compare. Document the plan change (Seq Scan vs Index Scan).

### Task 2
Implement a function `analyzeQuery(sql, params)` that runs EXPLAIN ANALYZE and returns a summary: execution time, whether indexes were used, row counts. Parse the EXPLAIN output or use the database's EXPLAIN format. Use it to verify the index from Task 1 is used.

### Task 3
Given a query with `WHERE status = $1 AND created_at > $2`, design the optimal composite index. Consider column order: equality before range. Create the index and verify with EXPLAIN. Add a partial index variant: index only rows where `status = 'active'` if that's a common filter. Compare plan and size.

### Task 4
Optimize a query with `WHERE lower(email) = lower($1)`. A regular index on `email` won't be used because of the function. Create a functional index: `CREATE INDEX idx_users_email_lower ON users (lower(email))`. Rewrite the query to use `lower(email) = $1` (pass lowercased param). Verify index usage.

### Task 5
Build an index recommendation tool. Given a table name and a sample query, suggest indexes. Use `pg_stat_user_tables` and `pg_stat_user_indexes` to see existing indexes and seq scan counts. Output: "Consider index on (col1, col2) for query X" based on WHERE and ORDER BY columns. Implement for a single table. Add a "dry run" that shows what would be created without executing.
