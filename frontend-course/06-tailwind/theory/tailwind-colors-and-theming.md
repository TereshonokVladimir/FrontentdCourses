# Colors and Theming

## Concept

Tailwind includes a color palette (gray, blue, red, etc.) with shades (50–950). Use `bg-blue-500`, `text-gray-700`, `border-red-300`. Customize in tailwind.config.js: extend theme or replace. Use CSS variables for runtime theming (e.g., dark mode).

## Why It Matters

Consistent colors create a cohesive design. The theme system ensures design tokens. Customizing the theme tailors Tailwind to your brand. Dark mode support is built-in.

## Key Concepts

- Palette: `color-{shade}`: `blue-500`, `gray-700`, `red-100`
- Usage: `bg-`, `text-`, `border-`, `ring-`, `divide-`
- Custom: `theme.extend.colors` in config
- Dark mode: `dark:bg-gray-800`, `dark:text-white`
- Arbitrary: `bg-[#1a1a2e]` for one-off

## Code Example

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <p class="text-blue-600 dark:text-blue-400">Accent</p>
  <div class="border border-gray-200 dark:border-gray-700">Border</div>
</div>
```

## Under the Hood

Colors are in the theme. Tailwind generates classes for each color and shade. Dark mode uses a media query or class strategy. `dark:` variants apply when the strategy matches.

## Common Mistakes

- Using arbitrary colors when theme has a match
- Not providing dark mode variants (accessibility)
- Using low-contrast combinations (gray-400 on gray-100)
- Forgetting to set dark mode strategy in config

## Best Practices

- Define brand colors in theme
- Use semantic names (primary, secondary) in config
- Provide dark mode variants for key UI
- Check contrast ratios

## Summary

Theme defines colors. Use bg-, text-, border-. Customize in config. Dark mode with dark: prefix. Arbitrary values for one-offs. Ensure contrast.
