# useRef Hook

## Concept

`useRef` returns a mutable ref object whose `.current` property persists across renders. It doesn't cause re-renders when updated. Use refs for: DOM access, storing mutable values that shouldn't trigger re-renders, or keeping previous values.

## Why It Matters

Refs bridge React's declarative world with imperative DOM operations. They're essential for focus management, measuring elements, integrating third-party libs, and avoiding re-renders for values that don't affect the UI.

## Key Concepts

- `const ref = useRef(initialValue)` — ref.current is mutable
- Updating ref.current does not cause re-render
- Pass ref to DOM: `<input ref={ref} />` — ref.current becomes the element
- Refs persist across renders (same object)
- Use for: DOM nodes, timers, previous value, mutable cache

## Code Example

```jsx
function TextInput() {
  const inputRef = useRef(null)

  const focusInput = () => inputRef.current?.focus()

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef()

  useEffect(() => {
    prevCountRef.current = count
  })

  const prevCount = prevCountRef.current
  return <p>Now: {count}, before: {prevCount}</p>
}
```

## Under the Hood

React stores ref objects in the fiber. When you pass a ref to a DOM element, React assigns the element to ref.current. The ref object identity is stable—same object every render. Updates to .current are synchronous.

## Common Mistakes

- Using ref for values that should trigger re-render (use state)
- Reading ref.current during render (it may be null or stale)
- Using refs for child component instances (use forwardRef + useImperativeHandle)
- Forgetting that ref.current can be null before mount

## Best Practices

- Use refs for DOM access and imperative operations
- Use refs for values that don't affect render (previous value, timer ID)
- Check ref.current before use (may be null)
- Prefer refs over document.querySelector in React

## Summary

useRef returns a mutable object that persists. Use for DOM refs, timers, previous values. Updating .current doesn't re-render. Pass ref to DOM for access. Check for null.
