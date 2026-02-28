# Practice: Async Wrapper

## Tasks

### Task 1
Create `asyncMap<T, U>(arr: T[], fn: (t: T) => Promise<U>): Promise<U[]>` – map with async function, runs sequentially. Create `asyncMapParallel<T, U>(arr: T[], fn: (t: T) => Promise<U>, concurrency: number): Promise<U[]>` – parallel with limit.

### Task 2
Implement `retry<T>(fn: () => Promise<T>, options: { times: number; delay: number }): Promise<T>`. On rejection, wait delay and retry. After times exhausted, throw. Support exponential backoff: `delayFn: (attempt: number) => number`.

### Task 3
Create `PromisePool<T>`: add tasks with `add(fn: () => Promise<T>)`, get results with `run(): Promise<T[]>`. Limit concurrent execution to N. Preserve order of results. Support `addAll(fns: (() => Promise<T>)[])`.

### Task 4
Implement `withTimeout<T>(promise: Promise<T>, ms: number): Promise<T>`. Reject with TimeoutError if promise doesn't resolve in time. The original promise may still be running (document). Add `AbortController` support: `withTimeout(promise, ms, signal)`.

### Task 5
Build `AsyncQueue<T>`: `push(item: T)`, `pop(): Promise<T>` (resolves when item available). Support `close()` to stop accepting pushes; pop resolves with undefined when empty and closed. Add `drain(): Promise<void>` that resolves when queue is empty. Type everything correctly.