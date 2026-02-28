# Single Sign-On (SSO)

## Concept

Single Sign-On (SSO) lets users authenticate once and access multiple applications without re-entering credentials. An identity provider (IdP) centralizes authentication; applications trust the IdP via SAML or OAuth/OIDC. Enterprise SSO reduces password fatigue and improves security through centralized control.

## Why It Matters

Enterprises require SSO for compliance and user experience. Employees use one login for email, HR, and internal tools. B2B customers expect SSO into your product. Implementing SSO (as a service provider) requires integrating with IdPs like Okta, Azure AD, or Google Workspace.

## Key Concepts

- IdP: central authentication service (Okta, Auth0, Azure AD)
- SP: your application; trusts the IdP for identity
- SAML: XML-based; common in enterprise
- OIDC: JSON-based; simpler; growing adoption

## Code Example

```typescript
// OIDC: redirect to IdP
app.get('/login', (req, res) => {
  const authUrl = `https://idp.example.com/authorize?` +
    `client_id=${clientId}&redirect_uri=${callbackUrl}&` +
    `response_type=code&scope=openid%20profile&state=${state}`
  res.redirect(authUrl)
})

// Callback: exchange code for tokens, create local session
app.get('/callback', async (req, res) => {
  const { code, state } = req.query
  // validate state, exchange code, create session
})
```

## Under the Hood

User hits your app → redirect to IdP → user logs in at IdP → IdP redirects back with code (OIDC) or SAML assertion → your app exchanges/validates and creates a local session. The IdP handles MFA, password policy, and account lifecycle. Your app only needs to trust the IdP's response.

## Common Mistakes

- Not validating the IdP response (signature, audience, issuer)
- Skipping state parameter validation (CSRF)
- Hardcoding IdP URLs; use discovery when available
- Not handling Just-In-Time (JIT) provisioning (new users from IdP)

## Best Practices

- Validate all IdP responses; verify signatures and claims
- Use discovery (OIDC `.well-known`) for flexibility
- Support JIT user creation when IdP sends new user
- Map IdP attributes to your user model; handle attribute changes

## Summary

SSO centralizes authentication at an IdP; your app trusts it via OIDC or SAML. Validate responses; support JIT provisioning. Essential for enterprise and B2B.
