# Performance Testing

## Concept

Performance testing measures how a system behaves under load—throughput, latency, resource usage. It includes load testing (sustained load), stress testing (beyond capacity), and spike testing (sudden traffic). The goal is to find bottlenecks and validate SLAs before production.

## Why It Matters

Backends can be correct but too slow. Performance tests reveal degradation under load, memory leaks, and database bottlenecks. They inform capacity planning and help set realistic SLAs. Catching performance issues before production avoids outages and costly fixes.

## Key Concepts

- **Load testing**: Simulate expected traffic, measure response times
- **Stress testing**: Push beyond capacity, find breaking point
- **Spike testing**: Sudden traffic increase
- **Endurance**: Run for extended period, detect leaks
- Metrics: RPS, p50/p95/p99 latency, error rate

## Code Example

```typescript
// k6 load test
import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 50,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01']
  }
}

export default function () {
  const res = http.get('https://api.example.com/health')
  check(res, { 'status is 200': (r) => r.status === 200 })
  sleep(1)
}
```

## Under the Hood

Load test tools (k6, Artillery, wrk) spawn many concurrent connections and send requests. They collect latency percentiles, error rates, and throughput. Results are aggregated and reported. Some tools integrate with APM for correlation.

## Common Mistakes

- Testing against dev environment (different from prod)
- Ignoring cold start or warm-up effects
- No baseline for comparison
- Testing without realistic data volume
- Not testing under failure conditions (DB slow, etc.)

## Best Practices

- Test in environment similar to production
- Define SLAs (e.g., p95 < 500ms)
- Run load tests in CI or nightly
- Include warm-up phase in long runs
- Monitor resource usage (CPU, memory) during tests

## Summary

Performance testing validates throughput, latency, and stability under load. Use load, stress, and spike tests; define thresholds and run in CI. Test in production-like environments and monitor resources. Essential for production-ready backends.
