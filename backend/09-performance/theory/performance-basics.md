# Performance Basics

## Concept

Performance in backend systems refers to how efficiently a service handles requests: response time, throughput, resource utilization, and scalability. It encompasses measuring, optimizing, and sustaining acceptable behavior under load.

## Why It Matters

Slow backends frustrate users, increase infrastructure costs, and limit scalability. Performance directly affects revenue (conversion drops with latency), operational costs (inefficient code burns CPU/memory), and system reliability (resource exhaustion causes outages).

## Key Concepts

- **Response time (latency)**: Time from request to first byte or last byte of response
- **Throughput**: Requests per second the system can handle
- **Resource utilization**: CPU, memory, I/O, and network usage
- **Tail latency**: P95, P99—critical for user experience
- **Baseline metrics**: Establish before optimizing; measure, don't guess

## Code Example

```javascript
// Simple performance measurement
const start = performance.now()
await processRequest(req)
const duration = performance.now() - start
logger.info({ duration_ms: duration, path: req.url })
```

## Under the Hood

Performance is bounded by the slowest resource: CPU, memory, disk I/O, or network. Amdahl's Law: parallelization helps only the parallelizable portion. Bottlenecks often hide in I/O (database, external APIs) rather than CPU.

## Common Mistakes

- Optimizing before measuring (premature optimization)
- Ignoring tail latency (P50 looks fine, P99 is terrible)
- Not setting SLOs/SLAs for response time and error rate
- Assuming local performance matches production (different data, load, network)

## Best Practices

- Establish baseline metrics and SLOs before changes
- Profile under realistic load; use production-like data volumes
- Focus on the critical path; optimize hotspots first
- Monitor P50, P95, P99 latency and error rates in production

## Summary

Performance is measurable and improvable. Define metrics, measure baseline, profile to find bottlenecks, optimize systematically, and validate with load tests.
