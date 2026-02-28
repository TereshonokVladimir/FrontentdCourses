# Security Fundamentals

## Concept

Backend security protects data and systems from unauthorized access, injection, and abuse. Key areas: authentication (who), authorization (what), input validation, secrets management, HTTPS, and rate limiting. Defense in depth: multiple layers.

## Why It Matters

A single vulnerability can expose user data or take down services. Security is not optional. OWASP Top 10 guides common vulnerabilities. Every backend must handle auth, validation, and secrets correctly.

## Key Concepts

- Authentication: verify identity (JWT, sessions, API keys)
- Authorization: verify permission (RBAC, ABAC)
- Input validation: reject malicious input (SQL injection, XSS)
- Secrets: never in code, rotate regularly
- HTTPS: encrypt in transit

## Code Example

```javascript
// Input validation (prevent injection)
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100)
})
const data = schema.parse(req.body)

// Parameterized queries (SQL injection)
const user = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [req.params.id]
)

// Rate limiting
const limiter = rateLimit({ windowMs: 60000, max: 100 })
app.use('/api/', limiter)
```

## Under the Hood

Attackers probe for weak points. Validation runs before business logic. Parameterized queries separate data from SQL. Rate limiters track requests per key (IP, user) and reject excess.

## Common Mistakes

- Trusting client input without validation
- Concatenating user input into SQL
- Storing passwords in plaintext
- Exposing stack traces or internal errors

## Best Practices

- Validate all input; sanitize output
- Use parameterized queries
- Hash passwords (bcrypt, argon2)
- Principle of least privilege

## Summary

Security: validate input, use parameterized queries, protect secrets, authenticate and authorize. Defense in depth.
