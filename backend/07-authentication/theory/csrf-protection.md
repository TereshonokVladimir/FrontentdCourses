# CSRF Protection

## Concept

Cross-Site Request Forgery (CSRF) tricks a user's browser into sending authenticated requests to a site they are logged into. The attacker's page triggers a request (form submit, img src) that includes the victim's cookies. CSRF protection ensures requests originate from your application, not a malicious site.

## Why It Matters

Without protection, an attacker can trigger state-changing actions (transfer money, change email) using the victim's session. Browsers send cookies automatically on same-site requests; if your app relies on cookie auth, you need CSRF protection. APIs using Bearer tokens in headers are less vulnerable (no auto-send).

## Key Concepts

- Same-origin: same protocol, domain, port
- CSRF token: random value in form or header; server validates it matches session
- SameSite cookie: limits when cookies are sent on cross-site requests
- Double-submit: token in cookie and header; compare for match

## Code Example

```typescript
import csrf from 'csurf'

const csrfProtection = csrf({ cookie: true })
app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() })
})
app.post('/submit', csrfProtection, (req, res) => {
  // token validated automatically
})
```

## Under the Hood

The server generates a random token, stores it in the session (or a signed cookie), and includes it in the form or a meta tag. The client sends it back in a header or form field. The server compares it to the stored value. Cross-origin requests cannot read the token (same-origin policy), so attackers cannot forge it. SameSite cookies reduce the attack surface further.

## Common Mistakes

- Skipping CSRF for "read-only" endpoints (some have side effects)
- Exposing CSRF token via API for SPA without proper handling
- Not rotating token after use for sensitive operations
- Assuming Bearer token APIs are immune (they are, if token is not in cookies)

## Best Practices

- Use CSRF tokens for cookie-based auth with state-changing requests
- SameSite=Lax or Strict reduces CSRF risk; combine with tokens for defense in depth
- Exempt GET, HEAD, OPTIONS (idempotent); protect POST, PUT, DELETE, PATCH
- For SPA + cookie auth: serve token via same-origin endpoint; send in header

## Summary

CSRF exploits cookie auto-send on cross-site requests. Use CSRF tokens or SameSite cookies. Protect state-changing methods; Bearer token APIs are less vulnerable.
