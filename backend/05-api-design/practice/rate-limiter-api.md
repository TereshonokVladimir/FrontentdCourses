# Practice: Rate Limiter API

## Tasks

### Task 1
Implement a simple in-memory rate limiter: 100 requests per minute per IP. Return 429 Too Many Requests when exceeded. Add `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` headers to all responses. Use fixed window counting.

### Task 2
Support rate limiting by API key (from `Authorization` or `X-API-Key` header). If API key present, limit by key; else by IP. Use different limits: 100/min for IP, 1000/min for API key. Store counters in memory with TTL.

### Task 3
Implement sliding window rate limiting using a sorted set or timestamp list. Compare behavior with fixed window (avoid boundary spike). Add `Retry-After` header to 429 responses (seconds until reset). Make window and limit configurable per route.

### Task 4
Move rate limiting to Redis for multi-instance deployment. Use Redis INCR with EXPIRE for fixed window, or Lua script for sliding window. Ensure atomic operations. Handle Redis unavailability gracefully (fail open or closed—configurable).

### Task 5
Implement tiered rate limits: free tier 100/min, pro 1000/min, enterprise 10000/min. Determine tier from API key metadata or user plan. Add `GET /api/rate-limit` endpoint that returns current usage and limits for the authenticated client. Add Prometheus metrics for rate limit hits. Write integration tests for single and distributed scenarios.
