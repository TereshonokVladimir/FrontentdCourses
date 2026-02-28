# Practice: Monitoring Setup

## Tasks

### Task 1
Add a `/metrics` endpoint to a Node.js API that exposes Prometheus-format metrics. Use the `prom-client` library to expose default metrics (CPU, memory) and a custom counter for HTTP requests. Verify the endpoint returns valid Prometheus output. Add a `/health` endpoint that returns 200 when the app is ready.

### Task 2
Configure Prometheus to scrape the API's `/metrics` endpoint. Run Prometheus in Docker or locally with a config that targets the API. Create a simple Grafana dashboard with two panels: request rate and error rate (or request count by status). Save the dashboard as JSON.

### Task 3
Add a histogram metric for request duration with labels for `method` and `path`. Create Prometheus alert rules: alert when error rate exceeds 1% for 5 minutes, and when P95 latency exceeds 1 second for 10 minutes. Configure Alertmanager (or equivalent) to send alerts to a webhook or Slack. Test that alerts fire correctly.

### Task 4
Deploy a full monitoring stack with Docker Compose: Prometheus, Grafana, Alertmanager, and the API. Use Prometheus service discovery or static config to find the API. Add a Grafana dashboard with the four golden signals (latency, traffic, errors, saturation). Configure retention (e.g., 15 days) and add recording rules for expensive queries.

### Task 5
Implement production-ready monitoring: add custom business metrics (e.g., orders created, cache hit rate), set up SLO-based alerting (e.g., 99.9% availability, burn rate), integrate with a log aggregation system (Loki or ELK) for correlation, add distributed tracing (OpenTelemetry), and document the runbooks for each alert. Create a single "service overview" dashboard that answers "is the system healthy?"
