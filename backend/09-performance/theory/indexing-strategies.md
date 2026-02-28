# Indexing Strategies

## Concept

Indexing strategies define how to create and maintain database indexes for optimal query performance. The right indexes turn full table scans into index lookups; wrong or missing indexes cause slow queries.

## Why It Matters

Indexes can reduce query time from seconds to milliseconds. Too few indexes = slow reads. Too many = slow writes and storage overhead. Choosing the right columns and index types is critical for production databases.

## Key Concepts

- **B-tree**: Default for equality and range; supports ORDER BY
- **Hash**: Equality only; faster for exact match, no range
- **Composite index**: Multiple columns; order matters (left-prefix rule)
- **Partial index**: Index subset of rows (WHERE clause)
- **Covering index**: Includes all needed columns; index-only scan

## Code Example

```sql
-- Single column
CREATE INDEX idx_users_email ON users(email);

-- Composite: order matters for (a, b) -> supports a, (a,b); not b alone
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Partial: only active orders
CREATE INDEX idx_orders_active ON orders(created_at) WHERE status = 'active';

-- Covering: include columns to avoid table lookup
CREATE INDEX idx_orders_list ON orders(user_id) INCLUDE (total, status);
```

## Under the Hood

B-trees keep data sorted; lookup is O(log n). Composite indexes are sorted by first column, then second. Partial indexes store fewer rows, saving space. Covering indexes allow index-only scans.

## Common Mistakes

- Indexing every column (write overhead)
- Wrong column order in composite index
- Indexing low-cardinality columns (e.g., boolean) alone
- Not analyzing query patterns before adding indexes

## Best Practices

- Index columns in WHERE, JOIN ON, ORDER BY
- Put high-selectivity columns first in composite indexes
- Use partial indexes for common filters
- Monitor index usage; remove unused indexes
- Consider covering indexes for read-heavy queries

## Summary

Indexing is a balance of read speed, write cost, and storage. Match indexes to query patterns; use EXPLAIN to verify usage.
