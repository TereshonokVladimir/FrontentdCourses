# Practice: Middleware

## Tasks

### Task 1
Create middleware.js at the project root. Log the request URL. Return NextResponse.next(). Add a matcher that only runs for /dashboard/*. Verify it doesn't run for other paths. No semicolons.

### Task 2
Implement auth redirect: if the path starts with /dashboard and there's no "session" cookie, redirect to /login. Otherwise, next(). Set a session cookie manually (browser devtools) to test. Add a matcher for /dashboard and /admin. Ensure /login and / are not matched (or handle them: if logged in and visiting /login, redirect to /dashboard).

### Task 3
Add a redirect for legacy URLs: /old-blog/* should redirect to /blog/*. Use NextResponse.redirect with the new URL. Preserve the rest of the path. Add a redirect for /home to /. Use the config matcher to limit which paths run the middleware.

### Task 4
Implement geo-based redirect (mock): read request.geo?.country (Vercel) or a header. If country is "US", redirect /pricing to /pricing-us. Otherwise, /pricing stays as is. For local dev, use a custom header X-Country for testing. Add a rewrite: /blog-en to /blog?lang=en (internal rewrite, not redirect).

### Task 5
Build a middleware that: (1) protects /dashboard and /admin, (2) redirects legacy /old-* to new paths, (3) adds a custom header X-Request-Id (UUID) to all requests for tracing. Use a single middleware with conditional logic. Ensure the matcher is correct. Add a /middleware-test page that displays the request headers (to verify X-Request-Id). Document the middleware behavior and matcher patterns.
