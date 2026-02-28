# Z-Index and Stacking Context

## Concept

`z-index` controls stacking order when elements overlap. It only works on positioned elements (position other than static). Stacking context is created by position + z-index, opacity < 1, transform, and other properties. Elements in different stacking contexts can't be reordered by z-index alone—the parent's context matters.

## Why It Matters

"z-index not working" usually means the element is in a different stacking context. Modals, dropdowns, and tooltips require correct stacking. Understanding stacking context prevents layout bugs and fixes "why is this behind that?"

## Key Concepts

- `z-index` only affects positioned elements
- Stacking context: new layer; children stack within it
- Creates context: position + z-index, opacity, transform, filter, etc.
- Sibling contexts: higher z-index wins
- Parent context: child can't escape

## Code Example

```css
.modal {
  position: fixed;
  z-index: 1000;
  /* Creates stacking context */
}

.dropdown {
  position: absolute;
  z-index: 10;
}

/* Parent has transform - creates new context */
.card {
  transform: translateZ(0); /* Creates context! */
}

.card .badge {
  z-index: 999; /* Only within .card context */
}
```

## Under the Hood

The browser builds a stacking context tree. Each context has a stacking order. Elements are painted in tree order, with z-index determining order within a context. Newer contexts can paint over older ones based on parent order.

## Common Mistakes

- z-index on non-positioned element (no effect)
- Expecting child to appear above sibling's child (different contexts)
- Using very high z-index (9999) instead of fixing context
- Transform/opacity creating unexpected contexts

## Best Practices

- Use a z-index scale (10, 20, 30 for dropdown, modal, toast)
- Avoid z-index when possible (DOM order can work)
- Document stacking layers in design system
- Use `isolation: isolate` to create context without side effects

## Summary

Z-index controls overlap. It requires position. Stacking context limits scope—children can't escape. Transform, opacity create contexts. Use a consistent scale and understand parent context.
