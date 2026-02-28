# Node.js Worker Threads

## Concept

Worker threads allow running JavaScript in separate OS threads. Each worker has its own V8 isolate and event loop. Data is passed via `postMessage` and `on('message')`. Used for CPU-intensive tasks without blocking the main thread.

## Why It Matters

Node.js is single-threaded. CPU-heavy work (crypto, image processing, parsing) blocks the event loop and stalls all requests. Worker threads offload that work to parallel threads while keeping the main thread responsive.

## Key Concepts

- `worker_threads` module: Worker, parentPort, workerData
- SharedArrayBuffer for shared memory (advanced)
- postMessage/onmessage for serializable data transfer
- Workers run in separate V8 isolates
- No shared state by default; copy or transfer

## Code Example

```javascript
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: { n: 40 } })
  worker.on('message', (result) => console.log('Fibonacci:', result))
  worker.on('error', (err) => console.error(err))
} else {
  const fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2)
  parentPort.postMessage(fib(workerData.n))
}
```

## Under the Hood

Each worker is a new V8 isolate in a separate thread. Messages are serialized (structured clone algorithm). Workers share the process but not memory. libuv manages the thread pool for I/O; workers use OS threads.

## Common Mistakes

- Passing non-serializable data (functions, symbols)
- Using workers for I/O (use async I/O instead)
- Creating too many workers (thread overhead)
- Blocking main thread while waiting for worker

## Best Practices

- Use workers for CPU-bound work only
- Reuse workers via a pool (e.g., worker-farm)
- Prefer child_process for separate processes
- Use transferable objects for large buffers

## Summary

Worker threads: parallel CPU work, separate V8 isolates, postMessage for data. Use for CPU-bound tasks; avoid for I/O.