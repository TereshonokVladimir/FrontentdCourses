# Rate Limiting

## Concept

Rate limiting restricts how many requests a client can make in a time window. It protects servers from abuse, ensures fair usage, and prevents a single client from degrading service for others. Limits can be per-IP, per-user, or per-API-key.

## Why It Matters

Without rate limiting, one client can overwhelm your API (intentionally or via buggy code). Rate limiting is essential for public APIs, protects against DoS, and enables tiered pricing (different limits per plan).

## Key Concepts

- **Fixed window**: Count requests in fixed intervals (e.g., per minute)
- **Sliding window**: Rolling time window; smoother, more accurate
- **Token bucket**: Allow bursts up to bucket size; refill at steady rate
- **Per-identifier**: Limit by IP, user ID, or API key
- **Response**: 429 Too Many Requests, Retry-After header

## Code Example

```javascript
// Fixed window: 100 req/min per API key
// Sliding window: more accurate, avoids boundary spikes

// Response headers
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000  // Unix timestamp

// 429 response
HTTP/1.1 429 Too Many Requests
Retry-After: 60
Content-Type: application/json

{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Retry after 60 seconds."
  }
}
```

## Under the Hood

Counters are stored in Redis or similar for distributed systems. Each request increments counter; if over limit, reject. Sliding window requires storing timestamps or using a weighted average. Token bucket tracks tokens; refill at interval. Choose storage that supports atomic increment and TTL.

## Common Mistakes

- No rate limiting on public endpoints
- Using in-memory counters (fails with multiple instances)
- Not returning Retry-After (clients can't back off properly)
- Same limit for all users (no differentiation)
- Too strict limits (blocks legitimate use)

## Best Practices

- Use distributed storage (Redis) for multi-instance
- Return rate limit headers on every response
- Use sliding window or token bucket for fairness
- Differentiate limits by plan or user type
- Log rate limit hits for monitoring

## Summary

Rate limiting protects APIs from abuse. Use distributed storage for multi-instance deployments. Return 429 with Retry-After. Expose limit headers so clients can throttle proactively.
