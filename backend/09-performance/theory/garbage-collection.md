# Garbage Collection

## Concept

Garbage collection (GC) automatically reclaims memory for objects no longer reachable. V8 uses a generational, incremental, and concurrent GC. Understanding it helps minimize pause times and tune for low-latency applications.

## Why It Matters

GC pauses can cause request latency spikes. In real-time or low-latency systems, long pauses are unacceptable. Knowing how GC works helps you reduce allocation pressure and tune V8 flags for your workload.

## Key Concepts

- **Generational GC**: Young generation (fast, frequent) vs old generation (slower, less frequent)
- **Minor GC**: Scavenge new space; short pauses
- **Major GC**: Mark-sweep/compact old space; longer pauses
- **Incremental marking**: Spread work to reduce pause
- **Idle time GC**: Run during event loop idle

## Code Example

```javascript
// Reduce allocation pressure: reuse objects
// Bad: new object per request
function handleRequest() {
  return { id: 1, data: [] } // Allocated every call
}

// Better: pool or reuse when possible
const reusable = { id: 0, data: [] }
function handleRequest() {
  reusable.id = 1
  reusable.data.length = 0
  return reusable
}
```

## Under the Hood

V8 divides heap into new space (1–8MB) and old space. Objects surviving two minor GCs get promoted. Major GC marks reachable objects, sweeps unreachable, and optionally compacts. `--expose-gc` allows manual `global.gc()` for testing.

## Common Mistakes

- Creating many short-lived objects in hot paths (GC pressure)
- Assuming GC runs immediately when references drop
- Ignoring GC in latency SLOs (P99 includes GC pauses)
- Not testing under allocation-heavy load

## Best Practices

- Reduce allocation in hot paths; reuse objects where safe
- Use `--max-old-space-size` to cap heap; avoid OOM
- Monitor GC metrics (pause time, frequency) in production
- Consider `--gc-interval` for long-running processes if needed

## Summary

GC is automatic but not free. Reduce allocation pressure, understand pause behavior, and monitor GC metrics for latency-sensitive systems.
