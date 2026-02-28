# Practice: Refresh Token Flow

## Tasks

### Task 1
Extend the JWT login to return both an access token (15 min expiry) and a refresh token (7 days). Store the refresh token in a database with `userId`, `tokenHash`, and `expiresAt`. Hash the refresh token before storing; return the raw token to the client.

### Task 2
Create `POST /token` that accepts `grant_type=refresh_token` and `refresh_token`. Verify the token hash, check expiry, and return a new access token. Optionally return a new refresh token. Invalidate the old refresh token after use (rotation).

### Task 3
Implement refresh token reuse detection: if a refresh token is used twice (e.g., after it was already rotated), revoke all refresh tokens for that user and return 401. Log the incident for security monitoring.

### Task 4
Add `POST /logout` that revokes the current refresh token (and optionally blacklists the access token). Add `POST /logout-all` that revokes all refresh tokens for the authenticated user (e.g., after password change).

### Task 5
Support refresh token families: when reuse is detected, revoke the entire family (the reused token and all tokens derived from it). Store a `familyId` for each token; on reuse, mark the family as compromised and reject all tokens in it.