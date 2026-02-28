# Practice: Worker Pool

## Tasks

### Task 1
Create a pool of 2 worker threads. Each worker runs a script that receives `{ task: string, data: any }` and returns a result. Use `workerData` and `parentPort` for communication. Implement `run(task, data)` that returns a Promise; queue tasks if all workers are busy.

### Task 2
Implement a task queue: when all workers are busy, new tasks wait in a queue. When a worker finishes, it picks the next task. Use a simple array queue. Ensure FIFO order. Return a Promise that resolves with the worker's result.

### Task 3
Add timeout: if a task runs longer than N ms, reject the Promise and optionally terminate the worker (and spawn a new one). Use `AbortController` or a simple `setTimeout` that rejects. Document that the worker may still be running (consider worker termination).

### Task 4
Support different worker scripts for different task types: `run('cpu', data)` uses cpu-worker.js, `run('io', data)` uses io-worker.js. Maintain separate pools or a single pool with workers that can handle multiple types. Route tasks to the appropriate worker.

### Task 5
Add pool metrics: `getStats()` returns `{ active: number, queued: number, completed: number, failed: number }`. Track these counters. Add `drain()` that returns a Promise resolving when the queue is empty and all workers are idle. Use for graceful shutdown: stop accepting new tasks, call drain(), then terminate workers.