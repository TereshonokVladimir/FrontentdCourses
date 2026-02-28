# Stored Procedures

## Concept

Stored procedures are functions stored in the database, written in SQL or procedural extensions (PL/pgSQL, PL/SQL). They encapsulate business logic, run close to data, and reduce round-trips. They can be called from applications with parameters.

## Why It Matters

Stored procedures centralize logic, enforce consistency, and can improve performance by reducing network round-trips. They're common in legacy systems and for complex multi-step operations. Trade-off: logic in DB vs application, harder to test and version.

## Key Concepts

- CREATE PROCEDURE / CREATE FUNCTION
- Parameters: IN, OUT, INOUT
- Control flow: IF, LOOP, WHILE
- Cursors: iterate over query results
- Triggers: call procedures on INSERT/UPDATE/DELETE
- PL/pgSQL: PostgreSQL's procedural language

## Code Example

```sql
CREATE OR REPLACE FUNCTION transfer_funds(
  from_account INT,
  to_account INT,
  amount DECIMAL
) RETURNS VOID AS $$
BEGIN
  IF amount <= 0 THEN
    RAISE EXCEPTION 'Amount must be positive';
  END IF;
  UPDATE accounts SET balance = balance - amount WHERE id = from_account;
  IF NOT FOUND THEN RAISE EXCEPTION 'Source account not found'; END IF;
  UPDATE accounts SET balance = balance + amount WHERE id = to_account;
  IF NOT FOUND THEN
    ROLLBACK;
    RAISE EXCEPTION 'Target account not found';
  END IF;
END;
$$ LANGUAGE plpgsql;
```

## Under the Hood

Procedures are parsed and stored in the database. Execution happens in the DB process. Parameters are passed by value. Transactions apply; procedure runs in caller's transaction unless it starts its own.

## Common Mistakes

- Business logic only in DB (hard to test, version, deploy)
- No error handling (partial failures)
- Overuse for simple CRUD (ORM is simpler)
- Debugging difficulty (no standard tooling)

## Best Practices

- Use for multi-statement atomic operations
- Keep logic minimal; prefer application code when possible
- Add error handling and validation
- Version procedures with migrations

## Summary

Stored procedures: logic in DB, reduce round-trips. Use for atomic multi-step ops. Trade-off: DB vs app logic. Version with migrations.
