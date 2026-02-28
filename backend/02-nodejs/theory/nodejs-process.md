# Node.js Process

## Concept

The `process` object is a global that provides information and control over the current Node.js process. It exposes environment variables, signals, exit codes, stdin/stdout/stderr, and platform info. Used for config, shutdown, and debugging.

## Why It Matters

Backends read config from process.env. Graceful shutdown uses process signals. Exit codes communicate success/failure to orchestrators. Understanding process is essential for production deployment.

## Key Concepts

- `process.env` – environment variables
- `process.argv` – command-line arguments
- `process.cwd()`, `process.chdir()`
- `process.exit(code)` – 0 success, non-zero failure
- `process.on('SIGTERM', ...)` – graceful shutdown
- `process.pid`, `process.platform`, `process.memoryUsage()`

## Code Example

```javascript
const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down')
  server.close(() => process.exit(0))
})

console.log(`PID: ${process.pid}, Platform: ${process.platform}`)
```

## Under the Hood

process is provided by the Node runtime. It wraps OS process APIs. Signals are delivered by the OS. process.env is a copy at startup; changes to it affect child processes. Exit handlers run before process exits.

## Common Mistakes

- Not handling SIGTERM (containers kill after timeout)
- Using process.exit() in request handlers
- Assuming process.env is always set
- Blocking in signal handlers

## Best Practices

- Handle SIGTERM and SIGINT for graceful shutdown
- Use process.env for config; validate required vars
- Exit with appropriate codes (0, 1, etc.)
- Use process.memoryUsage() for monitoring

## Summary

Process: env, argv, signals, exit. Handle SIGTERM for graceful shutdown. Use env for config.