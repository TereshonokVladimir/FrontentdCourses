# Practice: Async Batching

## Tasks

### Task 1
Implement a simple batch function: `batchRequests(ids, fetchFn)` that takes an array of IDs and a fetch function `(id) => Promise<Data>`. Execute all fetches in parallel with `Promise.all`. Return results in the same order as input IDs. Handle errors (fail-fast vs collect errors).

### Task 2
Implement a batcher that groups requests within a time window. `createBatcher(fetchFn, windowMs)` returns a function `get(id)`. When `get` is called, it doesn't fetch immediately; it waits up to `windowMs` (e.g., 10ms) and then fetches all collected IDs in one batch. The batch `fetchFn` receives `(ids) => Promise<Map<id, data>>`. Ensure each `get(id)` resolves with the correct data.

### Task 3
Implement the DataLoader pattern: a single batch per tick of the event loop. Use `queueMicrotask` or `process.nextTick` to coalesce all `load(id)` calls in the same tick into one batch. The loader should support `load(id)` and `loadMany(ids)`. Cache results per request (or per loader instance) to avoid duplicate fetches.

### Task 4
Add concurrency limiting to the batcher. Even when batching, limit the number of in-flight batch requests (e.g., max 5 concurrent batch fetches). If the batch queue grows, wait for a slot. Ensure no starvation and fair ordering.

### Task 5
Implement a production-ready DataLoader with: (1) per-request caching (clear cache after request), (2) batch function that accepts array of keys and returns array of values (or errors), (3) optional TTL for cache entries, (4) metrics: batch size distribution, cache hit rate. Integrate with an Express middleware that creates a fresh loader per request and attaches to `req.loaders`.
