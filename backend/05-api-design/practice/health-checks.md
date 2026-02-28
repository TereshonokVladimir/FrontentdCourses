# Practice: Health Checks

## Tasks

### Task 1
Implement `GET /health` that returns 200 with `{ "status": "ok", "timestamp": "..." }`. No authentication required. Use for load balancer health checks. Add `GET /health/live` (liveness) that returns 200 if process is running—minimal checks.

### Task 2
Add `GET /health/ready` (readiness): check if app can serve traffic. Verify DB connection (simple query or pool check). Return 503 if DB unreachable. Include `{ "status", "checks": { "database": "ok" } }`. Kubernetes uses readiness to remove pod from service.

### Task 3
Add dependency checks: database, Redis (if used), external API (optional). Each check runs independently. Return partial status: `{ "status": "degraded", "checks": { "database": "ok", "redis": "error" } }`. Use 200 for ok, 503 for critical failure. Consider degraded (200 but some checks fail) vs unhealthy (503).

### Task 4
Add startup probe: `GET /health/startup` for slow-starting apps. Return 503 until app is fully initialized (migrations run, connections established). Prevents Kubernetes from killing slow starters. Add `version` and `environment` to health response (from env vars).

### Task 5
Implement health check with timeout: each dependency check has 5s timeout. Run checks in parallel. Add optional `?verbose=1` for detailed output (connection strings redacted). Secure `/health` in production if it exposes sensitive info. Add Prometheus metrics endpoint `GET /metrics` (if not already). Document health check contract for ops team. Write tests that mock dependency failures.
