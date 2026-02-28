# Error Handling Strategies

## Concept

Backend errors fall into categories: validation (client), not found, auth, business logic, and server failures. Each needs different handling: return appropriate status, log with context, avoid leaking internals. Graceful degradation and retries for transient failures.

## Why It Matters

Poor error handling leaks stack traces, confuses clients, and hides root causes. Good handling returns useful messages, logs properly, and enables retries where appropriate.

## Key Concepts

- 4xx: client error, don't retry
- 5xx: server error, retry with backoff
- Never expose stack traces to clients in production
- Log full context (request ID, user, stack) server-side
- Use error codes for client-side handling

## Code Example

```javascript
// Central error handler
app.use((err, req, res, next) => {
  logger.error({ err, requestId: req.id })

  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message, code: 'VALIDATION_ERROR' })
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: 'Not found', code: 'NOT_FOUND' })
  }
  if (err instanceof UnauthorizedError) {
    return res.status(401).json({ error: 'Unauthorized', code: 'UNAUTHORIZED' })
  }

  res.status(500).json({
    error: 'Internal server error',
    code: 'INTERNAL_ERROR',
    requestId: req.id
  })
})
```

## Under the Hood

Errors propagate up the call stack. Async errors must be caught (try/catch, .catch()) or passed to next(). Unhandled rejections can crash the process. Use process.on('unhandledRejection') as a last resort.

## Common Mistakes

- Returning 500 for validation errors
- Exposing stack traces or internal paths
- Swallowing errors (catch without rethrow or log)
- Not setting requestId for correlation

## Best Practices

- Custom error classes with status codes
- Central error middleware
- Structured error responses (code, message, requestId)
- Retry with exponential backoff for 5xx and timeouts

## Summary

Categorize errors, return correct status codes, log with context, never expose internals. Use central error handling and custom error types.
