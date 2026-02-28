# CSS Positioning

## Concept

The `position` property controls how elements are placed. `static` (default) follows normal flow. `relative` positions relative to itself (original space preserved). `absolute` positions relative to the nearest positioned ancestor. `fixed` positions relative to the viewport. `sticky` toggles between relative and fixed based on scroll.

## Why It Matters

Positioning enables overlays, sticky headers, tooltips, and custom layouts. Misusing it causes layout breaks—absolute elements are removed from flow. Understanding stacking context and containing blocks prevents z-index and overflow issues.

## Key Concepts

- `static` – normal flow
- `relative` – offset from normal position; creates positioning context
- `absolute` – removed from flow; positioned relative to nearest positioned ancestor
- `fixed` – relative to viewport; removed from flow
- `sticky` – relative until threshold, then fixed
- `top`, `right`, `bottom`, `left` – offsets

## Code Example

```css
/* Sticky header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Tooltip */
.tooltip {
  position: relative;
}

.tooltip::after {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  content: attr(data-tooltip);
}

/* Modal overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
```

## Under the Hood

Absolute/fixed elements are removed from the document flow. They create a new containing block for descendants. `sticky` stays in flow until the threshold is reached, then behaves like fixed within its scroll container. Stacking context is created by position + z-index, opacity, transform.

## Common Mistakes

- Forgetting to set `position` on ancestor for absolute children
- Using `fixed` without considering mobile (keyboard, address bar)
- `sticky` not working (parent has overflow: hidden)
- Overusing absolute for layout (use flex/grid)

## Best Practices

- Use `position: relative` on parent when needed for absolute children
- Prefer `inset` shorthand for top/right/bottom/left
- Use sticky for headers and sidebars
- Avoid fixed for critical content (accessibility issues)

## Summary

Position controls placement: static, relative, absolute, fixed, sticky. Absolute and fixed remove from flow. Relative creates a positioning context. Sticky combines relative and fixed. Use sparingly; prefer flex/grid for layout.
