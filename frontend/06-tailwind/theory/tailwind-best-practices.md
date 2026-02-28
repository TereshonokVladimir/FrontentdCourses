# Best Practices

## Concept

Tailwind best practices: prefer utilities over @apply, use consistent spacing scale, mobile-first responsive, extract components when repeated 3+ times, use design tokens in config, keep class strings readable (format, group related), avoid arbitrary values when theme exists, ensure accessibility.

## Why It Matters

Following practices keeps code maintainable and performant. Inconsistent use leads to bloat and confusion. Good practices scale with team size.

## Key Concepts

- Utility-first: prefer classes in HTML
- Consistency: use the scale, semantic colors
- Extract: @apply or component when repeated
- Readability: format long class strings, use Prettier plugin
- Performance: content paths correct, purge works
- Accessibility: focus, contrast, semantics

## Code Example

```html
<!-- Good: utilities, consistent scale -->
<div class="flex items-center gap-4 p-4 rounded-lg bg-white shadow">
  <span class="text-sm font-medium text-gray-700">Label</span>
</div>

<!-- Extract when repeated -->
<!-- components/Button.jsx -->
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  {children}
</button>
```

## Under the Hood

Best practices are conventions. They don't change how Tailwind works. They affect output size (purge), maintainability (extraction), and UX (a11y).

## Common Mistakes

- Giant @apply classes
- Inconsistent spacing (mix of p-3, p-5, p-7)
- Not using content paths correctly
- Ignoring accessibility
- Overusing arbitrary values

## Best Practices

- Use Prettier + Tailwind plugin for formatting
- Define design tokens in config
- Extract repeated patterns
- Test responsive and a11y
- Document component patterns

## Summary

Utility-first. Consistent scale. Extract when repeated. Readable class strings. Correct content. Accessibility. Design tokens. Format with Prettier.
