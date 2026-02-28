# Practice: E2E Flow

## Tasks

### Task 1
Write an E2E test for a simple flow: `POST /auth/login` with valid credentials returns 200 and a JWT. Store the token and use it in a subsequent `GET /me` request. Assert both succeed.

### Task 2
Create an E2E test for user registration: `POST /auth/signup` → `POST /auth/login` → `GET /me`. Use unique email per run (e.g., `test-${Date.now()}@example.com`). Assert the full flow completes and returns expected data.

### Task 3
E2E test a "create product" flow: login as admin → `POST /products` → `GET /products/:id` to verify. Handle admin token setup. Assert product appears with correct fields.

### Task 4
Build an E2E test for checkout: login → add item to cart → apply discount code → complete checkout. Assert order is created, cart is cleared, and order total is correct. Use idempotent test data.

### Task 5
E2E test a multi-user scenario: User A creates a resource, User B attempts to access it (should get 403). User A shares with User B, User B can now access. Assert permission changes. Clean up created resources in `afterEach`.
