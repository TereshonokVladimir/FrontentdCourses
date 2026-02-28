# Accessibility

## Concept

Tailwind supports accessibility: `sr-only` (screen reader only), `focus:`, `focus-visible:`, `focus:ring-*` for focus indicators, `aria-*` via arbitrary variants. Ensure color contrast, visible focus, and proper semantics. Use `@tailwindcss/forms` for better form styling.

## Why It Matters

Accessible UI is required for many users and often by law. Focus styles are critical for keyboard users. Color contrast affects readability. Tailwind provides utilities but doesn't enforce a11y—you must apply them.

## Key Concepts

- sr-only: visually hidden, available to screen readers
- focus:ring-2, focus:ring-blue-500, focus:ring-offset-2
- focus-visible: only for keyboard focus (not mouse)
- not-sr-only: make sr-only visible when needed
- Reduced motion: motion-reduce: for prefers-reduced-motion

## Code Example

```html
<button class="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
  Accessible
</button>
<span class="sr-only">Loading</span>
<div class="motion-reduce:animate-none">Animated</div>
```

## Under the Hood

sr-only uses clip/position to hide visually while keeping in DOM. focus-visible uses :focus-visible pseudo-class. motion-reduce uses @media (prefers-reduced-motion: reduce).

## Common Mistakes

- Removing focus outline without replacement (focus:outline-none + no ring)
- Using focus instead of focus-visible (focus-visible for keyboard only)
- Low contrast (gray-400 on gray-100)
- Animations without reduced-motion alternative

## Best Practices

- Always provide visible focus
- Use focus-visible for keyboard
- Check contrast (4.5:1 for text)
- Use sr-only for context
- Respect reduced motion

## Summary

sr-only for screen readers. focus-visible for keyboard. focus:ring for visible focus. Check contrast. motion-reduce. Tailwind helps; you must apply. Use forms plugin.
