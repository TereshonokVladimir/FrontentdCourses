# Arbitrary Values

## Concept

When no utility exists, use arbitrary values: `w-[137px]`, `bg-[#1a1a2e]`, `top-[117px]`. Syntax: `[value]` in square brackets. Use for one-off values, CSS variables, or when the theme doesn't have what you need. Prefer theme values when possible.

## Why It Matters

Tailwind can't include every value. Arbitrary values fill the gap. They're useful for third-party design specs, exact pixel values, or quick prototyping. Don't overuse—add to theme if repeated.

## Key Concepts

- Syntax: `property-[value]`
- Examples: `w-[200px]`, `text-[#ff6b6b]`, `opacity-[0.7]`
- With spaces: `grid-cols-[1fr_2fr_1fr]`
- CSS vars: `bg-[var(--my-color)]`
- Responsive: `md:w-[300px]`

## Code Example

```html
<div class="w-[min(100%,400px)] h-[50vh] bg-[#0f172a]">
  <p class="text-[13px] leading-[1.6]">Custom</p>
</div>
```

## Under the Hood

Tailwind generates a utility for the arbitrary value. It's escaped for safety. The value is used as-is in the CSS. No validation—invalid values produce invalid CSS.

## Common Mistakes

- Using arbitrary when theme has it (e.g., `w-[16rem]` vs `w-64`)
- Invalid CSS in brackets
- Forgetting to escape special chars (use quotes for strings)
- Overusing (add to theme if used 3+ times)

## Best Practices

- Prefer theme values
- Use for one-offs and prototyping
- Add repeated values to theme
- Use CSS variables for dynamic values

## Summary

[value] for arbitrary. Use when no utility exists. Prefer theme. Add to theme if repeated. Supports CSS vars. No validation.
