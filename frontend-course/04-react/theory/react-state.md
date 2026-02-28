# State

## Concept

State is data that changes over time and belongs to a component. When state updates, React re-renders the component. State is private to the component that owns it. In functional components, state is managed with the `useState` hook.

## Why It Matters

State drives interactivity. Forms, toggles, and dynamic content all rely on state. Understanding when and how to update state prevents bugs and unnecessary re-renders. State management is central to React development.

## Key Concepts

- `useState(initialValue)` returns `[value, setter]`
- State updates are asynchronous and batched
- Never mutate state directly; use the setter
- State is preserved between re-renders
- Lifting state: move shared state to common ancestor

## Code Example

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function Form() {
  const [name, setName] = useState("")

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}
```

## Under the Hood

React stores state in a fiber (internal structure) linked to the component. When you call the setter, React schedules an update, batches it if possible, and re-renders. The setter can accept a function for updates based on previous state.

## Common Mistakes

- Mutating state: `state.push(item)` instead of `setState([...state, item])`
- Using state in closure without dependency array (stale closure)
- Setting state in render (causes infinite loop)
- Forgetting that setState is async—reading state immediately after won't show the update

## Best Practices

- Use functional updates when new state depends on old: `setCount(c => c + 1)`
- Keep state minimal—derive values when possible
- Lift state only when necessary
- Consider useReducer for complex state logic

## Summary

State is mutable data owned by a component. Use useState for simple state. Updates trigger re-renders. Never mutate; always use the setter. Batch updates when possible.
