# useMemo and useCallback

## Concept

`useMemo` memoizes a computed value—it returns the cached result until dependencies change. `useCallback` memoizes a function—it returns the same function reference until dependencies change. Both optimize performance by avoiding unnecessary recalculations and re-renders.

## Why It Matters

Recreating objects/arrays/functions every render can cause child re-renders (e.g., when passed as props to memoized components). useMemo and useCallback provide referential stability. Use them when the cost of re-creation or re-render outweighs the cost of memoization.

## Key Concepts

- `useMemo(() => compute(a, b), [a, b])` — caches result
- `useCallback(fn, [deps])` — same as `useMemo(() => fn, [deps])`
- Dependencies: include all values used from closure
- Empty deps: value/function never updates (usually wrong)
- Don't overuse—profile first

## Code Example

```jsx
function ExpensiveList({ items, onSelect }) {
  const sorted = useMemo(
    () => [...items].sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  )

  return (
    <ul>
      {sorted.map(item => (
        <MemoizedItem key={item.id} item={item} onSelect={onSelect} />
      ))}
    </ul>
  )
}

function Parent() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    console.log("clicked")
  }, [])

  return <MemoizedChild onClick={handleClick} />
}
```

## Under the Hood

React stores the memoized value and dependency array. On each render, it compares deps with Object.is. If unchanged, returns cached value. Otherwise, runs the function and caches the new result.

## Common Mistakes

- Memoizing everything (adds overhead, no benefit)
- Missing dependencies (stale closures)
- useMemo for primitive values (no benefit—primitives compared by value)
- useCallback with empty deps when callback needs current state (stale)

## Best Practices

- Use when passing to memoized children (React.memo)
- Use when computation is expensive
- Include all deps
- Profile before optimizing—don't premature optimize

## Summary

useMemo caches computed values. useCallback caches functions. Both take dependency arrays. Use for referential stability when passing to memoized children. Don't overuse—profile first.
