# Practice: Middleware System

## Tasks

### Task 1
Create a simple middleware runner. A middleware is a function `(req, res, next) => {}`. Implement `use(middleware)` to register and `run(req, res)` to execute all middlewares in order. Call `next()` to advance; if `next()` is not called, stop the chain.

### Task 2
Add support for path-specific middlewares: `use('/api', middleware)`. Only run the middleware when the request path starts with the given path. Support multiple path prefixes.

### Task 3
Implement error-handling middleware: `(err, req, res, next) => {}`. If any middleware calls `next(err)`, skip to the error middleware. Support multiple error middlewares. If no error middleware handles it, log and send 500.

### Task 4
Add async middleware support. If a middleware returns a Promise, wait for it and call `next()` on resolve or `next(err)` on reject. Ensure proper error propagation through the chain.

### Task 5
Build a complete middleware stack: logging (log method + path), request ID (generate and attach to req), timing (measure duration, log on finish), and 404 handler. Export a function that returns the configured middleware runner for use with an HTTP server.