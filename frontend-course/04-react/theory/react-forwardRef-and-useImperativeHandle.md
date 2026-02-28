# forwardRef and useImperativeHandle

## Concept

`forwardRef` forwards a ref from a parent to a child component. Normally, function components don't receive refs. `useImperativeHandle` customizes what the ref exposes—instead of the DOM node, you can expose a custom API (focus, scroll, methods). Use for wrapping native elements or creating imperative APIs.

## Why It Matters

Refs are needed for DOM access, but function components don't receive ref by default. forwardRef enables ref forwarding. useImperativeHandle lets you expose a controlled API instead of the raw DOM—useful for component libraries and encapsulating implementation details.

## Key Concepts

- `forwardRef((props, ref) => <input ref={ref} />)` — passes ref through
- Ref can be forwarded to DOM or to useImperativeHandle
- `useImperativeHandle(ref, () => ({ focus: () => {...} }), [deps])`
- Expose only what parent needs
- Combines with useRef in parent

## Code Example

```jsx
const FancyInput = forwardRef(function FancyInput(props, ref) {
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    scrollIntoView: () => inputRef.current.scrollIntoView()
  }), [])

  return <input ref={inputRef} {...props} />
})

function Form() {
  const inputRef = useRef(null)

  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  )
}
```

## Under the Hood

forwardRef creates a component that receives ref as the second argument. React passes it through. useImperativeHandle runs after commit and assigns the return value to ref.current. When deps change, it re-runs and updates ref.current.

## Common Mistakes

- Forgetting forwardRef when wrapping a component that needs ref
- Exposing too much via useImperativeHandle (breaks encapsulation)
- Using useImperativeHandle when forwarding to DOM is enough
- Ref not being forwarded to the actual DOM element

## Best Practices

- Use forwardRef when wrapping native elements or components that need ref
- useImperativeHandle for custom APIs (focus, scroll, validate)
- Expose minimal API
- Document the imperative handle API

## Summary

forwardRef forwards ref to child. useImperativeHandle customizes ref.current. Use for wrapping elements or exposing imperative API. Expose minimal surface. Combine with useRef in parent.
