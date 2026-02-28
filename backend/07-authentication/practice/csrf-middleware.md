# Practice: CSRF Middleware

## Tasks

### Task 1
Implement a simple CSRF token middleware: generate a random 32-byte token, store it in the session, and provide a function to retrieve it for inclusion in forms. Add a middleware that, for state-changing methods (POST, PUT, DELETE, PATCH), checks that the request includes the token in a header (`X-CSRF-Token`) or body, and rejects with 403 if missing or invalid.

### Task 2
Use the double-submit cookie pattern: set a cookie with a random value (signed or unsigned) and require the same value in the `X-CSRF-Token` header. The client reads the cookie (via JavaScript for SPA) and sends it in the header. For same-origin requests, the cookie is sent automatically; the server compares header to cookie. Implement this without server-side session storage.

### Task 3
Integrate with your auth flow: exempt `GET`, `HEAD`, `OPTIONS` from CSRF checks. Exempt the login endpoint if it does not rely on session cookies for the response. For API routes that use Bearer tokens (no cookies), skip CSRF. Apply CSRF only to cookie-authenticated, state-changing routes.

### Task 4
Add CSRF token rotation: after a successful form submission or periodically, issue a new token and invalidate the old one. This limits the window for token theft. Ensure the client can obtain a fresh token (e.g., via `GET /csrf-token`) before making requests. Handle the case where the user has multiple tabs open.

### Task 5
Support SameSite cookie as a CSRF mitigation: when using `SameSite: Strict` or `Lax`, cross-site requests will not include the cookie, so traditional CSRF is mitigated. Document when CSRF tokens are still needed (e.g., `Lax` allows GET-based CSRF in some cases). Implement a hybrid approach: use SameSite and CSRF tokens for defense in depth. Add a test that verifies CSRF protection blocks a forged request.