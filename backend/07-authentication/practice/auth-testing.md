# Practice: Auth Testing

## Tasks

### Task 1
Write unit tests for the auth middleware: test that a valid JWT returns 200 and attaches `req.user`; an invalid or missing token returns 401; an expired token returns 401. Use a test secret and known tokens. Mock the token verification if needed.

### Task 2
Write integration tests for the login flow: POST valid credentials and assert 200 with a token; POST invalid credentials and assert 401; POST with missing fields and assert 400. Test that the returned token can be used to access a protected endpoint. Include tests for rate limiting (e.g., 6th attempt returns 429).

### Task 3
Test password reset flow: request reset for an email, extract the token from the mock email sender, and submit a new password. Assert success and that the old password no longer works. Test expired token, invalid token, and already-used token. Verify that the same response is returned for existing and non-existing emails.

### Task 4
Test authorization: create users with different roles (admin, editor, viewer). Assert that protected endpoints return 403 for users lacking the required permission. Test resource-level permissions (e.g., user A cannot edit user B's post). Assert that 401 is returned for unauthenticated requests and 403 for unauthorized.

### Task 5
Implement security-focused tests: verify that the `alg: none` attack is rejected (send a malformed JWT with alg none); verify that a token for user A cannot be used to access user B's resources; verify CSRF protection blocks requests without a valid token; verify that session fixation is prevented (new session ID after login). Use a security testing framework or manual assertions. Document the security test cases.