# Debugging and DevTools

## Concept

Debugging uses `console.log`, `debugger`, and browser DevTools. Console: log, warn, error, table, time/timeEnd, group. Breakpoints: set in Sources, conditional breakpoints. Network tab: inspect requests. Performance: profile CPU and memory. React DevTools for component tree. Know the tools to fix issues fast.

## Why It Matters

Efficient debugging saves hours. Console methods beyond log improve inspection. Breakpoints and step-through find logic errors. Network tab debugs API issues. Performance profiling finds bottlenecks.

## Key Concepts

- `console.log`, `console.table` (arrays/objects)
- `console.time("label")` / `console.timeEnd("label")`
- `debugger` – pauses when DevTools open
- Breakpoints, conditional breakpoints
- Network tab: status, headers, response
- Sources: call stack, scope, watch

## Code Example

```javascript
console.table(users)
console.time("fetch")
await fetch(url)
console.timeEnd("fetch")

if (condition) debugger
```

## Under the Hood

Console methods are async in some cases. Debugger triggers a pause in the engine. DevTools communicates with the browser via a protocol. Source maps map compiled code to source.

## Common Mistakes

- Leaving console.log in production (use build step to strip)
- Not using breakpoints (faster than log for complex flow)
- Ignoring Network tab for API issues
- Not checking for 404/500 in fetch

## Best Practices

- Use console.table for arrays of objects
- Use breakpoints for complex logic
- Use Network tab for API debugging
- Use React DevTools for component state

## Summary

Console methods, debugger, breakpoints. Network tab for API. Sources for stepping. Know your tools to debug effectively.
