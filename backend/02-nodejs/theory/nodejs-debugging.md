# Node.js Debugging

## Concept

Node.js supports debugging via the built-in inspector (Chrome DevTools protocol), `console` methods, and `--inspect` flag. Breakpoints, step-through, and variable inspection are available. VSCode and other IDEs integrate with the inspector.

## Why It Matters

Bugs happen. Console.log is limited. A debugger lets you pause execution, inspect state, and step through code. Essential for complex async flows and production issue reproduction.

## Key Concepts

- `node --inspect` – start with inspector
- `node --inspect-brk` – break on first line
- Chrome DevTools: chrome://inspect
- debugger statement
- console.log, console.error, console.trace
- NODE_OPTIONS='--inspect' for existing processes

## Code Example

```javascript
function processOrder(order) {
  debugger  // Execution pauses here when inspector attached
  const total = order.items.reduce((sum, i) => sum + i.price, 0)
  return { ...order, total }
}
```

```bash
node --inspect-brk src/index.js
# Open chrome://inspect, click "inspect"
```

## Under the Hood

The inspector uses the V8 debugger protocol. A WebSocket server runs on a port (default 9229). DevTools connects and sends commands. Breakpoints are set in the VM; execution pauses when hit.

## Common Mistakes

- Leaving debugger statements in production
- Not using source maps for transpiled code
- Debugging without reproduction steps
- Ignoring async context (breakpoints in callbacks)

## Best Practices

- Use --inspect only in dev; never expose in production
- Add source maps for TypeScript/transpiled code
- Use structured logging for production debugging
- Reproduce in dev with same inputs

## Summary

Debugging: --inspect, DevTools, debugger statement. Use for dev; avoid in production. Combine with logging.