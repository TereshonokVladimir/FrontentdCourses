# Cascade and Specificity

## Concept

When multiple rules apply to the same element, the cascade decides the winner. Three factors: source order (later wins), specificity (more specific wins), and importance (`!important`). Inheritance passes some properties (color, font) to children. Understanding this prevents style conflicts.

## Why It Matters

Specificity wars are a common pain. Developers add `!important` or more specific selectors, creating fragile CSS. Knowing how the cascade works lets you write predictable, maintainable styles and debug "why isn't this applying?" quickly.

## Key Concepts

- Specificity: inline style > id > class/attribute/pseudo-class > element/pseudo-element
- `!important` overrides everything (except another !important with higher specificity)
- Inheritance: color, font, line-height pass down; margin, border do not
- Source order: when specificity ties, last rule wins

## Code Example

```css
/* Specificity: 0,0,1 (one element) */
p { color: blue; }

/* Specificity: 0,1,0 (one class) - wins over p */
.text { color: red; }

/* Specificity: 0,1,1 - wins over .text */
p.text { color: green; }

/* Specificity: 1,0,0 - wins over all above */
#unique { color: purple; }

/* Inheritance: children get color */
.parent { color: navy; }
```

## Under the Hood

Browsers calculate specificity as (a, b, c): a=ids, b=classes/attributes/pseudo-classes, c=elements/pseudo-elements. They compare tuples left to right. Inheritance happens after the cascade; inherited values can be overridden by any rule on the child.

## Common Mistakes

- Using !important as a quick fix
- Relying on source order instead of clear structure
- Not knowing that `*` has 0 specificity
- Expecting all properties to inherit (they don't)

## Best Practices

- Keep specificity flat (prefer single class)
- Use `!important` only for utilities (e.g., .sr-only)
- Leverage inheritance for typography
- Use `all: revert` or `all: unset` to reset inheritance

## Summary

The cascade uses specificity, source order, and importance. Keep specificity low, avoid !important, and use inheritance intentionally. Understand the order to debug and maintain CSS.
