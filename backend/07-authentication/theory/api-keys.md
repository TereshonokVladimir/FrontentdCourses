# API Keys

## Concept

API keys are static credentials used to authenticate programmatic access—scripts, services, integrations. They identify the client (or tenant) but not a human user. Keys should be long, random, and stored securely; they are often prefixed (e.g., `sk_live_`) for identification and rotation.

## Why It Matters

API keys power server-to-server calls, CI/CD, and third-party integrations. They are simpler than OAuth for machine clients but must be protected like passwords. Leaked keys grant full access to the key's scope; rotation and scoping are critical.

## Key Concepts

- Key format: long random string (e.g., 32+ bytes); optional prefix for type/env
- Storage: environment variables, secrets manager; never in code or logs
- Scoping: restrict keys to specific resources, operations, or rate limits
- Rotation: support key rotation without downtime; allow multiple active keys

## Code Example

```typescript
// Validate API key from header
const apiKey = req.headers['x-api-key']
if (!apiKey?.startsWith('sk_')) {
  return res.status(401).json({ error: 'Invalid API key' })
}
const keyRecord = await db.apiKeys.findByKey(apiKey)
if (!keyRecord || keyRecord.revoked) {
  return res.status(401).json({ error: 'Invalid or revoked key' })
}
req.apiKey = keyRecord
```

## Under the Hood

The server looks up the key in a database or cache, checks revocation and scope, and attaches the associated identity to the request. Keys are hashed before storage (like passwords) so a DB leak does not expose raw keys. Use constant-time comparison when validating to prevent timing attacks.

## Common Mistakes

- Storing keys in code, config files, or client-side bundles
- Not hashing keys before storage
- Using short or predictable keys
- No revocation or rotation mechanism

## Best Practices

- Hash keys before storage; compare with constant-time function
- Use prefixes (e.g., `sk_live_`, `pk_test_`) for environment and type
- Support scoped keys (per project, per operation) and rate limits
- Provide rotation: issue new key, deprecate old after grace period

## Summary

API keys authenticate machine clients. Store hashed; never in code. Use long random values, scoping, and rotation. Treat them as secrets.
