# Configuration

## Concept

`tailwind.config.js` customizes Tailwind: theme (colors, spacing, fonts), plugins, content paths, dark mode strategy. Extend the default theme or replace it. Add custom utilities and components via plugins. Content tells Tailwind which files to scan.

## Why It Matters

Config tailors Tailwind to your project. Brand colors, custom spacing, and design tokens go here. Plugins add functionality (forms, typography, aspect-ratio). Content paths ensure classes are detected.

## Key Concepts

- content: array of file patterns to scan
- theme.extend: add to default theme
- theme: replace entire section
- plugins: array of plugin functions
- darkMode: 'class' or 'media'
- prefix: add prefix to all utilities (e.g., 'tw-')

## Code Example

```js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        brand: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a' }
      },
      spacing: { '18': '4.5rem' }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
```

## Under the Hood

Tailwind reads the config at build time. It merges theme.extend with defaults. Plugins run and add utilities. Content paths are globbed to find class names. The output CSS includes only used utilities.

## Common Mistakes

- Wrong content paths (classes not detected, purged)
- Extending with wrong structure (colors need object)
- Forgetting to add new directories to content
- Using theme instead of theme.extend (replaces, doesn't merge)

## Best Practices

- Use theme.extend for additions
- Define design tokens (colors, spacing)
- Add all template directories to content
- Use plugins for complex additions

## Summary

Config customizes theme, plugins, content. Extend theme. Set content paths. darkMode strategy. Plugins for extras. Content must include all template files.
