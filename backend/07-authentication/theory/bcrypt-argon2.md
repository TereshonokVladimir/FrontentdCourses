# bcrypt and Argon2

## Concept

bcrypt and Argon2 are password hashing algorithms designed to be slow and resistant to brute force. bcrypt uses a configurable cost factor; Argon2 is memory-hard and won the Password Hashing Competition. Both incorporate salt and are the standard choice for password storage.

## Why It Matters

Fast hashes (MD5, SHA-256) allow attackers to try billions of passwords per second. bcrypt and Argon2 slow verification to milliseconds, making brute force impractical. Choosing and configuring them correctly is foundational for account security.

## Key Concepts

- bcrypt: Blowfish-based; cost factor (2^n rounds); widely supported
- Argon2: memory-hard; variants id (general), i (side-channel resistant), d (GPU resistant)
- Salt: automatic in both; unique per password
- Work factor: tune for ~100–300ms verification on your hardware

## Code Example

```typescript
import argon2 from 'argon2'

// Argon2id (recommended)
const hash = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 65536,
  timeCost: 3
})
const valid = await argon2.verify(hash, password)
```

## Under the Hood

bcrypt runs the Blowfish key schedule multiple times (2^cost iterations). Argon2 fills memory and performs many passes, making GPU and ASIC attacks expensive. Both output a string encoding algorithm, salt, and hash—verification uses the same parameters from the stored value.

## Common Mistakes

- Using cost factor too low (bcrypt < 10; Argon2 timeCost < 2)
- Not increasing cost over time as hardware improves
- Using Argon2d for web (side-channel risk; prefer Argon2id)
- Synchronous hashing in the request path (blocks event loop)

## Best Practices

- Prefer Argon2id for new systems; bcrypt is acceptable and widely supported
- Tune cost for ~100–300ms; document and periodically review
- Use async APIs to avoid blocking
- Store the full hash string; it includes algorithm and parameters

## Summary

bcrypt and Argon2 are slow, salted password hashes. Use cost factors that yield ~100–300ms verification. Prefer Argon2id for new projects; bcrypt remains a solid choice.
