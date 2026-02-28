# Typography

## Concept

Typography controls text appearance: font family, size, weight, line height, letter spacing. `font-family` specifies fonts; use fallbacks (e.g., `system-ui`, `sans-serif`). `font-size` with `rem` scales with user preferences. `line-height` affects readability—1.5–1.6 for body text. `font-weight` controls boldness.

## Why It Matters

Typography affects readability and brand. Poor font choices or tiny text hurt UX. System fonts load fast; web fonts add branding but require optimization. Line height and spacing matter for accessibility.

## Key Concepts

- `font-family` – stack with fallbacks
- `font-size` – use rem for scalability
- `font-weight` – 100–900; 400 normal, 700 bold
- `line-height` – unitless (1.5) or with unit
- `letter-spacing` – tracking
- `@font-face` – custom web fonts

## Code Example

```css
body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
}

@font-face {
  font-family: "Custom";
  src: url("custom.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
```

## Under the Hood

Browsers match font-family to available fonts. Web fonts are fetched and applied when loaded. `font-display: swap` shows fallback immediately, then swaps when custom font loads. Line-height affects the height of the line box.

## Common Mistakes

- No fallback in font stack
- Using px for font-size (doesn't scale with user preferences)
- Line-height too tight (hard to read)
- Loading too many font weights

## Best Practices

- Use `font-display: swap` for web fonts
- Limit font weights (2–3 per family)
- Prefer variable fonts when possible
- Use system-ui for fast, native look

## Summary

Typography: font-family, size, weight, line-height. Use rem for size, unitless line-height. Include fallbacks. Optimize web fonts with font-display and subsetting.
