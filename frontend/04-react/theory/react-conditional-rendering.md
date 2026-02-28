# Conditional Rendering

## Concept

Conditional rendering means showing different UI based on conditions. In React, you use JavaScript conditionals—`if`, ternary operators, `&&`, or `||`—inside JSX. Components can return `null` to render nothing.

## Why It Matters

Most UIs need to show/hide content based on state: loading spinners, error messages, empty states, feature flags. Conditional rendering is a core pattern for dynamic interfaces.

## Key Concepts

- `condition && <Component />` for short-circuit (falsy = nothing)
- Ternary: `condition ? <A /> : <B />`
- Early return: `if (!data) return <Loading />`
- `null` or `false` render nothing
- Variable assignment: `let content = condition ? <A /> : <B />`

## Code Example

```jsx
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back</h1> : <h1>Sign in</h1>
}

function List({ items }) {
  if (!items?.length) return <p>No items</p>  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

function Alert({ show, message }) {
  return show && <div className="alert">{message}</div>
}
```

## Under the Hood

React renders whatever JSX you return. `null`, `false`, and `undefined` are rendered as nothing. The `&&` operator returns the right operand when left is truthy, or the left when falsy—so `0 && <X />` renders `0`, not nothing.

## Common Mistakes

- `count && <Component />` when count can be 0 (renders "0")
- Complex nested ternaries (hard to read)
- Using `if` inside JSX (invalid—use IIFE or extract)
- Forgetting that `props.children` might be undefined

## Best Practices

- Use early returns for clarity
- Extract complex conditionals into variables or helper components
- Use `Boolean(count)` or `count > 0` when 0 could be falsy
- Prefer readable over clever—avoid deep nesting

## Summary

Use conditionals in JSX: `&&`, ternary, or early return. Avoid `0 && <X />` (renders 0). Return null to render nothing. Keep conditionals readable.
