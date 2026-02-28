# CSS Selectors

## Concept

Selectors target elements to apply styles. Basic types: element (`p`), class (`.class`), id (`#id`). Combinators: descendant (space), child (`>`), adjacent sibling (`+`), general sibling (`~`). Pseudo-classes (`:hover`, `:first-child`) and pseudo-elements (`::before`, `::after`) add power without extra HTML.

## Why It Matters

Efficient selectors keep CSS maintainable and performant. Overly specific selectors cause specificity wars. Understanding pseudo-classes enables interactive states and structural styling without JavaScript.

## Key Concepts

- Element, class, id, attribute selectors
- Combinators: ` ` (descendant), `>` (child), `+` (adjacent), `~` (sibling)
- `:hover`, `:focus`, `:first-child`, `:nth-child()`, `:not()`
- `::before`, `::after` for generated content
- Attribute: `[href]`, `[type="text"]`, `[class*="btn"]`

## Code Example

```css
/* Basic */
.button { }
#main { }
input[type="email"] { }

/* Combinators */
nav a { }           /* descendant */
ul > li { }         /* direct child */
h2 + p { }          /* adjacent sibling */

/* Pseudo-classes */
a:hover { }
li:first-child { }
tr:nth-child(odd) { }
input:not([type="submit"]) { }

/* Pseudo-elements */
.block::before {
  content: "";
  display: block;
}
```

## Under the Hood

The browser matches selectors from right to left. `.nav .link` finds elements with class "link" inside elements with class "nav". Pseudo-elements create virtual nodes that can be styled but don't exist in the DOM.

## Common Mistakes

- Overly specific selectors (`.page .section .card .title`)
- Using id for styling (high specificity, not reusable)
- Forgetting `content` on `::before`/`::after` (they won't appear)
- Misusing `:first-child` (element must be first child of parent)

## Best Practices

- Keep specificity low; use classes
- Prefer `:where()` and `:is()` for lower specificity
- Use attribute selectors for state (e.g., `[aria-expanded]`)
- Avoid universal selector `*` for performance in large DOMs

## Summary

Selectors target elements via type, class, id, attributes, and combinators. Pseudo-classes and pseudo-elements add states and generated content. Keep specificity low and avoid deep nesting.
