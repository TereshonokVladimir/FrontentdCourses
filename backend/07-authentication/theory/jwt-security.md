# JWT Security

## Concept

JWT security involves correct verification, algorithm handling, and protection against common attacks. Tokens can be forged if verification is weak; algorithm confusion, key leakage, and improper storage all create vulnerabilities. Production systems must enforce strict validation and key management.

## Why It Matters

JWTs are widely used; flawed implementations lead to account takeover and privilege escalation. Attackers exploit algorithm confusion, weak secrets, and missing claim validation. Understanding these risks and mitigations is essential for secure deployments.

## Key Concepts

- Algorithm confusion: attacker uses `alg: none` or switches RS256 to HS256 with public key as secret
- Key management: rotate secrets; use strong keys; never commit secrets to code
- Claim validation: always check `exp`, `iat`, `iss`, `aud`; reject malformed tokens
- Token storage: avoid localStorage for XSS-prone apps; prefer httpOnly cookies

## Code Example

```typescript
// Explicit algorithm; reject none and weak algos
jwt.verify(token, publicKey, {
  algorithms: ['RS256'],
  issuer: 'https://api.example.com',
  audience: 'https://api.example.com'
})
```

## Under the Hood

Libraries that accept `alg` from the token header can be tricked: an attacker crafts a token with `alg: none` or uses the public key as an HMAC secret. Always pass `algorithms` explicitly to `verify()`. Use asymmetric crypto (RS256) so the public key can be shared without compromising signing.

## Common Mistakes

- Trusting `alg` from the token without explicit allowlist
- Using short or guessable secrets for HS256
- Storing JWTs in localStorage (vulnerable to XSS)
- Not validating `aud` and `iss` for multi-tenant or multi-issuer setups

## Best Practices

- Explicitly allowlist algorithms in `jwt.verify()`
- Prefer RS256 for APIs; keep private key server-side only
- Validate all standard claims; reject tokens with missing or invalid claims
- Store tokens in httpOnly cookies when possible; avoid client-side exposure

## Summary

JWT security requires explicit algorithm verification, strong key management, and full claim validation. Avoid algorithm confusion and never trust unvalidated token headers.
