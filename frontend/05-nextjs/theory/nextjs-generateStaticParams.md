# generateStaticParams

## Concept

`generateStaticParams` tells Next.js which dynamic segment values to pre-render at build time. Export it from a page that has a dynamic segment. It returns an array of objects with the param keys. Paths not in the array are generated on demand (or 404 if `dynamicParams` is false).

## Why It Matters

Dynamic routes are dynamic by default—rendered on request. generateStaticParams lets you pre-render specific paths for faster loads. It's essential for blogs, docs, or any site with known dynamic routes. It reduces server load and improves TTFB.

## Key Concepts

- Export from page with dynamic segment
- Returns `[{ slug: "a" }, { slug: "b" }]` for `[slug]`
- Multiple params: `[{ id: "1", slug: "a" }]` for `[id]/[slug]`
- Paths not in array: on-demand (or 404 if dynamicParams: false)
- Run at build time

## Code Example

```jsx
// app/blog/[slug]/page.js
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }) {
  const post = await getPost(params.slug)
  return <article>{post.title}</article>
}

// dynamicParams: false = 404 for unknown slugs
export const dynamicParams = false
```

## Under the Hood

At build time, Next.js calls generateStaticParams. For each returned object, it renders the page and caches the result. At runtime, requests for those paths serve the cached HTML. Other paths are rendered on demand (or 404).

## Common Mistakes

- Returning wrong shape (must match segment names)
- Async function not awaited (it's async)
- Fetching too much data (only need the param values)
- Forgetting dynamicParams when you want strict 404 for unknown

## Best Practices

- Use for known dynamic routes (blog slugs, product IDs)
- Return minimal data (just param values)
- Set dynamicParams: false for strict 404 if desired
- Combine with generateMetadata for full static generation

## Summary

generateStaticParams pre-renders dynamic paths. Return array of param objects. Build-time only. Unknown paths: on-demand or 404. Use for blogs, docs, products.
