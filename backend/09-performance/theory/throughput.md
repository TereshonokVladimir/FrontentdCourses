# Throughput

## Concept

Throughput is the rate at which a system processes work—typically requests per second (RPS) or operations per second. It measures capacity, not latency. A system can have high throughput but poor latency (e.g., queued requests).

## Why It Matters

Throughput defines how much load a system can handle. It drives capacity planning and scaling decisions. Throughput and latency are related: under load, latency increases as the system saturates. Both matter for SLOs.

## Key Concepts

- **RPS/QPS**: Requests or queries per second
- **Saturation**: Point where adding load increases latency without increasing throughput
- **Bottleneck**: Component that limits throughput (DB, CPU, network)
- **Scaling**: Horizontal scaling increases throughput linearly (until shared resources saturate)
- **Throughput vs latency trade-off**: Batching increases throughput but may add latency

## Code Example

```javascript
// Load test: measure throughput
const results = []
for (let i = 0; i < 1000; i++) {
  const start = performance.now()
  await fetch('http://localhost:3000/api')
  results.push(performance.now() - start)
}
const rps = 1000 / (results.reduce((a, b) => a + b, 0) / 1000)
console.log(`Throughput: ${rps} RPS`)
```

## Under the Hood

Throughput is limited by the slowest resource. If DB handles 1000 QPS, the app can't exceed that for DB-bound workloads. CPU-bound work is limited by cores. Network throughput is rarely the limit for APIs.

## Common Mistakes

- Optimizing throughput while ignoring latency
- Testing at low load (throughput looks fine until saturation)
- Not identifying the bottleneck before scaling
- Assuming linear scaling (shared resources limit gains)

## Best Practices

- Measure throughput under target load
- Find the bottleneck (DB, CPU, network)
- Set throughput SLOs for capacity planning
- Understand throughput-latency curve (latency degrades near saturation)

## Summary

Throughput measures capacity. It's limited by the bottleneck. Measure under load, identify limits, and scale the right component. Throughput and latency must be considered together.
