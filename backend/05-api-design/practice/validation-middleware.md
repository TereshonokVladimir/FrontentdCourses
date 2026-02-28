# Practice: Validation Middleware

## Tasks

### Task 1
Create a validation middleware that validates request body against a schema (Zod or Joi). On validation failure, return 400 with `{ "error": { "code": "VALIDATION_ERROR", "details": [...] } }`. Support attaching schema per route. Use for POST/PUT/PATCH endpoints.

### Task 2
Extend validation to query parameters and path parameters. Validate types (number, string, enum), ranges (min, max), and formats (email, UUID). Return field-level error messages. Support optional vs required params based on schema.

### Task 3
Add sanitization: trim strings, coerce types (string "123" to number). Reject unknown fields or strip them (configurable). Implement custom validators (e.g., `password` strength, `date` in future). Chain validation with error handler.

### Task 4
Create a schema registry: define schemas once, reuse for validation and OpenAPI spec generation. Ensure single source of truth. Support conditional validation (e.g., if type=X, require field Y). Add async validators (e.g., check username uniqueness).

### Task 5
Implement request size limits and validate Content-Type before parsing. Reject requests with invalid JSON (malformed) with clear error. Add rate limiting integration: validate before expensive validation. Support partial validation (fail fast on first error vs collect all errors). Write tests for edge cases: empty body, null, extra fields, type coercion.
