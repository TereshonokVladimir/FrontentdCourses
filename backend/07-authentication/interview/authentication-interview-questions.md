# Interview Questions: Authentication

## Beginner

1. What is the difference between authentication and authorization?
2. What does a 401 status code mean? What about 403?
3. What is a session? How does it differ from a JWT?
4. What are the three parts of a JWT?
5. Why should you never store passwords in plaintext?
6. What is bcrypt and why is it used for passwords?
7. What do the `HttpOnly` and `Secure` cookie flags do?
8. What is CSRF and how do CSRF tokens protect against it?
9. What is OAuth 2.0? What problem does it solve?
10. What is the difference between an access token and a refresh token?
11. What is MFA/2FA? Give an example of a second factor.
12. What is rate limiting and why is it used on login endpoints?
13. What is an API key? When would you use it instead of OAuth?
14. What does CORS do? Why might an API need CORS headers?
15. What is the purpose of the `SameSite` cookie attribute?

## Intermediate

1. Explain the OAuth 2.0 authorization code flow. Why is it preferred over the implicit flow?
2. What is PKCE and when is it required?
3. How would you implement token revocation for JWTs?
4. What is the algorithm confusion attack on JWTs? How do you prevent it?
5. Explain the difference between RBAC and ABAC. When would you use each?
6. How does refresh token rotation work? Why revoke the old token on use?
7. What is OpenID Connect and how does it relate to OAuth?
8. How would you prevent brute force attacks on a login endpoint?
9. What is account lockout? What are the trade-offs?
10. How would you design a secure password reset flow?
11. What is the double-submit cookie pattern for CSRF protection?
12. How do you store JWTs securely in a web application? What are the risks of localStorage?
13. What security headers should you set on an API? Explain HSTS and CSP.
14. How would you implement session invalidation on password change?
15. What is SSO? How does it work with OAuth/OIDC?
16. How would you scope API keys to limit what they can access?
17. What is the difference between HS256 and RS256 for JWTs?
18. How would you implement audit logging for authentication events?
19. What is token blacklisting? When would you use it?
20. How do you prevent user enumeration on login and password reset endpoints?

## Advanced

1. Design a distributed session store that works across multiple server instances. What are the trade-offs of Redis vs database?
2. How would you implement "logout all devices" for a JWT-based system?
3. Explain refresh token reuse detection. How does it indicate token theft?
4. Design an authorization system that supports both role-based and resource-level (e.g., "own posts only") permissions.
5. How would you migrate from bcrypt to Argon2 for existing user passwords?
6. What are the security implications of using `SameSite: None` for cookies?
7. How would you implement rate limiting that works across multiple API instances?
8. Design a multi-tenant system where each tenant can have a different IdP for SSO.
9. How would you handle token revocation in a microservices architecture where each service validates JWTs independently?
10. Explain the trade-offs between short-lived access tokens and long-lived sessions. How do you balance security and UX?
11. How would you implement MFA with WebAuthn? What are the advantages over TOTP?
12. Design an API key system with scoping, rate limits per key, and audit logging.
13. How do you prevent session fixation attacks?
14. What is the difference between SAML and OIDC for enterprise SSO? When would you choose each?
15. How would you implement permission caching with invalidation when roles change?
16. Design a password reset flow that prevents token leakage via referrer headers.
17. How would you detect and respond to credential stuffing attacks?
18. What is the principle of least privilege? How do you apply it in an RBAC system?
19. How would you implement audit log integrity to detect tampering?
20. Design an auth system that supports both user login and machine-to-machine (service account) access. How do the flows differ?
