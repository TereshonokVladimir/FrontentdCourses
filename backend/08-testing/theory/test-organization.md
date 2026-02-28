# Test Organization

## Concept

Test organization covers how tests are structured, named, and placed in the codebase. Good organization makes tests easy to find, run selectively, and maintain. Conventions vary by project but should be consistent and predictable.

## Why It Matters

Poor organization leads to slow test discovery, duplicated setup, and confusion about what each test file covers. Well-organized tests improve developer experience, CI efficiency, and long-term maintainability.

## Key Concepts

- Colocation: tests next to source vs separate `__tests__` or `test/` dir
- Naming: `*.test.ts`, `*.spec.ts`, or `__tests__/*.ts`
- Structure: mirror source layout or group by feature
- Shared setup: `setupFiles`, `beforeEach` in parent describe
- Test data: fixtures, factories, builders

## Code Example

```
src/
  services/
    user-service.ts
    user-service.test.ts      # colocated
  api/
    routes/
      users.ts
test/
  integration/
    users-api.test.ts
  fixtures/
    users.ts
  setup.ts
```

```typescript
// user-service.test.ts
describe('UserService', () => {
  describe('createUser', () => {
    it('creates user with valid email', () => {})
    it('throws when email exists', () => {})
  })
  describe('findById', () => {
    it('returns user when found', () => {})
    it('returns null when not found', () => {})
  })
})
```

## Under the Hood

Test runners discover tests by glob (e.g., `**/*.test.ts`). Jest groups by file, then by `describe`, then by `it`. Setup runs in order: global setup → file-level beforeAll → describe beforeAll → beforeEach → test. Understanding this order helps avoid flaky setup.

## Common Mistakes

- Tests scattered with no clear convention
- Giant test files (1000+ lines)
- Deep nesting of describes (hard to read)
- Shared mutable state across files
- Inconsistent naming (mix of .test and .spec)

## Best Practices

- Choose one convention and stick to it
- Colocate unit tests; separate integration/E2E
- One describe per module/class, nested for methods
- Use `test/` or `__tests__/` for integration
- Keep test files under ~200 lines; split if larger

## Summary

Organize tests consistently: colocate unit tests, separate integration/E2E, mirror source structure, and use clear naming. Good organization reduces friction and improves maintainability.
