# Practice: Redis Cache

## Tasks

### Task 1
Set up Redis client (ioredis or node-redis). Implement `cacheGet(key)` and `cacheSet(key, value, ttlSeconds)`. Values are JSON-serialized. Create a wrapper that caches `getUserById(id)`: on cache hit return cached user; on miss, fetch from DB, cache for 300 seconds, return. Use key pattern `user:${id}`.

### Task 2
Implement cache-aside pattern for a list endpoint: `getUsers(page, limit)`. Cache key: `users:page:${page}:limit:${limit}`. On cache miss: query DB, cache result, return. Add cache invalidation: when a user is created/updated/deleted, delete keys matching `users:*` (use SCAN or pattern delete). Handle race: two requests for same key—only one should hit DB (use a simple lock or accept duplicate fetches).

### Task 3
Implement a rate limiter: `checkRateLimit(userId, limit, windowSeconds)` returns `{ allowed: boolean, remaining: number }`. Use Redis INCR with key `ratelimit:${userId}:${windowStart}`. On first request in window, set EXPIRE. If count > limit, deny. Return remaining = max(0, limit - count). Use a single Lua script for atomicity if possible.

### Task 4
Implement a distributed lock: `withLock(lockKey, ttlMs, fn)` that acquires a lock (SET key NX EX ttl), runs fn, releases lock (DEL). If lock not acquired, throw or retry with backoff. Use a unique value (UUID) for the lock so only the holder can release. Handle fn throwing: ensure lock is released in finally. Add optional retry (retry 3 times with 100ms delay).

### Task 5
Build a cache layer with write-through: `cacheRepository` that wraps a DB repository. On `findById`: cache-aside (read from cache, miss from DB then cache). On `save`: write to DB, then update cache (or invalidate). On `delete`: delete from DB, invalidate cache. Support cache stampede protection: when many requests miss for same key, only one fetches from DB; others wait and use the result. Use a simple in-memory Promise cache per key for the "single fetcher" pattern, or Redis-based lock.
