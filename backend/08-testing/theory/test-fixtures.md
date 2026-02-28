# Test Fixtures

## Concept

Test fixtures are predefined data or setup used across tests. They provide consistent, reusable inputs—users, orders, API responses—so tests don't repeat setup logic. Fixtures can be static (JSON, constants) or dynamic (factories, builders).

## Why It Matters

Repeated setup clutters tests and increases maintenance. Changing a schema means updating dozens of tests. Fixtures centralize test data, make tests readable, and reduce duplication. Factories and builders allow variation while keeping a single source of truth.

## Key Concepts

- Static fixtures: JSON files, constants
- Factories: functions that generate data with overrides
- Builders: fluent API for constructing complex objects
- Fixtures for DB seeding, API mocks, file content
- Keep fixtures close to tests or in shared `fixtures/` dir

## Code Example

```typescript
// fixtures/users.ts
export const userFixture = {
  id: 'user-1',
  email: 'test@example.com',
  name: 'Test User',
  createdAt: '2024-01-01T00:00:00Z'
}

export function createUser(overrides: Partial<typeof userFixture> = {}) {
  return { ...userFixture, ...overrides }
}

// Builder pattern
export const userBuilder = {
  withEmail(email: string) {
    return { ...userFixture, email }
  },
  withId(id: string) {
    return { ...userFixture, id }
  }
}

// In test
it('creates user', async () => {
  const user = createUser({ email: 'unique@test.com' })
  await repo.save(user)
})
```

## Under the Hood

Fixtures are just data or functions. Factories use spread/merge to apply overrides. Builders chain method calls to produce variants. Some frameworks (e.g., Factory Bot in Ruby) provide DSLs; in TypeScript, plain functions and objects suffice.

## Common Mistakes

- Fixtures with hardcoded IDs that conflict across tests
- Shared mutable fixtures (modify in one test, affect others)
- Fixtures that don't match current schema
- Overly complex factories
- Fixtures in test files instead of shared module

## Best Practices

- Use factories with overrides for unique fields (email, ID)
- Prefer immutable fixtures; clone when modifying
- Keep fixtures in sync with schema/migrations
- Use builders for complex nested structures
- Document fixture purpose and constraints

## Summary

Test fixtures provide reusable test data. Use static fixtures for simple cases, factories for variation, and builders for complex objects. Keep them immutable and in sync with schema. Fixtures reduce duplication and improve test maintainability.
