# Overflow and Scrolling

## Concept

`overflow` controls what happens when content exceeds its container: `visible` (default, clips nothing), `hidden` (clips), `scroll` (always shows scrollbar), `auto` (scrollbar when needed). `overflow-x` and `overflow-y` control each axis. `overflow: hidden` on a parent can break `position: sticky` for descendants.

## Why It Matters

Overflow affects scrollbars, clipping, and scroll containers. `overflow: hidden` creates a scroll container and can break sticky. `overflow: auto` prevents content from spilling. Understanding scroll containment matters for modals and fixed headers.

## Key Concepts

- `visible` – content can overflow (default)
- `hidden` – clip overflow; no scroll
- `scroll` – always show scrollbar
- `auto` – scrollbar when content overflows
- `overflow: hidden` on ancestor breaks `sticky`
- `overflow-x` / `overflow-y` – per axis

## Code Example

```css
.modal-body {
  overflow-y: auto;
  max-height: 80vh;
}

.card {
  overflow: hidden;
  border-radius: 8px;
}

.scroll-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
}

/* Sticky needs overflow: visible on ancestors */
.wrapper {
  overflow: visible; /* Don't use hidden if child is sticky */
}
```

## Under the Hood

Overflow creates a scroll container. The browser clips content and may show scrollbars. `sticky` works relative to the nearest scroll ancestor—if a parent has `overflow: hidden`, that ancestor isn't the viewport, so sticky can break.

## Common Mistakes

- `overflow: hidden` on parent of sticky element
- Using `overflow: scroll` when `auto` is better (no scrollbar when not needed)
- Forgetting `overflow-x` when only `overflow-y` is set (can get both)
- Horizontal scroll without `overflow-x: auto` on container

## Best Practices

- Use `auto` over `scroll` when possible
- Avoid `overflow: hidden` on ancestors of sticky
- Add `-webkit-overflow-scrolling: touch` for iOS
- Use `overflow: clip` (newer) when you want clip without scroll container

## Summary

Overflow controls clipping and scrolling. Use auto for scrollbars when needed. Avoid hidden on ancestors of sticky. Understand scroll containers for modals and layout.
