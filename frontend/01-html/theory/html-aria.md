# ARIA (Accessible Rich Internet Applications)

## Concept

ARIA is a set of attributes that add semantics to HTML when native elements aren't sufficient. Use it to expose roles, states, and properties to assistive technology. Rule of thumb: prefer native HTML; use ARIA only when you can't use or extend native elements.

## Why It Matters

Custom widgets (tabs, modals, dropdowns) often need ARIA to be accessible. Without it, screen readers may not understand structure or state. Misused ARIA can make things worse—so use it carefully.

## Key Concepts

- `role` – defines what the element is (button, dialog, tablist)
- `aria-label` / `aria-labelledby` – name the element
- `aria-describedby` – additional description
- `aria-expanded`, `aria-hidden`, `aria-current` – states
- `aria-live` – announces dynamic changes

## Code Example

```html
<!-- Custom button (prefer <button> when possible) -->
<div role="button" tabindex="0" aria-label="Close dialog" onclick="close()">
  ×
</div>

<!-- Tab panel -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">Content 1</div>

<!-- Live region for dynamic updates -->
<div aria-live="polite" aria-atomic="true">3 items added to cart</div>
```

## Under the Hood

ARIA modifies the accessibility tree that assistive tech reads. It doesn't change behavior—you must implement keyboard support, focus management, and state updates in JavaScript. `aria-live` regions trigger announcements when content changes.

## Common Mistakes

- Using ARIA when native HTML exists (e.g., role="button" instead of button)
- Redundant ARIA (e.g., aria-label on a button with visible text)
- Forgetting to manage focus in modals
- Using aria-hidden on focusable elements (they stay in tab order)

## Best Practices

- Prefer native elements: `<button>`, `<input>`, `<select>`
- Use ARIA for custom widgets only
- Keep ARIA in sync with actual state
- Test with screen readers after adding ARIA

## Summary

ARIA extends semantics for custom components. Use native HTML first. When you need ARIA, provide roles, labels, and keep states updated. Always implement keyboard and focus behavior.
