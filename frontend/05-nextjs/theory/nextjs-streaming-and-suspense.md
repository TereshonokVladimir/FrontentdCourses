# Streaming and Suspense

## Concept

Streaming sends HTML in chunks as it's ready. Suspense boundaries define where to stream. While a Suspense child is loading, the fallback is sent first. When the child is ready, it's streamed. This improves TTFB and perceived performance. Next.js uses this for loading.js and async Server Components.

## Why It Matters

Without streaming, the user waits for the slowest part. With streaming, the shell appears fast, then content streams in. Suspense lets you show partial UI. It's how loading.js works. Essential for good UX on slow data.

## Key Concepts

- Suspense wraps async components
- Fallback shows while child loads
- Multiple boundaries = progressive loading
- loading.js creates a Suspense boundary automatically
- Works with Server Components

## Code Example

```jsx
import { Suspense } from "react"

async function SlowComponent() {
  const data = await fetchSlowData()
  return <div>{data}</div>
}

export default function Page() {
  return (
    <div>
      <h1>Fast</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}
```

## Under the Hood

Next.js streams the initial HTML. When it hits a Suspense boundary, it sends the fallback. When the async child resolves, it streams the actual content. The client progressively renders. No single blocking point.

## Common Mistakes

- Not wrapping async Server Component in Suspense (or use loading.js)
- Putting everything in one boundary (defeats purpose)
- Fallback that's too heavy (defeats fast shell)
- Expecting Suspense to work with client-side fetch (use for Server Components)

## Best Practices

- Use loading.js for route-level loading
- Add Suspense for granular loading (e.g., sidebar vs main)
- Keep fallbacks lightweight
- Use for async Server Components

## Summary

Streaming sends HTML in chunks. Suspense defines boundaries. Fallback shows first. Child streams when ready. loading.js = route Suspense. Use for progressive loading. Improves TTFB.
