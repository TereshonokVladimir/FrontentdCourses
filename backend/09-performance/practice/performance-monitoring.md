# Practice: Performance Monitoring

## Tasks

### Task 1
Add request timing middleware. For each request, record: method, path, status, duration. Log in structured format (JSON). Include request ID for tracing. Store last 1000 requests in memory and expose `GET /metrics/requests` with summary: count, P50, P95, P99 duration per path.

### Task 2
Implement a simple APM-style tracer. For each request, create a trace with span ID and parent ID. For async operations (DB query, HTTP call), create child spans. Log span start/end with duration. Support nested spans (e.g., request → db → external API). Output trace as JSON for a sample request.

### Task 3
Add resource metrics. Expose an endpoint that returns: `process_cpu_usage`, `process_memory_usage`, `event_loop_delay` (measure with `setImmediate` timing), `active_handles`, `active_requests`. Use `process.cpuUsage()`, `process.memoryUsage()`, and a simple event loop lag measurement. Format for Prometheus or JSON.

### Task 4
Implement alerting thresholds. Define SLOs: P99 latency < 500ms, error rate < 0.1%. Check these every 10 seconds over a sliding window (e.g., last 5 minutes). If violated, log an alert or call a webhook. Add a "burn rate" check: if error rate spikes 10x in 1 minute, alert immediately.

### Task 5
Build a performance dashboard. Collect: (1) request rate and latency percentiles per endpoint, (2) error rate, (3) DB query count and duration, (4) cache hit rate, (5) event loop lag. Store metrics in a time-series structure (e.g., last 24 hours in 1-minute buckets). Expose an HTML dashboard with simple charts (use Chart.js or similar, or ASCII). Add a comparison view: compare last hour vs previous hour. Document deployment and integration with existing monitoring (Prometheus, Datadog, etc.).
