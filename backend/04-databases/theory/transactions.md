# Transactions

## Concept

A transaction is a unit of work that either fully commits or fully rolls back. Multiple statements execute atomically: all succeed or all fail. Transactions provide consistency when moving money, updating inventory, or modifying related rows.

## Why It Matters

Without transactions, partial failures leave data inconsistent (e.g., money deducted but not credited). Backends must use transactions for multi-step operations. Understanding isolation levels prevents subtle bugs (dirty reads, lost updates).

## Key Concepts

- BEGIN / START TRANSACTION
- COMMIT: persist changes
- ROLLBACK: discard changes
- SAVEPOINT: nested rollback points
- ACID: Atomicity, Consistency, Isolation, Durability
- Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable

## Code Example

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
  -- If either fails, both roll back
COMMIT;

-- With savepoint
BEGIN;
  INSERT INTO orders (user_id) VALUES (1);
  SAVEPOINT sp1;
  INSERT INTO order_items (order_id, product_id) VALUES (1, 99);
  ROLLBACK TO sp1;  -- Undo order_items, keep order
COMMIT;
```

## Under the Hood

The database maintains a transaction log (WAL). Uncommitted changes stay in memory or temp; COMMIT flushes to WAL and marks visible. ROLLBACK discards uncommitted changes. Isolation is implemented via locking or MVCC.

## Common Mistakes

- Long-running transactions (hold locks, block others)
- Not handling deadlocks (retry with backoff)
- Assuming default isolation is Serializable
- Nesting transactions without savepoints

## Best Practices

- Keep transactions short
- Retry on deadlock (exponential backoff)
- Use appropriate isolation level (often Read Committed)
- Avoid holding transactions across external calls

## Summary

Transactions: atomic, consistent units. BEGIN/COMMIT/ROLLBACK. Keep short, retry deadlocks. Choose isolation level deliberately.
