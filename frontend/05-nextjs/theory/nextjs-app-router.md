# App Router

## Concept

The App Router (Next.js 13+) uses a `app/` directory with a file-system based router. Each folder defines a route segment. `page.js` makes a route publicly accessible. `layout.js` wraps segments with shared UI. Special files: `loading.js`, `error.js`, `not-found.js`. Supports Server Components by default.

## Why It Matters

App Router is the future of Next.js. It enables React Server Components, streaming, and improved layouts. Understanding the folder structure and conventions is essential. Most new projects use App Router.

## Key Concepts

- `app/page.js` → `/`
- `app/about/page.js` → `/about`
- `app/blog/[slug]/page.js` → `/blog/hello`, `/blog/world`
- `layout.js` wraps children and persists across navigations
- `page.js` is the route's UI
- Nested folders = nested routes

## Code Example

```
app/
  layout.js      # Root layout
  page.js        # /
  about/
    page.js      # /about
  blog/
    layout.js    # Wraps all blog routes
    page.js      # /blog
    [slug]/
      page.js    # /blog/hello, /blog/world
```

## Under the Hood

Next.js maps the folder structure to URLs. Each segment can have layout, page, loading, error. Layouts compose—root layout wraps everything. Navigation is client-side after initial load (soft navigation).

## Common Mistakes

- Putting `page.js` in wrong folder (route won't exist)
- Confusing layout with page (layout wraps, page is content)
- Using client components when server would work
- Not understanding nested layout composition

## Best Practices

- Use layouts for shared UI (nav, footer)
- Colocate route-specific components
- Use loading.js for instant feedback
- Prefer Server Components; add "use client" only when needed

## Summary

App Router uses app/ folder structure. page.js = route, layout.js = wrapper. Nested folders = nested routes. Layouts persist. Server Components by default.
