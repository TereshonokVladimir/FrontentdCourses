# Practice: Graceful Shutdown

## Tasks

### Task 1
Create an HTTP server that handles SIGTERM and SIGINT. On signal, stop accepting new connections, wait for in-flight requests to complete (track with a counter), then call `process.exit(0)`. Use `server.close()` which stops new connections. Implement a simple request counter: increment on request, decrement when response ends.

### Task 2
Add a timeout: if shutdown takes longer than 10 seconds, force exit with `process.exit(1)`. Use `setTimeout` in the signal handler. Log a warning before force exit. Allow configuring the timeout via env `SHUTDOWN_TIMEOUT`.

### Task 3
Support multiple resources: an HTTP server and a database connection (simulate with a mock that has `close()` returning a Promise). Shut down all resources in parallel. Wait for all to complete before exiting. If any fails, log and continue with others; exit 1 if any failed.

### Task 4
Implement "draining" state: when shutdown starts, set a flag. New requests get 503 with `Retry-After: 5`. Health check returns unhealthy. Existing requests complete normally. Use a shared `isShuttingDown` variable checked in the request handler.

### Task 5
Add idempotent shutdown: calling the shutdown function multiple times (e.g., double SIGINT) should only run once. Use a guard. Ensure no race between shutdown and a new request starting. Add a `beforeExit` hook for cleanup that must run (e.g., flush logs). Document the shutdown sequence: signal → drain → wait → cleanup → exit.