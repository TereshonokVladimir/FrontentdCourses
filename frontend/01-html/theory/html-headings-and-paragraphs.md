# Headings and Paragraphs

## Concept

Headings (`<h1>`–`<h6>`) define document structure and hierarchy. There should be one `<h1>` per page (the main topic). Paragraphs (`<p>`) wrap blocks of text. Browsers add default margins; headings are block-level and create logical sections for both users and assistive tech.

## Why It Matters

Headings create an outline for screen readers and search engines. Skipping levels (e.g., h1 to h4) confuses users. Proper hierarchy improves SEO and accessibility; many users navigate by headings.

## Key Concepts

- `<h1>` is the page title; use only one per page
- Headings should be in order (h1, h2, h3) without skipping
- `<p>` is for paragraphs; don't nest block elements inside
- Headings are semantic—use for structure, not styling

## Code Example

```html
<article>
  <h1>Getting Started with HTML</h1>
  <p>HTML structures content for the web.</p>

  <h2>Document Structure</h2>
  <p>Every page needs a proper structure.</p>

  <h3>Head and Body</h3>
  <p>The head contains metadata; the body contains content.</p>
</article>
```

## Under the Hood

Browsers render headings with default font sizes (h1 largest, h6 smallest) and margins. Screen readers use headings to build a table of contents. Search engines use heading text to understand page structure and relevance.

## Common Mistakes

- Multiple `<h1>` elements on one page
- Using headings for visual size instead of hierarchy
- Skipping levels (h2 to h5)
- Putting `<div>` or other block elements inside `<p>`

## Best Practices

- One `<h1>` per page, describing the main topic
- Maintain logical order: h1 → h2 → h3
- Use CSS to style; don't choose heading level by appearance
- Wrap related content in semantic containers (article, section)

## Summary

Headings define structure; paragraphs hold text. Use one h1, keep hierarchy logical, and rely on semantics rather than visual styling.
