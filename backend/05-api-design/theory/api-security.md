# API Security

## Concept

API security protects APIs from unauthorized access, data exposure, and abuse. It encompasses authentication (who), authorization (what they can do), encryption in transit, input validation, and protection against common attacks (injection, XSS, CSRF).

## Why It Matters

APIs are prime targets. Breaches expose user data, damage trust, and incur regulatory penalties. Security must be built in from the start—retrofitting is harder and riskier. Production APIs require defense in depth.

## Key Concepts

- **Authentication**: Verify identity (API keys, JWT, OAuth)
- **Authorization**: Enforce permissions (RBAC, ABAC)
- **Encryption**: HTTPS only; TLS 1.2+
- **Input validation**: Validate and sanitize all input
- **Rate limiting**: Prevent abuse and DoS

## Code Example

```javascript
// HTTPS only - redirect HTTP to HTTPS
// Validate all input
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(0).max(150)
})

// Authenticate before processing
app.use('/api', authMiddleware)

// Authorize per resource
if (req.user.id !== order.userId && !req.user.isAdmin) {
  return res.status(403).json({ error: 'Forbidden' })
}

// Never expose internals in errors
catch (err) {
  logger.error(err)
  res.status(500).json({ error: 'Internal error', traceId: req.id })
}
```

## Under the Hood

Security is layered. TLS terminates at load balancer or app. Auth middleware validates tokens before handlers run. Authorization checks happen per-request, per-resource. Validation runs before business logic. Logs must not contain secrets.

## Common Mistakes

- Storing secrets in code or config (use env vars, secret manager)
- Not validating input (injection, malformed data)
- Exposing stack traces or internal errors
- Weak or missing rate limiting
- Insecure defaults (HTTP, debug mode in prod)

## Best Practices

- Use HTTPS everywhere; HSTS header
- Validate and sanitize all input
- Use parameterized queries; never concatenate SQL
- Principle of least privilege for tokens and DB
- Log security events; never log secrets

## Summary

API security requires authentication, authorization, encryption, validation, and rate limiting. Validate all input, never expose internals, and use defense in depth. Security is not optional in production.
