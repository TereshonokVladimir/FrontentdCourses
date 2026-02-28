# Async Testing

## Concept

Async testing covers how to correctly test code that uses Promises, async/await, callbacks, or timers. Tests must wait for async operations to complete and handle timeouts. Incorrect async handling causes flaky tests that pass or fail randomly.

## Why It Matters

Backends are inherently async—database calls, HTTP requests, message queues. Tests that don't properly await async code can pass before the assertion runs or fail with timeouts. Proper async testing is foundational for reliable backend test suites.

## Key Concepts

- Always `return` or `await` promises in tests
- Use `async/await` in test functions
- Handle timeouts for slow operations
- Mock timers with `jest.useFakeTimers()` when testing delays
- Test both success and rejection paths

## Code Example

```typescript
// Correct: return the promise
it('fetches user', async () => {
  const user = await userService.findById('1')
  expect(user).toBeDefined()
})

// Correct: await expect().resolves
it('resolves with user', async () => {
  await expect(userService.findById('1')).resolves.toMatchObject({ id: '1' })
})

// Correct: test rejection
it('rejects when not found', async () => {
  await expect(userService.findById('invalid')).rejects.toThrow('Not found')
})

// Timers
it('retries after delay', async () => {
  jest.useFakeTimers()
  const p = fetchWithRetry()
  jest.advanceTimersByTime(1000)
  await expect(p).resolves.toBeDefined()
  jest.useRealTimers()
})
```

## Under the Hood

Jest detects returned Promises and waits for them. If you forget `return`/`await`, the test may finish before the promise resolves. Jest's default timeout is 5 seconds; async tests can exceed it. Fake timers replace `setTimeout`/`setInterval` with controllable advancement.

## Common Mistakes

- Forgetting `return` or `await` in async tests
- Not increasing timeout for slow integration tests
- Using `done()` incorrectly (prefer async/await)
- Not cleaning up fake timers (leaks to other tests)
- Testing async without asserting on the result

## Best Practices

- Use `async/await` consistently
- Return promises so Jest waits
- Use `jest.setTimeout()` for slow tests
- Clean up fake timers in `afterEach`
- Test both `resolves` and `rejects` for async functions

## Summary

Async tests must properly wait for Promises. Use `async/await`, return promises, and handle timeouts. For timers, use fake timers and clean up. Correct async handling eliminates a major source of flakiness.
