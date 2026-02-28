# Practice: Database Test Setup

## Tasks

### Task 1
Set up a test database connection using an env var `TEST_DATABASE_URL`. Create a `beforeAll` that runs migrations. Create an `afterEach` that truncates the `users` table. Write one integration test that inserts and reads a user.

### Task 2
Use a transaction-per-test pattern: wrap each test in a transaction and rollback in `afterEach`. This avoids truncation. Implement for a test that creates users and orders. Verify data is not persisted after the test.

### Task 3
Set up Testcontainers to spin up a real PostgreSQL (or MySQL) for integration tests. Start in `beforeAll`, stop in `afterAll`. Run migrations. Write a test that uses the real DB. Document Docker requirement.

### Task 4
Create a `testDb` helper that supports both "real DB" (Testcontainers) and "in-memory" (e.g., SQLite) modes via env var. Run the same integration tests against both. Compare speed and note any behavioral differences.

### Task 5
Implement a database seeding utility for tests: `seedUsers(5)`, `seedProducts(10)`, `seedOrders(users, products, 20)`. Support reset between tests. Use in integration tests. Ensure seeds are deterministic (fixed seed for random) for reproducible runs.
