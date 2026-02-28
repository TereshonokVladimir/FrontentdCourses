# Practice: API Test Suite

## Tasks

### Task 1
Write a test suite for `GET /users` and `GET /users/:id`. Cover: 200 with data, 404 for missing id, 401 without auth. Use supertest. Organize with describe blocks. Ensure tests are independent.

### Task 2
Add tests for `POST /users` and `PATCH /users/:id`. Cover: 201/200 on success, 400 for validation errors (missing email, invalid format), 409 for duplicate email. Assert response body shape and status codes.

### Task 3
Test `DELETE /users/:id`: 204 on success, 404 when not found, 403 when deleting another user (with auth). Verify the user is actually removed from the database. Use a test DB with cleanup.

### Task 4
Build tests for error responses: ensure all 4xx and 5xx return a consistent format `{ error: { code, message } }`. Test validation errors, not found, unauthorized, and server error. Assert status and body shape.

### Task 5
Create a comprehensive API test suite for a REST API with 5+ endpoints. Include auth, validation, and error paths. Organize by resource. Add a `test:api` script. Ensure full suite runs in under 30 seconds. Document how to run and extend.
