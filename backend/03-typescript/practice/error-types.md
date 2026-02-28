# Practice: Error Types

## Tasks

### Task 1
Create a base `AppError` class extending Error with `code: string`, `statusCode: number`, `details?: unknown`. Create `NotFoundError`, `ValidationError`, `UnauthorizedError` extending it. Ensure `instanceof` works. Add a `toJSON()` method for API responses.

### Task 2
Implement a type `Result<T, E extends Error> = { ok: true; data: T } | { ok: false; error: E }`. Create `ok(data: T)` and `err(error: E)` helpers. Create `mapResult<T, U, E>(result: Result<T, E>, fn: (t: T) => U): Result<U, E>`.

### Task 3
Add `unwrapOrThrow<T, E>(result: Result<T, E>): T` that throws if not ok. Add `asyncResult<T, E>(promise: Promise<T>): Promise<Result<T, E>>` that catches and wraps errors. Create a global error handler that converts AppError to JSON response.

### Task 4
Implement error codes as a discriminated union: `type ErrorCode = 'NOT_FOUND' | 'VALIDATION' | 'UNAUTHORIZED'`. Create `createError(code: ErrorCode, message: string, details?: unknown): AppError`. Add a type-safe error handler map: `handleError(code: ErrorCode): (err: AppError) => Response`.

### Task 5
Build an error boundary: `withErrorBoundary<T>(fn: () => Promise<T>, handler: (e: unknown) => E): Promise<Result<T, E>>`. Ensure all errors are caught and typed. Add request context (requestId) to errors. Create a middleware that wraps route handlers with the boundary.