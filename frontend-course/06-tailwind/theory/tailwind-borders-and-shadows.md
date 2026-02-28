# Borders and Shadows

## Concept

Tailwind provides border utilities: width (`border`, `border-2`), color (`border-gray-200`), radius (`rounded`, `rounded-lg`, `rounded-full`), and side-specific (`border-t`, `border-l-4`). Shadows: `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`. Use for cards, buttons, and depth.

## Why It Matters

Borders define boundaries. Shadows create depth and hierarchy. Rounded corners soften UI. These are essential for component styling.

## Key Concepts

- Border: `border`, `border-2`, `border-gray-300`, `rounded-md`
- Radius: `rounded`, `rounded-lg`, `rounded-full`, `rounded-t-lg`
- Shadow: `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`
- Ring: `ring`, `ring-2`, `ring-blue-500` (outline alternative)
- Divide: `divide-y`, `divide-gray-200` (between children)

## Code Example

```html
<div class="border border-gray-200 rounded-lg shadow-md p-4">
  <p class="border-b border-gray-100 pb-2">Header</p>
  <p>Content</p>
</div>
<button class="ring-2 ring-blue-500 ring-offset-2 focus:ring-4">
  Focus
</button>
```

## Under the Hood

Borders and shadows use standard CSS. Ring uses box-shadow to simulate outline (better for rounded corners). Divide uses border on child elements with selectors.

## Common Mistakes

- Using border when ring would work better (focus states)
- Shadow too strong (use shadow-sm or shadow)
- Forgetting ring-offset for ring
- Rounded corners with overflow (use overflow-hidden)

## Best Practices

- Use ring for focus (accessibility)
- Subtle shadows for cards
- Consistent radius (pick 2–3 values)
- Divide for list separators

## Summary

Border, rounded, shadow. Ring for focus. Divide for lists. Use subtle shadows. Consistent radius. Ring-offset for spacing.
