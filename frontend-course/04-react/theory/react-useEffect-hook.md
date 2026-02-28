# useEffect Hook

## Concept

`useEffect` runs side effects after render. It accepts a function and an optional dependency array. The effect runs after the browser paints. Dependencies control when it re-runs: empty array = mount only, no array = every render, with deps = when deps change.

## Why It Matters

Side effects—fetching data, subscriptions, DOM manipulation—are essential but can't run during render. useEffect provides a clean way to run them. Misunderstanding dependencies causes bugs (stale closures, infinite loops).

## Key Concepts

- `useEffect(() => { ... }, [deps])`
- Cleanup: return a function from effect to run on unmount or before re-run
- Dependencies: include every value from the effect used in the closure
- Empty deps `[]`: run once on mount
- No deps: run after every render (rarely needed)

## Code Example

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) setUser(data)
      })
    return () => { cancelled = true }
  }, [userId])

  return user ? <div>{user.name}</div> : <p>Loading...</p>
}
```

## Under the Hood

React schedules effects after commit. They run in order. Cleanup runs before the next effect or on unmount. React compares dependencies with Object.is—objects/arrays must be stable (same reference) or in deps.

## Common Mistakes

- Missing dependencies (stale closure)
- Including objects/arrays in deps that change every render (infinite loop)
- Using async function directly (useEffect can't be async—use async inside)
- Forgetting cleanup for subscriptions or timers

## Best Practices

- Include all deps used in the effect
- Use cleanup for subscriptions, timers, abort controllers
- Extract complex logic into custom hooks
- Use eslint-plugin-react-hooks to catch dependency issues

## Summary

useEffect runs side effects after render. Dependencies control when it re-runs. Return cleanup for subscriptions. Include all deps. Handle async with abort/cancel pattern.
