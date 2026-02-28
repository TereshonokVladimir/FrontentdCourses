# Idempotency

## Concept

An operation is idempotent if performing it multiple times has the same effect as once. GET, PUT, DELETE are idempotent. POST is not—calling twice may create two resources. Idempotency keys let clients safely retry POST requests.

## Why It Matters

Networks fail; clients retry. Without idempotency, retries create duplicates (double charges, duplicate orders). Idempotency keys allow safe retries for non-idempotent operations.

## Key Concepts

- GET, PUT, DELETE: naturally idempotent
- POST: not idempotent
- Idempotency-Key header: client sends unique key; server returns cached response for duplicate
- Store key + response; expire after 24h typically

## Code Example

```javascript
// Idempotency check
app.post('/api/orders', async (req, res) => {
  const key = req.headers['idempotency-key']
  if (!key) return res.status(400).json({ error: 'Missing Idempotency-Key' })

  const cached = await redis.get(`idempotency:${key}`)
  if (cached) {
    return res.status(200).json(JSON.parse(cached))
  }

  const order = await createOrder(req.body)
  await redis.setex(`idempotency:${key}`, 86400, JSON.stringify(order))
  res.status(201).json(order)
})
```

## Under the Hood

Client generates a UUID per logical operation, sends it with the request. Server checks if key exists; if so, return stored response. If not, process request, store response, return. Same key within window returns same response.

## Common Mistakes

- Not supporting idempotency for payment/order endpoints
- Using non-unique keys (e.g., user ID)
- Storing forever (memory leak)
- Not returning same response for same key

## Best Practices

- Require Idempotency-Key for POST that creates billable/order resources
- Use UUID v4 from client
- Expire keys (24–72h)
- Return 409 if key conflicts with different request body

## Summary

Idempotency: same request twice = same result. Use Idempotency-Key for POST retries. Store key + response; return cached for duplicates.
