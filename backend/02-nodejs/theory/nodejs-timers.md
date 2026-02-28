# Node.js Timers

## Concept

Node.js provides `setTimeout`, `setInterval`, `setImmediate`, and `process.nextTick` for scheduling work. They integrate with the event loop. setTimeout/setInterval are timers phase; setImmediate is check phase; nextTick runs before any phase.

## Why It Matters

Delays, retries, and deferred execution use timers. Understanding order (nextTick before setImmediate before setTimeout(0)) prevents subtle bugs. Clearing timers avoids leaks. Common in backends for debounce, polling, and timeouts.

## Key Concepts

- `setTimeout(fn, ms)` – run once after delay
- `setInterval(fn, ms)` – run repeatedly
- `clearTimeout`, `clearInterval` – cancel
- `setImmediate(fn)` – after I/O, before timers
- `process.nextTick(fn)` – before next event loop iteration
- Order: nextTick > microtasks > setImmediate > setTimeout

## Code Example

```javascript
const id = setTimeout(() => console.log('later'), 1000)
clearTimeout(id)  // cancel

setImmediate(() => console.log('after I/O'))
process.nextTick(() => console.log('before anything'))

// Debounce
let debounceTimer
function debounce(fn, ms) {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(fn, ms)
}
```

## Under the Hood

Timers use libuv's timer heap. Minimum delay is ~1ms (or 4ms in nested calls per HTML5 spec). nextTick and setImmediate queue callbacks; nextTick runs first. Timers can be delayed under load.

## Common Mistakes

- Assuming setTimeout(fn, 0) runs immediately
- Not clearing setInterval (memory leak)
- Using nextTick recursively (starves I/O)
- Relying on exact timing (timers are not precise)

## Best Practices

- Clear intervals when done
- Use setImmediate for "after current" deferral
- Avoid nextTick for heavy recursion
- Use AbortController for cancellable async

## Summary

Timers: setTimeout, setInterval, setImmediate, nextTick. Understand order; clear when done; don't rely on exact timing.