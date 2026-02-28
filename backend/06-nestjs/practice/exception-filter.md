# Practice: Exception Filter

## Tasks

### Task 1
Create an `HttpExceptionFilter` that catches `HttpException` and returns a consistent JSON format: `{ statusCode, message, timestamp, path }`. Use `status` from the exception and `message` from the response. Apply it globally and verify it works for `NotFoundException` and `BadRequestException`.

### Task 2
Extend the filter to handle `ValidationPipe` errors. When the exception response has an array of validation errors, format them as `{ statusCode: 400, message: 'Validation failed', errors: [{ field, constraints }] }`. Use `exception.getResponse()` to inspect the structure.

### Task 3
Create an `AllExceptionsFilter` that catches any unknown exception. For `HttpException`, use the existing logic. For other errors (e.g., `TypeError`), log the full error and return `{ statusCode: 500, message: 'Internal server error' }` without exposing stack traces. In development, optionally include `stack` in the response.

### Task 4
Add request ID to error responses. If `request.id` exists (from a logging interceptor), include it in the error JSON. Create a custom `BusinessException` that extends `HttpException` and carries a `code` (e.g., `INSUFFICIENT_BALANCE`). The filter should include `code` in the response when present.

### Task 5
Implement error reporting: when an unhandled (non-HTTP) exception occurs, call an `ErrorReportService` that simulates sending the error to a service (e.g., log "Reporting to Sentry: ..."). Use `ArgumentsHost` to get request details (method, url, headers) for context. Ensure the filter is async-safe and doesn't block the response. Add a `@Catch(EntityNotFoundError)` for TypeORM "not found" and map it to 404 with a clean message.
