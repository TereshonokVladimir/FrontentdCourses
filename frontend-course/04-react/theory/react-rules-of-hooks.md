# Rules of Hooks

## Concept

Hooks must be called at the top level of a React function—not inside loops, conditions, or nested functions. Hooks must be called from React function components or custom hooks. These rules ensure hooks are called in the same order every render, which React relies on for state association.

## Why It Matters

React associates state with hooks by call order. If you call hooks conditionally, the order changes between renders and state gets mixed up. Violating the rules causes subtle, hard-to-debug bugs. ESLint plugin enforces the rules.

## Key Concepts

- Only call hooks at the top level
- Only call hooks from React functions (components, custom hooks)
- Don't call in: loops, conditions, nested functions
- Same order every render
- Custom hooks: name starts with "use"

## Code Example

```jsx
// Wrong
function Bad() {
  if (condition) {
    const [x, setX] = useState(0)  // Violation
  }
}

// Wrong
function Bad() {
  for (let i = 0; i < 10; i++) {
    useEffect(() => {}, [])  // Violation
  }
}

// Correct
function Good() {
  const [x, setX] = useState(0)
  useEffect(() => {}, [])
  if (condition) {
    return <div>{x}</div>
  }
  return null
}
```

## Under the Hood

React stores hook state in a linked list per component. Each hook call consumes the next slot. If call order changes, the wrong state gets returned. That's why hooks must run in the same order every render.

## Common Mistakes

- Conditional hook: `if (x) useState(0)`
- Hook in loop: `items.map(() => useEffect(...))`
- Hook in callback: `onClick={() => { useEffect(...) }}`
- Calling hook from regular function (not component or custom hook)

## Best Practices

- Use eslint-plugin-react-hooks
- Extract conditional logic: call hook unconditionally, use result conditionally
- Keep hooks at top level
- Understand why—order matters for React's internal state

## Summary

Hooks only at top level. Only in components or custom hooks. Never in loops, conditions, or nested functions. Same order every render. Use ESLint. Understand the "why."
