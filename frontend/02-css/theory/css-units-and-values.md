# CSS Units and Values

## Concept

CSS has several unit types. Absolute: `px`, `pt`, `cm`. Relative: `em`, `rem`, `%`, `vw`, `vh`, `vmin`, `vmax`. `rem` is relative to root font size; `em` to the element's font size. `%` is relative to the parent. Viewport units (`vw`, `vh`) are relative to the viewport. Choose based on what you want to scale with.

## Why It Matters

Wrong units cause layout bugs. `em` for padding can compound unexpectedly. `rem` for typography enables consistent scaling. `vw` for full-width can cause overflow. Understanding units prevents "why is this different?" issues.

## Key Concepts

- `px` – fixed; doesn't scale with user preferences
- `rem` – root em; consistent across the page
- `em` – relative to element font size (inheritance)
- `%` – relative to parent (context-dependent)
- `vw`/`vh` – 1% of viewport width/height
- `ch` – width of "0" character (useful for monospace)

## Code Example

```css
:root {
  font-size: 16px;
}

body {
  font-size: 1rem; /* 16px */
}

.container {
  max-width: 1200px;
  padding: 1rem 2rem;
}

.hero {
  height: 100vh;
  width: 100vw; /* watch for scrollbar */
}

.text {
  max-width: 65ch; /* readable line length */
}
```

## Under the Hood

The browser resolves units to pixels during layout. `rem` is computed from the root font size. `%` depends on the property—width % is of parent width; font-size % is of parent font-size. Viewport units can change when the address bar shows/hides on mobile.

## Common Mistakes

- Using `em` for layout (compounds with nesting)
- `100vw` causing horizontal scroll (includes scrollbar)
- Mixing px and rem inconsistently
- Using `vh` on mobile (address bar changes height)

## Best Practices

- Use `rem` for typography and spacing
- Use `px` for borders and small fixed values
- Use `%` or `fr` for flexible layouts
- Use `ch` for max-width on text blocks

## Summary

Use `rem` for scalable typography and spacing. `em` for component-relative sizing. `%` for parent-relative layouts. `vw`/`vh` for viewport-relative sizing. Choose based on what should scale.
