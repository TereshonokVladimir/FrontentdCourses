# Middleware

## Concept

Middleware runs before a request is completed. It can rewrite, redirect, or modify the response. Create `middleware.js` at the project root. It receives the request and returns a NextResponse. Use for auth, redirects, A/B testing, or geo-based routing.

## Why It Matters

Middleware is the only place that runs on every request before the route. It's ideal for auth checks (redirect to login), redirects (legacy URLs), or adding headers. It runs on the Edge by default—fast, but limited APIs.

## Key Concepts

- `middleware.js` at root (same level as app/)
- Runs before request completes
- `NextResponse.next()`, `NextResponse.redirect()`, `NextResponse.rewrite()`
- `matcher` to limit which paths run
- Runs on Edge Runtime (no Node APIs)

## Code Example

```js
// middleware.js
import { NextResponse } from "next/server"

export function middleware(request) {
  const token = request.cookies.get("token")
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"]
}
```

## Under the Hood

Next.js runs middleware on the Edge before the request reaches the route. It can short-circuit with redirect/rewrite or pass through with next(). The matcher reduces which requests run the middleware.

## Common Mistakes

- Middleware runs on Edge—no Node APIs (fs, etc.)
- Matcher is a path pattern, not regex (unless you use full path)
- Redirect loops (redirecting to a path that also matches matcher)
- Blocking the request without returning a response

## Best Practices

- Use matcher to limit scope
- Keep middleware lightweight (runs on every matched request)
- Use for auth, redirects, headers
- Avoid heavy logic—defer to route/API

## Summary

Middleware runs before request. Use for auth, redirects, rewrites. matcher limits scope. Edge Runtime. Return NextResponse. Keep it fast.
