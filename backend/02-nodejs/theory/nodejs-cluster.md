# Node.js Cluster

## Concept

The cluster module enables running multiple Node.js processes that share the same port. A primary process forks workers; the OS load-balances connections. Each worker is a separate process with its own event loop and memory.

## Why It Matters

A single Node process uses one CPU core. Multi-core servers sit underutilized. Cluster lets you use all cores for handling more concurrent requests. Essential for production scaling on a single machine.

## Key Concepts

- Primary process forks workers with `cluster.fork()`
- Workers share server port (OS handles distribution)
- `cluster.isPrimary` vs `cluster.isWorker`
- Workers can restart on crash
- Round-robin on most platforms

## Code Example

```javascript
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) cluster.fork()
  cluster.on('exit', (worker) => cluster.fork())
} else {
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Worker ${process.pid}`)
  }).listen(3000)
}
```

## Under the Hood

cluster uses child_process.fork(). The primary binds the port and passes file descriptors to workers. On Linux, SO_REUSEPORT allows multiple processes to bind the same port. The kernel distributes incoming connections.

## Common Mistakes

- Not handling worker exit (no restart)
- Sharing in-memory state between workers (each has own memory)
- Using cluster with PM2/similar (redundant)
- Assuming sticky sessions without extra setup

## Best Practices

- Restart workers on uncaught exception
- Use external store (Redis) for shared state
- Consider PM2 for production cluster management
- Monitor worker health

## Summary

Cluster: multiple processes, shared port, one per CPU core. Use for scaling on multi-core; workers are separate processes.