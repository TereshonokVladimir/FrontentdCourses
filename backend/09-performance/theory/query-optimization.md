# Query Optimization

## Concept

Query optimization improves the speed and efficiency of database queries through better SQL, indexing, and understanding of the query planner. It focuses on reducing execution time and resource usage per query.

## Why It Matters

A single slow query can block an entire request. At scale, inefficient queries multiply—thousands of requests per second with suboptimal queries exhaust the database. Optimization directly improves latency and throughput.

## Key Concepts

- **EXPLAIN/EXPLAIN ANALYZE**: See execution plan and actual costs
- **Index usage**: Seq Scan vs Index Scan; avoid full table scans when possible
- **Selectivity**: Filter early; reduce rows before joins
- **Avoid SELECT ***: Fetch only needed columns
- **Batch vs N+1**: One query with IN/batch vs many small queries

## Code Example

```sql
-- Before: full table scan
SELECT * FROM orders WHERE user_id = 123;

-- After: indexed, specific columns
CREATE INDEX idx_orders_user_id ON orders(user_id);
SELECT id, total, status FROM orders WHERE user_id = 123;

-- Verify with EXPLAIN
EXPLAIN ANALYZE SELECT id, total FROM orders WHERE user_id = 123;
```

## Under the Hood

The planner estimates cost of different plans (sequential scan, index scan, join order). Statistics (pg_statistics) drive estimates. Wrong stats lead to bad plans. ANALYZE updates statistics.

## Common Mistakes

- SELECT * when only few columns needed
- Functions on indexed columns (e.g., WHERE LOWER(email) = ...) prevent index use
- OR conditions that prevent index usage
- Subqueries that could be JOINs (sometimes less efficient)
- Not using EXPLAIN to verify assumptions

## Best Practices

- Always EXPLAIN slow queries
- Index filtered and joined columns
- Avoid functions/expressions on indexed columns in predicates
- Use LIMIT when appropriate; paginate large result sets
- Consider materialized views for expensive aggregations

## Summary

Query optimization is data-driven. Use EXPLAIN, add indexes, reduce data scanned, and validate with real workloads.
