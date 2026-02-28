# Practice: API Tests

## Tasks

### Task 1
Write integration tests for CRUD endpoints using supertest or similar. Test: create returns 201 with body, get returns 200 with correct data, get invalid id returns 404, update returns 200, delete returns 204. Use in-memory store or test DB. Ensure tests are independent (clean state per test).

### Task 2
Add tests for error cases: 400 for invalid body, 422 for validation errors, 401 for missing/invalid auth. Test that error response matches expected format `{ error: { code, message, ... } }`. Test auth middleware: valid token proceeds, invalid returns 401, expired returns 401.

### Task 3
Implement contract tests: validate API responses against OpenAPI schema. For each endpoint, make request and assert response matches schema (status, body structure, required fields). Use openapi-validator or similar. Fail CI if implementation diverges from spec.

### Task 4
Add tests for pagination, filtering, sorting. Verify correct subset of data returned. Test edge cases: empty result, single page, last page, invalid page/limit. Test cursor pagination: nextCursor leads to correct next page. Test sort order and multi-column sort.

### Task 5
Build a test harness: shared setup (DB migrations, seed data), teardown, and helpers (createUser, createOrder). Add performance tests: measure p95 latency for critical endpoints under load. Add chaos tests: simulate 500 from dependency, verify circuit breaker or graceful degradation. Document test strategy and coverage goals. Achieve >80% coverage on API layer.
