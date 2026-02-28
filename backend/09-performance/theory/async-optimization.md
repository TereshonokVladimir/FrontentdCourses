# Async Optimization

## Concept

Async optimization maximizes concurrency by overlapping I/O operations instead of blocking. Non-blocking I/O, parallel awaits, and batching reduce idle time and improve throughput.

## Why It Matters

Backends spend most time waiting on I/O—database, APIs, disk. Blocking on each call serializes work. Async allows one thread to handle many concurrent operations, dramatically increasing throughput without more CPU cores.

## Key Concepts

- **Non-blocking I/O**: Event loop handles many connections; no thread per request
- **Parallel execution**: `Promise.all` for independent operations
- **Sequential when dependent**: Await in order when B needs A's result
- **Batching**: Group multiple operations into fewer round-trips
- **Backpressure**: Don't accept more work than you can process

## Code Example

```javascript
// Sequential (slow): 3 × 100ms = 300ms
const a = await fetchA()
const b = await fetchB()
const c = await fetchC()

// Parallel (fast): ~100ms
const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()])
```

## Under the Hood

Node.js event loop runs one thread. When an async operation starts, it yields; when it completes, the callback runs. Many I/O operations can be in flight simultaneously. CPU-bound work blocks the loop—use Worker Threads.

## Common Mistakes

- Awaiting in sequence when operations are independent
- Blocking the event loop with CPU-heavy work (JSON.parse of huge payloads, crypto)
- Unbounded concurrency (too many parallel requests; overwhelm downstream)
- Ignoring backpressure in streams

## Best Practices

- Use Promise.all for independent async operations
- Batch external calls where possible
- Offload CPU-bound work to Worker Threads
- Limit concurrency with p-limit or similar for external APIs

## Summary

Async optimization overlaps I/O to maximize throughput. Parallelize independent work, batch where possible, and avoid blocking the event loop.
