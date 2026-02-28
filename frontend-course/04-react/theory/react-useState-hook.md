# useState Hook

## Concept

`useState` is a React hook that adds state to functional components. It returns an array with the current state value and a function to update it. The initial value is used only on the first render. Updates are batched for performance.

## Why It Matters

useState is the primary way to manage local component state in modern React. It replaces class component state. Understanding its behavior—especially when to use functional updates—prevents subtle bugs.

## Key Concepts

- `const [value, setValue] = useState(initialValue)`
- Lazy initial state: `useState(() => expensiveComputation())` for costly init
- Functional updates: `setValue(prev => prev + 1)` when new state depends on old
- State updates are asynchronous and batched in event handlers
- Multiple useState calls for independent values

## Code Example

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

function LazyInit() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("data") ?? "{}"))
  return <div>{data.name}</div>
}
```

## Under the Hood

React associates state with the component instance (fiber). Each useState call gets a slot. On re-render, React returns the stored value. The setter schedules an update and triggers a re-render with the new value.

## Common Mistakes

- Using `setCount(count + 1)` in async callbacks (stale closure)
- Setting state in render (infinite loop)
- Using object/array initial without functional form when it's expensive
- Forgetting that state is per-component instance (each Counter has its own count)

## Best Practices

- Use functional updates when new state depends on previous
- Use lazy initializer for expensive computations
- Split unrelated state into separate useState calls
- Keep state updates pure—no side effects in setter

## Summary

useState adds state to functional components. Use functional updates for state that depends on previous. Lazy init for expensive setup. Never mutate state; always use the setter.
