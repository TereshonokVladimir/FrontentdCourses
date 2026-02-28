# Practice: Secure Cookies

## Tasks

### Task 1
Configure the session cookie with secure flags: set `httpOnly: true`, `secure: true` when `NODE_ENV === 'production'`, `sameSite: 'lax'`, and `maxAge: 86400000`. Verify in the browser that the cookie is not accessible via `document.cookie` and is only sent over HTTPS in production.

### Task 2
Implement a "remember me" cookie: when the user checks "remember me" on login, set a separate long-lived cookie (e.g., 30 days) with a random token. Store the token hash in the database. On session expiry, if the remember-me cookie is valid, automatically create a new session. Use the same secure flags for the remember-me cookie.

### Task 3
Add CSRF protection for cookie-based auth: use the `csurf` middleware or implement double-submit cookie. Generate a CSRF token, store it in a cookie, and require it in a header or form field for state-changing requests. Reject requests with missing or mismatched tokens.

### Task 4
Implement cookie signing: sign the session ID (or a minimal payload) with HMAC before setting the cookie. On read, verify the signature. Reject tampered cookies. Use a secret from environment variables. This adds integrity even if the cookie is somehow modified.

### Task 5
Handle cookie consent and SameSite: when the user has not consented to non-essential cookies, use `SameSite: 'Strict'` for the session cookie to maximize CSRF protection. When they consent to analytics (cross-site), you may need `SameSite: 'Lax'` for certain flows. Document the trade-offs and implement a configurable SameSite policy.