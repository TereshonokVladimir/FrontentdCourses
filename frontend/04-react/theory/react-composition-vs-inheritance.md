# Composition vs Inheritance

## Concept

React favors composition over inheritance. Instead of extending base components, compose small components together. Use `children`, render props, or compound components. Composition is more flexible and easier to reason about than deep inheritance hierarchies.

## Why It Matters

Inheritance creates tight coupling and makes reuse harder. Composition keeps components focused and composable. React's design—props, children, slots—is built for composition. Most React codebases use composition exclusively.

## Key Concepts

- `children`: pass content between tags
- Render props: `render` or `children` as function for dynamic content
- Compound components: related components that work together (e.g., Tabs, TabsList, Tab)
- Slots: named props for specific content areas
- Containment: generic "box" components that accept children

## Code Example

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

function DataFetcher({ url, children }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(url).then(r => r.json()).then(setData)
  }, [url])
  return children(data)
}

function Dialog({ header, footer, children }) {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  )
}
```

## Under the Hood

Composition is just passing React elements as props. No special mechanism—it's functions calling functions, returning elements. React doesn't have a class-based inheritance system for components.

## Common Mistakes

- Trying to extend components with class inheritance
- Overusing render props when simple children suffice
- Creating "god" components that do too much instead of composing
- Forgetting that children can be multiple elements or nothing

## Best Practices

- Prefer children for simple containment
- Use render props when the parent needs to control rendering
- Compound components for related UI (Tabs, Accordion)
- Keep components small and composable

## Summary

Composition over inheritance. Use children, render props, compound components. Avoid extending components. Compose small, focused pieces.
