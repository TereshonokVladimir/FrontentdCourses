# Constraints

## Concept

Constraints enforce data integrity at the database level. Types: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK. The database rejects invalid data regardless of application bugs. Constraints are declarative and documented in the schema.

## Why It Matters

Application-level validation can be bypassed (direct DB access, bugs, race conditions). Database constraints are the last line of defense. They prevent invalid states and document invariants. Missing constraints lead to data corruption.

## Key Concepts

- NOT NULL: column cannot be null
- UNIQUE: no duplicate values (single or composite)
- PRIMARY KEY: unique + not null, one per table
- FOREIGN KEY: references parent table's PK or unique
- CHECK: boolean expression (e.g., balance >= 0)
- DEFAULT: value when not specified

## Code Example

```sql
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  balance DECIMAL(10,2) NOT NULL DEFAULT 0 CHECK (balance >= 0),
  currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  UNIQUE(user_id, currency)
);

-- Add constraint to existing table
ALTER TABLE orders ADD CONSTRAINT valid_status
  CHECK (status IN ('pending', 'paid', 'shipped', 'cancelled'));
```

## Under the Hood

Constraints are checked on INSERT and UPDATE. Foreign keys use triggers or checks. CHECK runs for each row. Violations abort the statement and roll back the transaction.

## Common Mistakes

- Relying only on application validation
- CHECK with side effects or non-deterministic expressions
- Missing FK constraints (orphaned rows)
- Overly strict constraints blocking valid migrations

## Best Practices

- Enforce invariants at DB level
- Use CHECK for domain rules (status, ranges)
- Always define foreign keys
- Add constraints in migrations; use NOT VALID for large tables (validate separately)

## Summary

Constraints: NOT NULL, UNIQUE, PK, FK, CHECK. Enforce at DB. Document invariants. Use NOT VALID for large backfills.
