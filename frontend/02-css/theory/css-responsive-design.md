# Responsive Design

## Concept

Responsive design adapts layout to screen size. Key tools: viewport meta tag, media queries, fluid units (%, rem, vw), and flexible images. Mobile-first means starting with small screens and adding complexity with `min-width` queries. Breakpoints are where layout changes.

## Why It Matters

Most traffic is mobile. Fixing the viewport and using fluid layouts prevents horizontal scroll and tiny text. Responsive design is expected; non-responsive sites feel broken. It's a core frontend skill.

## Key Concepts

- Viewport meta: `width=device-width, initial-scale=1`
- Media queries: `@media (min-width: 768px) { }`
- Fluid units: `%`, `rem`, `vw`, `vh`
- `max-width: 100%` on images
- Mobile-first: base styles for mobile, enhance for larger screens

## Code Example

```css
/* Mobile-first */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

img {
  max-width: 100%;
  height: auto;
}
```

## Under the Hood

Media queries evaluate at runtime. When the viewport matches, the rules apply. The browser may reflow when the window is resized. `rem` is relative to the root font size, making it easy to scale.

## Common Mistakes

- Forgetting viewport meta (mobile zoom/layout issues)
- Using fixed widths (px) for everything
- Desktop-first (harder to scale down)
- Too many breakpoints (3–4 usually enough)

## Best Practices

- Mobile-first: base + min-width queries
- Use rem for spacing and typography
- Set max-width on containers
- Test on real devices or DevTools

## Summary

Responsive design uses viewport meta, media queries, and fluid units. Go mobile-first. Use breakpoints sparingly. Make images and containers fluid.
