# Pages and Layouts

## Concept

A `page` is the UI for a route. A `layout` wraps child segments and persists across navigations—it doesn't re-render when navigating between child routes. Layouts can be nested. Both are React components. `page.js` is required for a route to be accessible; `layout.js` is optional but common.

## Why It Matters

Layouts enable shared UI (header, sidebar) without remounting. Pages define route content. Understanding the difference prevents unnecessary re-renders and improves UX. Nested layouts allow section-specific wrappers (e.g., dashboard layout for /dashboard/*).

## Key Concepts

- `page.js`: route content, unique per route
- `layout.js`: shared wrapper, receives `children`
- Layout wraps its segment and all descendants
- Layout state persists on navigation (e.g., scroll position in sidebar)
- Only the page (and its data) changes on navigation

## Code Example

```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>My App</header>
        {children}
      </body>
    </html>
  )
}

// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <aside>Dashboard Nav</aside>
      <main>{children}</main>
    </div>
  )
}
```

## Under the Hood

Next.js composes the layout tree. When you navigate, React reconciles—layout components stay mounted, only the page subtree updates. This is why layout state (e.g., sidebar open) persists.

## Common Mistakes

- Putting route content in layout (use page)
- Expecting layout to re-run on navigation (it doesn't)
- Forgetting that layout must return children
- Using client state in layout that should reset on route change

## Best Practices

- Root layout: html, body, providers
- Section layouts: nav, sidebar for that section
- Keep layouts thin—defer to pages for heavy logic
- Use layout for persistent UI only

## Summary

Page = route content. Layout = persistent wrapper. Layouts nest. Only page changes on navigation. Use layouts for shared UI. Root layout wraps everything.
