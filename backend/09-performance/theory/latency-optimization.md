# Latency Optimization

## Concept

Latency optimization reduces the time from request to response. It involves identifying where time is spent (DB, network, CPU), eliminating unnecessary work, parallelizing where possible, and caching frequently accessed data.

## Why It Matters

Latency directly affects user experience and business metrics. Reducing P99 from 2s to 200ms can dramatically improve retention. Systematic optimization—measure, identify, fix, validate—yields the best results.

## Key Concepts

- **Critical path**: Longest chain of dependent operations
- **Parallelize**: Independent work in parallel (Promise.all)
- **Cache**: Avoid recomputation and I/O for repeated data
- **Reduce round-trips**: Batch, connection pooling, keep-alive
- **Async I/O**: Overlap I/O with other work

## Code Example

```javascript
// Sequential: 300ms
const user = await getUser(id)
const orders = await getOrders(user.id)
const settings = await getSettings(user.id)

// Parallel: ~100ms
const [user, orders, settings] = await Promise.all([
  getUser(id),
  getOrdersByUserId(id),  // Pass id if known
  getSettingsByUserId(id)
])
```

## Under the Hood

Latency is the sum of the critical path. Parallel branches don't add—the longest wins. Caching removes work entirely. Reducing round-trips (batch, pool) cuts network and connection overhead. Profiling reveals the actual bottlenecks.

## Common Mistakes

- Optimizing without measuring (wrong target)
- Sequential when parallel is possible
- No caching for repeated work
- Ignoring tail latency (P99)
- Optimizing non-critical path

## Best Practices

- Profile to find bottlenecks
- Parallelize independent operations
- Cache hot data; reduce round-trips
- Set latency SLOs; optimize for P95/P99
- Validate with load tests after changes

## Summary

Latency optimization is systematic: measure, find critical path, parallelize, cache, reduce round-trips. Focus on the biggest contributors first.
