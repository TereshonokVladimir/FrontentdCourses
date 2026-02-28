# Practice: Memory Profiling

## Tasks

### Task 1
Create an endpoint that returns current memory usage: `heapUsed`, `heapTotal`, `external`, `rss`. Use `process.memoryUsage()`. Add a simple memory growth test: allocate 1000 objects in a loop, call the endpoint before and after, and observe the difference.

### Task 2
Implement a memory leak detector. Maintain a weak reference to a "canary" object. If the canary is not collected after a full GC (triggered via `--expose-gc` and `global.gc()`), log a warning. Run this check periodically (e.g., every minute). Document how to run with `--expose-gc`.

### Task 3
Create a bounded cache that prevents unbounded growth. Implement an LRU cache with `max` entries. Add a test that inserts 10,000 items into a cache with `max: 100` and verify the heap stabilizes (no continuous growth). Use `process.memoryUsage()` to assert heap stays within a threshold.

### Task 4
Simulate and fix a common leak: event listener accumulation. Create a service that adds a listener on each request and never removes it. Observe heap growth over 1000 requests. Fix by removing the listener when done or using `{ once: true }`. Verify heap stabilizes.

### Task 5
Build a heap diff tool. Take a heap snapshot before and after a suspected leak (e.g., process 100 requests). Compare retained object counts by type (e.g., `(string)`, `(object)`, `(closure)`). Output a summary: "Object count increased by X for type Y." Use `v8.getHeapSnapshot()` or `v8.writeHeapSnapshot()` if available, or use a library like `heapdump`. Document how to analyze the output.
