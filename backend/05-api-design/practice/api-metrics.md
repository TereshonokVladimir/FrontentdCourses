# Practice: API Metrics

## Tasks

### Task 1
Add request metrics: count and duration per endpoint. Use Prometheus format or similar. Metrics: `http_requests_total{method, path, status}`, `http_request_duration_seconds{method, path}` (histogram). Expose at `GET /metrics`. Increment on each request in middleware.

### Task 2
Add latency percentiles: p50, p95, p99. Use histogram buckets (e.g., 5ms, 25ms, 100ms, 500ms, 2s). Add error rate metric: `http_errors_total{method, path, status}`. Separate 4xx and 5xx if useful. Ensure metrics don't include high-cardinality path params (use path template).

### Task 3
Add business metrics: `orders_created_total`, `payments_total{status}`. Instrument at application level, not just HTTP. Add custom gauges: `active_connections`, `queue_size`. Support labels for segmentation (e.g., by plan, region). Document all metrics in a runbook.

### Task 4
Implement metrics middleware that excludes health check and metrics endpoints from request metrics (or label them separately). Add request size and response size histograms. Support metrics sampling for very high traffic. Add `X-Response-Time` header for debugging. Integrate with distributed tracing: add trace ID to log context when available.

### Task 5
Build a metrics dashboard config (Grafana JSON or similar): latency over time, error rate, request rate by endpoint. Add SLO alerts: error rate > 1%, p99 > 500ms. Implement custom metrics for critical business flows (e.g., order-to-payment latency). Add metrics export to multiple backends (Prometheus, StatsD, CloudWatch). Write tests that verify metrics are emitted correctly. Document alerting thresholds and runbooks.
