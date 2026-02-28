# Node.js Events (EventEmitter)

## Concept

Node.js uses an event-driven architecture. The `events` module provides `EventEmitter`, which objects can extend to emit and listen for named events. Many Node APIs (streams, http, process) are EventEmitters.

## Why It Matters

Async behavior in Node is event-based. Understanding EventEmitter explains how streams, servers, and child processes work. Custom event-driven code is common for decoupling components. Essential for Node architecture.

## Key Concepts

- `emit(eventName, ...args)` – fire event
- `on(eventName, listener)` – subscribe
- `once()` – listen once
- `removeListener()`, `off()` – unsubscribe
- `prependListener()` – add to front
- Max listeners warning (default 10)

## Code Example

```javascript
const EventEmitter = require('events')

class Logger extends EventEmitter {
  log(msg) {
    this.emit('log', { message: msg, timestamp: new Date() })
  }
}

const logger = new Logger()
logger.on('log', (data) => console.log(data))
logger.once('log', () => console.log('First log only'))
logger.log('Hello')
logger.log('World')
```

## Under the Hood

EventEmitter stores listeners in a Map (event name → array of functions). emit() calls each listener synchronously. Errors in listeners can throw; use try/catch or domain. process.maxListeners can increase limit.

## Common Mistakes

- Forgetting to handle 'error' (crashes if unhandled)
- Adding too many listeners (memory leak)
- Emitting in a loop without batching
- Not removing listeners (memory leak in long-lived objects)

## Best Practices

- Always handle 'error' on EventEmitters you use
- Use once() when appropriate
- Remove listeners when done (e.g., cleanup)
- Consider event namespacing for large apps

## Summary

EventEmitter: emit, on, once, error handling. Core of Node's async model. Handle errors; avoid listener leaks.