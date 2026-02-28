# Practice: Async Handlers

## Tasks

### Task 1
Write tests for an async function `fetchUser(id: string): Promise<User>` that returns a user or throws "Not found". Test both success and rejection. Use `async/await` and `expect().rejects`. Ensure tests properly wait.

### Task 2
Test a function that uses `setTimeout` to delay: `delayedGreeting(name: string, ms: number): Promise<string>`. Use `jest.useFakeTimers()`. Assert the promise resolves with the correct value after advancing time. Clean up timers in `afterEach`.

### Task 3
Test a retry function `fetchWithRetry(url: string, maxRetries: number)` that retries on failure. Mock `fetch` to fail twice then succeed. Assert it eventually succeeds and `fetch` was called 3 times. Use fake timers if retries have delay.

### Task 4
Write tests for an Express async route handler that calls a service. Test: 200 with data on success, 500 with error message on service throw. Use supertest. Ensure unhandled promise rejections don't leak. Test that the handler passes errors to the error middleware.

### Task 5
Test a queue processor that processes items asynchronously. Mock the queue. Assert: items are processed in order, failed items are retried (or dead-lettered), and `processAll()` resolves when queue is empty. Handle race conditions and ensure tests are deterministic.
