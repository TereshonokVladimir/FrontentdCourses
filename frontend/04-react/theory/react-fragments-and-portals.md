# Fragments and Portals

## Concept

Fragments let you group children without adding an extra DOM node. Use `<></>` or `<React.Fragment>`. Portals let you render children into a DOM node outside the parent's hierarchy—useful for modals, tooltips, dropdowns. Both are rendering utilities.

## Why It Matters

Fragments avoid wrapper divs that break layout (flex, grid) or add unnecessary markup. Portals solve z-index and overflow issues—render a modal at document body so it isn't clipped. Essential for overlays and complex layouts.

## Key Concepts

- Fragment: `<><Child /></>` or `<React.Fragment key={id}>`
- Fragment with key must use full syntax
- Portal: `createPortal(children, domNode)` or `createPortal(children, domNode, key)`
- Portal children still behave as React children (event bubbling, context)
- Portal target must exist in DOM

## Code Example

```jsx
function Table() {
  return (
    <table>
      <tbody>
        {rows.map(row => (
          <React.Fragment key={row.id}>
            <tr><td>{row.name}</td></tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

function Modal({ children, isOpen }) {
  if (!isOpen) return null

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body
  )
}
```

## Under the Hood

Fragments compile to nothing in the DOM—React just flattens the children. Portals render the React tree into a different DOM node. Events still bubble through the React tree (not the DOM tree), so a portal's parent can catch events from it.

## Common Mistakes

- Using Fragment when a single wrapper is fine (adds noise)
- Forgetting key on Fragment in a list (use full syntax)
- Portal target not in DOM (e.g., not yet mounted)
- Assuming portal breaks event bubbling (it doesn't—React tree)

## Best Practices

- Use Fragment for multiple roots (tables, lists)
- Use Portal for modals, tooltips, dropdowns
- Ensure portal container exists (document.body is safe)
- Style portal content for proper stacking (z-index)

## Summary

Fragments group without extra DOM node. Portals render outside parent DOM. Use Fragment for tables/lists. Use Portal for overlays. Events bubble through React tree. Portal needs existing DOM node.
