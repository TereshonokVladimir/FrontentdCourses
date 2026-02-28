# Security Headers

## Concept

Security headers instruct the browser and intermediaries to enforce security policies. Common headers: `Content-Security-Policy` (CSP), `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security` (HSTS), `Referrer-Policy`. They mitigate XSS, clickjacking, MIME sniffing, and protocol downgrade.

## Why It Matters

Missing or weak headers leave applications vulnerable to well-known attacks. CSP can block inline script injection; HSTS forces HTTPS; X-Frame-Options prevents clickjacking. Production deployments should set these headers as defense in depth.

## Key Concepts

- CSP: restricts script, style, and resource sources; blocks inline execution
- HSTS: browser upgrades HTTP to HTTPS for the domain
- X-Frame-Options: DENY or SAMEORIGIN; prevents embedding in iframes
- X-Content-Type-Options: nosniff; prevents MIME type sniffing

## Code Example

```typescript
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'")
  next()
})
```

## Under the Hood

The browser reads these headers and enforces the policies. CSP is complex—start with report-only mode to avoid breaking the app. HSTS is cached for the max-age duration. X-Frame-Options is simpler than CSP frame-ancestors but less flexible. Use both where appropriate.

## Common Mistakes

- Not setting security headers at all
- CSP too strict without testing (breaks functionality)
- HSTS with short max-age in development (hard to revert)
- Forgetting headers on error pages or static assets

## Best Practices

- Set X-Content-Type-Options and X-Frame-Options on all responses
- Use HSTS in production with long max-age; preload for inclusion in browser lists
- Start CSP in report-only; tighten and enforce gradually
- Use helmet or similar middleware; customize per route if needed

## Summary

Security headers add defense in depth. Set X-Content-Type-Options, X-Frame-Options, HSTS, and CSP. Test CSP before enforcing; use helmet for consistency.
