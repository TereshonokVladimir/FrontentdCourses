# Data Fetching Patterns

## Concept

Data fetching in React typically happens in useEffect. Common patterns: fetch on mount (empty deps), fetch when ID changes (deps: [id]), and handling loading/error/success states. Modern alternatives: React Query, SWR, or Server Components (Next.js) for caching and deduplication.

## Why It Matters

Most apps need to load data from APIs. Understanding fetch-on-mount, dependency-driven fetch, and cleanup (abort) prevents memory leaks and race conditions. Knowing when to use a data library vs raw fetch matters for maintainability.

## Key Concepts

- useEffect with fetch, deps = [url] or [id]
- State: loading, error, data
- AbortController for cleanup (cancel in-flight requests)
- Race condition: slow request resolves after fast one—check cancelled flag
- Consider: React Query, SWR for caching, retry, dedup

## Code Example

```jsx
function useUser(userId) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled) setUser(data)
      })
      .catch(err => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [userId])

  return { user, loading, error }
}
```

## Under the Hood

useEffect runs after render. When deps change, cleanup runs (cancelled = true), then effect runs again. The cancelled flag prevents setState on unmounted component or after a newer request. AbortController can cancel the fetch itself.

## Common Mistakes

- Not handling cleanup (setState on unmounted component)
- Race condition: not ignoring stale responses
- No loading/error state
- Fetching in render (infinite loop) instead of useEffect

## Best Practices

- Use cancelled flag or AbortController
- Handle loading, error, empty states
- Consider React Query/SWR for complex needs
- Extract into custom hook (useUser, useFetch)

## Summary

Fetch in useEffect with proper deps. Use cancelled flag or AbortController. Handle loading, error, data. Avoid race conditions. Extract to custom hook. Consider data libraries for caching.
