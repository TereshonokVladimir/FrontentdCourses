# Lifting State Up

## Concept

When multiple components need to share state, move that state to their closest common ancestor. The parent owns the state and passes it down as props. Children receive data and callbacks to request updates. This is "lifting state up."

## Why It Matters

React's data flow is unidirectional. Siblings cannot share state directly. Lifting state is the standard pattern for shared state. It keeps a single source of truth and makes data flow explicit.

## Key Concepts

- Identify the common ancestor of components that need shared state
- Move state to that ancestor
- Pass state down as props
- Pass setter or callback down for updates
- Child calls parent's callback to request change

## Code Example

```jsx
function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ChildA value={count} />
      <ChildB onIncrement={() => setCount(c => c + 1)} />
    </div>
  )
}

function TemperatureInput({ scale, value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

function Calculator() {
  const [celsius, setCelsius] = useState(0)
  const fahrenheit = (celsius * 9) / 5 + 32

  return (
    <TemperatureInput
      value={celsius}
      onChange={setCelsius}
    />
  )
}
```

## Under the Hood

State lives in one place. When the setter is called, the parent re-renders. New props flow down to children. Children re-render with fresh data. No prop drilling yet—only one level.

## Common Mistakes

- Duplicating state in multiple components (sources of truth get out of sync)
- Lifting too high (causes prop drilling—consider context)
- Passing entire setState instead of specific callback
- Forgetting to pass the callback to the child that needs to update

## Best Practices

- Lift only as high as necessary
- If prop drilling gets deep, consider context or composition
- Pass specific callbacks: `onNameChange` not `setForm`
- Keep state close to where it's used when possible

## Summary

Shared state lives in the common ancestor. Pass state down, callbacks up. Single source of truth. Lift only as high as needed. Consider context for deep trees.
