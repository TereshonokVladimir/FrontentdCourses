# Flexbox

## Concept

Flexbox is a one-dimensional layout system for rows or columns. The parent (flex container) controls alignment, direction, and wrapping. Children (flex items) can grow, shrink, and reorder. It excels at distributing space and aligning items—navbars, cards, centering content.

## Why It Matters

Flexbox replaced float-based layouts for most use cases. It handles alignment that used to require hacks. Centering, equal-height columns, and responsive spacing are trivial. It's the go-to for component-level layout.

## Key Concepts

- `display: flex` on the container
- `flex-direction`: row (default), column, row-reverse, column-reverse
- `justify-content`: align on main axis (start, center, space-between, space-around)
- `align-items`: align on cross axis
- `flex-grow`, `flex-shrink`, `flex-basis` on items
- `gap` for spacing between items

## Code Example

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 200px; /* grow, shrink, basis */
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

## Under the Hood

The flex algorithm distributes space along the main axis based on flex-grow/shrink. Items are laid out in order (or `order`), then aligned on the cross axis. Gap creates space between items without margin hacks.

## Common Mistakes

- Forgetting `flex-wrap` when items should wrap
- Using `flex: 1` without understanding grow/shrink/basis
- Confusing main axis (direction) with cross axis (align-items)
- Using flex for full page layout (Grid is often better)

## Best Practices

- Use `gap` instead of margin on flex items
- `flex: 1` for equal distribution; `flex: 0 0 auto` for fixed size
- Prefer `align-items: center` for vertical centering
- Use flex for components; Grid for page layout

## Summary

Flexbox lays out items in a row or column. Use justify-content and align-items for alignment. flex-grow/shrink control distribution. Gap handles spacing. Ideal for navbars, cards, and centering.
