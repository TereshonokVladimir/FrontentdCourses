# Custom Hooks

## Concept

Custom hooks are functions that start with `use` and call other hooks. They encapsulate reusable stateful logic. Multiple components can use the same custom hook and each gets its own state. Hooks enable logic reuse without HOCs or render props.

## Why It Matters

Custom hooks are the primary way to share logic in React. They keep components clean and logic testable. Patterns like useForm, useFetch, useLocalStorage are common. Understanding when and how to extract hooks improves code quality.

## Key Concepts

- Name starts with `use`
- Can call useState, useEffect, other hooks
- Each component using the hook gets independent state
- Return whatever the component needs (state, handlers, etc.)
- Follow rules of hooks (top-level only, in React functions)

## Code Example

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
```

## Under the Hood

Custom hooks are just functions. React doesn't treat them specially—the "use" prefix is a convention. When a component calls a custom hook, it runs in that component's context, so all hook calls (useState, etc.) are associated with that component.

## Common Mistakes

- Not following rules of hooks (conditional calls, loops)
- Returning new object/array every render (causes unnecessary re-renders if used as dep)
- Over-extracting (simple logic doesn't need a hook)
- Forgetting to include all deps in useEffect inside the hook

## Best Practices

- Extract when logic is reused or component gets complex
- Return stable references (useCallback, useMemo) when consumed as deps
- Keep hooks focused—one concern per hook
- Document parameters and return value

## Summary

Custom hooks encapsulate reusable logic. Name with use, call other hooks. Each component gets independent state. Follow rules of hooks. Extract when logic is shared or complex.
