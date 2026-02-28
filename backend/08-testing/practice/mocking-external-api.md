# Practice: Mocking External API

## Tasks

### Task 1
Mock `fetch` (or `axios`) in a test for a function that calls `https://api.example.com/users`. Use `jest.mock` or `jest.spyOn`. Return a fake response. Assert the function returns the expected data and that the mock was called with the correct URL.

### Task 2
Create a mock that simulates an external API being slow (2 second delay) and one that returns 500. Test that your code handles both: retries on 500, times out on slow response. Use fake timers if needed.

### Task 3
Use `nock` (or similar) to mock HTTP requests by URL and method. Test a service that calls multiple endpoints (e.g., get user, get orders). Set up nock for each call. Verify the service makes the expected requests and handles responses correctly.

### Task 4
Build a reusable mock for a payment gateway API. Support: success, card declined, insufficient funds, network error. Use it in tests for a checkout flow. Assert the correct behavior for each case (order created, order failed, retry suggested).

### Task 5
Implement a "contract mock" for an external API: the mock is generated from an OpenAPI spec or a shared TypeScript interface. Ensure the mock's responses match the contract. Use it in consumer tests. Document how to update the mock when the real API changes.
