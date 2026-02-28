# Refresh Tokens

## Concept

Refresh tokens are long-lived credentials used to obtain new access tokens without re-authentication. The access token is short-lived (minutes); the refresh token is stored securely and exchanged when the access token expires. This limits exposure of long-lived credentials while preserving session continuity.

## Why It Matters

Short-lived access tokens improve security but would force frequent logins without refresh tokens. Refresh tokens enable "remember me" and mobile/SPA flows. They must be stored and transmitted securely; rotation (issue new refresh token, invalidate old) reduces theft impact.

## Key Concepts

- Access token: short-lived (e.g., 15 min); used for API calls
- Refresh token: long-lived (days/weeks); used only at token endpoint
- Rotation: each refresh returns a new refresh token; old one is invalidated
- Storage: httpOnly cookie or secure storage; never localStorage for web

## Code Example

```typescript
app.post('/token', async (req, res) => {
  const { grant_type, refresh_token } = req.body
  if (grant_type !== 'refresh_token') return res.status(400).json({ error: 'invalid_grant' })

  const payload = await verifyRefreshToken(refresh_token)
  if (!payload) return res.status(401).json({ error: 'invalid_token' })

  const [accessToken, newRefreshToken] = await issueTokenPair(payload.sub)
  await revokeRefreshToken(refresh_token) // rotation
  res.json({ access_token: accessToken, refresh_token: newRefreshToken })
})
```

## Under the Hood

The refresh token is a signed, opaque token or JWT stored server-side (or in a secure cookie). On exchange, the server validates it, checks it has not been revoked, issues a new access token and optionally a new refresh token, then revokes the old refresh token. Detecting reuse (refresh token used twice) can indicate theft.

## Common Mistakes

- Using the same token for access and refresh (no separation of concerns)
- Not rotating refresh tokens (stolen token remains valid)
- Storing refresh tokens in localStorage (XSS exposure)
- No revocation mechanism (logout, password change, compromise)

## Best Practices

- Rotate refresh tokens on each use; detect and revoke on reuse
- Store refresh tokens server-side or in httpOnly cookies
- Use short access token expiry (15 min or less)
- Revoke all refresh tokens on password change or explicit logout

## Summary

Refresh tokens obtain new access tokens without re-login. Rotate on use; store securely; revoke on logout or compromise. Keep access tokens short-lived.
