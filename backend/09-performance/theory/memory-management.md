# Memory Management

## Concept

Memory management in Node.js involves understanding heap allocation, V8's limits, and avoiding leaks. Unlike C/C++, JavaScript uses automatic garbage collection, but developers must avoid retaining unnecessary references.

## Why It Matters

Memory leaks cause gradual degradation and eventual OOM crashes. In long-running servers, even small leaks compound. Understanding allocation patterns helps prevent leaks and tune for production workloads.

## Key Concepts

- **Heap**: Where objects live; divided into generations (new space, old space)
- **V8 default limit**: ~1.4–2GB on 64-bit; configurable with `--max-old-space-size`
- **Memory leak**: Unintended retention—closures, global caches, event listeners
- **Heap snapshots**: Compare before/after to find retained objects
- **External memory**: Buffers, native addons; not always visible in heap

## Code Example

```javascript
// Leak: cache grows unbounded
const cache = new Map()
app.get('/data/:id', (req, res) => {
  const data = fetchExpensive(req.params.id)
  cache.set(req.params.id, data) // Never evicted
  res.json(data)
})

// Fix: bounded cache with LRU
const LRU = require('lru-cache')
const cache = new LRU({ max: 1000, ttl: 60000 })
```

## Under the Hood

V8 allocates in a heap; objects are promoted from new space to old space after surviving GC. GC runs when heap grows or under pressure. Large allocations (Buffers) may use external memory outside the JS heap.

## Common Mistakes

- Unbounded caches or arrays
- Closures capturing large objects
- Not removing event listeners
- Storing request-specific data in module scope
- Assuming GC will "clean up" promptly

## Best Practices

- Use bounded caches (LRU with max size)
- Remove listeners when done (or use WeakRef where appropriate)
- Avoid global mutable state that accumulates
- Monitor heap usage; set alerts for growth trends
- Take heap snapshots to debug leaks

## Summary

Memory management in Node.js is about avoiding retention. Use bounded structures, clean up listeners, and monitor heap to prevent leaks.
