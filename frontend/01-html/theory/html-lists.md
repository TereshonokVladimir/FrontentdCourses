# Lists

## Concept

HTML offers three list types: unordered (`<ul>`), ordered (`<ol>`), and description (`<dl>`). List items use `<li>`. Unordered lists show bullets; ordered lists show numbers or letters. Description lists pair terms (`<dt>`) with definitions (`<dd>`).

## Why It Matters

Lists structure content logically. Screen readers announce list length and position. Search engines understand list semantics. Using the right list type improves accessibility and semantics.

## Key Concepts

- `<ul>` for unordered (bulleted) lists
- `<ol>` for ordered (numbered) lists; use `reversed` and `start` when needed
- `<dl>`, `<dt>`, `<dd>` for term-definition pairs
- Only `<li>` can be a direct child of `<ul>` or `<ol>`

## Code Example

```html
<!-- Unordered list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list with attributes -->
<ol start="5" reversed>
  <li>Fifth item</li>
  <li>Fourth item</li>
</ol>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

## Under the Hood

Browsers render list markers (bullets, numbers) via pseudo-elements. Screen readers announce "list with 3 items" and "item 2 of 3." The `reversed` and `start` attributes modify the numbering algorithm.

## Common Mistakes

- Using `<div>` or `<p>` for list-like content instead of lists
- Nesting `<ul>` inside `<ul>` without wrapping in `<li>`
- Using lists purely for indentation (use CSS instead)
- Putting block elements inside `<li>` incorrectly (valid but can be tricky)

## Best Practices

- Use `<ul>` for items without order, `<ol>` when order matters
- Use `<dl>` for glossaries, metadata, key-value pairs
- Nest lists by placing `<ol>` or `<ul>` inside an `<li>`
- Style with CSS; don't rely on default bullets

## Summary

Use `<ul>` for bullets, `<ol>` for numbers, `<dl>` for definitions. Keep valid structure (only `<li>` as direct children of ul/ol) for accessibility and semantics.
