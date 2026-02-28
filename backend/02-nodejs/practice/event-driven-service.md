# Practice: Event-Driven Service

## Tasks

### Task 1
Create an EventEmitter-based pub/sub for internal events. `emit(event, data)` and `on(event, handler)`. Support multiple handlers per event. Implement `once(event, handler)`. Ensure handlers receive the data. No persistence.

### Task 2
Add namespaced events: `user:created`, `user:updated`, `order:placed`. Support wildcard subscription: `on('user:*', handler)` receives all user events. Implement with a simple pattern match (split by `:`, compare prefix). Pass the full event name to the handler.

### Task 3
Implement request-response over events: `request('getUser', { id: 1 }, (err, result) => {})`. Emit a unique request id, wait for a response event with that id, then callback. Use timeout (e.g., 5s) to avoid hanging; call callback with error if no response.

### Task 4
Add async handlers: if a handler returns a Promise, wait for it before calling the next handler. Support a `series` mode (handlers run in order, each waits for previous) and `parallel` mode (all run concurrently, wait for all). Emit a `handlersComplete` or similar when done (for observability).

### Task 5
Build a small order service: emit `order:created` when an order is placed. Handlers: (1) send confirmation email (simulate), (2) update inventory (simulate), (3) log to analytics. If any handler throws, emit `order:failed` with the error. Add idempotency: same `orderId` emitted twice should only process once (use a Set of processed ids, with TTL for cleanup).