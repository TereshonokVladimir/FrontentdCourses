# The Event Loop

## Concept

JavaScript is single-threaded. The event loop handles async work: when the call stack is empty, it takes tasks from the task queue (macrotasks) and microtask queue (microtasks). Microtasks (Promises, queueMicrotask) run before the next macrotask. `setTimeout`, `setInterval`, I/O are macrotasks. Understanding this explains execution order.

## Why It Matters

"Why did my Promise run before setTimeout?"—the event loop. Async code doesn't block; it schedules callbacks. Race conditions and timing bugs often stem from misunderstanding the loop. It's a common interview topic.

## Key Concepts

- Call stack executes synchronously
- Web APIs (setTimeout, fetch) run outside the thread
- Task queue (macrotasks) and microtask queue
- Microtasks run after current task, before next macrotask
- `await` queues microtasks; `setTimeout` queues macrotask

## Code Example

```javascript
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve().then(() => console.log(3))
console.log(4)
// Output: 1, 4, 3, 2 (microtask before macrotask)
```

## Under the Hood

The engine has a call stack, heap, and queues. The event loop repeatedly: run a macrotask, run all microtasks, render if needed, repeat. Browsers may merge multiple timers. requestAnimationFrame has its own scheduling.

## Common Mistakes

- Assuming setTimeout(fn, 0) runs immediately (it queues)
- Blocking the main thread with long sync code (blocks rendering)
- Not understanding microtask vs macrotask order

## Best Practices

- Use Promises/async for flow control
- Offload heavy work to Web Workers
- Use requestAnimationFrame for animations
- Avoid long synchronous loops

## Summary

Event loop: call stack, task queue, microtask queue. Microtasks run before next macrotask. Single-threaded—don't block. Understand order for async debugging.
