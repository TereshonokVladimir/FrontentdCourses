# Migrations

## Concept

Migrations are versioned, incremental schema changes applied in order. Each migration file defines up (apply) and down (rollback). Tools like Flyway, Liquibase, or framework-specific (Prisma, TypeORM) track applied migrations and run new ones. Schema evolves without manual SQL.

## Why It Matters

Manual schema changes are error-prone and not reproducible. Migrations provide a history of changes, enable rollbacks, and work across environments. CI/CD runs migrations before deployment. Team members stay in sync.

## Key Concepts

- Migration file: timestamp or version + description
- Up: apply change (CREATE, ALTER, ADD)
- Down: revert change (DROP, ALTER to remove)
- Migration table: tracks applied migrations (e.g., schema_migrations)
- Idempotency: safe to run multiple times (IF NOT EXISTS)
- Zero-downtime: backward-compatible changes first

## Code Example

```sql
-- 001_create_users.up.sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 001_create_users.down.sql
DROP TABLE IF EXISTS users;

-- 002_add_users_status.up.sql (zero-downtime: add nullable first)
ALTER TABLE users ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'active';
-- Later: backfill, add NOT NULL, add constraint
```

## Under the Hood

Migration runner connects to DB, reads migration table, compares with files, runs new migrations in order. Each migration runs in a transaction (if supported). Down migrations reverse the up.

## Common Mistakes

- Editing applied migrations (breaks history)
- Not testing down migrations
- Breaking changes without multi-step strategy
- Running migrations from multiple processes (race)

## Best Practices

- Never modify applied migrations; add new ones
- Make migrations reversible (down) when possible
- Zero-downtime: add column nullable → backfill → add constraint
- Run migrations in CI before deploy; single process in production

## Summary

Migrations: versioned schema changes, up/down. Never edit applied. Zero-downtime strategy. Run in CI, single runner in prod.
