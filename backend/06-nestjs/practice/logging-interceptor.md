# Practice: Logging Interceptor

## Tasks

### Task 1
Create a `LoggingInterceptor` that logs `METHOD URL - STATUS - DURATIONms` for each request. Use `tap()` to log after the response is sent. Measure duration with `Date.now()` before and after `next.handle()`. Apply it to a controller and verify logs for `GET` and `POST` requests.

### Task 2
Extend the interceptor to log the request body for `POST`, `PUT`, `PATCH` (excluding sensitive fields like `password`). Create a helper to redact keys: `['password', 'token', 'secret']`. Log in JSON format for easier parsing. Use `map()` to pass through the response unchanged.

### Task 3
Add request ID tracking. Generate a UUID for each request and attach it to `request.id`. Include it in the log and in the response header `X-Request-Id`. Use `map()` to add the header to the response. Ensure the same ID is used for the entire request lifecycle.

### Task 4
Create a `TimeoutInterceptor` that aborts the request after 30 seconds using RxJS `timeout()`. Throw `RequestTimeoutException` on timeout. Use `catchError()` to handle the timeout and return a proper error response. Apply it selectively to a slow endpoint.

### Task 5
Build a `ResponseTransformInterceptor` that wraps all successful responses in `{ success: true, data: T, meta: { timestamp, requestId } }`. Handle errors: ensure errors are not wrapped (keep the exception filter behavior). Support excluding certain routes (e.g., health check) via a custom `@NoTransform()` decorator. Use `Reflector` to check for the decorator. Combine with the logging interceptor and ensure proper ordering.
