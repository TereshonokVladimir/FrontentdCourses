# Loading and Error States

## Concept

`loading.js` shows a fallback while a route segment loads. `error.js` catches errors and shows a fallback. Both are optional. `not-found.js` handles 404. They use React Suspense and Error Boundaries under the hood. They apply to the segment they're in and its children.

## Why It Matters

Loading and error states improve UX. loading.js gives instant feedback. error.js prevents full app crash. not-found.js customizes 404. Understanding the hierarchy (which loading/error wraps what) helps design resilient UIs.

## Key Concepts

- `loading.js`: automatically wraps page in Suspense
- `error.js`: Error Boundary for the segment
- `not-found.js`: 404 UI; call `notFound()` to trigger
- They wrap the segment's page and child segments
- error.js can have reset button to retry

## Code Example

```jsx
// app/dashboard/loading.js
export default function Loading() {
  return <div>Loading dashboard...</div>
}

// app/dashboard/error.js
"use client"
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

// app/not-found.js
export default function NotFound() {
  return <h1>404 - Page not found</h1>
}
```

## Under the Hood

loading.js creates a Suspense boundary. Next.js streams the page; loading shows until ready. error.js is an Error Boundary. When an error is thrown, it catches and renders the fallback. reset() re-renders the segment.

## Common Mistakes

- Putting loading/error in wrong folder (they're segment-scoped)
- error.js must be a Client Component ("use client")
- Forgetting that error doesn't catch errors in layout
- Not providing a way to recover (reset button)

## Best Practices

- Add loading.js for routes with async data
- Add error.js with reset for recoverable errors
- Customize not-found for 404
- Keep loading/error UI consistent with design

## Summary

loading.js = Suspense fallback. error.js = Error Boundary. not-found.js = 404. Segment-scoped. error needs "use client". Provide reset in error. Use for better UX.
