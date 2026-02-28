# Database Testing

## Concept

Database testing verifies that data access logic works correctly with a real or near-real database. It includes schema migrations, queries, transactions, and constraints. Tests can use a real DB (PostgreSQL, MySQL) or an in-memory alternative (SQLite for SQL, in-memory Mongo).

## Why It Matters

Data bugs are costly—wrong queries, race conditions, constraint violations. Unit tests with mocks miss these. Database tests catch SQL errors, migration issues, and behavior that depends on real DB semantics (transactions, isolation).

## Key Concepts

- Use dedicated test database, never production
- Reset or truncate between tests for isolation
- Test migrations, CRUD, transactions, constraints
- Testcontainers for real DB in CI
- In-memory DB for speed when semantics match

## Code Example

```typescript
import { db } from '../db'

beforeAll(async () => {
  await db.migrate.latest()
})

afterEach(async () => {
  await db.raw('TRUNCATE users, orders CASCADE')
})

describe('UserRepository', () => {
  it('creates and finds user', async () => {
    const [user] = await db('users').insert({ email: 'test@x.com' }).returning('*')
    const found = await db('users').where({ id: user.id }).first()
    expect(found.email).toBe('test@x.com')
  })

  it('enforces unique email', async () => {
    await db('users').insert({ email: 'dup@x.com' })
    await expect(db('users').insert({ email: 'dup@x.com' })).rejects.toThrow()
  })
})
```

## Under the Hood

Test DB setup: create DB, run migrations, optionally seed. Each test runs in a transaction that rolls back, or tables are truncated. Testcontainers spins up a real PostgreSQL in Docker. In-memory SQLite is faster but may differ in edge cases (e.g., date functions).

## Common Mistakes

- Using production DB or shared dev DB
- Tests that depend on execution order
- No cleanup—leftover data breaks tests
- Assuming in-memory DB matches production exactly
- Slow setup (migrations on every run)

## Best Practices

- Isolate test DB; use env var for connection
- Truncate or transaction rollback between tests
- Use Testcontainers when you need real DB behavior
- Run migrations once per suite; truncate per test
- Document DB requirements in README

## Summary

Database testing uses a dedicated test DB to verify queries, migrations, and constraints. Ensure isolation between tests, use Testcontainers for real DB when needed, and never touch production. It catches data-layer bugs that mocks miss.
