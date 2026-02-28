# Practice: Password Hashing

## Tasks

### Task 1
Create a user registration endpoint `POST /register` that accepts `{ email, password }`. Hash the password with bcrypt (cost factor 12) before storing in the database. Return 201 with user ID and email (never the password). Validate that email is unique.

### Task 2
Implement `POST /login` that looks up the user by email and verifies the password with `bcrypt.compare()`. Return 401 for invalid email or password. Use constant-time comparison for the email lookup result to prevent user enumeration (optional: same response time for both cases).

### Task 3
Add a password strength validator: require minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character. Return 400 with validation errors if the password is weak. Reject common passwords (use a list of top 10,000 or similar).

### Task 4
Implement password change: `POST /change-password` requires authentication and accepts `{ currentPassword, newPassword }`. Verify the current password, validate the new one, hash it, and update the user. Invalidate all sessions or refresh tokens for the user after a successful change.

### Task 5
Migrate to Argon2id: replace bcrypt with Argon2. Use `argon2.hash()` with `memoryCost: 65536` and `timeCost: 3`. Implement a migration that re-hashes existing bcrypt passwords on next successful login (lazy migration) and updates the stored hash to Argon2.