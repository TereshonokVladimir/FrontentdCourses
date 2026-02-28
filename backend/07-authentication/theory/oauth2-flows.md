# OAuth 2.0 Flows

## Concept

OAuth 2.0 defines several grant types (flows) for obtaining tokens. The authorization code flow is the most secure for web apps: user authorizes, server returns a one-time code, client exchanges it for tokens. Client credentials flow is for server-to-server; PKCE extends authorization code for public clients (SPAs, mobile).

## Why It Matters

Choosing the wrong flow creates security gaps. Implicit flow is deprecated. Client credentials cannot represent a user. PKCE is required for SPAs without a backend. Production backends must implement the correct flow for each client type.

## Key Concepts

- Authorization code: server-side exchange; code is one-time, short-lived
- PKCE: code_verifier + code_challenge prevent code interception
- Client credentials: machine-to-machine; no user context
- Refresh token: long-lived; exchange for new access tokens without re-auth

## Code Example

```typescript
// PKCE: generate verifier and challenge
const verifier = crypto.randomBytes(32).toString('base64url')
const challenge = crypto.createHash('sha256').update(verifier).digest('base64url')

// Exchange code + verifier for tokens
const { data } = await axios.post(tokenUrl, {
  grant_type: 'authorization_code',
  code,
  redirect_uri,
  client_id,
  code_verifier: verifier
})
```

## Under the Hood

In authorization code flow, the client redirects the user to the auth server. The server returns a code to the redirect URI. The client sends the code (and PKCE verifier if used) to the token endpoint with client credentials. The server validates and returns access + refresh tokens. PKCE binds the token request to the original authorization.

## Common Mistakes

- Using implicit flow (tokens in URL fragment; deprecated)
- Skipping PKCE for SPA/mobile clients
- Using client credentials when user context is needed
- Not securing the redirect URI (exact match; no open redirects)

## Best Practices

- Use authorization code + PKCE for SPAs and native apps
- Use client credentials only for service accounts
- Validate redirect_uri strictly; whitelist exact URIs
- Store refresh tokens securely; rotate on use when possible

## Summary

Authorization code flow is preferred for user-facing apps; add PKCE for public clients. Client credentials for machine-to-machine. Avoid deprecated flows like implicit.
