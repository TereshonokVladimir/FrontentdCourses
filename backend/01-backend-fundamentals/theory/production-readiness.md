# Production Readiness

## Concept

Production-ready backends handle failures, scale, and operate reliably. Checklist: health checks, graceful shutdown, structured logging, metrics, error handling, secrets management, rate limiting, and documentation. Designed for operations, not just development.

## Why It Matters

Code that works locally often fails in production: no health checks (load balancer can't route), no graceful shutdown (dropped requests), no metrics (can't alert). Production readiness is a discipline.

## Key Concepts

- Health: liveness (process alive), readiness (can serve)
- Observability: logs, metrics, traces
- Configuration: env vars, no hardcoded secrets
- Resilience: timeouts, retries, circuit breakers
- Security: auth, validation, HTTPS

## Code Example

```javascript
// Health endpoints
app.get('/health/live', (req, res) => res.status(200).send('ok'))
app.get('/health/ready', async (req, res) => {
  try {
    await db.query('SELECT 1')
    res.status(200).send('ok')
  } catch {
    res.status(503).send('unhealthy')
  }
})

// Startup validation
const required = ['DATABASE_URL', 'JWT_SECRET']
for (const k of required) {
  if (!process.env[k]) throw new Error(`Missing: ${k}`)
}
```

## Under the Hood

Load balancers hit /health/ready; unhealthy instances get no traffic. Orchestrators use liveness to restart crashed processes. Metrics go to monitoring; alerts fire on thresholds. Graceful shutdown drains connections before exit.

## Common Mistakes

- No health checks
- Health check that doesn't verify dependencies
- Secrets in code or config files
- No graceful shutdown

## Best Practices

- Liveness: simple; readiness: check DB, cache
- Validate config at startup
- Document deployment and env vars
- Run chaos tests (kill instances, simulate failures)

## Summary

Production-ready: health checks, graceful shutdown, observability, config validation. Design for operations.
