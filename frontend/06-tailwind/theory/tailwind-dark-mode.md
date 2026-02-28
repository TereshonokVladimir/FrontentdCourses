# Dark Mode

## Concept

Tailwind supports dark mode with the `dark:` variant. Strategy: `media` (prefers-color-scheme) or `class` (toggle via class on html/body). Use `dark:bg-gray-900`, `dark:text-white` for dark mode styles. Toggle by adding/removing the `dark` class.

## Why It Matters

Dark mode reduces eye strain and saves battery on OLED. Many users prefer it. Tailwind makes it trivial—add dark: variants. Class strategy allows user preference override.

## Key Concepts

- dark: prefix for dark mode styles
- Strategy: media (system) or class (manual)
- Set in config: `darkMode: 'class'` or `'media'`
- Toggle: `document.documentElement.classList.toggle('dark')`
- Use for: bg, text, border, ring, etc.

## Code Example

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <p class="text-gray-600 dark:text-gray-400">Muted</p>
</div>
```

## Under the Hood

With class strategy, `dark:` variants become `.dark .dark\:bg-gray-900 { ... }`. The dark class on html enables them. With media, it uses `@media (prefers-color-scheme: dark)`.

## Common Mistakes

- Forgetting to set darkMode in config (default is media)
- Using class strategy but not toggling the class
- Not providing dark variants (inverted colors)
- Flash of wrong theme (script in head to set class before paint)

## Best Practices

- Use class strategy for user control
- Provide dark variants for all key UI
- Set class early to prevent flash
- Use semantic colors (gray-100/800) for easy dark mapping

## Summary

dark: variant. media or class strategy. Toggle class for user preference. Provide dark variants. Prevent flash. Use semantic colors.
