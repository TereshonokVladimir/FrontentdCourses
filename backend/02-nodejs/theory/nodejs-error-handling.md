# Node.js Error Handling

## Concept

Node.js uses error-first callbacks and throws/rejects for errors. Uncaught exceptions and unhandled rejections can crash the process. Proper handling includes try/catch, .catch(), error middleware, and process-level handlers.

## Why It Matters

Unhandled errors crash servers. Silent failures hide bugs. Production needs graceful degradation, logging, and clean shutdown. Error handling is critical for reliability.

## Key Concepts

- Error-first callback: (err, data) => {}
- throw / try/catch for sync
- Promise rejection / .catch() / async try/catch
- process.on('uncaughtException'), process.on('unhandledRejection')
- Custom Error classes, stack traces

## Code Example

```javascript
async function fetchUser(id) {
  try {
    const user = await db.getUser(id)
    if (!user) throw new Error('User not found')
    return user
  } catch (err) {
    if (err.code === 'ENOENT') throw new NotFoundError(err.message)
    throw err
  }
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason)
  // Log and optionally exit
})
```

## Under the Hood

Errors are objects with message and stack. V8 captures stack on throw. Uncaught exception exits by default; unhandledRejection logs and may exit in future Node versions. Domain/AsyncLocalStorage for context.

## Common Mistakes

- Swallowing errors (empty catch)
- Not passing errors up the chain
- Relying on uncaughtException to keep running (unsafe)
- Not differentiating error types (retry vs fail)

## Best Practices

- Always handle errors in async code
- Use custom Error classes for domain errors
- Log before rethrowing
- Graceful shutdown on uncaughtException
- Use AsyncLocalStorage for request context in errors

## Summary

Error handling: error-first, try/catch, unhandledRejection. Never swallow; log and rethrow or handle. Plan for graceful shutdown.