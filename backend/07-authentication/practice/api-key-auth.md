# Practice: API Key Authentication

## Tasks

### Task 1
Create an API key generation endpoint `POST /api-keys` (protected by user auth) that generates a random 32-byte key, hashes it with SHA-256 before storing, and returns the raw key once (e.g., `sk_live_abc123...`). Store `userId`, `keyHash`, `prefix` (first 8 chars), and `createdAt` in the database.

### Task 2
Add middleware that extracts the API key from `X-API-Key` or `Authorization: Bearer` header. Look up the key by hash (use constant-time comparison). Attach the associated user to `req.user`. Return 401 for missing or invalid keys. Support both user sessions and API keys for the same routes.

### Task 3
Implement key scoping: allow keys to be created with a list of scopes (e.g., `read:users`, `write:posts`). Store scopes with the key. In the middleware, attach `req.apiKeyScopes`. Create a `requireScope('read:users')` middleware that returns 403 if the key lacks the required scope.

### Task 4
Add key revocation: `DELETE /api-keys/:id` allows users to revoke their own keys. Soft-delete by setting `revokedAt`. The auth middleware must reject revoked keys. Add `GET /api-keys` to list the user's keys (show prefix and createdAt, never the full key).

### Task 5
Implement rate limiting per API key: track request count per key in Redis (sliding window or fixed window). Return 429 with `Retry-After` when the limit is exceeded. Allow different limits per scope (e.g., `write:*` keys have lower limits than `read:*`). Make limits configurable per key.