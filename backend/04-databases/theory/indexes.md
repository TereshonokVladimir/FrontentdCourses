# Indexes

## Concept

Indexes are data structures that speed up lookups by mapping column values to row locations. B-tree is the default for equality and range queries. Hash indexes suit equality-only. GIN/GiST support full-text and JSON. Indexes trade write cost for read speed.

## Why It Matters

Without indexes, queries scan full tables (O(n)). With indexes, lookups are O(log n) or better. Production systems rely on indexes for sub-second queries. Wrong or missing indexes cause slow APIs and timeouts.

## Key Concepts

- B-tree: default, supports =, <, >, BETWEEN, ORDER BY
- Hash: equality only, faster for exact matches
- GIN: inverted index for arrays, full-text, JSONB
- GiST: geometric, full-text, range types
- Composite index: (a, b) supports queries on a, or (a, b)
- Partial index: index subset of rows (WHERE clause)
- Covering index: INCLUDE columns to avoid heap access

## Code Example

```sql
-- B-tree on frequently filtered column
CREATE INDEX idx_users_email ON users(email);

-- Composite for (user_id, created_at) queries
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);

-- Partial index: only active orders
CREATE INDEX idx_orders_active ON orders(created_at)
WHERE status = 'active';

-- GIN for JSONB search
CREATE INDEX idx_events_metadata ON events USING GIN(metadata jsonb_path_ops);
```

## Under the Hood

B-tree: balanced tree, leaf nodes store key + pointer to heap. Inserts/updates maintain balance. Index-only scans use INCLUDE to avoid heap fetch. EXPLAIN ANALYZE shows index vs seq scan.

## Common Mistakes

- Indexing every column (slows writes, wastes space)
- Wrong column order in composite indexes
- Indexing low-cardinality columns (e.g., boolean)
- Not using EXPLAIN to verify index usage

## Best Practices

- Index columns in WHERE, JOIN, ORDER BY
- Composite index: put equality columns before range
- Use partial indexes for filtered subsets
- Monitor index usage; drop unused indexes

## Summary

Indexes: B-tree, hash, GIN. Index filter/join/sort columns. Composite order matters. Profile with EXPLAIN. Trade writes for reads.
