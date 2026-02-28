# Practice: Session Authentication

## Tasks

### Task 1
Create a minimal Express server with session middleware (express-session, in-memory store). Add a `POST /login` endpoint that accepts `{ username, password }`, validates against a hardcoded user, and sets `req.session.userId` on success. Return 401 on invalid credentials.

### Task 2
Add `GET /me` that returns the current user's ID from the session, or 401 if not authenticated. Add `POST /logout` that destroys the session. Protect `/me` and `/logout` so unauthenticated requests return 401.

### Task 3
Configure the session cookie with `httpOnly: true`, `secure: true` (when NODE_ENV is production), `sameSite: 'lax'`, and `maxAge` of 24 hours. Add a simple HTML login form that POSTs to `/login` and redirects to `/me` on success.

### Task 4
Replace the in-memory session store with Redis (connect-redis). Ensure sessions persist across server restarts. Add session regeneration on login to prevent session fixation.

### Task 5
Implement session invalidation on password change: when a user's password is updated, invalidate all existing sessions for that user. Store a `userSessionVersion` in the user record; include it in the session and reject sessions with an outdated version.