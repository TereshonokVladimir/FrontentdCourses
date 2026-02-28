# Utility Classes

## Concept

Tailwind provides hundreds of utility classes for layout, spacing, typography, colors, borders, etc. Naming follows a pattern: property-value (e.g., `m-4` = margin 4, `text-center` = text-align center). Numbers map to a scale (4 = 1rem typically). Use the docs for reference.

## Why It Matters

Knowing the naming pattern lets you guess classes without looking them up. Understanding the scale (1, 2, 4, 8...) helps with consistency. Common utilities (flex, grid, padding, margin) are used constantly.

## Key Concepts

- Spacing: `p-4`, `m-2`, `px-6`, `py-3`, `space-x-4`
- Sizing: `w-full`, `h-screen`, `max-w-md`, `min-h-0`
- Typography: `text-sm`, `font-bold`, `leading-tight`, `tracking-wide`
- Colors: `bg-blue-500`, `text-gray-700`, `border-red-300`
- Layout: `flex`, `grid`, `block`, `inline`, `hidden`

## Code Example

```html
<div class="p-4 m-2 max-w-md">
  <p class="text-sm font-medium text-gray-700 leading-relaxed">
    Content
  </p>
  <div class="flex gap-4 mt-4">
    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Tag</span>
  </div>
</div>
```

## Under the Hood

Each utility maps to CSS. `p-4` → `padding: 1rem`. The scale is defined in the theme. You can override. Tailwind uses a consistent scale across properties.

## Common Mistakes

- Using `p-4` when you want padding only on one side (use `pt-4`, `px-4`, etc.)
- Confusing `space-x-4` (space between children) with `gap-4` (flex/grid gap)
- Using wrong color shade (e.g., text on same-color background)
- Forgetting that some utilities need a parent (e.g., `absolute` needs `relative` parent)

## Best Practices

- Use the scale consistently (4, 8, 12, 16...)
- Prefer semantic color names (gray-700) over arbitrary
- Use gap for flex/grid spacing
- Check contrast for accessibility

## Summary

Utilities follow property-value pattern. Spacing, typography, colors, layout. Scale is consistent. Use docs. Prefer theme values. Mind accessibility.
