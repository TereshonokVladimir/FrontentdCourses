# OAuth 2.0 Overview

## Concept

OAuth 2.0 is an authorization framework that lets a client obtain limited access to a resource owner's data on a resource server, without sharing credentials. It defines roles (resource owner, client, authorization server, resource server) and flows for obtaining access tokens. It is not an authentication protocol by itself—OpenID Connect adds identity on top.

## Why It Matters

OAuth 2.0 powers "Sign in with Google/GitHub" and API access delegation. Backends implement OAuth as clients (to call third-party APIs) or as authorization servers (to let users grant access to their data). Understanding roles and flows is essential for integrations and building secure auth.

## Key Concepts

- Roles: resource owner (user), client (app), authorization server (issues tokens), resource server (API)
- Access token: short-lived credential for API access
- Authorization code: one-time code exchanged for tokens; never exposed to user agent
- Scopes: limit what the client can access (e.g., `read:user`, `write:repo`)

## Code Example

```typescript
// Authorization URL for user to grant access
const authUrl = `https://auth.provider.com/authorize?` +
  `client_id=${clientId}&redirect_uri=${redirectUri}&` +
  `response_type=code&scope=read:user&state=${randomState}`
```

## Under the Hood

The user is redirected to the authorization server, authenticates, and consents to scopes. The server redirects back with an authorization code. The client exchanges the code (with client secret) for access and optionally refresh tokens. The access token is sent to the resource server in the `Authorization` header.

## Common Mistakes

- Storing client secret in frontend code (confidential clients only)
- Not validating `state` to prevent CSRF in the callback
- Using implicit flow for sensitive apps (deprecated; use authorization code)
- Confusing OAuth with authentication (OAuth delegates access; OIDC adds identity)

## Best Practices

- Use authorization code flow with PKCE for SPAs and mobile apps
- Validate `state` on callback; use cryptographically random values
- Request minimal scopes; explain to users what access means
- Store client secrets securely; never expose in client-side code

## Summary

OAuth 2.0 delegates access via tokens. Use authorization code flow; validate state; request minimal scopes. Add OIDC when you need user identity, not just API access.
