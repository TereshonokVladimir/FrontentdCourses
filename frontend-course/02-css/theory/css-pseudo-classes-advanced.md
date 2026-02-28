# Advanced Pseudo-Classes

## Concept

Pseudo-classes select elements based on state or position. Beyond `:hover` and `:focus`: `:focus-visible` (keyboard focus only), `:focus-within` (descendant focused), `:is()`, `:where()`, `:has()` (parent selector). `:nth-child()` and `:nth-of-type()` for positional selection. `:not()` for exclusion.

## Why It Matters

`:focus-visible` improves accessibility—no focus ring on mouse click, ring on keyboard. `:has()` enables parent selection (previously impossible). `:is()` and `:where()` simplify selectors and control specificity. These are modern, powerful tools.

## Key Concepts

- `:focus-visible` – focus from keyboard, not mouse
- `:focus-within` – element or descendant has focus
- `:has(selector)` – parent has matching child
- `:is(a, b)` – matches a or b; uses highest specificity
- `:where(a, b)` – matches a or b; 0 specificity
- `:nth-child(an+b)` – formula for position

## Code Example

```css
/* Focus ring only for keyboard */
button:focus-visible {
  outline: 2px solid blue;
}

/* Form group with focused input */
.form-group:focus-within label {
  color: blue;
}

/* Card that has an image */
.card:has(img) {
  padding: 0;
}

/* Simplify selector list */
:is(h1, h2, h3) {
  margin-top: 1em;
}

/* Low specificity */
:where(.card, .panel) .title {
  font-weight: bold;
}

/* Every other row */
tr:nth-child(odd) {
  background: #f5f5f5;
}
```

## Under the Hood

`:has()` is expensive—browser must check descendants. `:is()` and `:where()` expand at parse time. `:focus-visible` follows the browser's heuristics (keyboard vs pointer). Support varies—`:has()` is newer.

## Common Mistakes

- Using `:focus` when `:focus-visible` is better (avoid ring on click)
- Overusing `:has()` (performance)
- Confusing `:nth-child` with `:nth-of-type`
- Expecting `:where()` to override (0 specificity can be overridden easily)

## Best Practices

- Use `:focus-visible` for focus styles
- Use `:has()` for component variations
- Use `:where()` for resets (low specificity)
- Use `:is()` to simplify long selector lists

## Summary

Advanced pseudo-classes: focus-visible, focus-within, has, is, where. Use focus-visible for accessibility. :has() enables parent selection. :is() and :where() simplify and control specificity.
