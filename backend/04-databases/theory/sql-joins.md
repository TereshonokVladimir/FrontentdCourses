# SQL Joins

## Concept

Joins combine rows from two or more tables based on a related column. INNER JOIN returns matching rows; LEFT JOIN includes unmatched left rows; FULL OUTER includes both. Cross joins produce Cartesian products. Joins are the primary way to query related data.

## Why It Matters

Relational data lives in multiple tables. Joins avoid N+1 queries and round-trips. Choosing the right join type affects result correctness (e.g., LEFT vs INNER for optional relationships). Poor join design causes performance issues.

## Key Concepts

- INNER JOIN: only matching rows from both tables
- LEFT (OUTER) JOIN: all left rows, nulls for unmatched right
- RIGHT JOIN: all right rows (rarely used; flip tables for LEFT)
- FULL OUTER JOIN: all rows from both, nulls where no match
- CROSS JOIN: Cartesian product (every row × every row)
- Self-join: table joined to itself (e.g., employee → manager)

## Code Example

```sql
-- INNER: orders with at least one item
SELECT o.id, o.total, oi.quantity
FROM orders o
INNER JOIN order_items oi ON o.id = oi.order_id;

-- LEFT: all users, orders if any
SELECT u.email, o.id as order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Self-join: employees and managers
SELECT e.name, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

## Under the Hood

Joins are implemented as nested loop (small table), hash (equality, no index), or merge (sorted inputs). The planner picks based on size, indexes, and statistics. EXPLAIN shows the join strategy.

## Common Mistakes

- Cartesian product from missing ON clause
- Using WHERE instead of ON for join conditions (semantic difference in OUTER)
- Joining on wrong columns (wrong results, duplicates)
- Joining too many tables (exponential cost)

## Best Practices

- Put join conditions in ON, filters in WHERE
- Index join columns
- Prefer INNER when relationship is required
- Limit join depth; consider denormalization for wide joins

## Summary

Joins: INNER, LEFT, FULL, CROSS. ON for conditions. Index join columns. Choose type by relationship cardinality.
