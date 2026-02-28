# Rate Limiting Performance

## Concept

Rate limiting restricts request volume per client to protect the system. The implementation must be fast—checking limits on every request—so it doesn't become a bottleneck. Storage choice and algorithm affect latency and accuracy.

## Why It Matters

Rate limiting runs in the hot path. A slow implementation adds latency to every request. At high RPS, the limiter must scale. Redis-based limiters are common; in-memory works for single-instance but doesn't share state across instances.

## Key Concepts

- **Fixed window**: Count in current window; simple but allows bursts at boundaries
- **Sliding window**: Smoother; more accurate, slightly more expensive
- **Token bucket**: Allows bursts up to bucket size; good for variable rate
- **Storage**: In-memory (fast, not shared) vs Redis (shared, network latency)
- **Lua scripts**: Atomic check-and-increment in Redis

## Code Example

```javascript
// Redis sliding window (simplified)
const key = `ratelimit:${clientId}`
const now = Date.now()
const window = 60000 // 1 min
await redis.zremrangebyscore(key, 0, now - window)
const count = await redis.zcard(key)
if (count >= 100) return res.status(429).json({ error: 'Too many requests' })
await redis.zadd(key, now, `${now}-${Math.random()}`)
await redis.expire(key, 60)
```

## Under the Hood

Fixed window: increment counter, compare to limit. Sliding: store timestamps, remove old, count remaining. Redis Lua scripts run atomically—check and increment in one round-trip. In-memory uses Map with cleanup.

## Common Mistakes

- Rate limiter as bottleneck (synchronous, slow storage)
- No shared state across instances (each instance has own limit)
- Blocking Redis calls in hot path
- Overly precise limits (sliding window log can be expensive)

## Best Practices

- Use Redis with Lua for distributed rate limiting
- Keep limit check to single round-trip when possible
- Consider approximate algorithms (e.g., sliding window log vs counter)
- Cache limit result briefly for very high RPS (trade accuracy for speed)

## Summary

Rate limiting must be fast. Use Redis + Lua for distributed, atomic checks. Choose algorithm based on accuracy vs cost. Avoid making the limiter the bottleneck.
