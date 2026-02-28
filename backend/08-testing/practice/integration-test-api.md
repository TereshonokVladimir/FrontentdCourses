# Practice: Integration Test API

## Tasks

### Task 1
Set up an integration test for `GET /health` that hits a real Express app. Use supertest. Assert status 200 and response body `{ status: 'ok' }`. Ensure the app starts and stops cleanly.

### Task 2
Add integration tests for `POST /users` with a real test database. Test: 201 with user body when valid, 400 when email missing, 409 when email exists. Use `beforeEach` to truncate the users table. Verify data in DB after create.

### Task 3
Write integration tests for `GET /users/:id` with auth middleware. Test: 200 with user when authorized and found, 404 when not found, 401 when no token, 403 when token valid but user requests another user's data.

### Task 4
Integration test a `POST /orders` endpoint that creates an order and order items in a transaction. Test success and rollback on failure (e.g., invalid product id). Assert DB state before and after.

### Task 5
Build integration tests for a paginated `GET /products?page=1&limit=10` with filters `?category=electronics&minPrice=50`. Use a seeded test DB. Assert correct items, total count, and pagination metadata. Test edge cases: empty result, invalid page.
