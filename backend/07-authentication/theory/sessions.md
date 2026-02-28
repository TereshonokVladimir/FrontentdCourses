# Sessions

## Concept

A session is server-side state that tracks an authenticated user across requests. The server creates a session after login, stores it (memory, Redis, DB), and issues a session ID (usually in a cookie). Subsequent requests include the ID; the server looks up the session to identify the user.

## Why It Matters

Sessions provide a secure way to maintain login state without sending credentials on every request. They enable server-side revocation (logout, session invalidation) and are well-suited for traditional web apps where the server renders pages. Understanding sessions is essential for building secure, stateful auth flows.

## Key Concepts

- Session store: in-memory (single server), Redis (distributed), or database
- Session ID: opaque, random, unguessable; transmitted via cookie or header
- Session data: user ID, roles, metadata; never store sensitive secrets
- Session lifetime: configurable TTL; extend on activity or use fixed expiry

## Code Example

```typescript
import session from 'express-session'
import RedisStore from 'connect-redis'

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true, maxAge: 86400000 }
}))
```

## Under the Hood

The server generates a cryptographically random session ID, stores session data keyed by that ID, and sets a cookie with the ID. On each request, the middleware reads the cookie, fetches the session from the store, and attaches it to `req.session`. If the store is unavailable, the session cannot be validated.

## Common Mistakes

- Storing sessions in memory when running multiple instances (sticky sessions or shared store required)
- Using weak or predictable session IDs
- Not setting `secure` and `httpOnly` on the session cookie
- Storing large objects in sessions (increases store load and latency)

## Best Practices

- Use a distributed store (Redis) for multi-instance deployments
- Use cryptographically secure random IDs (e.g., 128+ bits)
- Set `httpOnly`, `secure`, `sameSite` on the session cookie
- Keep session payload small; store only user ID and minimal metadata

## Summary

Sessions maintain server-side auth state via a session ID (usually in a cookie). Use a distributed store for scaling; protect the cookie and keep session data minimal.
