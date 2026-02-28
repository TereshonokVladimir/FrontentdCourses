# Authentication Patterns

## Concept

Next.js doesn't include auth—you integrate a provider (NextAuth, Auth.js, Clerk, etc.) or build custom. Common pattern: middleware checks auth, redirects unauthenticated users. Session in cookies. Protect routes by checking session in layout or page. Server Components can read cookies directly.

## Why It Matters

Most apps need auth. Next.js provides the structure (middleware, cookies, Server Components) but not the logic. Understanding where to check auth (middleware vs layout vs page) and how to get the session is essential. Different providers have different APIs.

## Key Concepts

- Middleware: check token/session, redirect to login
- Session in cookie (httpOnly, secure)
- Server Component: read cookies(), check session
- Client: use provider's hook (useSession)
- Protected routes: redirect in middleware or layout

## Code Example

```js
// middleware.js
export function middleware(request) {
  const token = request.cookies.get("session")
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next()
}

// app/dashboard/layout.js
import { cookies } from "next/headers"
export default async function Layout({ children }) {
  const session = await getSession(cookies())
  if (!session) redirect("/login")
  return children
}
```

## Under the Hood

Middleware runs first. It can read cookies and redirect. Layouts and pages run after. They can also check session and redirect. Session is typically stored in a cookie, validated on the server. Client gets session via a hook that may fetch from an API.

## Common Mistakes

- Checking auth only in page (flash of protected content)
- Storing sensitive data in client-accessible cookies
- Not validating session on server (trust but verify)
- Forgetting to protect API routes

## Best Practices

- Use middleware for fast redirect
- Validate session server-side for protected content
- Use httpOnly cookies for tokens
- Protect API routes that return sensitive data

## Summary

Auth is external. Middleware for redirect. Session in cookies. Validate server-side. Protect routes and APIs. Use a provider or custom. Never trust client-only checks.
