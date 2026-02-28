# Practice: SSO Integration

## Tasks

### Task 1
Integrate with an OIDC provider (e.g., Auth0, Okta, or Google): implement `GET /auth/sso` that redirects to the provider's authorization URL with `client_id`, `redirect_uri`, `response_type=code`, `scope=openid profile email`, and `state`. Store `state` in the session for validation.

### Task 2
Implement `GET /auth/sso/callback`: validate `state`, exchange the code for tokens, verify the ID token, and extract `sub` from the ID token. Create or update the local user based on `sub` (and optionally email, name from UserInfo). Establish a session and redirect to the app. Handle errors (e.g., user denied, invalid state).

### Task 3
Support Just-In-Time (JIT) provisioning: when the IdP returns a `sub` for a user not in your database, create the user record automatically. Map IdP attributes (email, name) to your user model. Allow configuration for which attributes to require (e.g., email must be present). Handle attribute updates on subsequent logins.

### Task 4
Implement SAML SSO (in addition to or instead of OIDC): add a SAML endpoint that receives the SAML response from the IdP. Parse the assertion, verify the signature, extract the user identifier, and create a session. Handle SAML-specific concerns (metadata, audience validation, issuer validation).

### Task 5
Add IdP-initiated SSO: support the flow where the user starts at the IdP (e.g., company portal) and is redirected to your app with a SAML assertion or OIDC authorization. Implement the appropriate endpoint and validate the incoming request. Support multiple IdPs (e.g., different tenants with different IdPs) using configuration or tenant-specific routing.