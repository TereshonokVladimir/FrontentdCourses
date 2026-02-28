# Rate Limiting

## Concept

Rate limiting restricts how many requests a client can make in a time window. Prevents abuse, DoS, and ensures fair usage. Common algorithms: fixed window, sliding window, token bucket. Identify clients by IP, API key, or user ID.

## Why It Matters

Without rate limiting, a single client can overwhelm the server. APIs use it to protect resources and enforce quotas. Payment APIs require it for compliance. It's a first line of defense against abuse.

## Key Concepts

- Fixed window: count requests per time bucket (simple, can burst at boundaries)
- Sliding window: count over rolling period (smoother)
- Token bucket: refill rate, burst capacity
- 429 Too Many Requests with Retry-After header

## Code Example

```javascript
// Sliding window with Redis
const key = `ratelimit:${req.ip}:${req.path}`
const now = Date.now()
const windowMs = 60000
const max = 100

await redis.zremrangebyscore(key, 0, now - windowMs)
const count = await redis.zcard(key)
if (count >= max) {
  return res.status(429).set('Retry-After', 60).json({ error: 'Too many requests' })
}
await redis.zadd(key, now, `${now}-${Math.random()}`)
await redis.expire(key, windowMs / 1000)
```

## Under the Hood

Counters are stored per client key. Redis is common for distributed rate limiting. Each request increments or checks the count. Exceeding limit returns 429. Load balancers can also rate limit at the edge.

## Common Mistakes

- Rate limiting by IP only (easy to bypass with proxies)
- No Retry-After header (clients don't know when to retry)
- Too strict limits (blocking legitimate users)
- Single-node counters (don't work across instances)

## Best Practices

- Use Redis or similar for multi-instance consistency
- Different limits per endpoint (auth stricter than read)
- Return Retry-After
- Log rate limit hits for monitoring

## Summary

Rate limiting protects from abuse. Use sliding window or token bucket. Store counters in Redis for distributed systems. Return 429 with Retry-After.
