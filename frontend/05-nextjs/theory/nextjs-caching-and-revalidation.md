# Caching and Revalidation

## Concept

Next.js caches fetch requests and full route segments by default. Static rendering is cached. You can control caching with `fetch` options, `revalidate` in layout/page, or `dynamic`/`dynamicParams`. Revalidation: time-based (revalidate), on-demand (revalidatePath), or opt-out (no-store).

## Why It Matters

Caching improves performance and reduces server load. But stale data can be a problem. Understanding cache layers and revalidation strategies lets you balance freshness and performance. Different routes need different strategies.

## Key Concepts

- fetch: cached by default; `cache: "no-store"` for dynamic
- `next: { revalidate: 60 }` — revalidate every 60 seconds
- `revalidatePath("/path")` or `revalidateTag("tag")` for on-demand
- `export const dynamic = "force-dynamic"` — no caching
- `export const revalidate = 60` — segment-level revalidation

## Code Example

```jsx
// Time-based revalidation
const res = await fetch(url, { next: { revalidate: 3600 } })

// No cache
const res = await fetch(url, { cache: "no-store" })

// Page-level
export const revalidate = 60

// On-demand (in Route Handler or Server Action)
import { revalidatePath } from "next/cache"
revalidatePath("/blog")
```

## Under the Hood

Next.js has a multi-layer cache: Data Cache (fetch), Full Route Cache (rendered output), Router Cache (client-side). Revalidation invalidates the relevant layer. Static by default; dynamic when you use dynamic APIs or opt out.

## Common Mistakes

- Expecting fresh data when cache is active
- Overusing no-store (loses performance)
- Not setting revalidate for semi-dynamic data
- Confusing segment revalidate with fetch revalidate

## Best Practices

- Use default cache for static data
- revalidate for semi-dynamic (e.g., 60s)
- no-store for user-specific or real-time
- revalidatePath after mutations (e.g., form submit)

## Summary

Next.js caches fetch and routes. Control with fetch options, revalidate, dynamic. Time-based or on-demand revalidation. Balance freshness and performance. Invalidate after mutations.
