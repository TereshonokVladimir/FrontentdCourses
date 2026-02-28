# Node.js Crypto Module

## Concept

The `crypto` module provides cryptographic functionality: hashing (SHA, MD5), HMAC, encryption (AES, etc.), random bytes, and key derivation. Uses OpenSSL. Essential for passwords, tokens, and secure communication.

## Why It Matters

Backends hash passwords, sign JWTs, encrypt sensitive data, and generate secure tokens. Using crypto correctly prevents security vulnerabilities. Weak hashing or poor randomness leads to breaches.

## Key Concepts

- `crypto.createHash()` – SHA-256, etc.
- `crypto.createHmac()` – HMAC for signing
- `crypto.randomBytes()` – secure random
- `crypto.createCipheriv` / `createDecipheriv` – encryption
- `crypto.scrypt()` – password hashing (prefer over bcrypt for built-in)
- `crypto.timingSafeEqual()` – constant-time comparison

## Code Example

```javascript
const crypto = require('crypto')

const hash = crypto.createHash('sha256').update('data').digest('hex')
const hmac = crypto.createHmac('sha256', 'secret').update('data').digest('hex')
const token = crypto.randomBytes(32).toString('hex')

// Password hashing
const salt = crypto.randomBytes(16)
const key = crypto.scryptSync('password', salt, 64)
```

## Under the Hood

crypto uses OpenSSL. Hashing is one-way; encryption uses keys and IVs. randomBytes uses OS entropy. scrypt is CPU/memory intensive to resist brute force. timingSafeEqual prevents timing attacks.

## Common Mistakes

- Using MD5 or SHA1 for passwords (use scrypt/argon2)
- Reusing IV for encryption (must be unique per encryption)
- Not using timingSafeEqual for token comparison
- Storing keys in code (use env/secrets manager)

## Best Practices

- Use scrypt or argon2 for passwords
- Generate random IV per encryption
- Use timingSafeEqual for secrets
- Store keys in env or secrets manager

## Summary

crypto: hashing, HMAC, randomBytes, encryption. Use scrypt for passwords; random IV; timingSafeEqual for comparison.