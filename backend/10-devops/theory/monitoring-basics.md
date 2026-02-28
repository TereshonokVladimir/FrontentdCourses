# Monitoring Basics

## Concept

Monitoring is the practice of collecting, storing, and visualizing metrics and health data from systems and applications. It enables you to detect issues, understand behavior, and meet SLAs. Effective monitoring covers infrastructure, applications, and business metrics.

## Why It Matters

Without monitoring, you're flying blind. You won't know when things break, why they're slow, or how close you are to limits. Production backends require observability to operate reliably and debug issues quickly.

## Key Concepts

- **Metrics**: Numeric measurements over time (CPU, request rate, latency)
- **Logs**: Event records (errors, requests, debug info)
- **Traces**: Request flow across services (distributed tracing)
- **Golden signals**: Latency, traffic, errors, saturation
- **SLO/SLI**: Service Level Objectives/Indicators for reliability targets

## Code Example

```javascript
// Node.js: Expose Prometheus metrics
const promClient = require('prom-client')

const register = new promClient.Registry()
promClient.collectDefaultMetrics({ register })

const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
})

app.use((req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    httpRequestDuration.observe(
      { method: req.method, route: req.route?.path || req.path, status: res.statusCode },
      (Date.now() - start) / 1000
    )
  })
  next()
})

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
})
```

## Under the Hood

Metrics are typically pulled (Prometheus scrapes /metrics) or pushed (StatsD, Datadog agent). Time-series databases store (timestamp, value, labels). Dashboards query and visualize. Alerts fire when thresholds are breached. Logs go to aggregation systems; traces use sampling and correlation IDs.

## Common Mistakes

- Monitoring only infrastructure (CPU, memory) and ignoring app metrics
- Too many alerts (alert fatigue)
- No runbooks for alerts (what to do when it fires)
- Missing business metrics (orders, signups)
- Not testing alerting (do alerts actually fire?)

## Best Practices

- Monitor the four golden signals: latency, traffic, errors, saturation
- Add custom metrics for business logic
- Keep alerts actionable; avoid "something might be wrong"
- Use dashboards for exploration, alerts for notification
- Implement distributed tracing for microservices

## Summary

Monitoring collects metrics, logs, and traces. Focus on golden signals and business metrics. Use dashboards for visibility, alerts for action. Test your alerting.
