# Practice: Cache Implementation

## Tasks

### Task 1
Implement an in-memory LRU cache with a maximum size of 100 entries. Support `get(key)` and `set(key, value)`. When the cache is full, evict the least recently used entry. Use a Map and track access order.

### Task 2
Add TTL (time-to-live) support. Each entry expires after a configurable number of seconds. Lazy eviction: check expiry on `get`. Add a `set(key, value, ttlSeconds)` overload. Clean up expired entries periodically (every 60 seconds) to prevent unbounded growth.

### Task 3
Implement the cache-aside pattern for a hypothetical user service. `getUser(id)` should check the cache first; on miss, fetch from a mock DB (e.g., `Promise.resolve({ id, name: 'User' + id })`), store in cache, and return. Add cache invalidation on `updateUser(id, data)`.

### Task 4
Prevent cache stampede: when the cache expires, many concurrent requests might hit the DB. Implement single-flight: only one request fetches from DB while others wait. Use a Map of in-flight promises keyed by cache key. Ensure all waiters receive the same result.

### Task 5
Integrate with Redis. Replace the in-memory cache with Redis for `get`/`set`. Support both TTL and LRU-style eviction (Redis `MAXMEMORY` policy). Add a fallback: if Redis is unavailable, degrade to in-memory cache with a warning. Implement connection retry and circuit breaker for Redis failures.
