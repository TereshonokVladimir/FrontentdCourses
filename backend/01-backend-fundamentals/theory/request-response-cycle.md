# Request-Response Cycle

## Concept

The request-response cycle is the full path of an HTTP request: client sends request → network → server receives → routing → handler → business logic → database/external calls → response built → network → client receives. Each stage can fail or add latency.

## Why It Matters

Debugging production issues requires tracing the full cycle. Latency can come from any stage. Understanding the flow helps you add logging, metrics, and error handling at the right places.

## Key Concepts

- Request parsing (URL, headers, body)
- Routing (match URL + method to handler)
- Middleware (auth, logging, validation) runs before/after handlers
- Handler executes business logic
- Response serialization (JSON, etc.) and sending
- Connection lifecycle (keep-alive, timeout)

## Code Example

```javascript
// Simplified request-response flow
app.use((req, res, next) => {
  req.startTime = Date.now()
  next()
})

app.use(authMiddleware)
app.use(validateBody)

app.get('/api/users/:id', async (req, res) => {
  const user = await db.users.findById(req.params.id)
  if (!user) return res.status(404).json({ error: 'Not found' })
  res.json(user)
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})
```

## Under the Hood

The HTTP server receives a raw TCP stream, parses it into an HTTP message (request line, headers, body), and invokes the application. The app's router matches the request to a handler. The handler runs, possibly calling async code. The response is serialized and written to the socket. The connection may stay open for keep-alive.

## Common Mistakes

- Not handling async errors (unhandled rejections)
- Blocking the event loop with sync I/O
- Sending response after it's already sent (double-send)
- Not setting timeouts (requests hang forever)

## Best Practices

- Use async error handling (try/catch, error middleware)
- Add request IDs for tracing
- Set reasonable timeouts (request, database, external APIs)
- Log at key stages (received, completed, error)

## Summary

Request-response cycle: receive → parse → route → middleware → handler → respond. Understand each stage for debugging and optimization.
