# CSS Introduction

## Concept

CSS (Cascading Style Sheets) controls how HTML looks: colors, fonts, layout, spacing, animations. You write rules that select elements and apply properties. CSS is separate from HTML—one stylesheet can affect many pages. The "cascade" means multiple rules can apply; specificity and order determine which wins.

## Why It Matters

CSS turns structure into design. Without it, every site would look like a plain document. Modern CSS handles layout (Flexbox, Grid), responsiveness, and animations. Understanding the cascade and specificity prevents "why isn't my style applying?" frustration.

## Key Concepts

- Selectors target elements (by tag, class, id, attribute)
- Properties and values define styles (color: red;)
- The cascade: inheritance, specificity, source order
- External stylesheets vs inline styles
- Box model: content, padding, border, margin

## Code Example

```css
/* Select by element */
p {
  color: #333;
  font-size: 16px;
}

/* Select by class */
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
}

/* Select by id (use sparingly) */
#header {
  height: 60px;
}
```

## Under the Hood

Browsers parse CSS and build a style tree. They resolve the cascade, apply inheritance, and compute final values. The result is the computed style for each element. Layout (reflow) and paint happen after style resolution.

## Common Mistakes

- Using !important to fix specificity (fix the selector instead)
- Inline styles for everything (hard to maintain)
- Forgetting the cascade (later rules override earlier)
- Not understanding the box model (margin vs padding)

## Best Practices

- Use external stylesheets
- Prefer classes over ids for styling
- Keep specificity low (avoid deep nesting)
- Use CSS variables for theming

## Summary

CSS styles HTML via selectors and properties. The cascade (specificity, order) determines which rules apply. Use external stylesheets, prefer classes, and understand the box model.
