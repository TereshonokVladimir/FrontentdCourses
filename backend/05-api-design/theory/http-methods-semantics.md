# HTTP Methods Semantics

## Concept

HTTP methods define the intent of a request. GET retrieves, POST creates, PUT replaces, PATCH partially updates, DELETE removes. Correct method usage enables caching, idempotency, and safe retries. Clients and intermediaries rely on these semantics.

## Why It Matters

Using methods correctly ensures caches work (GET is cacheable), retries are safe (PUT/DELETE are idempotent), and APIs behave predictably. Misuse leads to cache poisoning, duplicate operations, and client confusion.

## Key Concepts

- **GET**: Safe, idempotent, cacheable—retrieve representation
- **POST**: Not safe, not idempotent—create or process
- **PUT**: Idempotent—replace resource at URI
- **PATCH**: Idempotent—partial update
- **DELETE**: Idempotent—remove resource

## Code Example

```javascript
// GET: Safe, cacheable, no side effects
GET /api/v1/products/123
// Returns 200 + body, or 304 Not Modified if cached

// POST: Create new resource
POST /api/v1/orders
Body: { "items": [...], "customerId": "abc" }
// Returns 201 Created + Location header

// PUT: Full replacement (idempotent)
PUT /api/v1/users/42
Body: { "name": "Jane", "email": "jane@example.com" }
// Same body sent twice = same result

// PATCH: Partial update (idempotent)
PATCH /api/v1/users/42
Body: { "email": "new@example.com" }
// Only updates specified fields

// DELETE: Remove (idempotent)
DELETE /api/v1/orders/456
// Returns 204 No Content; repeating has same effect
```

## Under the Hood

HTTP semantics are defined in RFC 7231. Browsers and proxies cache GET by default. Load balancers may retry idempotent methods on failure. Web crawlers only use GET. Incorrect method usage can trigger unintended caching or duplicate submissions.

## Common Mistakes

- Using GET for mutations (e.g., "delete" via query param)
- Using POST when PUT or PATCH is appropriate
- Treating PUT and PATCH identically (PUT = replace, PATCH = merge)
- Not returning 201 for POST with Location header
- Using GET with request body (undefined in spec)

## Best Practices

- Use GET only for reads; never mutate state
- Use POST for creation; return 201 and Location
- Use PUT for full replacement; require complete representation
- Use PATCH for partial updates; document merge semantics
- Use DELETE for removal; return 204 on success

## Summary

HTTP methods carry semantic meaning. GET is safe and cacheable; POST creates; PUT/PATCH update idempotently; DELETE removes. Use them correctly for caching, retries, and predictable behavior.
