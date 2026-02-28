# Caching Strategies

## Concept

Caching stores frequently accessed data in fast storage (memory, Redis) to avoid expensive recomputation or I/O. Different strategies—cache-aside, write-through, write-behind—trade consistency, complexity, and performance.

## Why It Matters

Caching can reduce latency by 10–100x and cut database load dramatically. Choosing the wrong strategy leads to stale data, cache stampedes, or unnecessary complexity. Production systems rely on caching for scalability.

## Key Concepts

- **Cache-aside**: App reads cache; on miss, fetches from DB and populates cache. Writes go to DB; cache is invalidated or updated.
- **Write-through**: Writes go to cache and DB together; reads always hit cache.
- **Write-behind**: Writes go to cache first; DB is updated asynchronously (higher risk, higher throughput).
- **TTL (Time-to-Live)**: Automatic expiration; balances freshness vs hit rate.
- **Cache invalidation**: Hard problem; event-driven or time-based strategies.

## Code Example

```javascript
// Cache-aside pattern
async function getUser(id) {
  const cached = await redis.get(`user:${id}`)
  if (cached) return JSON.parse(cached)
  const user = await db.query('SELECT * FROM users WHERE id = ?', [id])
  await redis.setex(`user:${id}`, 300, JSON.stringify(user)) // 5 min TTL
  return user
}
```

## Under the Hood

Caches exploit locality: a small subset of data is accessed most. LRU eviction keeps hot data. Distributed caches (Redis) add network latency but scale across instances. In-memory caches are fastest but not shared.

## Common Mistakes

- Caching everything (memory pressure, stale data)
- No invalidation strategy (stale reads)
- Thundering herd when cache expires (many requests hit DB at once)
- Caching non-idempotent or user-specific data incorrectly

## Best Practices

- Cache read-heavy, relatively static data
- Use TTL + event-driven invalidation for critical freshness
- Implement single-flight or locking to prevent stampedes
- Monitor hit rate; low hit rate may mean wrong keys or short TTL

## Summary

Caching reduces latency and load. Choose cache-aside for simplicity, write-through for strong consistency, and design invalidation carefully.
