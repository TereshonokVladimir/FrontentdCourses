# Async/Await

## Concept

`async`/`await` is syntactic sugar over Promises. An `async` function always returns a Promise. `await` pauses execution until the Promise settles, then resumes with the resolved value. It makes async code look synchronous. Errors are caught with try/catch. Use with fetch, timers, and any Promise-returning API.

## Why It Matters

Async/await replaced callback hell and long `.then()` chains. It's the standard for async code in modern JavaScript. React hooks, data fetching, and file I/O use it. Understanding it is essential.

## Key Concepts

- `async function` returns a Promise
- `await` pauses until Promise settles
- `await` only works inside async function (or top-level in modules)
- try/catch for error handling
- Sequential vs parallel: await in loop = sequential; Promise.all = parallel

## Code Example

```javascript
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`)
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}

async function main() {
  try {
    const user = await fetchUser(1)
    console.log(user)
  } catch (err) {
    console.error(err)
  }
}

// Parallel
const [a, b] = await Promise.all([fetchA(), fetchB()])
```

## Under the Hood

Async functions are transformed to generators or state machines. Each await creates a microtask. The engine suspends and resumes. It's still non-blocking—other code can run.

## Common Mistakes

- Awaiting in parallel when sequential would work (slower)
- Forgetting try/catch (unhandled rejection)
- Using await in non-async function
- Awaiting non-Promise (works but unnecessary)

## Best Practices

- Use try/catch for error handling
- Use Promise.all for independent parallel requests
- Keep async functions focused
- Return Promises from async functions (implicit)

## Summary

Async/await makes Promise code readable. Use try/catch. Prefer Promise.all for parallel work. It's the standard for async JavaScript.
