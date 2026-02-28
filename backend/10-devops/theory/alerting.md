# Alerting

## Concept

Alerting notifies humans or systems when something requires attention. Alerts are triggered by rules that evaluate metrics or log patterns. Good alerting is actionable, timely, and avoids noise. Bad alerting causes fatigue and missed incidents.

## Why It Matters

Systems fail at 3 AM. Alerts wake you up (or trigger runbooks) so issues get fixed. Without alerting, you learn about outages from users. The goal is to know before users do—and to know what to do when the alert fires.

## Key Concepts

- **Alert rules**: Conditions that trigger (e.g., error rate > 1%)
- **Severity**: Critical (page), warning (ticket), info (dashboard)
- **Runbooks**: Documented steps for responding to each alert
- **On-call**: Rotation of people responsible for responding
- **SLO-based alerting**: Alert on SLO burn rate, not raw metrics

## Code Example

```yaml
# Prometheus alerting rules
groups:
  - name: api
    rules:
      - alert: HighErrorRate
        expr: |
          sum(rate(http_requests_total{status=~"5.."}[5m])) /
          sum(rate(http_requests_total[5m])) > 0.01
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate on API"
          runbook_url: "https://wiki/runbooks/high-error-rate"

      - alert: HighLatency
        expr: |
          histogram_quantile(0.95,
            sum(rate(http_request_duration_seconds_bucket[5m])) by (le)
          ) > 1
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "P95 latency above 1s"

      - alert: InstanceDown
        expr: up == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Instance {{ $labels.instance }} is down"
```

## Under the Hood

Alerting systems (Prometheus Alertmanager, PagerDuty, Datadog) evaluate rules periodically. When a rule fires for the `for` duration, an alert is created. It's routed by severity/labels to the right channel (Slack, PagerDuty). Deduplication and grouping reduce noise.

## Common Mistakes

- Alerting on everything (noise)
- No runbook (what do I do?)
- Alerting on symptoms, not causes
- No escalation path
- Not testing alerts (do they actually fire and notify?)

## Best Practices

- Alert only when human action is needed
- Write runbooks for every alert
- Use SLO-based alerting (burn rate) for user impact
- Tier severity: critical = page, warning = ticket
- Test alerting path regularly (fire drill)

## Summary

Alerting notifies when action is needed. Define actionable rules, severity, and runbooks. Avoid noise; test the pipeline. SLO-based alerting focuses on user impact.
