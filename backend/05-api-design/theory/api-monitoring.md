# API Monitoring

## Concept

API monitoring tracks availability, performance, and errors in production. Metrics (latency, throughput, error rate), logs (request/response, errors), and alerts (SLA breaches, error spikes) enable you to detect and fix issues before users report them.

## Why It Matters

Production issues happen. Monitoring tells you when and where. Without it, you learn from user complaints. With it, you detect degradation, debug faster, and meet SLAs. Monitoring is essential for production readiness.

## Key Concepts

- **Metrics**: Latency (p50, p95, p99), throughput (req/s), error rate
- **Logs**: Structured JSON; request ID, user, duration, status
- **Traces**: Request flow across services (distributed tracing)
- **Alerts**: Thresholds (error rate > 1%, p99 > 2s)
- **Dashboards**: Real-time view of key metrics

## Code Example

```javascript
// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now()
  req.id = crypto.randomUUID()

  res.on('finish', () => {
    logger.info({
      requestId: req.id,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: Date.now() - start,
      userId: req.user?.id
    })
  })
  next()
})

// Metrics (Prometheus format)
const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Request duration',
  labelNames: ['method', 'path', 'status']
})
```

## Under the Hood

Logs go to aggregator (ELK, Loki, CloudWatch). Metrics from app or sidecar (Prometheus, StatsD). Traces use OpenTelemetry or vendor (Jaeger, Datadog). Alerts fire when thresholds breach; on-call gets paged. Dashboards visualize trends.

## Common Mistakes

- No request IDs (can't correlate logs)
- Logging sensitive data (tokens, PII)
- No alerting (discover issues too late)
- Too many alerts (alert fatigue)
- No SLOs or SLA tracking

## Best Practices

- Add request ID to every request; include in logs and responses
- Log structured JSON; never log secrets or PII
- Define SLOs (e.g., 99.9% uptime, p99 < 500ms)
- Alert on SLO breaches and error spikes
- Use distributed tracing for microservices

## Summary

Monitoring is essential for production. Track latency, throughput, and errors. Use structured logging with request IDs. Set SLOs and alert on breaches. Enable distributed tracing for complex systems.
