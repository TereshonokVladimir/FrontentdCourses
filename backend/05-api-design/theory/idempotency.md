# Idempotency

## Concept

Idempotency means performing the same operation multiple times produces the same result as doing it once. For APIs, retrying a request (e.g., due to timeout or network failure) should not create duplicates. Critical for payments, orders, and any mutation where duplicate execution is harmful.

## Why It Matters

Networks fail. Clients retry. Without idempotency, a retried POST can create duplicate orders, double charges, or duplicate records. Idempotency keys let clients safely retry with the same key; the server returns the original result.

## Key Concepts

- **Idempotency key**: Client-generated unique key sent in header
- **Key scope**: Per endpoint or per resource
- **Storage**: Store key → response for period (e.g., 24 hours)
- **Same key, same response**: Return cached response for duplicate key
- **GET, PUT, DELETE**: Naturally idempotent; POST and PATCH need keys

## Code Example

```javascript
// Client sends idempotency key
POST /api/v1/orders
Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000
Content-Type: application/json
Body: { "items": [...], "customerId": "abc" }

// First request: process, store result, return 201
// Retry with same key: return stored 201 + same body (no duplicate order)

// Server logic
const key = req.headers['idempotency-key']
if (!key) return res.status(400).json({ error: 'Idempotency-Key required' })

const cached = await idempotencyStore.get(key)
if (cached) {
  return res.status(cached.status).json(cached.body)
}

const result = await createOrder(req.body)
await idempotencyStore.set(key, { status: 201, body: result }, '24h')
return res.status(201).json(result)
```

## Under the Hood

Server stores idempotency key with response in Redis or DB. TTL prevents unbounded growth. Key must be unique per client intent—UUIDs work. Race condition: two requests with same key—use DB unique constraint or distributed lock to ensure only one processes.

## Common Mistakes

- Not supporting idempotency for payment/order endpoints
- Reusing key across different request bodies
- Short TTL (retry after 25h gets 409 or duplicate)
- Not returning exact same response for duplicate key
- Allowing key to be optional for critical mutations

## Best Practices

- Require Idempotency-Key for POST on critical endpoints
- Store key with response; TTL 24–72 hours
- Return same status and body for duplicate key
- Use 409 if key conflicts with different body
- Document idempotency in API docs

## Summary

Idempotency prevents duplicate side effects from retries. Use Idempotency-Key header for critical mutations. Store key → response; return cached result for duplicate keys. Essential for payments and orders.
