# Prometheus & Grafana

## Concept

Prometheus is a time-series database and monitoring system that scrapes metrics from targets, stores them, and supports PromQL for querying. Grafana is a visualization platform that connects to Prometheus (and others) to build dashboards and configure alerts. Together they form a popular open-source observability stack.

## Why It Matters

Prometheus + Grafana is the de facto standard for Kubernetes and cloud-native monitoring. It's free, scalable, and has a rich ecosystem. Backend engineers use it to monitor services, set SLOs, and debug production issues.

## Key Concepts

- **Prometheus**: Pull-based scraping; metrics with labels; PromQL
- **Grafana**: Dashboards; alerting; multiple data sources
- **Exporters**: Expose metrics from systems (node_exporter, postgres_exporter)
- **Service discovery**: Auto-discover scrape targets (Kubernetes)
- **Recording rules**: Pre-compute expensive queries

## Code Example

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']

rule_files:
  - 'alerts/*.yml'

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  - job_name: 'api'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
        action: replace
        regex: ([^:]+)(?::\d+)?;(\d+)
        replacement: ${1}:${2}
        target_label: __address__
```

```javascript
// Expose /metrics for Prometheus
const client = require('prom-client')
const register = new client.Registry()
client.collectDefaultMetrics({ register })

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
})
```

## Under the Hood

Prometheus scrapes HTTP endpoints (e.g., /metrics) on a schedule. It parses the text format, stores time-series in its TSDB, and evaluates alert rules. PromQL queries aggregate and transform. Grafana sends PromQL to Prometheus, renders charts, and can evaluate its own alert rules.

## Common Mistakes

- High cardinality labels (user_id, request_id) blowing up storage
- Scraping too frequently (storage and load)
- No retention configuration (unbounded growth)
- Dashboards without context (what's normal?)
- Missing key metrics (request rate, errors, latency)

## Best Practices

- Keep label cardinality low (avoid per-request labels)
- Use recording rules for expensive dashboards
- Set retention (e.g., 15 days default)
- Build dashboards that answer "is it healthy?"
- Use exemplars to link metrics to traces

## Summary

Prometheus scrapes and stores metrics; Grafana visualizes and alerts. Expose /metrics from your app; use exporters for infrastructure. Mind cardinality and retention.
