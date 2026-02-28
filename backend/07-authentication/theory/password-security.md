# Password Security

## Concept

Password security involves storage (hashing, never plaintext), transmission (HTTPS only), and policies (complexity, expiry). Hashes must be slow and salted to resist brute force and rainbow tables. Plaintext passwords must never be logged, stored, or sent over unencrypted channels.

## Why It Matters

Password breaches are common; weak storage leads to mass account compromise. Regulations (GDPR, PCI-DSS) and user trust require proper handling. A single mistake—storing plaintext, weak hashing—can expose millions of accounts.

## Key Concepts

- Hashing: one-way; use bcrypt, Argon2, or scrypt—never MD5 or plain SHA
- Salt: unique per password; prevents rainbow tables and identical-password correlation
- Work factor: configurable cost; increase over time as hardware improves
- Transmission: HTTPS only; never log or echo passwords

## Code Example

```typescript
import bcrypt from 'bcrypt'

const saltRounds = 12
const hash = await bcrypt.hash(plainPassword, saltRounds)
const match = await bcrypt.compare(plainPassword, hash)
```

## Under the Hood

Bcrypt derives a key from the password using a cost factor and a random salt. Each hash is unique even for identical passwords. Verification recomputes and compares. Argon2 is memory-hard, resisting GPU attacks. MD5 and SHA-256 are too fast; attackers can try billions of passwords per second.

## Common Mistakes

- Storing plaintext or reversibly encrypted passwords
- Using MD5, SHA1, or SHA-256 alone for password hashing
- Reusing salts or using a global salt
- Logging passwords (even in error handlers or debug mode)

## Best Practices

- Use bcrypt (cost 12+) or Argon2id for new systems
- Never store, log, or transmit plaintext passwords
- Enforce HTTPS; reject password submission over HTTP
- Consider passwordless (WebAuthn) for high-security scenarios

## Summary

Hash passwords with bcrypt or Argon2; use unique salts; never store plaintext. Enforce HTTPS and avoid logging credentials. Increase work factor as hardware improves.
