# Practice: Token Blacklist

## Tasks

### Task 1
Implement a JWT blacklist using Redis: when a token is revoked (logout), store `jti` in Redis with TTL equal to the token's remaining lifetime. In the auth middleware, after verifying the token, check if `jti` exists in Redis. If so, return 401. Use a key format like `revoked:${jti}`.

### Task 2
Extend the blacklist to support token families: when a refresh token is revoked, add all access tokens derived from it to the blacklist. This requires storing a mapping from refresh token to access token JTIs, or blacklisting by `familyId` if you use token families. Implement a cleanup strategy for expired entries (Redis TTL handles this).

### Task 3
Implement "logout all devices": when the user requests to revoke all tokens, add all active JTIs for that user to the blacklist. This requires tracking issued tokens per user. Alternatively, use a token version: store `tokenVersion` in the user record, include it in the JWT, and reject tokens with an outdated version. When revoking all, increment `tokenVersion`.

### Task 4
Optimize blacklist lookups: use a Redis Bloom filter for a first-pass check (reduces Redis calls for non-revoked tokens). If the Bloom filter suggests the token might be revoked, do a definitive Redis lookup. For high-traffic systems, consider caching "not revoked" in local memory with short TTL to reduce Redis load.

### Task 5
Implement blacklist with database fallback: store revoked JTIs in Redis for fast lookup, and also persist to a database for audit and recovery. If Redis is unavailable, fall back to the database (slower but ensures revocation still works). Add a sync job that repopulates Redis from the database on startup or after Redis flush.