# Partitioning

## Concept

Partitioning splits a table into smaller physical pieces (partitions) by a key. Range: by date ranges. List: by discrete values. Hash: by hash of column. Queries can prune partitions (skip irrelevant ones). Improves manageability and performance for large tables.

## Why It Matters

Tables with millions of rows become slow to query and maintain. Partitioning enables dropping old partitions (e.g., archive), parallel scans, and better index locality. Common for time-series data (logs, events, orders).

## Key Concepts

- Range partitioning: PARTITION BY RANGE (created_at)
- List partitioning: PARTITION BY LIST (region)
- Hash partitioning: PARTITION BY HASH (id)
- Partition pruning: planner excludes irrelevant partitions
- Partition key: column(s) used for partitioning
- Sub-partitioning: partition of a partition

## Code Example

```sql
-- Range partition by month
CREATE TABLE events (
  id BIGSERIAL,
  user_id INT,
  event_type VARCHAR(50),
  created_at TIMESTAMPTZ
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2024_01 PARTITION OF events
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
CREATE TABLE events_2024_02 PARTITION OF events
  FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

-- Query prunes to events_2024_01
SELECT * FROM events WHERE created_at >= '2024-01-15' AND created_at < '2024-01-20';
```

## Under the Hood

Each partition is a separate table. Parent table is virtual. Inserts route to correct partition by key. Queries with partition key in WHERE prune. Indexes can be per-partition or on parent.

## Common Mistakes

- Partitioning too early (overhead for small tables)
- Partition key not in common queries (no pruning)
- Too many partitions (planning overhead)
- Forgetting to create future partitions (insert fails)

## Best Practices

- Partition when table is large (millions of rows)
- Use partition key in WHERE for pruning
- Automate partition creation (cron, pg_partman)
- Consider time-based for append-heavy data

## Summary

Partitioning: split table by range/list/hash. Enables pruning, archiving. Use for large time-series. Partition key in queries. Automate partition creation.
