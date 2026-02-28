# Logs and Monitoring

## Concept

Logging records events for debugging and auditing. Monitoring observes system health (metrics, traces, alerts). Structured logs (JSON) enable search and aggregation. Metrics (latency, error rate, throughput) drive alerts and dashboards.

## Why It Matters

Production issues are diagnosed via logs and metrics. Without them, you're blind. Structured logging enables log aggregation (ELK, Datadog). Metrics trigger alerts before users notice.

## Key Concepts

- Log levels: debug, info, warn, error
- Structured logs: JSON with consistent fields (timestamp, level, message, requestId)
- Metrics: counters, gauges, histograms
- Distributed tracing: trace IDs across services
- Alerting: thresholds, SLOs

## Code Example

```javascript
// Structured logging
logger.info({
  message: 'Request completed',
  requestId: req.id,
  method: req.method,
  path: req.path,
  status: res.statusCode,
  durationMs: Date.now() - req.startTime
})

// Error with context
logger.error({
  message: err.message,
  stack: err.stack,
  requestId: req.id,
  userId: req.user?.id
})

// Metrics
metrics.increment('http.requests', { method: 'GET', status: '200' })
metrics.histogram('http.duration', durationMs)
```

## Under the Hood

Logs are written to stdout/stderr or files. Aggregators collect and index them. Metrics are sampled and sent to a time-series DB. Tracing injects trace IDs into headers and propagates them across services.

## Common Mistakes

- Logging PII or secrets
- Unstructured logs (hard to search)
- Too much logging (noise, cost)
- No request IDs (can't trace a request)

## Best Practices

- Structured JSON logs with requestId
- Log at appropriate level (debug in dev, info in prod)
- Use sampling for high-volume endpoints
- Set up alerts for error rate, latency p99

## Summary

Logs and monitoring are essential for production. Use structured logs, request IDs, and metrics. Alert on SLOs.
