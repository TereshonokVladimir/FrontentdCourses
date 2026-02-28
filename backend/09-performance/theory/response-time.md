# Response Time

## Concept

Response time (latency) is the duration from when a request is sent until the response is received. It's typically measured as time to first byte (TTFB) or time to last byte (TTLB). It's the primary user-facing performance metric.

## Why It Matters

Users perceive latency directly. Every 100ms delay can reduce conversion. Response time SLOs (e.g., P95 < 200ms) drive reliability and user trust. It's the metric most tied to business outcomes.

## Key Concepts

- **TTFB**: Time to first byte—when streaming starts
- **TTLB**: Time to last byte—full response received
- **Percentiles**: P50 (median), P95, P99—tail latency matters
- **End-to-end**: Client → LB → app → DB → app → LB → client
- **Breakdown**: Where time is spent (DB, external APIs, CPU)

## Code Example

```javascript
// Measure response time
app.use((req, res, next) => {
  const start = performance.now()
  res.on('finish', () => {
    const duration = performance.now() - start
    metrics.histogram('http_request_duration_seconds', duration / 1000, {
      method: req.method,
      path: req.route?.path || req.url,
      status: res.statusCode
    })
  })
  next()
})
```

## Under the Hood

Latency is additive: network + processing at each hop. Queuing adds delay under load. Tail latency (P99) is often 10x P50 due to GC, cold caches, and queueing. Measure at the client when possible for true user experience.

## Common Mistakes

- Measuring only server-side (misses network, LB)
- Ignoring percentiles (P50 fine, P99 terrible)
- Not breaking down by component (DB vs API vs CPU)
- Measuring in dev (different from production)

## Best Practices

- Track P50, P95, P99 per endpoint
- Break down by component (DB, cache, external)
- Set SLOs and alert on violations
- Use distributed tracing for request-level breakdown

## Summary

Response time is the key user-facing metric. Measure percentiles, break down by component, and set SLOs. Tail latency (P99) often hides the worst user experience.
