# The Box Model

## Concept

Every element is a box with four areas: content, padding, border, and margin. Content is the inner area; padding is space inside the border; border is the edge; margin is space outside. By default, `width` and `height` apply to content only—padding and border add to the total size. `box-sizing: border-box` includes padding and border in width/height.

## Why It Matters

Unexpected layout comes from not understanding the box model. Elements grow when you add padding. `box-sizing: border-box` makes layout predictable—width means total width. Most reset/stylesheets set it globally.

## Key Concepts

- Content box (default): width/height = content only
- Border box: width/height = content + padding + border
- Margin collapses vertically between siblings
- Padding and border add to element size (content-box) or are included (border-box)

## Code Example

```css
/* Default: 200px content + 20px padding each side = 240px total */
.box {
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}

/* Border-box: 200px total, content shrinks */
.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}

/* Global reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Under the Hood

The layout engine computes the used width/height from the box model. With content-box, padding and border extend the box. With border-box, they're subtracted from width/height. Margin doesn't affect the element's size but affects layout.

## Common Mistakes

- Forgetting that padding adds to width in content-box
- Not setting box-sizing globally
- Expecting margin to add to element size (it doesn't)
- Confusing margin (outside) with padding (inside)

## Best Practices

- Use `box-sizing: border-box` globally
- Use margin for spacing between elements, padding for inner space
- Remember vertical margin collapse
- Use `outline` instead of `border` for focus rings (doesn't affect layout)

## Summary

The box model: content, padding, border, margin. Use `box-sizing: border-box` for predictable sizing. Margin collapses; padding doesn't. Understand the model to control layout.
