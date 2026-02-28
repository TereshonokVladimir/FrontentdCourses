# Practice: JWT Implementation

## Tasks

### Task 1
Create a `POST /login` endpoint that accepts `{ email, password }`, validates credentials, and returns a JWT with `sub` (user ID), `exp` (1 hour), and `iat`. Use HS256 and a secret from environment variables. Return 401 on invalid credentials.

### Task 2
Add a middleware that extracts the Bearer token from the `Authorization` header, verifies it with `jwt.verify()`, and attaches the decoded payload to `req.user`. Return 401 if the token is missing or invalid. Protect `GET /me` to return the current user's data.

### Task 3
Explicitly restrict `jwt.verify()` to `algorithms: ['HS256']` to prevent algorithm confusion. Add validation for `exp` and `iat`. Include `iss` and `aud` in the token and validate them during verification.

### Task 4
Switch to RS256: generate an RSA key pair, sign tokens with the private key, and verify with the public key. Expose a `GET /.well-known/jwks.json` endpoint that returns the public key in JWKS format for external verification.

### Task 5
Implement token blacklisting: on logout, store the token's `jti` in Redis with TTL equal to the token's remaining lifetime. In the auth middleware, reject tokens that appear in the blacklist. Add `POST /logout` that blacklists the current token.