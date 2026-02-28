# Token Revocation

## Concept

Token revocation invalidates credentials before their natural expiry. Reasons include logout, password change, compromise, or admin action. For JWTs, revocation requires a server-side mechanism (blacklist, short expiry + refresh token invalidation) because the token itself cannot be "un-signed."

## Why It Matters

Without revocation, a stolen token remains valid until expiry. Users expect logout to work immediately. Compliance may require instant revocation. Stateless JWTs complicate this—you need a revocation store or short-lived tokens with refresh token control.

## Key Concepts

- Blacklist: store revoked token IDs (jti) or hashes until expiry
- Refresh token revocation: invalidate refresh token; access tokens expire naturally
- Token version: store version per user; reject tokens with old version
- Short expiry: limit damage window; combine with refresh token revocation

## Code Example

```typescript
// Blacklist: check before accepting token
const jti = decoded.jti
if (await redis.get(`revoked:${jti}`)) {
  return res.status(401).json({ error: 'Token revoked' })
}

// On logout: add to blacklist until token expiry
await redis.setex(`revoked:${jti}`, ttlSeconds, '1')
```

## Under the Hood

JWTs are self-contained; the server cannot "cancel" them. Revocation options: (1) Blacklist: store jti or hash in Redis/DB; check on each request. (2) Refresh token store: revoke refresh token; access tokens expire in minutes. (3) Token version: increment on logout; reject tokens with old version. Blacklist scales with request volume; version check is a single DB lookup per user.

## Common Mistakes

- Assuming logout works with stateless JWTs and no revocation
- Blacklisting without TTL (memory/DB growth)
- Not revoking refresh tokens on password change
- Revoking only server-side session without invalidating tokens

## Best Practices

- Use refresh tokens and revoke them for logout; keep access tokens short
- If using blacklist, set TTL to token expiry to auto-cleanup
- Revoke all tokens for a user on password change or compromise
- Document revocation behavior for clients (logout, session invalidation)

## Summary

JWTs cannot be un-signed; revocation requires a server-side mechanism. Use refresh token revocation, blacklists, or token versioning. Revoke on logout, password change, and compromise.
