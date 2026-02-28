# Practice: Test Fixtures

## Tasks

### Task 1
Create a `fixtures/users.ts` with a `userFixture` object (id, email, name, createdAt) and a `createUser(overrides?)` factory. Use it in 3 tests with different overrides. Ensure each test gets unique data where needed.

### Task 2
Build a `orderFixture` and `createOrder(overrides?)` that includes nested `items`. Add a `createOrderWithItems(itemCount: number)` helper. Test a service that processes orders with 0, 1, and 5 items.

### Task 3
Implement a builder for `Product`: `productBuilder.withName('X').withPrice(10).withCategory('Y').build()`. Support chaining. Use it to create products for tests. Add a `buildMany(n)` that returns an array of n products with unique ids.

### Task 4
Create fixtures for API request/response shapes. `validCreateUserRequest`, `invalidCreateUserRequest` (missing fields), `userResponse`. Use them in API tests. Ensure fixtures match the actual schema (consider Zod or TypeScript types).

### Task 5
Build a fixture system that seeds a test database with a configurable set of entities (users, products, orders). Support `seed({ users: 5, products: 10 })` and `reset()`. Use in integration tests. Ensure idempotency (same seed = same data).
