# Responsive Design

## Concept

Tailwind uses mobile-first breakpoints. Prefix utilities with `sm:`, `md:`, `lg:`, `xl:`, `2xl:` to apply at that breakpoint and up. Default (no prefix) = mobile. `md:flex` means flex at 768px and above. Breakpoints are configurable.

## Why It Matters

Most traffic is mobile. Mobile-first ensures the base is usable on small screens. Breakpoint prefixes let you layer on complexity for larger screens. No media queries to write—just prefix the class.

## Key Concepts

- Default = mobile (< 640px)
- sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
- Prefix applies at breakpoint and up
- `md:flex` = flex when viewport >= 768px
- `max-md:hidden` = hidden when viewport < 768px (max- variant)

## Code Example

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 text-sm md:text-base lg:text-lg">Card 1</div>
  <div class="p-4 hidden md:block">Card 2</div>
  <div class="p-4">Card 3</div>
</div>
```

## Under the Hood

Tailwind generates media queries for each prefixed utility. `md:flex` becomes `@media (min-width: 768px) { .md\:flex { display: flex } }`. The breakpoints are in the theme.

## Common Mistakes

- Using `md:` when you want "only on medium" (use `max-md:` and `md:` together)
- Forgetting mobile styles (default is small screen)
- Overusing breakpoints (keep it simple)
- Using `max-` incorrectly (max-md = below 768px)

## Best Practices

- Design mobile first; add breakpoints for larger screens
- Use consistent breakpoints across the app
- Test at each breakpoint
- Use container for max-width if needed

## Summary

Mobile-first. Prefix with sm:, md:, lg:, etc. Default = mobile. Breakpoints configurable. No media queries. Use max- for "below" behavior.
