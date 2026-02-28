# Interview Questions: Node.js

## Beginner

1. What is the Node.js event loop and why does it matter?
2. What is the difference between `require()` and `import`?
3. What are streams and when would you use them?
4. What is the difference between `setTimeout` and `setImmediate`?
5. How do you read a file asynchronously in Node.js?
6. What is the purpose of `package.json`?
7. What is the difference between `process.env` and `process.argv`?
8. How do you handle errors in callback-based Node APIs?
9. What is the `Buffer` class used for?
10. What does `__dirname` represent?
11. How do you create an HTTP server without a framework?
12. What is the difference between `fs.readFile` and `fs.createReadStream`?
13. What is `process.nextTick` and when would you use it?
14. How do you pass data between parent and child processes?
15. What is the purpose of the `path` module?

## Intermediate

1. Explain the phases of the Node.js event loop.
2. How does the cluster module work and when would you use it?
3. What is backpressure in streams and how do you handle it?
4. How do worker threads differ from child processes?
5. Explain the difference between `module.exports` and `exports`.
6. How would you implement graceful shutdown in a Node server?
7. What is the difference between `util.promisify` and async/await with callbacks?
8. How do you prevent memory leaks with EventEmitters?
9. What is the purpose of `stream.pipeline()` vs `stream.pipe()`?
10. How would you implement rate limiting in Node.js?
11. Explain how `require()` resolves and caches modules.
12. What security considerations apply when using `child_process.exec`?
13. How do you handle large file uploads without loading into memory?
14. What is the difference between `crypto.createHash` and `crypto.createHmac`?
15. How would you debug a memory leak in a Node application?
16. Explain the difference between `process.on('uncaughtException')` and `process.on('unhandledRejection')`.
17. How do you implement a middleware pattern in Node?
18. What is the purpose of `AbortController` with `fetch` or streams?
19. How would you run CPU-intensive code without blocking the event loop?
20. What is the difference between `Buffer.alloc` and `Buffer.allocUnsafe`?

## Advanced

1. Design a system that processes millions of log lines using streams. How would you handle backpressure and memory?
2. How would you implement a distributed rate limiter that works across multiple Node instances?
3. Explain the libuv thread pool and which operations use it.
4. How do you achieve zero-downtime deployment with a Node.js cluster?
5. Design a worker pool that handles both CPU and I/O bound tasks efficiently.
6. How would you implement request context (e.g., request ID) across async boundaries without passing it explicitly?
7. What are the trade-offs between worker threads and cluster for scaling?
8. How do you handle circular dependencies in CommonJS modules?
9. Design a streaming JSON parser that emits objects as they are parsed from a large array.
10. How would you implement a connection pool for a database in Node?
11. Explain how to use `AsyncLocalStorage` for request tracing.
12. How do you prevent prototype pollution when merging user input with objects?
13. Design a file watcher that debounces events and handles recursive directories.
14. How would you implement a circuit breaker for external API calls in Node?
15. What is the difference between `cluster` and PM2's cluster mode?
16. How do you ensure that a Node process exits cleanly when using worker threads?
17. Design an HTTP proxy with load balancing and health checks.
18. How would you implement idempotency for a POST endpoint?
19. Explain the trade-offs of using `child_process.spawn` vs `child_process.exec`.
20. How do you profile and optimize a Node.js application for production?