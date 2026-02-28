# Isolation Levels

## Concept

Isolation levels control how concurrent transactions see each other's changes. ANSI levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable. Higher isolation prevents more anomalies but can reduce concurrency. PostgreSQL defaults to Read Committed.

## Why It Matters

Concurrent transactions can cause dirty reads, non-repeatable reads, and phantom reads. Choosing the right isolation level prevents bugs (e.g., double-spend) while avoiding unnecessary locking. Understanding anomalies guides the choice.

## Key Concepts

- Read Uncommitted: see uncommitted changes (rarely implemented; often same as Read Committed)
- Read Committed: see only committed data; each statement sees latest snapshot
- Repeatable Read: same snapshot for whole transaction; no non-repeatable reads
- Serializable: full isolation; serializable execution
- Dirty read: see uncommitted data
- Non-repeatable read: same row different in same transaction
- Phantom read: new rows appear in range query

## Code Example

```sql
-- Default: Read Committed
BEGIN;
SELECT balance FROM accounts WHERE id = 1;  -- 100
-- Another tx commits: UPDATE accounts SET balance = 50 WHERE id = 1
SELECT balance FROM accounts WHERE id = 1;  -- 50 (non-repeatable)
COMMIT;

-- Repeatable Read
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT balance FROM accounts WHERE id = 1;  -- 100
-- Another tx commits: UPDATE accounts SET balance = 50
SELECT balance FROM accounts WHERE id = 1;  -- 100 (same snapshot)
COMMIT;
```

## Under the Hood

Read Committed: new snapshot per statement. Repeatable Read: snapshot at first read. Serializable: detect conflicts, abort or retry. PostgreSQL uses MVCC; no locks for reads in Read Committed.

## Common Mistakes

- Assuming Serializable when default is Read Committed
- Overusing Serializable (performance cost)
- Not handling serialization failures (retry)
- Not understanding which anomalies each level prevents

## Best Practices

- Use Read Committed unless you need stronger guarantees
- Repeatable Read for reports that must be consistent
- Serializable for critical sections; retry on conflict
- Document isolation requirements per use case

## Summary

Isolation levels: Read Committed (default), Repeatable Read, Serializable. Higher = fewer anomalies, more conflicts. Choose deliberately; retry serialization failures.
