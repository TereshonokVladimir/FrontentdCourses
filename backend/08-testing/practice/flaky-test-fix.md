# Practice: Flaky Test Fix

## Tasks

### Task 1
Identify a flaky test caused by a race condition: a test that asserts on data before an async operation completes. Fix it by properly awaiting the operation or using a `waitFor`-style helper. Ensure the test passes 20 times in a row.

### Task 2
Fix a flaky test caused by shared state: two tests use the same user ID or email. Make each test use unique data (UUID, timestamp in email). Verify tests can run in any order and in parallel.

### Task 3
A test fails intermittently because it depends on system time (e.g., "created today"). Use `jest.useFakeTimers()` or inject a clock. Fix the test to be deterministic. Clean up in `afterEach`.

### Task 4
A test calls an external API and fails when the network is slow or the API is down. Replace the real call with a mock. Add a test that simulates the API being slow (delayed mock) and assert the code handles it (timeout, retry).

### Task 5
Audit a test suite for flakiness: run it 10 times, record failures. For each flaky test, identify the cause (timing, shared state, external dependency, randomness). Fix all. Add a CI step that runs the suite 3 times and fails if any run fails. Document the fixes.
