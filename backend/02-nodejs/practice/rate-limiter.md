# Practice: Rate Limiter

## Tasks

### Task 1
Implement an in-memory rate limiter: `limit(key, maxRequests, windowMs)`. Return `{ allowed: boolean, remaining: number }`. Use a simple structure: for each key, track request count and window start. Reset when window expires. Window is sliding or fixed (start with fixed).

### Task 2
Implement fixed-window rate limiting. Window is `[start, start + windowMs)`. When a request comes in, if current time is past the window, reset the window. Return `remaining` as `maxRequests - count` (minimum 0).

### Task 3
Implement sliding-window rate limiting. Track timestamps of requests. When checking, remove timestamps older than `windowMs` from now, then count. If count < maxRequests, allow and add current timestamp. Return remaining and optionally `retryAfter` (seconds until a slot is free).

### Task 4
Create a middleware that uses the rate limiter. Extract key from `req.ip` or `req.headers['x-forwarded-for']` or a custom `keyExtractor(req)`. Set headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After` (if limited). Return 429 when limited.

### Task 5
Support multiple rate limit tiers: e.g., 100/min for anonymous, 1000/min for authenticated (key includes userId). Allow configuration via a function `getLimit(key) => { maxRequests, windowMs }`. Add a `reset(key)` method for testing. Ensure the limiter is safe for concurrent access (single-threaded Node is fine, but document assumptions).