# Data Fetching

## Concept

In App Router, fetch data directly in Server Components with async/await. fetch is extended with caching and deduplication. Use `cache()` for request-level deduplication of other async functions. For Client Components, use useEffect + fetch or a data library (React Query, SWR).

## Why It Matters

Data fetching is central to apps. Server-side fetch avoids loading states and improves SEO. Next.js extends fetch with caching. Understanding where and how to fetch prevents waterfalls and improves performance.

## Key Concepts

- Server Components: async function, await fetch directly
- fetch is cached by default (force-cache)
- Opt out: `fetch(url, { cache: "no-store" })` for dynamic
- `cache()` wraps async functions for deduplication
- Client: useEffect, or use a data library

## Code Example

```jsx
// Server Component
async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 }
  })
  const posts = await res.json()
  return <PostList posts={posts} />
}

// With cache()
import { cache } from "react"
const getPost = cache(async (id) => {
  const res = await fetch(`https://api.example.com/posts/${id}`)
  return res.json()
})
```

## Under the Hood

Next.js patches fetch. By default it caches. `next: { revalidate }` sets revalidation. Multiple components fetching the same URL in one request get deduplicated. cache() does the same for custom functions.

## Common Mistakes

- Fetching in Client when Server would work
- Not handling errors (try/catch, error.js)
- Creating fetch waterfalls (sequential awaits when parallel possible)
- Forgetting cache options for dynamic data

## Best Practices

- Fetch in Server Components when possible
- Use Promise.all for parallel fetches
- Set revalidate for time-based revalidation
- Use cache() for shared async logic

## Summary

Fetch in Server Components with async/await. fetch is cached. Use cache() for dedup. Parallelize with Promise.all. Client: useEffect or data lib. Handle errors.
