# Practice: Request Logging

## Tasks

### Task 1
Add request logging middleware. Log: method, path, status, duration (ms), requestId. Use structured JSON format. Generate requestId (UUID) per request; add to `req.id`. Include requestId in response header `X-Request-Id` for client correlation.

### Task 2
Add user context to logs when authenticated: `userId`, `apiKeyId`. Redact sensitive headers (Authorization, Cookie) before logging. Log at request end (on finish). Use appropriate log level: 2xx info, 4xx warn, 5xx error. Include error message for 5xx.

### Task 3
Implement request/response body logging for debugging (dev only). Truncate large bodies (max 1KB). Never log passwords, tokens, or PII in production. Add `?debug=1` query to enable verbose logging for that request (with rate limit). Use child logger with requestId for trace correlation.

### Task 4
Add log sampling for high-traffic endpoints: log 100% of errors, 1% of success. Configurable per path. Integrate with distributed tracing: add traceId, spanId to logs. Support log output to stdout (JSON) for container environments. Add correlation: when logging inside service call, include requestId.

### Task 5
Implement audit logging for sensitive operations: user login, password change, order creation, admin actions. Store in separate audit log (DB or stream). Include: actor, action, resource, timestamp, IP, result. Ensure audit log is append-only and tamper-resistant. Add log aggregation format (e.g., GCP, Datadog compatible). Write tests that verify no secrets in logs.
