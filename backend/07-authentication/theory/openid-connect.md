# OpenID Connect

## Concept

OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0. It adds authentication (who the user is) to OAuth's authorization (what the client can access). OIDC returns an ID token (JWT with user claims) alongside the access token, and defines a UserInfo endpoint for profile data.

## Why It Matters

OAuth alone does not standardize identity. OIDC provides a consistent way to get user identity (email, name, sub) from identity providers (Google, Auth0, Okta). Backends implementing "Sign in with X" typically use OIDC for the user info.

## Key Concepts

- ID token: JWT containing claims (sub, email, name) about the authenticated user
- UserInfo endpoint: returns additional profile data; requires access token
- Discovery: `.well-known/openid-configuration` for endpoints and supported features
- Scopes: `openid` required; `profile`, `email` for additional claims

## Code Example

```typescript
// After token exchange, decode ID token for user identity
const decoded = jwt.decode(idToken) as { sub: string; email?: string }
const userId = decoded.sub

// Or fetch UserInfo with access token
const userInfo = await fetch(userInfoUrl, {
  headers: { Authorization: `Bearer ${accessToken}` }
}).then(r => r.json())
```

## Under the Hood

The authorization server issues an ID token (signed JWT) when `openid` scope is requested. The ID token's `sub` is the stable user identifier. The client can verify the signature using the provider's JWKS. UserInfo is an OAuth-protected endpoint returning JSON with standard claims.

## Common Mistakes

- Using the access token as the user identifier (use ID token `sub`)
- Not verifying the ID token signature and claims
- Assuming all providers return the same claims (check discovery)
- Storing the ID token long-term (it may expire; use `sub` for persistence)

## Best Practices

- Always request `openid` scope; verify ID token before trusting claims
- Use `sub` as the canonical user ID; it is stable across sessions
- Fetch UserInfo only when needed; cache with short TTL
- Validate `aud` and `iss` in the ID token for your application

## Summary

OIDC adds identity to OAuth via ID tokens and UserInfo. Use `sub` for user identity; verify ID tokens; request minimal scopes. Essential for "Sign in with" integrations.
