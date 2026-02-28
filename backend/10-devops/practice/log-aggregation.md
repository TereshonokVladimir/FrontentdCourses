# Practice: Log Aggregation

## Tasks

### Task 1
Implement structured JSON logging in a Node.js API using `pino` or similar. Log each request with fields: `timestamp`, `level`, `method`, `path`, `statusCode`, `duration`, `requestId`. Ensure logs go to stdout (for container capture). Add a request ID middleware that generates or propagates `X-Request-ID`.

### Task 2
Set up a log collector (Fluentd, Filebeat, or Promtail) that reads container logs and ships them to a backend. Use Loki for storage (lightweight) or Elasticsearch. Run the stack with Docker Compose: API, collector, and Loki/Elasticsearch. Verify logs from the API appear in the backend. Add a label for `service` name.

### Task 3
Create a Grafana dashboard (or Kibana) to query logs. Add panels for: error logs (level=error), request logs filtered by path, and logs for a specific request ID. Implement a search that finds all logs for a given trace/request across services. Document the log query syntax.

### Task 4
Add log-based alerting: alert when error rate (count of error-level logs per minute) exceeds a threshold. Use Prometheus to scrape log metrics (e.g., via Promtail's metrics or a custom exporter) or use Loki's alerting. Ensure the alert includes a link to the relevant logs in Grafana.

### Task 5
Build a production log aggregation setup: use a log sampling strategy for high-volume endpoints (e.g., sample 1% of successful requests, 100% of errors), configure retention (7 days for debug, 30 days for errors), add log enrichment (add `environment`, `version` from env vars), implement a runbook for "how to find logs for a failed request," and ensure PII is never logged (add a redaction layer if needed).
