# Stateless vs Stateful

## Concept

Stateless servers don't store client state between requests; each request is independent. Stateful servers store session data (in memory, DB, or cache). Stateless scales horizontally; stateful requires sticky sessions or shared state.

## Why It Matters

Horizontal scaling requires stateless design. Load balancers can route any request to any instance. Stateful design limits scaling and complicates deployment. Most modern backends are stateless with external state (DB, Redis).

## Key Concepts

- Stateless: no server-side session; client sends auth token each request
- Stateful: server stores session; client sends session ID
- JWT and API keys enable stateless auth
- Sticky sessions (session affinity) route same client to same server
- Shared state: Redis for sessions across instances

## Code Example

```javascript
// Stateless: JWT in header each request
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (token) {
    req.user = jwt.verify(token, SECRET)
  }
  next()
})

// Stateful: session from store
app.use(session({ store: redisStore }))
app.get('/profile', (req, res) => {
  const user = req.session.user  // Stored server-side
  res.json(user)
})
```

## Under the Hood

Stateless: server reads token, validates, extracts user—no lookup. Stateful: server looks up session by ID in store. Stateless scales because any instance can handle any request. Stateful needs session store or sticky routing.

## Common Mistakes

- Storing session in memory with multiple instances (lost on wrong instance)
- Making stateless API stateful without need
- Storing large objects in JWT (bloat, can't invalidate)

## Best Practices

- Prefer stateless for APIs (JWT, API keys)
- Use Redis for shared session store if stateful
- Keep JWT small (id, roles); fetch details from DB
- Design for any instance to handle any request

## Summary

Stateless: no server-side state, scales horizontally. Stateful: session stored server-side. Prefer stateless; use shared store if stateful needed.
