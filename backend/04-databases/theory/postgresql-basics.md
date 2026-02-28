# PostgreSQL Basics

## Concept

PostgreSQL is an open-source relational database with strong ACID compliance, rich types (JSONB, arrays, ranges), and extensibility. It supports advanced features: window functions, CTEs, full-text search, and extensions (PostGIS, pg_cron). Default port 5432.

## Why It Matters

PostgreSQL is widely used in production backends. It offers a balance of reliability, features, and performance. Understanding its specifics (connection strings, extensions, JSONB) helps build robust services.

## Key Concepts

- Data types: SERIAL, UUID, JSONB, TIMESTAMPTZ, ARRAY
- psql: CLI client
- Connection string: postgresql://user:pass@host:5432/dbname
- Extensions: CREATE EXTENSION pg_trgm, uuid-ossp
- Configuration: postgresql.conf, pg_hba.conf
- pg_dump / pg_restore for backup

## Code Example

```sql
-- JSONB with indexing
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payload JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_events_payload ON events USING GIN(payload);

-- Query JSONB
SELECT payload->>'user_id' FROM events WHERE payload @> '{"type": "login"}';

-- CTE
WITH recent AS (
  SELECT * FROM orders WHERE created_at > NOW() - INTERVAL '7 days'
)
SELECT user_id, COUNT(*) FROM recent GROUP BY user_id;
```

## Under the Hood

PostgreSQL uses a process-per-connection model (or thread pool with pgBouncer). MVCC for concurrency. WAL for durability. Query planner uses statistics from ANALYZE.

## Common Mistakes

- Using TIMESTAMP instead of TIMESTAMPTZ (timezone bugs)
- Not using connection pooling (connection exhaustion)
- SELECT * with JSONB (large payloads)
- Forgetting to run ANALYZE after bulk loads

## Best Practices

- Use TIMESTAMPTZ for all timestamps
- Connection pool (pgBouncer, PgBouncer) in production
- JSONB for flexible schema; index with GIN
- Regular VACUUM and ANALYZE

## Summary

PostgreSQL: rich types, JSONB, extensions. TIMESTAMPTZ, connection pooling, JSONB indexing. Production-ready relational DB.
