# Text Formatting Elements

## Concept

HTML provides inline elements for text semantics: `<strong>` (strong importance), `<em>` (emphasis), `<mark>` (highlight), `<small>` (side comments), `<del>` (removed), `<ins>` (inserted), `<sub>`, `<sup>`. Use them for meaning, not appearance—CSS handles visual styling.

## Why It Matters

Semantic formatting helps screen readers convey emphasis and structure. `<strong>` and `<em>` can be announced with different inflection. Search engines use these for context. Avoid `<b>` and `<i>` unless you need presentational styling without semantic weight.

## Key Concepts

- `<strong>` – strong importance (default: bold)
- `<em>` – emphasis (default: italic)
- `<mark>` – highlighted/relevant text
- `<small>` – fine print, disclaimers
- `<del>` / `<ins>` – edits (with datetime)
- `<sub>` / `<sup>` – subscript, superscript

## Code Example

```html
<p>This is <strong>important</strong> and <em>emphasized</em>.</p>
<p>Search result: ...<mark>keyword</mark>...</p>
<p><small>Terms and conditions apply.</small></p>
<p>Price: <del>$100</del> <ins>$80</ins></p>
<p>H<sub>2</sub>O and x<sup>2</sup></p>
```

## Under the Hood

Browsers render these with default styles. Screen readers may change tone for strong/em. Mark is often used for search highlights. Del/ins can expose edit history to assistive tech.

## Common Mistakes

- Using `<b>` and `<i>` when `<strong>` and `<em>` fit
- Using formatting for layout (use CSS)
- Nesting block elements inside inline formatting
- Overusing mark (reserve for actual highlights)

## Best Practices

- Prefer strong/em over b/i for semantic emphasis
- Use mark for search or reference highlights
- Use small for legal/fine print
- Use del/ins with datetime for edit tracking

## Summary

Formatting elements add meaning: strong, em, mark, small, del, ins, sub, sup. Use for semantics; style with CSS. Prefer semantic elements over presentational ones.
