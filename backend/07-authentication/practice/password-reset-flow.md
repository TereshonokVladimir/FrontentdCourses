# Practice: Password Reset Flow

## Tasks

### Task 1
Implement `POST /forgot-password` that accepts an email. Generate a cryptographically random 32-byte token, hash it, and store it in a `password_resets` table with `email`, `tokenHash`, and `expiresAt` (1 hour). Send an email with a link containing the raw token. Return the same generic response for existing and non-existing emails to prevent enumeration. Rate limit to 3 per hour per IP.

### Task 2
Create `POST /reset-password` that accepts `{ token, newPassword }`. Look up the token by hash, verify it has not expired or been used, validate the new password strength, hash it, update the user's password, and delete the reset record. Return 400 for invalid or expired token. Invalidate all sessions for the user after a successful reset.

### Task 3
Implement single-use tokens: mark the token as used as soon as the reset form is loaded (or when the password is submitted). Prevent token reuse. Consider a two-step flow: first request validates the token and returns a short-lived "reset session" token; second request uses that token to set the password. This prevents token leakage in referrer headers.

### Task 4
Add token invalidation on password change: when a user changes their password via the normal flow, invalidate any pending password reset tokens for that account. This prevents an attacker with an old reset link from using it after the user has changed their password.

### Task 5
Implement secure reset link: use a one-time token that is only valid for the specific email. When the user clicks the link, show a form that only requires the new password (email is implicit from the token). Log all reset requests (success and failure) with IP and timestamp for audit. Add optional email notification on successful reset.