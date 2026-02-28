# Practice: Caching Layer

## Tasks

### Task 1
Add a caching layer to a simple REST API. For `GET /users/:id`, check an in-memory Map first. On cache miss, fetch from a mock DB (e.g., `Promise.resolve({ id, name: 'User' + id })`), store in cache, return. Add `Cache-Control` and `X-Cache: HIT|MISS` headers to the response.

### Task 2
Implement cache invalidation. When `PUT /users/:id` or `DELETE /users/:id` is called, remove the corresponding cache entry. For `PUT`, optionally update the cache with the new value instead of invalidating. Ensure consistency: after update, subsequent GET returns the new data.

### Task 3
Add TTL and cache warming. Set a 5-minute TTL per user entry. Implement a background job or endpoint that "warms" the cache for the top 100 most-requested users (simulate with a fixed list). Add a `/cache/stats` endpoint: hit count, miss count, hit rate, size.

### Task 4
Implement a two-tier cache: L1 (in-memory, 100 entries, LRU) and L2 (Redis or another in-memory store with 10,000 entries). On GET, check L1 → L2 → DB. On set, write to both L1 and L2. Handle L2 unavailability (degrade to L1 only, log warning).

### Task 5
Build a cache layer with cache-aside, stampede protection, and metrics. Support configurable backends (memory, Redis). Add Prometheus-compatible metrics: `cache_operations_total{op="hit|miss", key_prefix="users"}`. Implement a circuit breaker for Redis: after 5 consecutive failures, stop using Redis for 60 seconds and fall back to memory. Add integration tests that simulate Redis failure.
