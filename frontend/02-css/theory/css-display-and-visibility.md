# Display and Visibility

## Concept

`display` controls how an element is rendered: block, inline, inline-block, flex, grid, none. Block elements take full width and stack vertically; inline elements flow with text. `visibility: hidden` hides but keeps space; `display: none` removes from flow. `opacity` affects transparency.

## Why It Matters

Wrong display causes layout issues—inline elements ignore width/height. `display: none` hides from screen readers (usually); `visibility: hidden` hides visually but keeps space. Understanding the difference matters for accessibility and animations.

## Key Concepts

- `block` – full width, stack vertically
- `inline` – flow with text; ignore width/height
- `inline-block` – inline flow with block behavior
- `flex`, `grid` – layout modes
- `none` – removed from flow and accessibility tree
- `visibility: hidden` – invisible, keeps space

## Code Example

```css
/* Block to inline */
span.inline-block {
  display: inline-block;
  width: 100px;
}

/* Hide visually, keep for screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

/* Toggle visibility */
.hidden {
  display: none;
}

.invisible {
  visibility: hidden;
}
```

## Under the Hood

Display affects the layout algorithm. `none` skips the element entirely. `visibility: hidden` still renders (takes space) but doesn't paint. `opacity: 0` paints but is transparent—element still receives events. Screen readers typically ignore `display: none` and `visibility: hidden`.

## Common Mistakes

- Using `visibility: hidden` when you want no layout impact (use display: none)
- Expecting `display: inline` to respect width/height
- Hiding with `opacity: 0` (still clickable, still in flow)
- Using `display: none` for show/hide (use visibility or aria-hidden for accessibility)

## Best Practices

- Use `.sr-only` pattern for screen-reader-only text
- Use `display: none` when content should be removed from flow
- Use `visibility` for hide/show that keeps layout
- Use `opacity` for fade animations

## Summary

Display controls layout type: block, inline, flex, grid, none. Visibility hides but keeps space. Display none removes from flow. Choose based on whether you need layout space and accessibility.
