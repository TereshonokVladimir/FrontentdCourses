# Practice: Idempotency Keys

## Tasks

### Task 1
Add `Idempotency-Key` header support to `POST /api/v1/orders`. Require the header; return 400 if missing. Store successful responses in memory: key -> { status, body }. When same key is received again, return stored response without re-executing. Use 24-hour TTL for stored responses.

### Task 2
Handle duplicate key with different body: return 409 Conflict with message "Idempotency key already used with different request". Compare request body hash (or full body) to detect mismatch. Ensure first request wins; subsequent with same key get cached result.

### Task 3
Support in-flight request deduplication: if two requests with same key arrive concurrently, only one should process. Use a lock (in-memory or Redis) per key. Second request waits for first to complete, then returns its result. Set lock timeout to prevent deadlock (e.g., 30s).

### Task 4
Persist idempotency store to Redis or DB for multi-instance deployment. Key format: `idempotency:{key}`. Store: `{ status, body, createdAt }`. Use TTL for automatic cleanup. Handle Redis/DB errors (return 500, don't create duplicate). Add `Idempotency-Replay: true` response header when returning cached response.

### Task 5
Scope idempotency keys per user: same key from different users is different. Add key format validation (UUID or max 128 chars). Implement key reuse window: after 24h, key can be reused (optional, for high-volume systems). Add metrics: cache hit rate. Write tests for: first request, retry same key, retry different body, concurrent same key, expired key.
