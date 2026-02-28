# Tailwind CSS Introduction

## Concept

Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS or using pre-built components, you apply utility classes directly in HTML. Each class does one thing (e.g., `p-4` for padding, `text-blue-500` for color). Tailwind generates only the CSS you use, keeping bundles small.

## Why It Matters

Tailwind speeds up development by eliminating context switching. No need to name classes or create separate CSS files. Responsive design and variants (hover, focus) are built-in. It's the most popular utility framework and integrates with React, Next.js, and others.

## Key Concepts

- Utility-first: many small classes instead of few semantic classes
- No CSS file to write (or minimal)
- JIT (Just-In-Time): generates CSS on demand
- Configurable: tailwind.config.js for theme, plugins
- Purge: unused styles removed in production

## Code Example

```html
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 class="text-xl font-bold text-gray-900">Title</h1>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click
  </button>
</div>
```

## Under the Hood

Tailwind scans your files for class names. It matches them against its utility set and generates the corresponding CSS. The JIT compiler creates styles on demand. In production, PurgeCSS removes unused utilities. The output is minimal.

## Common Mistakes

- Using arbitrary values when a theme value exists
- Overusing @apply (defeats utility-first)
- Not using responsive prefixes (sm:, md:)
- Forgetting to configure content paths

## Best Practices

- Prefer utilities over @apply
- Use responsive prefixes (mobile-first)
- Extract components with @apply only when truly repeated
- Customize theme for design tokens

## Summary

Tailwind is utility-first. Apply classes in HTML. No custom CSS needed. JIT generates on demand. Configurable. Responsive and variants built-in. Fast development.
