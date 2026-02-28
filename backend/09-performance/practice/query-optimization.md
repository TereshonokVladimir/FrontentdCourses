# Practice: Query Optimization

## Tasks

### Task 1
Given a `users` table with columns `id`, `email`, `name`, `created_at`, `status`, write a query to fetch active users by email. Add an index that would optimize this query. Explain why the index helps and what the query plan would look like (describe conceptually or use EXPLAIN if you have a DB).

### Task 2
Identify and fix an N+1 query pattern. Given `orders` and `users` (order has `user_id`), write code that fetches 100 orders with their user names in at most 2 queries—using either a JOIN or a batch query. Compare the number of queries before and after.

### Task 3
Optimize a slow aggregation query. Given a `logs` table with `user_id`, `action`, `created_at`, write a query to count actions per user for the last 7 days. Add appropriate indexes. Consider a partial index if the query always filters by date. Use EXPLAIN to verify index usage.

### Task 4
Implement a pagination strategy that remains efficient for large offsets. Instead of `OFFSET 10000 LIMIT 20`, use keyset (cursor) pagination: `WHERE id > last_seen_id ORDER BY id LIMIT 20`. Implement an API that returns `{ items, nextCursor }` and accepts `?cursor=...` for the next page.

### Task 5
Design and implement a materialized view (or equivalent) for a heavy reporting query. For example: daily active users, revenue by day, or top products by sales. Implement a refresh strategy: full refresh vs incremental. Add an endpoint or job to trigger refresh. Document trade-offs (freshness vs performance).
