# Practice: Unit Test Service

## Tasks

### Task 1
Write unit tests for a `validateEmail(email: string): boolean` function that returns true for valid emails (e.g., `user@domain.com`) and false for invalid ones. Cover at least 3 valid and 3 invalid cases.

### Task 2
Create a `formatCurrency(amount: number, currency: string): string` function and unit tests. Support USD and EUR. Test zero, negative (throw), and decimal rounding. Ensure tests pass for edge cases.

### Task 3
Implement and unit test a `parsePaginationParams(query: Record<string, string>): { page: number; limit: number }` function. Default page=1, limit=20. Validate: page and limit must be positive integers; throw for invalid input.

### Task 4
Build a `UserService` with `createUser(data: CreateUserInput): Promise<User>`. Mock the repository. Test: successful creation returns user with id, invalid email throws, duplicate email throws with specific error message.

### Task 5
Unit test an `OrderService.calculateTotal(items: Item[], discountCode?: string)` that applies business rules: 10% discount for "SAVE10", free shipping over 100, tax calculation. Mock discount lookup. Cover all rule combinations and invalid discount code.
