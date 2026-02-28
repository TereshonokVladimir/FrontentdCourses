# Query Optimization

## Concept

Query optimization improves performance through indexing, query rewriting, and execution plan analysis. EXPLAIN ANALYZE shows how the database executes a query. The goal is to avoid full table scans, reduce I/O, and minimize CPU. Slow queries cause API latency and timeouts.

## Why It Matters

Production backends serve thousands of requests per second. A single slow query can block connections and cascade failures. Optimization is data-driven: measure first, then index and rewrite.

## Key Concepts

- EXPLAIN: show execution plan
- EXPLAIN ANALYZE: execute and show actual timings
- Seq Scan: full table scan (expensive on large tables)
- Index Scan: use index for lookup
- Nested Loop, Hash Join, Merge Join: join strategies
- Cost: planner's estimate; actual time: real execution

## Code Example

```sql
-- Before: seq scan
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123;
-- Seq Scan on orders  (cost=0.00..1000.00 rows=10 width=50)

-- Add index
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- After: index scan
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123;
-- Index Scan using idx_orders_user_id on orders  (cost=0.28..8.30 rows=1 width=50)

-- Avoid N+1: single query with JOIN
SELECT o.*, oi.* FROM orders o
LEFT JOIN order_items oi ON o.id = oi.order_id
WHERE o.user_id = 123;
```

## Under the Hood

Planner parses SQL, generates candidate plans, estimates cost (I/O, CPU), picks cheapest. Statistics (pg_statistics) inform estimates. ANALYZE updates statistics. Wrong stats lead to bad plans.

## Common Mistakes

- Optimizing without measuring (EXPLAIN ANALYZE)
- Indexing without checking usage (pg_stat_user_indexes)
- OR conditions preventing index use (rewrite with UNION)
- Functions on indexed columns (index not used: WHERE lower(email) = 'x')

## Best Practices

- Always EXPLAIN ANALYZE before optimizing
- Index WHERE and JOIN columns
- Avoid functions on indexed columns in predicates
- Use pg_stat_statements to find slow queries

## Summary

Query optimization: EXPLAIN ANALYZE, indexes, rewrite. Measure first. Index filter/join columns. Monitor slow queries.
