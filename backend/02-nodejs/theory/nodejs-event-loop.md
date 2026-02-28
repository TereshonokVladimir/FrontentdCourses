# Node.js Event Loop

## Concept

Node.js uses a single-threaded event loop to handle concurrent I/O. The loop processes the call stack, then checks queues: timers, I/O callbacks, setImmediate, close. Microtasks (Promises) run between each phase. I/O is delegated to libuv; when complete, callbacks are queued.

## Why It Matters

Understanding the event loop explains async behavior, execution order, and why blocking the loop stalls everything. "Why did my Promise run before setTimeout?"—the loop. Performance and debugging depend on it.

## Key Concepts

- Phases: timers, pending callbacks, idle, poll, check, close
- Microtasks (Promise, queueMicrotask) run after each phase
- process.nextTick runs before microtasks
- I/O (fs, net) uses thread pool or OS async APIs
- Blocking the loop blocks all requests

## Code Example

```javascript
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve().then(() => console.log(3))
setImmediate(() => console.log(4))
console.log(5)
// Output: 1, 5, 3, 2, 4 (or 2, 4 order can vary)
```

## Under the Hood

libuv implements the event loop. Each phase has a queue. The loop runs: execute phase callbacks, run all microtasks, move to next phase. Timers use a min-heap; poll waits for I/O. Node runs on one thread; workers run in separate threads.

## Common Mistakes

- Blocking with sync I/O or CPU-heavy work
- Assuming setTimeout(fn, 0) runs immediately
- Long-running sync code in request handlers
- Not understanding microtask vs macrotask order

## Best Practices

- Use async I/O; avoid sync fs/CPU in hot path
- Offload CPU work to worker threads
- Use setImmediate for "after I/O" deferral
- Profile before optimizing

## Summary

Event loop: phases, microtasks, single thread. Don't block. Use async I/O and workers for CPU work.
