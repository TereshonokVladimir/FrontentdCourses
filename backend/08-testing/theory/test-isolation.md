# Test Isolation

## Concept

Test isolation means each test runs independently—its result does not depend on other tests, and it does not affect them. Tests can run in any order, in parallel, or alone. Isolation is achieved through clean setup/teardown, no shared mutable state, and deterministic data.

## Why It Matters

Tests that depend on each other are brittle: reordering breaks them, parallelization fails, and debugging is hard. Isolated tests are reliable, fast (parallelizable), and easy to reason about. Isolation is a cornerstone of a maintainable test suite.

## Key Concepts

- No shared mutable state between tests
- Each test sets up its own data
- Teardown cleans everything (DB, files, mocks)
- Tests can run in any order
- Deterministic: same result every run

## Code Example

```typescript
describe('UserService', () => {
  let db: Database

  beforeEach(async () => {
    db = await createTestDb()
    await db.migrate()
  })

  afterEach(async () => {
    await db.raw('TRUNCATE users CASCADE')
    await db.destroy()
  })

  it('creates user', async () => {
    const user = await userService.create({ email: 'a@b.com' })
    expect(user.id).toBeDefined()
  })

  it('finds user by id', async () => {
    const created = await userService.create({ email: 'b@c.com' })
    const found = await userService.findById(created.id)
    expect(found?.email).toBe('b@c.com')
  })
})
```

## Under the Hood

Isolation requires: fresh DB state per test (truncate or transaction rollback), reset mocks (`jest.clearAllMocks()`), no module-level singletons with state, and unique test data (UUIDs, unique emails). Parallel workers run files in separate processes, so process-level state is isolated.

## Common Mistakes

- Sharing database state across tests
- Tests that depend on execution order
- Global variables or module-level caches
- Not resetting mocks between tests
- Using fixed IDs that collide

## Best Practices

- Use `beforeEach` for setup, `afterEach` for cleanup
- Truncate tables or use transaction rollback
- Generate unique data per test (faker, UUID)
- Reset mocks in `afterEach`
- Avoid `beforeAll` for mutable state

## Summary

Test isolation ensures each test is independent. Use beforeEach/afterEach for setup and cleanup, avoid shared state, and generate unique data. Isolated tests are reliable, parallelizable, and maintainable.
