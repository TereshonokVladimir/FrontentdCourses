# HTML Document Structure

## Concept

Every HTML document is a tree of nested elements. The structure starts with `<!DOCTYPE html>` and wraps everything in an `<html>` tag. Inside, you have two main sections: `<head>` (metadata, scripts, styles) and `<body>` (visible content).

Think of it like a house: the foundation is DOCTYPE, the roof is html, the head is the attic (stuff users don't see directly), and the body is the living space.

## Why It Matters

Correct document structure ensures browsers parse your page correctly, improves SEO, enables proper styling, and makes your code maintainable. Broken structure leads to quirks mode, layout shifts, and accessibility issues.

## Key Concepts

- `<!DOCTYPE html>` tells the browser to use standards mode
- `<html>` is the root element; use `lang` for accessibility
- `<head>` contains metadata, links, and scripts that load before body
- `<body>` contains all visible content
- Elements must be properly nested (no overlapping tags)

## Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Content goes here.</p>
  </body>
</html>
```

## Under the Hood

The browser parses HTML top-to-bottom, building a DOM (Document Object Model) tree. The DOCTYPE triggers standards mode; without it, browsers use quirks mode with legacy rendering. The parser creates nodes for each element and builds parent-child relationships.

## Common Mistakes

- Forgetting `<!DOCTYPE html>` (triggers quirks mode)
- Putting visible content in `<head>`
- Missing `lang` on `<html>` (hurts screen readers and SEO)
- Overlapping tags like `<p><div></p></div>`

## Best Practices

- Always use `<!DOCTYPE html>` as the first line
- Set `lang` on `<html>` (e.g., `lang="en"`)
- Keep `<head>` for metadata only; put content in `<body>`
- Use semantic HTML5 elements for structure

## Summary

HTML documents have a strict structure: DOCTYPE, html, head, and body. The head holds metadata; the body holds visible content. Proper structure ensures correct parsing, SEO, and accessibility.
