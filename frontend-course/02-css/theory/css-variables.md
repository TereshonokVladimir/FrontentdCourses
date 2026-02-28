# CSS Custom Properties (Variables)

## Concept

Custom properties (`--name: value`) store values for reuse. Define on `:root` or any element; they cascade and inherit. Access with `var(--name)` or `var(--name, fallback)`. They enable theming, responsive values, and dynamic styling. Unlike preprocessor variables, they're live—JavaScript can change them.

## Why It Matters

Variables enable consistent theming and easy dark mode. Change one value, update everywhere. They work with JavaScript for dynamic themes. They're the native way to share values across CSS.

## Key Concepts

- Define: `--color-primary: #007bff;`
- Use: `color: var(--color-primary);`
- Fallback: `var(--color, #000);`
- Scope: inherit down the tree
- Can hold any value: colors, sizes, strings

## Code Example

```css
:root {
  --color-primary: #007bff;
  --color-bg: #fff;
  --spacing: 1rem;
  --radius: 8px;
}

[data-theme="dark"] {
  --color-primary: #58a6ff;
  --color-bg: #0d1117;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing);
  border-radius: var(--radius);
}

.card {
  background: var(--color-bg);
}
```

## Under the Hood

Custom properties are resolved at computed-value time. They cascade like normal properties. `var()` is replaced with the resolved value. Invalid values fall back to the initial value of the property (or the fallback in var()).

## Common Mistakes

- Using variables for non-inherited properties without defining on each element
- Invalid fallback (e.g., `var(--x, 10px)` with `--x: red`)
- Overusing variables for one-off values
- Expecting variables in media queries (they work, but scope matters)

## Best Practices

- Define design tokens on :root
- Use for colors, spacing, typography scale
- Provide fallbacks for robustness
- Use with data attributes for themes

## Summary

Custom properties store reusable values. Define on :root, use with var(). They cascade and can be changed at runtime. Ideal for theming and design systems.
