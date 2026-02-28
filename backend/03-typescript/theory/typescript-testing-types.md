# TypeScript Testing Types

## Concept

Testing in TypeScript benefits from typed mocks, fixtures, and assertions. Jest/Vitest have type definitions. Mock functions are typed. Fixtures can be typed for reuse. Assertions can narrow types.

## Why It Matters

Typed tests catch mock shape mismatches. Fixtures ensure test data is valid. Assertion helpers can act as type guards. Reduces test maintenance and bugs.

## Key Concepts

- `jest.fn()` or `vi.fn()` – typed mock
- `Mock<T>` or `jest.Mocked<T>` – mock type
- Typed fixtures: `const user: User = { ... }`
- Custom matchers with type narrowing
- `expect.assertions(n)` for async

## Code Example

```typescript
const mockRepo: jest.Mocked<UserRepository> = {
  findById: jest.fn(),
  save: jest.fn()
}

mockRepo.findById.mockResolvedValue({ id: '1', name: 'Test' })

const user: User = {
  id: '1',
  name: 'Test',
  email: 'test@example.com'
}

expect(mockRepo.save).toHaveBeenCalledWith(
  expect.objectContaining({ name: 'Test' })
)
```

## Under the Hood

Jest types provide Mock, Mocked. mockResolvedValue infers from mock. expect.objectContaining is loosely typed. Custom matchers can narrow via assertion.

## Common Mistakes

- Untyped mocks (any)
- Fixtures that don't match type
- Forgetting to type mock return values
- Over-mocking (integration tests)

## Best Practices

- Type mocks with Mocked<T>
- Use factories for fixtures
- Type assertion helpers
- Prefer integration tests when possible

## Summary

Testing types: Mocked, typed fixtures, assertion helpers. Type mocks; use typed fixtures.