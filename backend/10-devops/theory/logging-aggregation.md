# Logging Aggregation

## Concept

Logging aggregation collects logs from many sources (applications, containers, servers) into a central system for search, analysis, and alerting. Instead of SSHing to servers or parsing local files, you query one place. Essential for distributed systems and containers with ephemeral storage.

## Why It Matters

Containers and serverless functions don't persist logs. Even with VMs, searching across dozens of instances is impractical. Aggregation gives you a single pane of glass for debugging, compliance, and security analysis.

## Key Concepts

- **Collectors**: Agents (Fluentd, Filebeat, Promtail) that ship logs
- **Storage**: Central store (Elasticsearch, Loki, CloudWatch)
- **Query**: Search and filter (Kibana, Grafana, CLI)
- **Structured logs**: JSON format for machine parsing and filtering
- **Retention**: How long to keep logs (cost vs compliance)

## Code Example

```javascript
// Structured logging for aggregation
const pino = require('pino')

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => ({ level: label }),
    bindings: (bindings) => ({
      pid: bindings.pid,
      host: bindings.hostname,
      service: 'api'
    })
  },
  timestamp: pino.stdTimeFunctions.isoTime
})

logger.info(
  { reqId: req.id, method: req.method, path: req.path, statusCode: res.statusCode },
  'request completed'
)

logger.error(
  { err: err, reqId: req.id },
  'request failed'
)
```

```yaml
# Promtail config: ship logs to Loki
scrape_configs:
  - job_name: containers
    static_configs:
      - targets:
          - localhost
        labels:
          job: containerlogs
          __path__: /var/log/containers/*.log
```

## Under the Hood

Agents tail log files or receive via stdout; they parse, enrich (add metadata), and send to the backend. Backends index by timestamp and fields; full-text search or structured queries retrieve logs. Retention policies delete old data. High volume may require sampling or log levels.

## Common Mistakes

- Unstructured logs (hard to query)
- Logging PII or secrets
- No correlation ID (can't trace a request across services)
- Sending everything at DEBUG (cost, noise)
- Not setting retention (unbounded cost)

## Best Practices

- Use structured JSON logs with consistent fields
- Add request/correlation IDs for tracing
- Never log secrets, tokens, or PII
- Use log levels; sample DEBUG in production
- Set retention based on compliance and cost

## Summary

Logging aggregation centralizes logs from many sources. Use structured logs, correlation IDs, and collectors. Store in a queryable backend; set retention. Never log secrets.
