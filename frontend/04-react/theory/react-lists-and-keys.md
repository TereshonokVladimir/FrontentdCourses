# Lists and Keys

## Concept

Rendering lists in React uses `map` to transform arrays into elements. Each element in a list should have a unique `key` prop. Keys help React identify which items changed, were added, or removed during reconciliation.

## Why It Matters

Keys are essential for correct list updates. Without keys, React may re-render incorrectly or lose component state. Using stable, unique keys (e.g., IDs) prevents bugs when reordering, filtering, or adding items.

## Key Concepts

- `key` prop: `{items.map(item => <li key={item.id}>...</li>)}`
- Keys must be unique among siblings (not globally)
- Keys should be stable—don't use index if list can reorder
- Keys are not passed to the component (not in props)
- Fragment keys: `<React.Fragment key={id}>`

## Code Example

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  )
}

function Table({ rows }) {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={row.id ?? index}>
          <td>{row.name}</td>
        </tr>
      ))}
    </tbody>
  )
}
```

## Under the Hood

React uses keys to match elements between renders. When the list changes, React compares keys to determine which items to add, remove, or update. Wrong keys cause incorrect updates and wasted work.

## Common Mistakes

- Using array index as key when list can reorder (breaks state, causes bugs)
- Using random keys (e.g., Math.random())—new key every render
- Using key on the wrong element (should be on the mapped element)
- Forgetting keys entirely (React warns, uses index as fallback)

## Best Practices

- Use stable unique IDs from data when available
- Index is acceptable when list is static and never reorders
- Generate IDs if data has none (e.g., crypto.randomUUID)
- Key the outermost element in the map callback

## Summary

Use map to render lists. Provide unique, stable keys. Prefer IDs over index. Keys help React reconcile efficiently. Never use random or unstable keys.
