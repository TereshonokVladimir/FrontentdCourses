# Div and Span

## Concept

`<div>` and `<span>` are generic containers with no inherent meaning. `<div>` is block-level; `<span>` is inline. Use them when no semantic element fits. They're the "catch-all" elements—div for grouping blocks, span for wrapping inline content without changing semantics.

## Why It Matters

Div and span are essential for layout and styling hooks. Frameworks like React use div heavily. The key is knowing when to use them vs semantic elements—prefer semantic when possible, fall back to div/span when not.

## Key Concepts

- `<div>` – block-level, groups other block elements
- `<span>` – inline, wraps text or inline elements
- Neither adds meaning; they're purely structural
- Use for styling, scripting, or layout when semantic elements don't fit

## Code Example

```html
<!-- Div for layout grouping -->
<div class="card">
  <h2>Title</h2>
  <p>Content</p>
</div>

<!-- Span for inline styling -->
<p>This word is <span class="highlight">important</span>.</p>

<!-- Div as wrapper for flex/grid -->
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
</div>
```

## Under the Hood

Div renders as a block (full width, new line before/after). Span stays inline. Both are neutral in the accessibility tree—they don't add landmarks or roles. Screen readers pass through them without announcement unless they have ARIA or roles.

## Common Mistakes

- Overusing div when semantic elements exist
- Nesting divs excessively (div soup)
- Using div for inline styling (use span)
- Using span for block-level grouping (use div)

## Best Practices

- Prefer semantic elements (article, section, nav) over div
- Use div for layout containers (flex, grid wrappers)
- Use span for inline styling or scripting
- Keep nesting shallow; avoid div soup

## Summary

Div is block-level, span is inline. Both are generic. Use them when no semantic element fits—for layout, styling, or scripting. Prefer semantic HTML when it applies.
