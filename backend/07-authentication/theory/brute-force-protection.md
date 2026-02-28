# Brute Force Protection

## Concept

Brute force protection limits the rate of authentication attempts to prevent password guessing. Attackers try many passwords per account or one password across many accounts. Rate limiting, CAPTCHA, and account lockout slow or block these attacks. Combine with strong passwords and MFA for defense in depth.

## Why It Matters

Unprotected login endpoints allow millions of attempts. Weak passwords fall quickly. Credential stuffing (reused passwords from breaches) succeeds without rate limits. Production systems must throttle attempts per IP, per account, or both.

## Key Concepts

- Rate limiting: cap attempts per time window (e.g., 5 per minute per IP)
- Account-level: limit per username/email to prevent targeted attacks
- Progressive delay: increase wait time after failures
- CAPTCHA: human verification after several failures (reduces automated attacks)

## Code Example

```typescript
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

async function checkBruteForce(key: string, limit: number, windowMs: number): Promise<boolean> {
  const now = Date.now()
  const record = loginAttempts.get(key)
  if (!record) return true
  if (now > record.resetAt) {
    loginAttempts.delete(key)
    return true
  }
  return record.count < limit
}

// In login handler: increment on failure; check before attempting auth
```

## Under the Hood

Store attempt counts keyed by IP, account, or both. Use Redis for distributed systems. Reset the window after success or after the window expires. Block or delay when the limit is exceeded. Consider exponential backoff or CAPTCHA after N failures to reduce UX impact while blocking bots.

## Common Mistakes

- Only limiting per IP (attackers use many IPs; also limit per account)
- No limit at all on login endpoint
- Resetting count on any request (allows bypass by alternating success/fail)
- Blocking legitimate users with overly aggressive limits

## Best Practices

- Limit per IP and per account; use the stricter of the two when both apply
- Use Redis or similar for multi-instance rate limiting
- Consider CAPTCHA after 3–5 failures to reduce automated attempts
- Log and alert on repeated failures; may indicate targeted attack

## Summary

Brute force protection limits login attempts per IP and per account. Use rate limiting, lockout, or CAPTCHA. Store state in Redis for distributed deployments.
