# Flaky Tests

## Concept

Flaky tests intermittently pass or fail without code changes. They erode trust in the test suite and waste time. Common causes include timing, shared state, non-determinism, external dependencies, and resource contention. Fixing flakiness is essential for a reliable CI pipeline.

## Why It Matters

Flaky tests cause false alarms, ignored failures, and developer frustration. In CI, they block merges or get retried blindly. Identifying and fixing root causes—rather than adding retries—improves suite reliability and team velocity.

## Key Concepts

- Flakiness = non-deterministic outcome
- Causes: async timing, shared state, random data, external services
- Debug: isolate, reproduce, fix root cause
- Retries mask the problem; use sparingly
- Quarantine flaky tests until fixed

## Code Example

```typescript
// Flaky: race condition
it('updates cache', async () => {
  await service.fetchAndCache('key')
  expect(cache.get('key')).toBeDefined() // May run before cache is set
})

// Fixed: wait for completion
it('updates cache', async () => {
  await service.fetchAndCache('key')
  await waitFor(() => cache.has('key'))
  expect(cache.get('key')).toBeDefined()
})

// Flaky: shared state
let sharedUser
beforeEach(() => {
  sharedUser = createUser() // Same reference, modified by tests
})

// Fixed: fresh data per test
beforeEach(() => {
  const user = createUser({ email: `test-${Date.now()}@x.com` })
  // ...
})
```

## Under the Hood

Flakiness often stems from event loop timing—assertions run before async work completes. Shared state (DB, global vars) causes order-dependent failures. External services add network variability. Fix by: explicit waiting, isolation, mocking externals, and deterministic data.

## Common Mistakes

- Adding retries instead of fixing the cause
- Using `setTimeout` for arbitrary waits
- Ignoring flaky tests ("it usually passes")
- Shared DB/Redis between parallel tests
- Tests that depend on system time

## Best Practices

- Reproduce locally; add logging to understand order
- Use `waitFor` or polling instead of fixed delays
- Ensure full isolation (DB, mocks, files)
- Mock time with `jest.useFakeTimers()`
- Quarantine with `it.skip` or `describe.skip` until fixed

## Summary

Flaky tests fail intermittently due to timing, shared state, or non-determinism. Fix root causes: proper async handling, isolation, and deterministic data. Avoid retries as a default; quarantine if needed. Reliable tests are critical for CI confidence.
