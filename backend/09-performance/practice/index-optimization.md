# Practice: Index Optimization

## Tasks

### Task 1
Given a `products` table with `id`, `name`, `category`, `price`, `created_at`, write three common queries and suggest an index for each: (1) find by category, (2) find by category and price range, (3) order by created_at. Explain the column order for composite indexes.

### Task 2
Create a script that analyzes slow queries. Given a log file or array of query strings, extract the table and WHERE/ORDER BY columns. Output a report: "Query X uses columns [a, b, c]; consider index on (a, b, c)." Use simple regex or a SQL parser if available.

### Task 3
Implement index usage monitoring. For a PostgreSQL database, query `pg_stat_user_indexes` to get index usage counts. Create an endpoint or script that lists indexes with zero or very low usage. Suggest which indexes might be candidates for removal (with a warning to verify they're not used for constraints).

### Task 4
Design and implement a partial index. For an `orders` table with `status` (e.g., 'pending', 'completed', 'cancelled'), create a partial index on `(user_id, created_at) WHERE status = 'pending'`. Write a query that benefits from this index. Document when partial indexes are useful.

### Task 5
Build an index recommendation engine. Given a set of query patterns (from logs or manual input), output recommended indexes. Consider: (1) column frequency in WHERE/JOIN/ORDER BY, (2) selectivity (high-cardinality first), (3) avoiding redundant indexes (if (a,b) exists, (a) may be redundant). Output a prioritized list with rationale. Integrate with a real or mock DB to run EXPLAIN and verify recommendations.
