# Concurrency Basics

## Concept

Concurrency is handling multiple tasks in overlapping time periods. In Node.js, a single thread uses the event loop to interleave I/O-bound work. True parallelism (multiple CPU cores) requires worker threads or child processes. Understanding concurrency prevents race conditions and deadlocks.

## Why It Matters

Backends handle many concurrent requests. Database connections, external API calls, and file I/O are concurrent. Misunderstanding leads to race conditions, connection exhaustion, and unpredictable behavior.

## Key Concepts

- Event loop: single thread, non-blocking I/O
- Async: callbacks, Promises, async/await
- Concurrency vs parallelism (Node is concurrent, not parallel by default)
- Race conditions: order-dependent bugs
- Connection pools: limit concurrent DB connections

## Code Example

```javascript
// Concurrent requests (event loop interleaves)
const [user, orders] = await Promise.all([
  db.users.findById(id),
  db.orders.findByUserId(id)
])

// Race condition (bad)
let count = 0
async function increment() {
  const current = await db.getCount()
  await db.setCount(current + 1)  // Lost update if concurrent
}

// Fix: atomic operation
await db.incrementCount()
```

## Under the Hood

Node.js event loop runs one task at a time. I/O (network, disk) is delegated to libuv; when complete, callbacks are queued. Promise.all runs independent async ops concurrently. Worker threads run JS in separate threads for CPU-bound work.

## Common Mistakes

- Assuming synchronous execution of async code
- Shared mutable state without locks
- Unbounded concurrency (thousands of parallel requests)
- Blocking the event loop with CPU work

## Best Practices

- Use Promise.all for independent async ops
- Use atomic DB operations
- Limit concurrency (p-limit, connection pools)
- Offload CPU work to workers

## Summary

Concurrency: overlapping work. Node uses event loop for I/O concurrency. Avoid race conditions with atomic ops and proper async patterns.
