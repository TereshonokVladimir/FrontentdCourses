# Practice: OAuth 2.0 Integration

## Tasks

### Task 1
Implement the OAuth 2.0 authorization code flow as a client: add `GET /auth/login` that redirects to a provider's authorization URL with `client_id`, `redirect_uri`, `response_type=code`, `scope`, and a random `state` value. Store `state` in the session for validation.

### Task 2
Add `GET /auth/callback` that receives the authorization code. Validate the `state` parameter against the session. Exchange the code for access and refresh tokens via a server-side POST to the provider's token endpoint. Store tokens securely and redirect to the app.

### Task 3
Implement PKCE: generate `code_verifier` and `code_challenge` (SHA-256) before redirect. Include `code_challenge` and `code_challenge_method=S256` in the authorization URL. Send `code_verifier` when exchanging the code. Use this for a public client (e.g., SPA backend).

### Task 4
Add OpenID Connect: request `openid` scope and parse the ID token. Verify the ID token signature using the provider's JWKS. Extract `sub` as the canonical user ID and create or update the local user. Use the ID token for identity; use the access token only for API calls to the provider.

### Task 5
Implement token refresh: when the access token expires, use the refresh token to obtain a new access token (and optionally a new refresh token). Store updated tokens. Add middleware that automatically refreshes the token before making provider API calls, and handle refresh failures (e.g., re-auth required).