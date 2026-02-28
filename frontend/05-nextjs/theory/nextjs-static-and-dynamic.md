# Static and Dynamic Rendering

## Concept

Next.js renders routes statically by default when possible. Static: rendered at build time, cached. Dynamic: rendered on each request. A route becomes dynamic when it uses dynamic APIs (cookies, headers, searchParams), opts into dynamic, or has a dynamic segment with generateStaticParams that doesn't cover all paths.

## Why It Matters

Static is fast and cheap. Dynamic is fresh but slower. Choosing the right strategy per route affects performance and cost. Understanding what makes a route dynamic prevents surprises (e.g., expecting static but getting dynamic).

## Key Concepts

- Static: no dynamic APIs, all params from generateStaticParams
- Dynamic: `cookies()`, `headers()`, `searchParams`, `params` (dynamic segment)
- `export const dynamic = "force-static"` or `"force-dynamic"`
- `generateStaticParams` for dynamic routes to pre-render specific paths
- Hybrid: some routes static, some dynamic

## Code Example

```jsx
// Static by default
async function Page() {
  const data = await fetch("https://api.example.com/data")
  return <div>{data}</div>
}

// Force dynamic
export const dynamic = "force-dynamic"

// Dynamic segment - provide static paths
export async function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "world" }]
}
async function Page({ params }) {
  const post = await getPost(params.slug)
  return <article>{post.content}</article>
}
```

## Under the Hood

Next.js analyzes each route at build time. If it finds dynamic APIs or uncached fetch, the route is dynamic. generateStaticParams tells Next.js which dynamic paths to pre-render. The rest are rendered on demand.

## Common Mistakes

- Assuming a route is static when it uses searchParams
- Not providing generateStaticParams for dynamic routes (all rendered on demand)
- Overusing force-dynamic (loses static benefits)
- Confusing revalidate with dynamic (revalidated static is still static)

## Best Practices

- Prefer static when data doesn't change often
- Use generateStaticParams for known dynamic paths
- Use dynamic for user-specific or real-time data
- Revalidate static data for freshness

## Summary

Static = build time. Dynamic = request time. Dynamic APIs make route dynamic. generateStaticParams for pre-rendering. Choose per route. Balance freshness and performance.
