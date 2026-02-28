# Practice: Mock Repository

## Tasks

### Task 1
Create a mock for a `UserRepository` interface with `findById(id: string): Promise<User | null>`. Use `jest.fn()` to return a user for id "1" and null for "missing". Write a test that verifies the mock is called with the correct id.

### Task 2
Build a mock `OrderRepository` with `save(order: Order): Promise<Order>` and `findByUserId(userId: string): Promise<Order[]>`. Test a service that creates an order and fetches orders by user. Verify both methods are called with expected arguments.

### Task 3
Implement a mock that simulates `findById` throwing "Connection refused" on the first call and succeeding on the second. Use this to test retry logic in a service. Assert the service retries and eventually succeeds.

### Task 4
Create a spy on a real `Logger` instance. Test that a service logs "Order created" when creating an order and does not log when creation fails. Use `jest.spyOn` and verify call count and arguments.

### Task 5
Build a mock repository that tracks all calls (method name + args). Test a complex service flow (create → update → find) and assert the call sequence and arguments. Ensure the mock resets between tests.
