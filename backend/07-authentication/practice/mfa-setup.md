# Practice: MFA Setup

## Tasks

### Task 1
Add TOTP enrollment: `POST /mfa/setup` generates a secret with `speakeasy.generateSecret()`, stores it temporarily (encrypted or in session) associated with the user, and returns the secret and a QR code URL for authenticator apps. Require the user to be authenticated.

### Task 2
Implement TOTP verification: `POST /mfa/verify` accepts the 6-digit code from the user's authenticator. Verify with `speakeasy.totp.verify()` using a 1-step window for clock drift. On success, persist the secret to the user record and mark MFA as enabled. Clear the temporary secret.

### Task 3
Require MFA for sensitive operations: after login, if the user has MFA enabled, return a temporary token that only allows access to `POST /mfa/verify` or `POST /mfa/disable`. After successful verification, issue the full session or JWT. Block access to other endpoints until MFA is verified.

### Task 4
Generate backup codes: when MFA is enabled, create 10 one-time backup codes (random, 8 chars each). Hash and store them. Return the raw codes once to the user. Add `POST /mfa/verify-backup` that accepts a backup code, verifies it, and marks it as used. Allow login with backup code when the primary factor is unavailable.

### Task 5
Add MFA recovery flow: if the user loses their device and backup codes, support recovery via email. Require a delay (e.g., 24 hours) and email confirmation before disabling MFA. Log all MFA enrollment, verification, and recovery events for audit. Rate limit verification attempts (e.g., 5 per 15 minutes) to prevent brute force.