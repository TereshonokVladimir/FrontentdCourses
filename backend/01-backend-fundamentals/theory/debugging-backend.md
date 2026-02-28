# Debugging Backend

## Concept

Backend debugging traces failures from symptom to root cause. Tools: logs, request IDs, debuggers, profilers. Reproduce in dev; add instrumentation; correlate across services. Production debugging requires good observability.

## Why It Matters

Bugs happen in production. Without logs, traces, and metrics, you're guessing. Request IDs let you follow a request across services. Structured logs enable search. Profilers find slow code.

## Key Concepts

- Request ID: unique per request, propagate to logs and downstream
- Log levels: debug (dev), info (prod), error (always)
- Distributed tracing: trace ID spans services
- Profiling: CPU, memory, event loop lag
- Reproducibility: same input should reproduce

## Code Example

```javascript
// Request ID middleware
app.use((req, res, next) => {
  req.id = req.headers['x-request-id'] || crypto.randomUUID()
  res.setHeader('X-Request-Id', req.id)
  next()
})

// Log with request ID
logger.info({ requestId: req.id, path: req.path, userId: req.user?.id })

// Propagate to downstream
await fetch(url, {
  headers: { 'X-Request-Id': req.id }
})
```

## Under the Hood

Request IDs are generated or taken from incoming header. They're added to log context and response headers. Tracing systems (Jaeger, OpenTelemetry) inject trace IDs and propagate them. Profilers sample the call stack to find hotspots.

## Common Mistakes

- No request IDs (can't correlate logs)
- Logging too little (can't debug)
- Logging too much (noise, cost)
- Not propagating IDs to downstream services

## Best Practices

- Add request ID to every request
- Propagate to all downstream calls
- Use structured logging
- Profile before optimizing

## Summary

Debugging: request IDs, structured logs, propagation. Add instrumentation; use profilers for performance. Reproduce, then fix.
