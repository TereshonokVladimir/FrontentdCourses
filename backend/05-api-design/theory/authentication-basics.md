# Authentication Basics

## Concept

Authentication verifies the identity of the client making a request. Common approaches include API keys, Bearer tokens (JWT), and OAuth2. The server validates credentials and attaches identity to the request for downstream authorization.

## Why It Matters

Most APIs need to know who is calling. Authentication enables personalized responses, access control, usage tracking, and audit trails. Choosing the right method depends on client type (server, SPA, mobile) and security requirements.

## Key Concepts

- **API Key**: Simple secret in header or query; good for server-to-server
- **Bearer Token (JWT)**: Signed token with claims; stateless; good for distributed systems
- **OAuth2**: Delegated authorization; tokens from auth server; for third-party access
- **Session**: Server-side session; cookie-based; for traditional web apps

## Code Example

```javascript
// API Key
GET /api/v1/orders
X-API-Key: sk_live_abc123xyz

// Bearer JWT
GET /api/v1/orders
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Validation middleware
const token = req.headers.authorization?.replace('Bearer ', '')
if (!token) return res.status(401).json({ error: 'Missing token' })
try {
  const payload = jwt.verify(token, process.env.JWT_SECRET)
  req.user = payload
  next()
} catch {
  return res.status(401).json({ error: 'Invalid token' })
}
```

## Under the Hood

API keys are looked up in a store. JWTs are verified by signature (HMAC or RSA); no DB lookup for validation. OAuth2 involves redirect flow and token exchange. Sessions require server-side storage (Redis, DB). Choose based on statelessness, client type, and revocation needs.

## Common Mistakes

- Storing JWT in localStorage (XSS risk); use httpOnly cookie for web
- Not validating token signature
- Long-lived tokens with no refresh mechanism
- Sending API key in URL (logs, referrer leakage)
- No token revocation strategy

## Best Practices

- Prefer Bearer token in Authorization header
- Use short-lived access tokens; refresh tokens for longevity
- Validate signature and expiry on every request
- Never put secrets in URLs
- Implement token revocation for sensitive operations

## Summary

Authentication identifies the caller. Use API keys for server-to-server, JWT for stateless auth, OAuth2 for third-party. Validate tokens, use short expiry, and never expose secrets in URLs.
