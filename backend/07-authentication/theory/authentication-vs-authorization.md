# Authentication vs Authorization

## Concept

Authentication answers "Who are you?"—verifying identity (e.g., username/password, OAuth). Authorization answers "What can you do?"—determining permissions after identity is established. Both are required for secure access control but solve different problems.

## Why It Matters

Confusing these leads to security gaps and design errors. A system that authenticates but doesn't authorize may let any logged-in user access admin endpoints. One that authorizes without authenticating may expose data to unverified callers. Production systems need both, in the right order.

## Key Concepts

- Authentication: identity verification (login, token validation, MFA)
- Authorization: permission checks (roles, scopes, resource-level access)
- Order: always authenticate first, then authorize
- 401 Unauthorized: authentication failed or missing credentials
- 403 Forbidden: authenticated but not permitted to perform the action

## Code Example

```typescript
// Middleware order matters: auth first, then authorization
app.use('/api/admin', authenticateJWT)      // Who are you?
app.use('/api/admin', requireRole('admin'))  // Are you allowed?
app.get('/api/admin/users', getUsers)
```

## Under the Hood

Authentication typically validates credentials or tokens and attaches user identity to the request context. Authorization middleware reads that identity and checks against policies (RBAC, ABAC) before allowing the handler to run. If auth fails, return 401; if authorization fails, return 403.

## Common Mistakes

- Returning 401 when the user is authenticated but lacks permission (should be 403)
- Checking authorization before authentication
- Storing authorization rules in the client or trusting client-sent roles
- Using the same mechanism for both (e.g., a single "admin" flag that implies both)

## Best Practices

- Separate auth and authz middleware; compose them explicitly
- Use 401 for "not logged in" or "invalid token"; 403 for "logged in but forbidden"
- Never trust client-provided roles or permissions; always verify server-side
- Log both auth failures and authorization denials for security auditing

## Summary

Authentication verifies identity; authorization enforces permissions. Apply authentication first, then authorization. Use 401 for auth failures and 403 for permission denials.
