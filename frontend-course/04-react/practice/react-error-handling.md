# Practice: Error Handling

## Tasks

### Task 1
Create an `ErrorBoundary` class component. Use `getDerivedStateFromError` to set `hasError: true`. Use `componentDidCatch` to log the error. In render, if hasError, show "Something went wrong" and a "Retry" button that resets state. Wrap a component that throws (e.g., button that sets state to trigger throw). No semicolons.

### Task 2
Build a `BuggyWidget` that throws when a prop `shouldThrow` is true. Wrap it in ErrorBoundary. Add a "Trigger error" button in the parent that sets shouldThrow. Verify the boundary catches it and shows fallback. Add a "Reset" that sets shouldThrow to false and clears the boundary's error state (use key to remount).

### Task 3
Create a `DataFetcher` that fetches from an API. If fetch fails, throw in the render (or set error state and render error UI). Wrap in ErrorBoundary. Add "Retry" in the boundary that remounts the DataFetcher (change key). Handle both network error and 404.

### Task 4
Build nested ErrorBoundaries: outer catches "critical" errors, inner catches "widget" errors. Create a page with three sections, each wrapped in its own boundary. One section throws. Verify only that section shows fallback, others remain. Add error reporting: componentDidCatch sends to console (simulate) with error and componentStack.

### Task 5
Create a full error handling strategy: ErrorBoundary with fallback that has Retry and "Report" buttons. Create a `useErrorHandler` hook that lets child components trigger the boundary: `throw error` or call `handleError(error)`. Use for async errors: in a fetch's catch, call handleError. Ensure the boundary can recover (Retry remounts). Add a top-level boundary with a generic "App failed" message. Document the pattern.
