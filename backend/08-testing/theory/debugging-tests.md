# Debugging Tests

## Concept

Debugging tests involves identifying why a test fails or behaves unexpectedly. Techniques include reading failure messages, adding logging, running tests in isolation, using the debugger, and reducing the failing case. Effective debugging saves time and improves test quality.

## Why It Matters

Tests fail for many reasons: wrong assertion, flakiness, environment mismatch, or an actual bug. Quickly pinpointing the cause—and fixing it—keeps the suite trustworthy. Good debugging habits also improve the tests themselves (clearer assertions, better isolation).

## Key Concepts

- Read the failure message first (expected vs actual)
- Run single test: `jest -t "test name"` or `it.only`
- Use `console.log` or debugger for inspection
- Isolate: reduce to minimal failing case
- Check for async issues, shared state, order dependence

## Code Example

```typescript
// Run single test
// jest user-service.test.ts -t "returns 404"

// Focused test during debug
it.only('returns 404 when user not found', async () => {
  const result = await service.findById('missing')
  console.log('result', result) // Inspect
  expect(result).toBeNull()
})

// Better assertion message
expect(result, `Expected null for missing id, got ${JSON.stringify(result)}`).toBeNull()
```

## Under the Hood

Jest prints the assertion failure with expected/actual. `-t` filters tests by name. `it.only` runs only that test (and its describe). Node debugger (`node --inspect`) or VS Code debug configuration attaches to the test process. Reducing the test (fewer steps, simpler data) narrows the cause.

## Common Mistakes

- Not reading the full error message
- Debugging with `it.only` and committing it
- Adding random `console.log` without removing
- Assuming the test is right (maybe the assertion is wrong)
- Not checking for async/await issues

## Best Practices

- Start with the failure output; it often has the answer
- Use `it.only` temporarily; never commit
- Add custom messages to assertions when helpful
- Use debugger for complex flows
- Simplify: minimal data, minimal steps
- Verify fix by running full suite after

## Summary

Debugging tests: read the failure, run in isolation, add logging or use debugger, and reduce to minimal case. Fix the root cause—whether in production code or the test. Remove `it.only` and debug logs before committing. Effective debugging keeps the suite reliable.
