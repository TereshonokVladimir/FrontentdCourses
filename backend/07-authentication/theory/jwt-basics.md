# JWT Basics

## Concept

A JSON Web Token (JWT) is a compact, URL-safe token format for transmitting claims between parties. It has three parts—header, payload, signature—encoded as base64url and separated by dots. The server signs the token; anyone can verify the signature with the public key or secret.

## Why It Matters

JWTs enable stateless authentication: the server does not need to look up sessions. They work well for APIs, microservices, and SPAs. Understanding structure and verification is critical for secure implementation—many production incidents stem from JWT misuse.

## Key Concepts

- Header: algorithm (e.g., HS256, RS256) and token type
- Payload: claims (sub, exp, iat, custom data); base64-encoded, not encrypted
- Signature: HMAC or RSA; prevents tampering
- Stateless: server verifies signature and reads claims; no DB lookup for validation

## Code Example

```typescript
import jwt from 'jsonwebtoken'

const token = jwt.sign(
  { sub: userId, role: 'user', exp: Math.floor(Date.now() / 1000) + 3600 },
  process.env.JWT_SECRET!,
  { algorithm: 'HS256' }
)

const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { sub: string }
```

## Under the Hood

The header and payload are base64url-encoded JSON. The signature is computed over `base64(header).base64(payload)` using the secret or private key. Verification recomputes the signature and compares; if it matches and `exp` has not passed, the token is valid. Never trust a token without verifying the signature.

## Common Mistakes

- Storing sensitive data in the payload (it is base64, not encrypted)
- Using weak algorithms (e.g., `none`) or accepting algorithm confusion
- Not validating `exp`, `iat`, or `iss` claims
- Using JWTs for session-like state without revocation strategy

## Best Practices

- Use RS256 for public APIs (asymmetric); HS256 only when secret is truly shared
- Keep payload minimal; avoid PII or large objects
- Always verify algorithm explicitly; reject `alg: none`
- Set short expiry; use refresh tokens for long-lived access

## Summary

JWTs are signed tokens with header, payload, and signature. They enable stateless auth but require careful verification and short expiry. Never store secrets in the payload.
