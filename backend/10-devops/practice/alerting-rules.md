# Practice: Alerting Rules

## Tasks

### Task 1
Create a Prometheus alert rule file that fires when an instance is down (`up == 0` for 1 minute). Add labels `severity: critical` and `team: backend`. Add an annotation with a summary and a runbook URL. Test the rule by stopping a target and verifying the alert fires.

### Task 2
Add alert rules for high error rate (5xx responses > 1% for 5 minutes) and high latency (P95 > 2 seconds for 10 minutes). Use the `http_requests_total` and `http_request_duration_seconds` metrics (or equivalent). Ensure the rules use appropriate `for` duration to avoid flapping. Document the thresholds and rationale.

### Task 3
Implement SLO-based alerting: define an availability SLO of 99.9% (error budget: 0.1%). Create an alert that fires when the error budget burn rate would exhaust the budget in 1 hour (e.g., 14.4x burn rate). Use Prometheus recording rules to pre-compute the burn rate. Add a dashboard showing SLO compliance and remaining budget.

### Task 4
Configure Alertmanager to route alerts: critical alerts to PagerDuty or a webhook that pages on-call; warning alerts to Slack. Add grouping by `alertname` and `severity`. Implement inhibition: when `InstanceDown` fires, suppress alerts for that instance. Add a silence API or UI usage example for planned maintenance.

### Task 5
Build a complete alerting system: define alert tiers (critical, warning, info), create runbooks for each alert (what it means, how to investigate, how to fix), add on-call rotation (PagerDuty, Opsgenie, or custom), implement alert fatigue reduction (deduplication, grouping, throttling), and run a fire drill to verify the full pipeline (alert fires → notification received → runbook followed). Document the alerting philosophy and escalation policy.
