# Practice: Health Module

## Tasks

### Task 1
Add `TerminusModule` and create a `HealthController` with `GET /health`. Use `HealthCheckService` and `TypeOrmHealthIndicator` to check the database. Return the default Terminus response. Ensure the endpoint returns 200 when DB is up and 503 when it's down (use a mock or real DB).

### Task 2
Add Redis health check. Use `RedisHealthIndicator` if available, or create a custom indicator that pings Redis. Add a custom `CustomHealthIndicator` for an external API: `pingCheck('api', 'https://httpbin.org/get')`. Aggregate all checks; the overall status is "unhealthy" if any fail.

### Task 3
Separate liveness and readiness. `GET /health/live` returns `{ status: 'ok' }` immediately (no dependencies). `GET /health/ready` runs all dependency checks (DB, Redis, etc.). Use different endpoints for Kubernetes liveness vs readiness probes. Document the difference.

### Task 4
Add a custom health indicator for disk space. Check `os.freemem()` and `os.totalmem()` (or use a package). Mark unhealthy if free memory is below 10%. Add a `MemoryHealthIndicator` with a threshold. Include it in the readiness check.

### Task 5
Implement health check caching. Add a `CachedHealthIndicator` that wraps the real checks and caches the result for 30 seconds. Use an in-memory cache with TTL. Ensure the first request runs the checks, subsequent requests within 30s return cached. Add `GET /health/ready?fresh=true` to bypass cache. Add detailed response with check names and individual status/duration. In production, consider not exposing internal dependency URLs in the response.
