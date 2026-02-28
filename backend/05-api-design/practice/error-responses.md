# Practice: Error Responses

## Tasks

### Task 1
Create a standard error response format: `{ "error": { "code": "...", "message": "...", "traceId": "..." } }`. Implement a central error handler middleware that catches all errors and returns this format. Use appropriate status codes (400, 404, 500). Generate and attach `traceId` (UUID) to each request.

### Task 2
Add validation error details: for 400/422, include `details: [{ "field": "...", "message": "..." }]`. Integrate with a validation library (Zod, Joi). Return 422 for semantic validation failures (e.g., email format, age range). Never expose stack traces in production.

### Task 3
Implement error codes: `VALIDATION_ERROR`, `NOT_FOUND`, `UNAUTHORIZED`, `FORBIDDEN`, `RATE_LIMITED`, `INTERNAL_ERROR`. Map each to appropriate status code. Add `retryAfter` for rate limit errors (429). Include `documentationUrl` for client self-service.

### Task 4
Create custom error classes (ValidationError, NotFoundError, etc.) that extend a base ApiError. Each carries status code and error code. Central handler maps these to response format. Ensure async errors are caught (unhandled promise rejection). Log full error server-side; return sanitized version to client.

### Task 5
Add `X-Request-Id` and `X-Trace-Id` to all responses (success and error). Implement error aggregation: when multiple validation errors occur, return all in one response. Add i18n support for error messages (Accept-Language header). Write integration tests that verify error format, status codes, and that sensitive data is never leaked.
