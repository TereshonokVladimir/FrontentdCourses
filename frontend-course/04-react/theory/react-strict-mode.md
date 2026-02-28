# Strict Mode

## Concept

Strict Mode is a development-only tool that helps find potential problems. It intentionally double-invokes certain functions (render, useState, useEffect) to surface side effects and impure code. It also warns about deprecated APIs and unsafe lifecycle methods.

## Why It Matters

Strict Mode catches bugs early: side effects in render, missing useEffect cleanup, legacy API usage. It simulates future React behavior (e.g., remounting for reuse). Code that works in Strict Mode is more resilient. It runs only in development.

## Key Concepts

- Wrap app or subtree: `<React.StrictMode><App /></React.StrictMode>`
- Double-invokes: render, useState updater, useEffect (mount, unmount, remount)
- No impact in production
- Helps find: impure render, missing cleanup, deprecated APIs
- Doesn't fix issues—just surfaces them

## Code Example

```jsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## Under the Hood

Strict Mode wraps its children in a special component. In development, React runs certain phases twice to detect impure code. If the second run produces different output, there's a problem. Production build strips Strict Mode—no double invocation.

## Common Mistakes

- Assuming production will double-invoke (it won't)
- Ignoring Strict Mode warnings (they indicate real issues)
- Writing code that "works" by relying on single invocation
- Disabling Strict Mode to hide warnings instead of fixing

## Best Practices

- Keep Strict Mode enabled in development
- Fix issues it surfaces (pure render, cleanup)
- Don't rely on single-mount behavior for critical logic
- Use it to prepare for future React (e.g., concurrent features)

## Summary

Strict Mode helps find bugs in development. Double-invokes render and effects. No production impact. Fix issues it surfaces. Keep it enabled. Prepares for future React.
