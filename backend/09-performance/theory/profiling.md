# Profiling

## Concept

Profiling is the process of measuring where a program spends its time (CPU), memory, or I/O. It produces data to identify bottlenecks, memory leaks, and inefficient code paths.

## Why It Matters

Without profiling, optimization is guesswork. Profiling reveals the actual hotspots—often different from intuition. It's essential for production debugging and systematic performance improvement.

## Key Concepts

- **CPU profiling**: Samples call stacks to find CPU-bound code
- **Memory profiling**: Tracks allocations, heap usage, potential leaks
- **Flame graphs**: Visualize call stacks; width = time spent
- **Sampling vs instrumentation**: Sampling has low overhead; instrumentation is more precise but intrusive
- **Production profiling**: Use low-overhead sampling; avoid continuous profiling in hot paths

## Code Example

```javascript
// Node.js built-in profiler (CPU)
// Run: node --prof app.js
// Analyze: node --prof-process isolate-*-v8.log

// Programmatic CPU profiling (V8)
const v8 = require('v8')
const fs = require('fs')
v8.setFlagsFromString('--prof')
// After workload:
// node --prof-process isolate-*-v8.log > profile.txt
```

## Under the Hood

CPU profilers typically sample the call stack at intervals (e.g., 1ms). More samples in a function = more time spent. Memory profilers track allocations and GC; heap snapshots show retained objects and their references.

## Common Mistakes

- Profiling in development with tiny datasets (not representative)
- Ignoring I/O wait (profiler shows CPU; async I/O may be the bottleneck)
- Profiling with high overhead in production (affects results)
- Optimizing based on a single profile run (variance exists)

## Best Practices

- Profile under realistic load and data volume
- Use flame graphs for CPU; heap snapshots for memory
- Correlate with APM traces (request-level context)
- Profile production with low-overhead sampling; short windows

## Summary

Profiling turns intuition into data. Use CPU profiling for hotspots, memory profiling for leaks, and correlate with request traces for actionable insights.
