# Practice: OpenAPI Spec

## Tasks

### Task 1
Write an OpenAPI 3.0 spec for a "users" API. Define paths: `GET /users`, `POST /users`, `GET /users/{id}`, `PUT /users/{id}`, `DELETE /users/{id}`. Include request/response schemas for User (id, name, email, createdAt). Add basic info (title, version, description).

### Task 2
Add parameter definitions: query params for list (limit, offset, sort), path param for id. Define error responses: 400, 401, 404, 422, 500. Use `$ref` for reusable schemas in components/schemas. Add examples for request and response bodies.

### Task 3
Add security scheme: Bearer JWT. Apply to all endpoints. Add `security` at operation level. Document `Idempotency-Key` header for POST. Create a `CreateUserRequest` schema that omits server-generated fields (id, createdAt).

### Task 4
Generate API documentation from the spec using Swagger UI or Redoc. Serve the spec at `GET /openapi.json`. Add a validation script that checks the spec is valid OpenAPI 3.0. Ensure all paths have at least one response defined.

### Task 5
Implement contract testing: write tests that validate your actual API implementation matches the OpenAPI spec. For each path, verify response schema matches. Add CI step that fails if implementation diverges from spec. Consider generating route handlers from spec (or vice versa) to keep them in sync.
