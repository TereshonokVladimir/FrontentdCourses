# Caching Introduction

## Concept

Caching stores copies of data in fast storage (memory, Redis) to avoid expensive recomputation or I/O. Cache hits return stored data; cache misses fetch, store, and return. TTL (time-to-live) controls freshness. Invalidation is hard—know when to invalidate.

## Why It Matters

Databases and external APIs are slow compared to memory. Caching reduces latency and load. Most high-traffic backends use caching. But stale cache causes bugs; invalidation is a classic hard problem.

## Key Concepts

- Cache-aside: app checks cache, loads from DB on miss, populates cache
- Write-through: write to cache and DB together
- TTL: expire after time
- Invalidation: delete on update
- Cache key design: include all factors that affect the result

## Code Example

```javascript
// Cache-aside pattern
async function getUser(id) {
  const cacheKey = `user:${id}`
  const cached = await redis.get(cacheKey)
  if (cached) return JSON.parse(cached)

  const user = await db.users.findById(id)
  await redis.setex(cacheKey, 300, JSON.stringify(user))  // 5 min TTL
  return user
}

// Invalidate on update
async function updateUser(id, data) {
  await db.users.update(id, data)
  await redis.del(`user:${id}`)
}
```

## Under the Hood

Redis stores key-value in memory. Get is O(1). Setex sets with TTL; key expires automatically. Cache-aside puts logic in application. CDNs cache at edge; HTTP Cache-Control headers control browser caching.

## Common Mistakes

- Caching without invalidation (stale forever)
- Cache key collisions (different queries same key)
- Caching user-specific data with shared key
- No TTL (memory leak, stale data)

## Best Practices

- Always set TTL as safety
- Invalidate on write
- Use consistent key scheme
- Monitor hit rate

## Summary

Caching reduces latency and load. Cache-aside: check cache, load on miss, populate. Invalidate on updates. Use TTL.
