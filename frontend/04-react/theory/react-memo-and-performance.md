# memo and Performance

## Concept

`React.memo` is a higher-order component that memoizes a functional component. It skips re-rendering when props are shallowly equal. Use it to prevent unnecessary re-renders when parent re-renders but props haven't changed. Combine with useCallback/useMemo for full effect.

## Why It Matters

Re-renders can be expensive for large trees. memo reduces re-renders when props are stable. It's most effective for leaf or list item components that receive stable props. Overuse adds comparison overhead; underuse may cause performance issues.

## Key Concepts

- `const Memoized = memo(Component)` — re-renders only when props change
- Shallow comparison: Object.is for each prop
- Custom comparison: `memo(Comp, (prev, next) => prev.id === next.id)`
- Works with useCallback/useMemo for prop stability
- Doesn't prevent re-renders from parent state—only when props are same

## Code Example

```jsx
const ExpensiveChild = memo(function ExpensiveChild({ data }) {
  // expensive render
  return <div>{data.name}</div>
})

function Parent() {
  const [count, setCount] = useState(0)
  const data = useMemo(() => ({ name: "Static" }), [])

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <ExpensiveChild data={data} />
    </div>
  )
}
```

## Under the Hood

React stores the previous props. On parent re-render, React compares new props with previous using shallow equality. If equal, it reuses the previous render output. Custom comparison function can override (return true = skip render).

## Common Mistakes

- Wrapping everything in memo (overhead, no benefit)
- Passing inline objects/functions to memoized children (props always "changed")
- Expecting memo to prevent re-renders from context (it doesn't)
- Using custom comparison incorrectly (return true when props are equal = skip)

## Best Practices

- Use for expensive leaf components or list items
- Ensure props are stable (useCallback, useMemo)
- Profile before and after—verify improvement
- Don't memo the root or components that always get new props

## Summary

memo skips re-renders when props are shallowly equal. Use for expensive children. Pair with useCallback/useMemo for prop stability. Profile before optimizing. Don't overuse.
