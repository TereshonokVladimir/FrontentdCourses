# Health Checks

## Concept

Health checks let orchestrators (Kubernetes, Docker, load balancers) determine if an instance is ready to receive traffic. Nest's `@nestjs/terminus` provides `/health` endpoints that probe the app, database, Redis, and other dependencies. Liveness vs readiness: is the process alive vs can it serve traffic.

## Why It Matters

Orchestrators use health checks for rolling updates and auto-recovery. A failing DB should make the app unhealthy so it gets no traffic. Without health checks, traffic can hit broken instances. Essential for zero-downtime deployments.

## Key Concepts

- `TerminusModule`: health check module
- `@Controller('health')`: health endpoint
- `HealthCheckService`: `check()`, `pingCheck()`, `typeOrmCheck()`
- Liveness: process running
- Readiness: DB, Redis, etc. reachable

## Code Example

```typescript
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private redis: RedisHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () => this.redis.pingCheck('redis'),
    ])
  }

  @Get('live')
  live() {
    return { status: 'ok' }
  }
}
```

## Under the Hood

Terminus runs the checks in parallel. Each indicator (e.g., typeOrmCheck) performs a probe (e.g., simple query). Results are aggregated; if any fail, the overall status is "unhealthy". Kubernetes uses /health for readiness, /live for liveness.

## Common Mistakes

- Health check hits DB on every request; add caching or use lightweight probe
- Exposing internal errors in response
- Single health endpoint for both liveness and readiness
- Not configuring timeout; slow DB blocks health

## Best Practices

- Separate /live (process) and /ready (dependencies)
- Use lightweight probes (e.g., SELECT 1 for DB)
- Don't expose stack traces in health response
- Cache health result briefly to avoid thundering herd

## Summary

Health checks enable orchestration. Use Terminus for DB, Redis, etc. Separate liveness and readiness. Keep probes lightweight.
