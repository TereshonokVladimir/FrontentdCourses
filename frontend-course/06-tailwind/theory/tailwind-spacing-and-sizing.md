# Spacing and Sizing

## Concept

Tailwind uses a spacing scale (0, 1, 2, 4, 8, 12, 16, 20, 24, ... in rem/px). Apply to margin (`m-4`), padding (`p-4`), gap (`gap-4`), width (`w-4`), height (`h-4`). Fractional values: `w-1/2`, `w-full`. Use `space-x-4` or `space-y-4` for spacing between children.

## Why It Matters

Consistent spacing creates visual rhythm. The scale prevents arbitrary values. Understanding the scale (4 = 0.25rem, 16 = 1rem) helps with design consistency.

## Key Concepts

- Scale: 0, 0.5, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96
- Sides: `p-4`, `pt-4`, `px-4`, `py-4`
- space-x-4: margin-left on all but first child
- gap-4: gap in flex/grid
- w-full, h-screen, max-w-7xl, min-h-screen

## Code Example

```html
<div class="p-6 space-y-4">
  <div class="w-full max-w-md mx-auto">Centered</div>
  <div class="flex gap-4">
    <div class="flex-1 min-w-0">Flex 1</div>
    <div class="w-32">Fixed</div>
  </div>
</div>
```

## Under the Hood

The scale maps to rem (default 4 = 1rem). You can override in theme. `space-x-4` uses `:not(:first-child)` and margin. `gap` uses the native flex/grid gap property.

## Common Mistakes

- Using `space-x-4` with flex gap (redundant; use gap)
- `min-w-0` missing on flex child that overflows
- Using `w-full` when parent doesn't constrain
- px vs space-x: px is padding, space-x is margin between children

## Best Practices

- Use the scale (4, 8, 16...)
- gap for flex/grid; space for stacked items
- min-w-0 for flex children with overflow
- max-w for readable line length

## Summary

Scale for consistency. p, m, gap, space. Use gap in flex/grid. min-w-0 for overflow. max-w for containers. Fractions for width.
