# Colors and Backgrounds

## Concept

Colors can be specified as hex (`#fff`), rgb/rgba, hsl/hsla, or named colors. `background` controls background color, image, position, size, and repeat. `background-image` with `linear-gradient` or `radial-gradient` creates gradients. `opacity` affects the whole element; `rgba`/`hsla` affect only the color.

## Why It Matters

Consistent color usage builds brand. Gradients and backgrounds create depth. Understanding contrast is critical for accessibility (WCAG). Alpha channels enable overlays without affecting child elements.

## Key Concepts

- Hex: `#fff`, `#ffffff`, `#fff8` (with alpha)
- `rgb()`, `rgba()` – red, green, blue
- `hsl()`, `hsla()` – hue, saturation, lightness
- `background-color`, `background-image`, `background-size`, `background-position`
- `linear-gradient()`, `radial-gradient()`
- `currentColor` – inherits text color

## Code Example

```css
.card {
  background-color: #fff;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
}

.icon {
  color: inherit;
  fill: currentColor; /* SVG inherits text color */
}

.hero {
  background: url("hero.jpg") center / cover no-repeat;
}
```

## Under the Hood

Browsers parse color values and convert to a display format. Gradients are rendered as images. `currentColor` resolves at computed value time. Contrast is calculated from luminance.

## Common Mistakes

- Low contrast (fails WCAG)
- Using opacity on parent (affects children)
- Overly complex gradients (performance)
- Hardcoding colors instead of variables

## Best Practices

- Use CSS variables for colors (theming)
- Check contrast (4.5:1 for body, 3:1 for large text)
- Use `rgba`/`hsla` for overlays
- Prefer `hsl` for programmatic color manipulation

## Summary

Colors: hex, rgb, hsl. Use rgba/hsla for transparency. Backgrounds support images and gradients. Check contrast for accessibility. Use variables for consistency.
