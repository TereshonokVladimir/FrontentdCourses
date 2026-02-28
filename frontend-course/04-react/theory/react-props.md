# Props

## Concept

Props (properties) are inputs passed to components. They flow from parent to child and are read-only. Props can be any JavaScript value: strings, numbers, objects, arrays, functions, or React elements. They enable components to be configurable and reusable.

## Why It Matters

Props are the primary way to pass data and behavior between components. Understanding props is essential for building composable UIs. Props enforce unidirectional data flow—data flows down, making the app predictable.

## Key Concepts

- Props are passed like HTML attributes: `<User name="Alice" age={25} />`
- Access via `props.name` or destructuring: `function User({ name, age }) {}`
- Children: content between tags, available as `props.children`
- Props are immutable—components must not modify them
- Default values: `function Greet({ name = "Guest" }) {}`

## Code Example

```jsx
function UserCard({ name, email, onEdit }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  )
}

function Layout({ header, sidebar, children }) {
  return (
    <div>
      {header}
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  )
}
```

## Under the Hood

React passes props as a single object to the component. When props change, React re-renders the component. Props are compared by reference for optimization.

## Common Mistakes

- Mutating props (e.g., `props.user.name = "x"`)
- Forgetting that `props.children` can be undefined
- Passing objects/arrays created inline (causes unnecessary re-renders)
- Not providing required props (use PropTypes or TypeScript)

## Best Practices

- Destructure props for clarity
- Use default values for optional props
- Pass callbacks for child-to-parent communication
- Use spread for forwarding: `<Component {...props} />`

## Summary

Props are read-only inputs to components. They flow from parent to child. Use destructuring and defaults. Never mutate props. Pass callbacks for events.
