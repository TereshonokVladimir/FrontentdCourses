# Error Boundaries

## Concept

Error boundaries are React components that catch JavaScript errors in their child tree, log them, and display a fallback UI. They catch errors during rendering, in lifecycle methods, and in constructors. They do not catch errors in event handlers, async code, or server-side rendering.

## Why It Matters

Without error boundaries, a single error can crash the entire app. Error boundaries let you isolate failures and show a graceful fallback. They're essential for production resilience and user experience.

## Key Concepts

- Class component with `static getDerivedStateFromError` or `componentDidCatch`
- Catches errors in children's render, lifecycle, constructors
- Does not catch: event handlers, async (setTimeout, fetch), SSR, errors in the boundary itself
- Display fallback UI instead of crashed subtree
- Can log to error reporting service

## Code Example

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
  )
}
```

## Under the Hood

When an error is thrown during render, React walks up the tree to find an error boundary. It calls getDerivedStateFromError (sync) and componentDidCatch (after commit). The boundary re-renders with the fallback. No hooks equivalent yet—must use class.

## Common Mistakes

- Expecting to catch event handler errors (use try/catch in handler)
- Expecting to catch async errors (handle in catch block of promise)
- Putting one boundary around entire app (isolate critical sections)
- Forgetting to log errors (componentDidCatch)

## Best Practices

- Wrap route-level or feature-level sections
- Provide helpful fallback UI (retry button, support link)
- Log to error reporting (Sentry, LogRocket)
- Use multiple boundaries for granular recovery

## Summary

Error boundaries catch render errors in children. Use class component with getDerivedStateFromError and componentDidCatch. Display fallback UI. Don't catch event/async errors. Wrap critical sections. Log errors.
