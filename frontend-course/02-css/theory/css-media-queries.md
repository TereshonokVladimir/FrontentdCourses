# Media Queries

## Concept

Media queries apply CSS conditionally based on device characteristics. Common: `min-width`, `max-width` for responsive breakpoints. Also: `prefers-color-scheme`, `prefers-reduced-motion`, `orientation`, `hover`. Syntax: `@media (condition) { rules }`. Combine with `and`, `or`, `not`.

## Why It Matters

Media queries power responsive design and accessibility. Different layouts for mobile/desktop, dark mode, reduced motion. They're the primary tool for adapting to user and device.

## Key Concepts

- `min-width`, `max-width` – viewport width
- `min-height`, `max-height` – viewport height
- `prefers-color-scheme: dark` – dark mode
- `prefers-reduced-motion: reduce` – accessibility
- `orientation: portrait|landscape`
- `hover: none` – touch device

## Code Example

```css
@media (min-width: 768px) {
  .container { max-width: 720px; }
}

@media (max-width: 767px) {
  .nav { flex-direction: column; }
}

@media (prefers-color-scheme: dark) {
  :root { --bg: #1a1a1a; --text: #fff; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

@media (min-width: 768px) and (orientation: landscape) {
  .hero { height: 80vh; }
}
```

## Under the Hood

The browser evaluates media queries when the viewport or preferences change. Matching rules are applied; non-matching are ignored. Queries are re-evaluated on resize, orientation change, or preference change.

## Common Mistakes

- Using device-specific widths (320px, 768px) as the only breakpoints
- Forgetting `prefers-reduced-motion`
- Max-width and min-width in wrong order (mobile-first vs desktop-first)
- Overly complex query combinations

## Best Practices

- Mobile-first: base + min-width
- Use content-based breakpoints, not device sizes
- Support prefers-color-scheme and prefers-reduced-motion
- Keep breakpoint count manageable (3–5)

## Summary

Media queries apply CSS conditionally. Use min-width for mobile-first. Support prefers-color-scheme and prefers-reduced-motion. Choose content-based breakpoints.
