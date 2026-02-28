# Practice: Test Utilities

## Tasks

### Task 1
Create a `test-utils/waitFor.ts` that polls a condition until it's true or timeout. Use it in a test that waits for an async side effect (e.g., cache populated). Assert the condition eventually becomes true.

### Task 2
Build a `createTestApp()` helper that returns an Express app configured for testing (e.g., no rate limiting, test DB). Use it in multiple integration tests. Ensure each test gets a fresh app or shared app with clean state.

### Task 3
Implement a `withDbTransaction(testFn)` that wraps a test in a DB transaction and rolls back after. Use it so integration tests don't need manual truncation. Support both sync and async test functions.

### Task 4
Create a `mockLogger()` that captures log calls (level, message, meta). Use it to assert that specific events are logged (e.g., "Order created", "Payment failed"). Provide a `getLogs()` and `clearLogs()` for test isolation.

### Task 5
Build a test utility that generates unique test data: `uniqueEmail()`, `uniqueId()`, `uniqueUser(overrides?)`. Integrate with a factory. Use in 10+ tests. Ensure no collisions when tests run in parallel. Add a `reset()` for reproducibility (e.g., fixed seed).
