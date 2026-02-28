# Client Components

## Concept

Client Components run on the client. Add "use client" at the top of the file. They can use useState, useEffect, event handlers, and browser APIs. They're hydrated on the client. Use them when you need interactivity. Keep the boundary as low as possible to minimize client JavaScript.

## Why It Matters

Most interactive UIs need Client Components. But every Client Component adds to the bundle. Understanding when and where to add "use client" optimizes performance. The goal is to push "use client" down to the smallest subtree that needs it.

## Key Concepts

- "use client" at top of file (or first line of component)
- Can use hooks, event handlers, browser APIs
- Can import Server Components as children (passed as props)
- Cannot import Server Components and use them as children from same file—children come from parent
- Client Components can receive Server Component as children prop

## Code Example

```jsx
"use client"

import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}

// Parent (Server) can pass Server-rendered content as children
// <Counter><ServerContent /></Counter>
```

## Under the Hood

Client Components are bundled and sent to the client. They hydrate after the initial HTML. The "use client" boundary means everything below it (and its imports) is client code. Children passed from Server are rendered on server and passed as props.

## Common Mistakes

- Adding "use client" to the root layout (everything becomes client)
- Using "use client" when a child could be the boundary
- Passing non-serializable props from Server to Client (functions, Dates, etc.)
- Importing a Server Component into a Client Component file (use children instead)

## Best Practices

- Add "use client" only to components that need it
- Keep the boundary low—wrap only the interactive part
- Pass serializable data (strings, numbers, plain objects)
- Use composition: Server parent passes Client child as children

## Summary

"use client" enables hooks and interactivity. Use sparingly. Keep boundary low. Pass serializable props. Children from Server are allowed. Minimize client bundle.
