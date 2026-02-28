# Vertical Scaling

## Concept

Vertical scaling increases the resources of a single machine—more CPU, RAM, or disk. It's scaling "up" rather than "out" (horizontal). Simpler to implement but has physical and cost limits.

## Why It Matters

Vertical scaling is the first lever when a single instance is underpowered. It requires no architectural changes—just resize the VM. It's useful for monolithic apps, databases, and when horizontal scaling isn't yet needed.

## Key Concepts

- **CPU**: More cores for parallel work; Node.js uses one main thread, but Worker Threads and clustering help
- **Memory**: Larger heap, more cache; V8 `--max-old-space-size`
- **Disk I/O**: Faster SSD, more IOPS
- **Network**: Higher bandwidth
- **Diminishing returns**: Cost grows non-linearly; hardware limits exist

## Code Example

```javascript
// Use more memory when available
node --max-old-space-size=4096 server.js  // 4GB heap

// Use all CPU cores with cluster
const cluster = require('cluster')
if (cluster.isPrimary) {
  const cpus = require('os').cpus().length
  for (let i = 0; i < cpus; i++) cluster.fork()
} else {
  require('./app').start()
}
```

## Under the Hood

Cloud providers offer instance sizes (e.g., t3.small → t3.xlarge). Resizing often requires restart. Databases benefit from more RAM (buffer cache). CPU scaling helps when work is parallelizable.

## Common Mistakes

- Scaling vertically when the bottleneck is I/O (network, disk)
- Assuming bigger instance = proportionally better (often not)
- Ignoring cost (large instances expensive)
- Single point of failure (one big machine)

## Best Practices

- Profile before scaling; ensure CPU/memory are the bottleneck
- Consider cost vs horizontal scaling
- Use cluster module to utilize multiple cores in Node.js
- Plan for vertical limits; design for horizontal when needed

## Summary

Vertical scaling is simple but limited. Use it when a single instance is underpowered. Combine with clustering for multi-core use. Plan for horizontal scaling as load grows.
