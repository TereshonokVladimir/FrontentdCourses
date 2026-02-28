# MFA / 2FA

## Concept

Multi-factor authentication (MFA) or two-factor authentication (2FA) requires a second factor beyond the password—something you have (phone, hardware key) or something you are (biometric). TOTP (time-based one-time passwords) and WebAuthn are common implementations. MFA significantly reduces account takeover risk.

## Why It Matters

Passwords alone are weak: phishing, breaches, and weak choices compromise accounts. MFA blocks most credential-based attacks. Compliance (PCI-DSS, SOC2) often requires MFA for privileged access. Backends must support enrollment, verification, and recovery flows.

## Key Concepts

- TOTP: HMAC-based, 30-second codes; compatible with Google Authenticator, Authy
- WebAuthn: passwordless; uses hardware keys or platform authenticators
- Backup codes: one-time codes for recovery when primary factor is lost
- Recovery: secure flow for users who lose their second factor

## Code Example

```typescript
import speakeasy from 'speakeasy'

// Generate secret for user
const secret = speakeasy.generateSecret({ name: 'MyApp (user@example.com)' })

// Verify TOTP
const valid = speakeasy.totp.verify({
  secret: user.totpSecret,
  encoding: 'base32',
  token: userProvidedCode,
  window: 1 // allow 1 step drift
})
```

## Under the Hood

TOTP computes `HMAC-SHA1(secret, floor(time/30))` and extracts a 6-digit code. Client and server share the secret; time sync is critical. WebAuthn uses public-key crypto: the authenticator signs a challenge; the server verifies with the stored public key. No shared secret is transmitted.

## Common Mistakes

- Not requiring MFA for admin or sensitive operations
- Allowing unlimited verification attempts (brute force on 6 digits)
- Poor recovery flow (security questions, email-only reset)
- Storing TOTP secret in plaintext

## Best Practices

- Encourage or require MFA for high-privilege accounts
- Rate-limit verification attempts; lock after several failures
- Offer backup codes at enrollment; store hashed
- Prefer WebAuthn where supported; fall back to TOTP

## Summary

MFA adds a second factor (TOTP, WebAuthn) to reduce account takeover. Support enrollment, verification, and recovery. Rate-limit attempts; prefer WebAuthn when possible.
