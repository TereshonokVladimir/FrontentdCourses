# Unit Testing

## Concept

Unit testing is the practice of testing individual units of code (functions, methods, classes) in isolation from the rest of the system. Each unit test verifies that a small, well-defined piece of logic produces the expected output for given inputs.

## Why It Matters

Unit tests catch bugs early, document behavior, enable refactoring with confidence, and run fast—often in milliseconds. In production backends, they form the foundation of the test pyramid, catching logic errors before they reach integration or E2E layers.

## Key Concepts

- One unit = one function, method, or class in isolation
- Dependencies are mocked or stubbed to isolate the unit
- Tests should be deterministic (same input → same output)
- Fast execution enables running on every commit
- High coverage of edge cases and business logic

## Code Example

```typescript
// user-service.ts
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function formatUserName(first: string, last: string): string {
  return `${last}, ${first}`.trim()
}

// user-service.test.ts
import { validateEmail, formatUserName } from './user-service'

describe('validateEmail', () => {
  it('returns true for valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true)
  })
  it('returns false for invalid email', () => {
    expect(validateEmail('invalid')).toBe(false)
  })
})

describe('formatUserName', () => {
  it('formats as last, first', () => {
    expect(formatUserName('John', 'Doe')).toBe('Doe, John')
  })
})
```

## Under the Hood

Unit tests run in the same process as the test runner. No network, no database, no file system—just in-memory execution. Jest, Vitest, and similar runners use Node's VM or direct execution to run each test file in isolation, collecting results and reporting pass/fail.

## Common Mistakes

- Testing implementation details instead of behavior
- Writing tests that depend on execution order
- Over-mocking, making tests brittle and coupled to structure
- Testing framework code or third-party libraries
- Slow unit tests due to real I/O or heavy setup

## Best Practices

- Test behavior, not implementation
- One logical assertion per test (multiple expects for one concept is fine)
- Use descriptive test names: `it('returns 400 when email is missing')`
- Keep tests independent and order-agnostic
- Aim for fast feedback: < 5 seconds for full unit suite

## Summary

Unit tests verify small units of code in isolation with mocked dependencies. They run fast, catch logic bugs early, and enable safe refactoring. Focus on behavior, keep tests independent, and avoid real I/O.
