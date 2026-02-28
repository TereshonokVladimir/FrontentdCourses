# Components

## Concept

Components are the building blocks of React UIs. They are functions (or classes) that accept props and return React elements. Components can be composed—smaller components inside larger ones. They encapsulate structure, behavior, and styling.

## Why It Matters

Components enable reuse, separation of concerns, and testability. Breaking UIs into components makes code maintainable. Understanding composition vs inheritance is key to React's design philosophy.

## Key Concepts

- Functional components: `function Button(props) { return <button>...</button> }`
- Component names must start with uppercase
- Props are read-only; components must not modify them
- Composition: pass components as children or props
- One component per file (convention)

## Code Example

```jsx
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

function App() {
  return (
    <Card title="Welcome">
      <Button onClick={() => alert("Hi")}>Click me</Button>
    </Card>
  )
}
```

## Under the Hood

React treats components as functions. When you use `<Button>`, React calls `Button(props)` and uses the returned element tree. Components can be nested arbitrarily deep.

## Common Mistakes

- Using lowercase for component names (treated as HTML elements)
- Mutating props
- Defining components inside other components (causes remount on every render)
- Returning undefined or null accidentally

## Best Practices

- Prefer functional components
- Use destructuring for props
- Keep components focused—extract when they grow
- Use composition: render props, children, or compound components

## Summary

Components are functions that return JSX. They receive props and compose into larger UIs. Keep them small, reusable, and pure with respect to props.
