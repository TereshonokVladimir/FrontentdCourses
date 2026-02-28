# Process Management

## Concept

Process management keeps backend services running: start, stop, restart, scale. Production uses process managers (PM2, systemd) or orchestrators (Kubernetes). Graceful shutdown ensures in-flight requests complete before exit.

## Why It Matters

Crashes happen. Process managers restart services automatically. Graceful shutdown prevents dropped requests during deployments. Without proper management, a crash means downtime until manual intervention.

## Key Concepts

- Process manager: restarts on crash, manages logs
- Graceful shutdown: stop accepting new requests, wait for in-flight, then exit
- Signals: SIGTERM (graceful), SIGKILL (force)
- Health checks: liveness (is process alive?), readiness (can it serve traffic?)

## Code Example

```javascript
// Graceful shutdown
let isShuttingDown = false

server.on('request', (req, res) => {
  if (isShuttingDown) {
    res.setHeader('Connection', 'close')
  }
  // ... handle request
})

process.on('SIGTERM', async () => {
  isShuttingDown = true
  server.close(() => {
    await db.close()
    process.exit(0)
  })
  setTimeout(() => process.exit(1), 30000)  // Force after 30s
})
```

## Under the Hood

SIGTERM is sent by orchestrators before SIGKILL. The process should close the server (stop accepting), wait for active connections to drain, close DB connections, and exit. Orchestrators use health checks to route traffic and restart unhealthy containers.

## Common Mistakes

- Exiting immediately on SIGTERM (dropping requests)
- Not closing database connections
- No timeout for shutdown (hanging forever)
- Ignoring SIGTERM

## Best Practices

- Implement graceful shutdown
- Set shutdown timeout (e.g., 30s)
- Use health endpoints for load balancer
- Run under PM2 or similar in production

## Summary

Process management: restart on crash, graceful shutdown on SIGTERM. Close connections, drain requests, then exit.
