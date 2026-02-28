# Practice: Rate Limit Auth

## Tasks

### Task 1
Add rate limiting to the login endpoint: allow 5 attempts per IP per 15 minutes. Use an in-memory store (Map) for a single instance. Return 429 with `Retry-After` header when the limit is exceeded. Reset the count on successful login.

### Task 2
Implement per-account rate limiting: in addition to IP limits, allow 5 failed attempts per email/username per 15 minutes. This prevents targeted brute force on a single account. Use a composite key (IP + account) or separate limits; apply the stricter of the two when both apply.

### Task 3
Use Redis for distributed rate limiting: store attempt counts in Redis with TTL. Use `INCR` and `EXPIRE` or a sliding window. Ensure the rate limiter works across multiple server instances. Add a `X-RateLimit-Remaining` header to successful responses.

### Task 4
Implement progressive delay: after each failed attempt, require an increasing wait before the next attempt (e.g., 1s, 2s, 4s, 8s). Store the last failure time per IP and account. Return 429 with `Retry-After` set to the remaining wait. This slows brute force while allowing legitimate users to retry.

### Task 5
Add CAPTCHA after 3 failed attempts: when the limit is reached, require the client to solve a CAPTCHA (e.g., hCaptcha, reCAPTCHA) before allowing further attempts. Store a temporary token after CAPTCHA success that allows one more login attempt. Integrate with your login flow and reset CAPTCHA requirement on successful login.