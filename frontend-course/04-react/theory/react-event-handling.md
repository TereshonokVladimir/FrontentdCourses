# Event Handling

## Concept

React uses synthetic events—a cross-browser wrapper around native events. Event handlers are passed as props (e.g., `onClick`, `onChange`). React uses event delegation: a single listener at the root handles events and dispatches to components. Events are camelCased.

## Why It Matters

Event handling is how users interact with your app. Understanding synthetic events, `stopPropagation`, and `preventDefault` prevents bugs. Knowing that events are pooled (in older React) or that handlers receive a synthetic event object matters for async code.

## Key Concepts

- Handlers: `onClick`, `onChange`, `onSubmit` (camelCase)
- Pass function reference: `onClick={handleClick}` not `onClick={handleClick()}`
- Event object: `(e) => { e.preventDefault(); ... }`
- `e.target` for the DOM element that triggered the event
- `e.stopPropagation()` to prevent bubbling

## Code Example

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Clicked", e.target)
  }

  return <button onClick={handleClick}>Click</button>
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

## Under the Hood

React attaches a single listener per event type at the root. When an event fires, React creates a synthetic event, dispatches to the correct handler, and reuses the event object (in React 17+, events are no longer pooled).

## Common Mistakes

- Calling handler instead of passing: `onClick={handleClick()}` (runs on render)
- Forgetting `e.preventDefault()` for form submit or link clicks
- Using `e.target` when you need the component's element (use ref)
- Async handlers: event object may be nullified (use `e.persist()` in older React, or store needed values)

## Best Practices

- Pass function reference, not invocation
- Use `preventDefault` for forms and links when handling manually
- Extract handlers for clarity and to avoid inline functions in lists
- Use `useCallback` for handlers passed to memoized children

## Summary

Events use camelCase props. Pass function reference. Use preventDefault for forms. Synthetic events wrap native events. Extract handlers for readability.
