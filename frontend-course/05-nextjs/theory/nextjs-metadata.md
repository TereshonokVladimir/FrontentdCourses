# Metadata

## Concept

Metadata controls the document head: title, description, Open Graph, etc. In App Router, export `metadata` or `generateMetadata` from layout.js or page.js. `generateMetadata` is async and can fetch data for dynamic meta. Metadata is merged from root to leaf.

## Why It Matters

Metadata is critical for SEO and social sharing. Each page should have unique title and description. Open Graph and Twitter cards affect link previews. Next.js simplifies this with the metadata API.

## Key Concepts

- `export const metadata = { title, description, ... }`
- `generateMetadata({ params })` for dynamic
- Merged: layout metadata + page metadata (page overrides)
- Open Graph, Twitter, robots, etc.
- Metadata object or generateMetadata function

## Code Example

```jsx
// app/layout.js
export const metadata = {
  title: { default: "My App", template: "%s | My App" },
  description: "Welcome to my app"
}

// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title }
  }
}
```

## Under the Hood

Next.js collects metadata from all layouts and the page. It merges them (child overrides parent). For generateMetadata, it awaits before rendering. The result is injected into the document head.

## Common Mistakes

- Using both metadata and generateMetadata (use one)
- Forgetting template in title for child pages
- Not setting description (bad for SEO)
- generateMetadata not async when fetching

## Best Practices

- Set title and description for every page
- Use template for consistent branding
- Add Open Graph for social sharing
- Use generateMetadata for dynamic pages (blog, products)

## Summary

Export metadata or generateMetadata. Merged from layout to page. title, description, openGraph. Use generateMetadata for dynamic. Essential for SEO.
