# Dynamic Routes

## Concept

Dynamic routes use brackets: `[param]` for a single segment, `[...slug]` for catch-all, `[[...slug]]` for optional catch-all. The param is available in the page via `params` prop. Use for IDs, slugs, or variable path segments. Params are decoded.

## Why It Matters

Most apps need dynamic routes: `/blog/hello-world`, `/users/123`, `/docs/getting-started`. Understanding param syntax and access is essential. Catch-all routes enable flexible structures like file-based docs.

## Key Concepts

- `[id]` → one segment: `/users/123`
- `[...slug]` → rest of path: `/docs/a/b/c` → slug = ["a", "b", "c"]
- `[[...slug]]` → optional: `/docs` and `/docs/a` both work
- `params` in page: `{ params }` or `{ params: { id } }`
- Params are strings; decode for special chars

## Code Example

```jsx
// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>
}

// app/shop/[...slug]/page.js
export default function Shop({ params }) {
  return <p>Path: {params.slug.join("/")}</p>
}

// app/docs/[[...slug]]/page.js
// /docs → slug undefined; /docs/a → slug = ["a"]
```

## Under the Hood

Next.js matches URLs to the file structure. Dynamic segments capture the corresponding path parts. Params are passed to the page at request time. For static generation, Next.js needs to know all possible params (generateStaticParams).

## Common Mistakes

- Using `[id].js` instead of `[id]/page.js` (App Router)
- Forgetting params can be async (Next.js 15+)
- Not handling missing/invalid params
- Confusing catch-all with optional catch-all

## Best Practices

- Validate params (e.g., id is valid)
- Use generateStaticParams for static paths when possible
- Handle not-found for invalid params
- Use meaningful param names (id, slug, etc.)

## Summary

Brackets create dynamic segments. [id], [...slug], [[...slug]]. Params in page. Validate and handle missing. Use generateStaticParams for SSG.
