# Secure Cookies

## Concept

Secure cookies use flags to limit exposure: `HttpOnly` (no JavaScript access, mitigates XSS), `Secure` (HTTPS only), `SameSite` (CSRF protection). Cookies storing session IDs or tokens must use these flags to prevent theft and cross-site attacks.

## Why It Matters

Cookies without `HttpOnly` can be stolen via XSS. Without `Secure`, they are sent over HTTP and can be intercepted. Without `SameSite`, they are sent on cross-site requests (CSRF). Misconfiguration is a common cause of session hijacking in production.

## Key Concepts

- HttpOnly: prevents `document.cookie` access; blocks XSS token theft
- Secure: sent only over HTTPS
- SameSite: Strict (no cross-site), Lax (top-level nav), None (cross-site; requires Secure)
- Path and Domain: restrict where the cookie is sent

## Code Example

```typescript
res.cookie('sessionId', sessionId, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 86400000,
  path: '/'
})
```

## Under the Hood

The browser stores the cookie and attaches it to requests matching path, domain, and security rules. `HttpOnly` is enforced by the browser—JavaScript cannot read the cookie. `SameSite` limits when the cookie is sent on cross-origin requests. `Secure` ensures transmission only over TLS.

## Common Mistakes

- Omitting `HttpOnly` for session/token cookies
- Using `SameSite: None` without `Secure` (browsers reject)
- Setting `Secure: false` in production
- Overly broad `Domain` (cookie sent to subdomains unintentionally)

## Best Practices

- Always set `HttpOnly` and `Secure` for auth cookies in production
- Use `SameSite: Lax` for most cases; `Strict` for high-security
- Use `SameSite: None` only when cross-site is required (e.g., embedded iframes); always with `Secure`
- Prefer short `maxAge` for sensitive cookies

## Summary

Use `HttpOnly`, `Secure`, and `SameSite` for auth cookies. Prefer `Lax`; use `None` only when necessary with `Secure`. Prevents XSS and CSRF token theft.
