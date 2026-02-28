# Flexbox and Grid

## Concept

Tailwind provides utilities for Flexbox and Grid. `flex`, `flex-col`, `items-center`, `justify-between` for Flexbox. `grid`, `grid-cols-3`, `gap-4` for Grid. Combine with spacing and sizing for layouts. No need to write custom layout CSS.

## Why It Matters

Layout is the foundation of UI. Flexbox for one-dimensional (rows/columns), Grid for two-dimensional. Tailwind makes both trivial. Understanding when to use each is key.

## Key Concepts

- Flex: `flex`, `flex-col`, `flex-row`, `flex-wrap`
- Alignment: `items-center`, `justify-between`, `justify-center`
- Grid: `grid`, `grid-cols-3`, `grid-rows-2`, `col-span-2`, `row-span-1`
- Gap: `gap-4`, `gap-x-2`, `gap-y-6`
- Flex grow/shrink: `flex-1`, `flex-none`, `grow`, `shrink`

## Code Example

```html
<div class="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
  <div class="flex-1">Left</div>
  <div class="flex-none">Right</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="col-span-1 md:col-span-2">Wide</div>
  <div>Narrow</div>
</div>
```

## Under the Hood

Tailwind maps to CSS flex and grid properties. `flex` → `display: flex`. `grid-cols-3` → `grid-template-columns: repeat(3, minmax(0, 1fr))`. The `minmax(0, 1fr)` prevents overflow issues.

## Common Mistakes

- Using `flex-1` for all children when some should be fixed
- Forgetting `flex-wrap` when items overflow
- Grid: `grid-cols-3` with 3 items—each gets 1/3; add more and they wrap to next row
- Confusing `items-center` (cross axis) with `justify-center` (main axis)

## Best Practices

- Use flex for navbars, cards, simple layouts
- Use grid for card grids, complex layouts
- Use gap instead of margin for spacing between items
- Use `min-w-0` for flex/grid children that overflow

## Summary

Flex for 1D. Grid for 2D. Tailwind utilities for both. Use gap. Flex-1 for grow. Grid-cols for columns. Prefer gap over margin.
