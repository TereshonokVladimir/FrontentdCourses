# Practice: Account Lockout

## Tasks

### Task 1
Implement account lockout: after 5 failed login attempts for a given email, lock the account for 15 minutes. Store `failCount` and `lockedUntil` in the database (or Redis). On login, check lockout before attempting password verification. Return 423 Locked with `Retry-After` header when locked.

### Task 2
Reset the failure count on successful login. Ensure that a successful login clears the lockout state. Add an admin endpoint `POST /admin/users/:id/unlock` (protected) that immediately clears the lockout for a user. Log all lockout and unlock events.

### Task 3
Prevent user enumeration: when the account is locked, return the same error structure as for invalid credentials (e.g., "Invalid email or password") but with a 423 status. Include `Retry-After` in the response for clients that can display a countdown. Avoid revealing whether the account exists.

### Task 4
Implement lockout escalation: first lockout is 15 minutes, second within 24 hours is 1 hour, third is 24 hours. Store lockout history (count, timestamp) per user. Reset the escalation after 24 hours of no lockouts. Log escalation for security monitoring.

### Task 5
Add notification on lockout: when an account is locked, send an email to the user (if the email exists and is verified) informing them of the lockout and providing a "I didn't do this" link. The link could trigger an admin review or unlock request. Ensure the notification does not leak information about account existence to an attacker (e.g., only send if the account was previously verified).