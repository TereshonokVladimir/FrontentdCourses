# Redis Basics

## Concept

Redis is an in-memory key-value store with optional persistence. It supports strings, hashes, lists, sets, sorted sets, and streams. Use cases: caching, sessions, rate limiting, pub/sub, job queues. Single-threaded, sub-millisecond latency.

## Why It Matters

Redis dramatically reduces database load for hot data. Session storage, API response caching, and rate limiters are common. It's a standard component in production backends. Misconfiguration (no persistence, wrong eviction) can cause data loss or memory issues.

## Key Concepts

- Data structures: STRING, HASH, LIST, SET, ZSET, STREAM
- TTL: EXPIRE, EXPIREAT for automatic eviction
- Persistence: RDB snapshots, AOF append-only log
- Eviction: maxmemory-policy (LRU, LFU, noeviction)
- Pub/Sub: publish/subscribe messaging
- Transactions: MULTI/EXEC (not ACID; batches commands)

## Code Example

```javascript
// Cache with TTL
await redis.set('user:123', JSON.stringify(user), 'EX', 3600)
const user = await redis.get('user:123')

// Rate limiting
const key = `ratelimit:${userId}:${minute}`
const count = await redis.incr(key)
if (count === 1) await redis.expire(key, 60)
if (count > 100) throw new Error('Rate limited')

// Hash for object
await redis.hset('user:123', { name: 'Alice', email: 'alice@example.com' })
```

## Under the Hood

Redis runs single-threaded for command execution. Data lives in RAM. RDB forks process to snapshot; AOF appends each write. Replication is async. Cluster shards by hash slot.

## Common Mistakes

- Using Redis as primary data store (volatile)
- No maxmemory or eviction policy (OOM)
- Blocking commands in hot path (KEYS, SMEMBERS on large sets)
- No connection pooling (connection exhaustion)

## Best Practices

- Use for cache/session; persist critical data elsewhere
- Set maxmemory and eviction policy
- Prefer SCAN over KEYS for iteration
- Use connection pool; consider Redis Cluster for scale

## Summary

Redis: in-memory, strings/hashes/lists/sets. Cache, sessions, rate limiting. TTL, eviction, persistence. Not primary store.
