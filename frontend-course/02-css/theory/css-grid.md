# CSS Grid

## Concept

Grid is a two-dimensional layout system. You define rows and columns, then place items in cells. Unlike Flexbox (one axis), Grid handles both dimensions at once. It's ideal for page layouts, dashboards, and card grids. The container defines the grid; children can be placed explicitly or flow automatically.

## Why It Matters

Grid replaced complex float and flex hacks for page layout. Responsive grids are straightforward with `repeat()`, `minmax()`, and `auto-fill`/`auto-fit`. Overlapping and asymmetric layouts are easy. It's the standard for full-page structure.

## Key Concepts

- `display: grid` on the container
- `grid-template-columns`, `grid-template-rows` define tracks
- `gap` (or `row-gap`, `column-gap`) for spacing
- `fr` unit for flexible fractions
- `minmax()`, `repeat()`, `auto-fill`, `auto-fit`
- `grid-column`, `grid-row` for placement

## Code Example

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100vh;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.item {
  grid-column: 1 / -1; /* span full width */
}
```

## Under the Hood

The grid algorithm creates tracks from template definitions, places items by line numbers or names, and fills gaps with auto-placement. `fr` distributes remaining space. `auto-fill`/`auto-fit` create as many tracks as fit.

## Common Mistakes

- Using `grid` for simple one-dimensional layouts (use flex)
- Forgetting `min-height` on full-page grids
- Confusing `auto-fill` (creates empty tracks) with `auto-fit` (collapses empty tracks)
- Overusing explicit placement when flow works

## Best Practices

- Use `repeat(auto-fill, minmax())` for responsive grids
- Name grid lines for complex layouts
- Use `grid-template-areas` for readable layout code
- Combine Grid (page) with Flexbox (components)

## Summary

Grid is two-dimensional: rows and columns. Use `fr`, `minmax()`, and `repeat()` for flexible layouts. `auto-fill`/`auto-fit` enable responsive grids. Ideal for page structure and card layouts.
