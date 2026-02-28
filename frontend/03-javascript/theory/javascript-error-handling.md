# Error Handling

## Concept

Errors are thrown with `throw` and caught with `try/catch/finally`. Built-in errors: `Error`, `TypeError`, `RangeError`, `SyntaxError`. Create custom errors by extending `Error`. Uncaught errors become unhandled rejections in Promises. `finally` runs regardless of throw or return. Use errors for exceptional conditions, not flow control.

## Why It Matters

Robust code handles errors gracefully. Unhandled rejections crash apps or leave bad state. User-facing error messages and logging depend on proper handling. Async errors need try/catch in async functions or .catch() on Promises.

## Key Concepts

- `try { } catch (err) { } finally { }`
- `throw new Error("message")`
- Custom: `class MyError extends Error`
- Promise: `.catch()` or try/catch with await
- `window.onerror`, `unhandledrejection` for global handler

## Code Example

```javascript
try {
  const data = JSON.parse(input)
} catch (err) {
  console.error("Invalid JSON", err)
}

async function fetchData() {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  } catch (err) {
    showError(err.message)
  }
}
```

## Under the Hood

Throw creates an exception object and unwinds the stack until a catch is found. Finally runs before control leaves. Promise rejections queue as microtasks; unhandled ones trigger unhandledrejection.

## Common Mistakes

- Empty catch (swallowing errors)
- Catching without logging or rethrowing
- Throwing non-Error values (use Error objects)
- Not handling async errors

## Best Practices

- Always handle errors in async code
- Log before rethrowing
- Use custom errors for domain-specific cases
- Provide user-friendly messages

## Summary

Use try/catch for sync, try/catch with await or .catch for async. Throw Error instances. Handle and log. Don't swallow errors silently.
