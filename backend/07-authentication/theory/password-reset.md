# Password Reset

## Concept

Password reset allows users to regain access when they forget their password. The flow: user requests reset → server sends a time-limited, single-use token (email link) → user submits new password with token → server validates token and updates hash. The token must be unguessable and invalidated after use or expiry.

## Why It Matters

Weak reset flows are a major attack vector. Predictable tokens, long expiry, or no invalidation enable account takeover. Email interception or token leakage can compromise accounts. Production systems need secure token generation, short expiry, and clear invalidation rules.

## Key Concepts

- Token: cryptographically random; 32+ bytes; single-use
- Expiry: short (e.g., 1 hour); longer increases risk
- Invalidation: mark used; delete after success; invalidate on password change
- Rate limiting: prevent enumeration and abuse of reset endpoint

## Code Example

```typescript
const crypto = require('crypto')

function generateResetToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

async function createResetRequest(email: string): Promise<string> {
  const token = generateResetToken()
  await db.passwordResets.create({
    email,
    token: await hashToken(token),
    expiresAt: new Date(Date.now() + 3600000)
  })
  await sendResetEmail(email, token)
  return token
}
```

## Under the Hood

Generate a random token, hash it before storage (like passwords), and store with expiry. Send the raw token in the reset link. On submission, hash the provided token, look it up, check expiry and that it has not been used, then update the password and invalidate the token. Rate limit the request endpoint to prevent email enumeration.

## Common Mistakes

- Using predictable tokens (user ID, timestamp, weak random)
- Long expiry (days instead of hours)
- Not invalidating after use (token reuse)
- Revealing whether email exists (different messages for valid vs invalid)

## Best Practices

- Use crypto.randomBytes(32) or equivalent for tokens
- Hash tokens before storage; constant-time comparison on verify
- Expire in 1 hour or less; single use only
- Rate limit; use same response for existing and non-existing emails to prevent enumeration

## Summary

Password reset uses a random, single-use, short-lived token. Hash before storage; invalidate after use. Rate limit and avoid email enumeration. Keep expiry under 1 hour.
