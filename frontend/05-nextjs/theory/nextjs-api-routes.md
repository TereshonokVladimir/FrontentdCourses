# API Routes

## Concept

API routes are server-side endpoints in your Next.js app. In App Router, use `route.js` (or `route.ts`) in a route segment. Export GET, POST, PUT, DELETE, etc. as functions. They receive Request and return Response. Use for backend logic, webhooks, or BFF (backend-for-frontend).

## Why It Matters

API routes let you build full-stack apps without a separate backend. They run on the server, so they can access secrets and databases. Use for form submissions, webhooks, or proxying to external APIs. They're a core Next.js feature.

## Key Concepts

- `app/api/hello/route.js` → GET /api/hello
- Export `GET`, `POST`, etc. as async functions
- `(request, { params })` — params for dynamic segments
- Return `Response` or `NextResponse`
- Use for: CRUD, webhooks, server actions alternative

## Code Example

```jsx
// app/api/users/route.js
export async function GET() {
  const users = await db.users.findMany()
  return Response.json(users)
}

export async function POST(request) {
  const body = await request.json()
  const user = await db.users.create({ data: body })
  return Response.json(user, { status: 201 })
}

// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const { id } = await params
  const user = await db.users.findUnique({ where: { id } })
  if (!user) return Response.json({ error: "Not found" }, { status: 404 })
  return Response.json(user)
}
```

## Under the Hood

Route handlers run on the server. They're similar to Express handlers. Next.js maps HTTP methods to exported functions. Dynamic params are available in the second argument. They don't run through the React render pipeline.

## Common Mistakes

- Forgetting to return Response
- Not handling errors (try/catch, proper status codes)
- Using client-only code in route handlers
- Confusing route.js with page.js (different purposes)

## Best Practices

- Return appropriate status codes (200, 201, 400, 404, 500)
- Validate input
- Use NextResponse for cookies, redirects
- Consider Server Actions for mutations from forms

## Summary

API routes in app/api/*/route.js. Export GET, POST, etc. Receive Request, return Response. Use for backend logic. Validate input. Return proper status codes.
