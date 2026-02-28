# Practice: E2E Tests

## Tasks

### Task 1
Set up E2E tests for the `UsersController`. Use `Test.createTestingModule({ imports: [AppModule] })` and override the database to use an in-memory SQLite or test DB. Create the app with `createNestApplication()`, apply `ValidationPipe`, and call `app.init()`. Write a test that `GET /users` returns 200 and an array. Use `supertest` with `request(app.getHttpServer())`.

### Task 2
Add E2E tests for `POST /users` with valid and invalid bodies. Valid: `{ email: 'test@test.com', name: 'Test' }` returns 201 and the created user. Invalid: `{ email: 'invalid' }` returns 400 with validation errors. Use `afterAll` to close the app. Reset the database between tests (e.g., truncate tables in `beforeEach`).

### Task 3
Test authenticated routes. Create a test user and obtain a JWT (or mock the guard). For `GET /users/:id` and `DELETE /users/:id`, test: 200/204 when authorized, 401 when no token, 403 when wrong user (for delete). Use a helper to create a valid token for tests.

### Task 4
Test the full flow: create user → get user → update user → delete user. Assert status codes and response shapes at each step. Test error cases: get non-existent user (404), delete already deleted (404). Use a single test or describe block to keep the flow clear.

### Task 5
Set up a dedicated E2E test configuration. Use a separate `.env.test` or `process.env` overrides for the test database. Implement a `TestDatabaseModule` that uses an in-memory DB or a dedicated test DB URL. Add a global setup/teardown that runs migrations before all tests and cleans up after. Ensure tests can run in parallel (isolated DB) or sequentially with proper cleanup. Add a script `test:e2e` to `package.json`. Achieve E2E coverage for all critical user flows: auth, CRUD, validation, and error handling.
