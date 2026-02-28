# Account Lockout

## Concept

Account lockout temporarily disables an account after too many failed login attempts. It protects against targeted password guessing but can enable denial-of-service (attacker triggers lockout for victims). Balance security with availability—use lockout duration, threshold, and recovery options carefully.

## Why It Matters

Without lockout, an attacker can try many passwords on a single account. With aggressive lockout, an attacker can lock out legitimate users. Production systems need configurable thresholds, lockout duration, and admin override. Consider alternatives like progressive delay or CAPTCHA.

## Key Concepts

- Threshold: number of failures before lockout (e.g., 5)
- Duration: how long the account stays locked (e.g., 15 minutes)
- Reset: successful login clears failure count; optional timeout resets after inactivity
- Admin override: ability to unlock without waiting

## Code Example

```typescript
async function checkLockout(userId: string): Promise<{ locked: boolean; retryAfter?: number }> {
  const record = await db.loginAttempts.findByUser(userId)
  if (!record || record.failCount < LOCKOUT_THRESHOLD) return { locked: false }
  if (Date.now() < record.lockedUntil) {
    return { locked: true, retryAfter: Math.ceil((record.lockedUntil - Date.now()) / 1000) }
  }
  await db.loginAttempts.reset(userId)
  return { locked: false }
}
```

## Under the Hood

Store failure count and lockout expiry per account. On each failed attempt, increment and optionally set lockedUntil. On successful attempt, clear the record. Return 423 Locked or 429 Too Many Requests with Retry-After header when locked. Use a distributed store if multiple instances handle login.

## Common Mistakes

- Locking out indefinitely (no recovery)
- Locking out on username only (attacker can lock any account by guessing username)
- No admin unlock (support burden)
- Not resetting on success (user stays locked after correct password)

## Best Practices

- Use short lockout (15–30 min); combine with rate limiting per IP
- Reset failure count on successful login
- Provide Retry-After header for client UX
- Support admin unlock; log lockout events for security review

## Summary

Account lockout blocks further attempts after N failures. Use configurable threshold and duration; reset on success. Provide admin override and consider DoS impact.
