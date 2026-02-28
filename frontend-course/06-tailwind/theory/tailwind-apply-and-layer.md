# @apply and @layer

## Concept

`@apply` lets you use Tailwind utilities inside CSS. `@layer` assigns styles to Tailwind's layers (base, components, utilities). Use sparingly—Tailwind is utility-first. @apply is for extracting repeated patterns. @layer keeps custom CSS in the right place.

## Why It Matters

Sometimes a component has many repeated classes. @apply can reduce duplication. @layer ensures your custom CSS doesn't override Tailwind incorrectly. But overuse of @apply defeats the utility-first approach.

## Key Concepts

- @apply: `@apply flex items-center gap-4;`
- @layer base: reset, defaults
- @layer components: reusable component classes
- @layer utilities: custom utilities
- Use in CSS file, not in HTML

## Code Example

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
  .card {
    @apply p-4 bg-white rounded-lg shadow-md;
  }
}
```

## Under the Hood

@apply expands to the actual CSS of each utility. @layer inserts the block into Tailwind's cascade. base < components < utilities. This controls specificity and order.

## Common Mistakes

- Overusing @apply (loses utility-first benefits)
- Using @apply with responsive/variant (complex)
- Creating one giant @apply class (hard to maintain)
- Forgetting that @apply is in a CSS file

## Best Practices

- Use @apply only for truly repeated patterns (3+ uses)
- Prefer utilities in HTML when possible
- Keep @apply classes small
- Use @layer for organization

## Summary

@apply for repeated patterns. @layer for organization. Use sparingly. Prefer utilities. Keep extracted classes small. Don't overuse.
