# Navigation

## Concept

Use the `Link` component for client-side navigation. It prefetches linked pages in the viewport. Use `useRouter` for programmatic navigation (redirect, back, push). Use `redirect()` in Server Components or Route Handlers. Navigation is soft by default—no full page reload.

## Why It Matters

Client-side navigation is fast and preserves app state. Link prefetches improve perceived performance. Programmatic navigation is needed for redirects, form success, or conditional flows. Understanding the options prevents full reloads and improves UX.

## Key Concepts

- `<Link href="/about">` — client-side navigation, prefetch
- `useRouter()`: `push`, `replace`, `back`, `forward`
- `redirect("/path")` in Server Component or Route Handler
- `router.refresh()` — revalidate server components
- Prefetch: automatic for Link in viewport; disable with `prefetch={false}`

## Code Example

```jsx
import Link from "next/link"
import { useRouter } from "next/navigation"

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog" prefetch={false}>Blog</Link>
    </nav>
  )
}

function ClientComponent() {
  const router = useRouter()
  const handleSubmit = () => {
    // ...
    router.push("/success")
  }
}
```

## Under the Hood

Link renders an anchor. Next.js intercepts clicks and does client-side navigation. It fetches the RSC payload for the new route and updates the view. Prefetch happens when Link enters viewport. Router uses the same mechanism for push/replace.

## Common Mistakes

- Using `<a>` for internal links (causes full reload)
- Using `router.push` when `redirect()` would work (Server)
- Forgetting that redirect throws (don't catch)
- Over-prefetching (disable for rarely visited pages)

## Best Practices

- Use Link for internal navigation
- Use redirect in Server Components for auth, etc.
- Use router for client-side redirects after actions
- Prefetch default is good for most links

## Summary

Link for navigation. Prefetch by default. useRouter for programmatic. redirect in Server. Soft navigation preserves state. Use Link over anchor for internal.
