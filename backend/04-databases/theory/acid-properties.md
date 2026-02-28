# ACID Properties

## Concept

ACID describes guarantees that transactional databases provide. Atomicity: all or nothing. Consistency: valid state before and after. Isolation: concurrent transactions don't see each other's uncommitted work. Durability: committed data survives crashes.

## Why It Matters

ACID ensures data integrity under concurrency and failures. Banking, inventory, and billing systems rely on it. NoSQL systems often sacrifice ACID for availability or performance. Choosing the right guarantees affects system design.

## Key Concepts

- Atomicity: transaction is indivisible; rollback undoes all
- Consistency: constraints hold; invalid states are rejected
- Isolation: transactions appear to run serially (levels vary)
- Durability: committed data is persisted (WAL, fsync)
- Trade-offs: strict ACID vs availability (CAP theorem)

## Code Example

```sql
-- Atomicity: both succeed or both fail
BEGIN;
  UPDATE accounts SET balance = balance - 50 WHERE id = 1;
  UPDATE accounts SET balance = balance + 50 WHERE id = 2;
COMMIT;

-- Consistency: CHECK constraint rejects invalid data
ALTER TABLE accounts ADD CONSTRAINT positive_balance
  CHECK (balance >= 0);

-- Durability: COMMIT flushes to WAL before returning
-- Isolation: controlled by SET TRANSACTION ISOLATION LEVEL
```

## Under the Hood

Atomicity: undo log or redo log. Consistency: constraint checks at commit. Isolation: locking or MVCC (multi-version concurrency control). Durability: WAL written to disk, fsync before commit acknowledgment.

## Common Mistakes

- Assuming Serializable when default is Read Committed
- Ignoring isolation anomalies (phantom reads, lost updates)
- Disabling fsync for "speed" (lose durability)
- Expecting ACID from eventually-consistent stores

## Best Practices

- Understand isolation level defaults
- Use transactions for multi-statement atomicity
- Don't disable durability in production
- Document consistency requirements for distributed systems

## Summary

ACID: atomic, consistent, isolated, durable. Transactions provide atomicity; constraints provide consistency; isolation levels vary; WAL provides durability.
