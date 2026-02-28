# States and Variants

## Concept

Tailwind supports state and variant prefixes: `hover:`, `focus:`, `active:`, `disabled:`, `group-hover:`, `peer-*`, `first:`, `last:`, `odd:`, `even:`. Combine with any utility. Use for interactive feedback and conditional styling.

## Why It Matters

States make UI feel responsive. Hover and focus are essential for accessibility. Group and peer enable parent/child and sibling styling. Variants reduce custom CSS.

## Key Concepts

- hover:, focus:, active:, disabled:
- focus-visible: (keyboard focus, not mouse)
- group/group-hover: parent has group, child has group-hover:
- peer/peer-*: sibling has peer, other has peer-checked:, etc.
- first:, last:, odd:, even:, empty:

## Code Example

```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 disabled:opacity-50">
  Submit
</button>
<div class="group">
  <p class="group-hover:text-blue-600">Hover parent</p>
</div>
<input type="checkbox" class="peer" />
<label class="peer-checked:text-green-600">Label</label>
```

## Under the Hood

Variants generate additional CSS rules. `hover:bg-blue-600` becomes `.hover\:bg-blue-600:hover { ... }`. Group and peer use CSS selectors (e.g., `:has()` or sibling selectors) to style based on sibling/parent state.

## Common Mistakes

- Using focus instead of focus-visible (focus-visible for keyboard)
- Forgetting disabled styles
- Group/peer names: default is "group" and "peer"; use group/peer-name for multiple
- Chaining variants incorrectly (order matters for some)

## Best Practices

- Use focus-visible for keyboard focus
- Always style disabled state
- Use group for card hover effects
- Use peer for form input + label

## Summary

hover, focus, active, disabled. focus-visible for a11y. group/group-hover. peer/peer-checked. first, last, odd, even. Combine with any utility.
