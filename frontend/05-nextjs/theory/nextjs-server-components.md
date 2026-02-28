# Server Components

## Concept

Server Components run only on the server. They don't ship JavaScript to the client. They can directly access databases, file system, and secrets. They're the default in App Router. Use "use client" only when you need interactivity, hooks, or browser APIs.

## Why It Matters

Server Components reduce bundle size and improve performance. They enable secure data fetching (no API route needed). They're the foundation of the App Router. Understanding when to use server vs client is critical.

## Key Concepts

- Default: components are Server Components
- No useState, useEffect, or event handlers in Server Components
- Can async and await directly
- Can pass Server Component as child to Client Component (serialized)
- "use client" at top of file makes it a Client Component

## Code Example

```jsx
// app/page.js - Server Component
async function Page() {
  const data = await fetch("https://api.example.com/data").then(r => r.json())
  return (
    <div>
      <h1>{data.title}</h1>
      <ClientButton />
    </div>
  )
}

// components/ClientButton.jsx
"use client"
export function ClientButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

## Under the Hood

Server Components render on the server. Their output is a special format (RSC payload) sent to the client. The client hydrates only Client Components. Server Component output is not re-sent on navigation if cached.

## Common Mistakes

- Using hooks or event handlers in Server Components
- Passing functions or non-serializable data from Server to Client
- Using browser APIs (window, document) in Server Components
- Overusing "use client" (adds bundle size)

## Best Practices

- Default to Server Components
- Add "use client" only at the boundary (leaf components)
- Fetch data in Server Components when possible
- Pass serializable props from Server to Client

## Summary

Server Components run on server only. No hooks, no browser APIs. Default in App Router. Use "use client" for interactivity. Fetch data directly in Server Components.
