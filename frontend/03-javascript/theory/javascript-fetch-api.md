# Fetch API

## Concept

`fetch(url, options)` returns a Promise that resolves to a Response. It's the native way to make HTTP requests. Options: method, headers, body. Response has `.json()`, `.text()`, `.ok`, `.status`. Fetch doesn't throw on 4xx/5xx—check `res.ok`. CORS applies; credentials need `credentials: 'include'`.

## Why It Matters

Fetch is the standard for API calls. React Query, SWR, and data fetching libraries use it. Understanding headers, error handling, and CORS is essential for frontend-backend integration.

## Key Concepts

- `fetch(url, { method, headers, body })`
- `res.ok` – true for 2xx
- `res.json()` – parse JSON (returns Promise)
- `AbortController` – cancel requests
- CORS – server must send Access-Control headers

## Code Example

```javascript
const res = await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Alice" })
})

if (!res.ok) throw new Error(`HTTP ${res.status}`)
const data = await res.json()

// With AbortController
const controller = new AbortController()
fetch(url, { signal: controller.signal })
controller.abort()
```

## Under the Hood

Fetch uses the browser's network stack. It's Promise-based. The Response body is a stream. JSON parsing is async. AbortController signals cancellation to the fetch implementation.

## Common Mistakes

- Not checking res.ok (treating 404 as success)
- Forgetting await on res.json()
- Not handling network errors (try/catch)
- CORS issues (server config, not client)

## Best Practices

- Check res.ok before parsing
- Use try/catch for network errors
- Use AbortController for cancellable requests
- Set Content-Type for POST/PUT

## Summary

Fetch returns a Response Promise. Check res.ok, await res.json(). Use AbortController to cancel. Handle errors. CORS is server-side.
