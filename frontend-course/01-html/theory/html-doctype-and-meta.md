# DOCTYPE and Meta Tags

## Concept

`<!DOCTYPE html>` is a declaration, not a tag. It tells the browser which HTML version to use and switches on standards-compliant rendering. Meta tags live in `<head>` and provide information about the document—character encoding, viewport, description—that doesn't render as visible content.

## Why It Matters

Without DOCTYPE, browsers fall back to quirks mode, which mimics old IE behavior and causes inconsistent layouts. Meta tags control charset (preventing garbled text), viewport (mobile responsiveness), and SEO (search snippets).

## Key Concepts

- DOCTYPE must be the first line; no whitespace before it
- `charset="UTF-8"` meta tag should come early in head
- Viewport meta enables responsive design on mobile
- Meta description and keywords affect search results

## Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A brief page description for search engines" />
    <meta name="theme-color" content="#333" />
    <title>Page Title</title>
  </head>
  <body></body>
</html>
```

## Under the Hood

The HTML5 parser looks for DOCTYPE at the start. If it finds `<!DOCTYPE html>`, it enables standards mode. Meta tags are parsed and stored; the charset meta is special—browsers may re-parse the document if they encounter it after reading bytes with the wrong encoding.

## Common Mistakes

- Putting content or comments before DOCTYPE
- Omitting charset meta (defaults to ISO-8859-1 in some cases)
- Forgetting viewport meta (mobile zoom/layout issues)
- Using invalid or deprecated DOCTYPEs like `<!DOCTYPE HTML PUBLIC ...>`

## Best Practices

- Use `<!DOCTYPE html>` only; no version number needed in HTML5
- Place charset meta in the first 1024 bytes of the document
- Always include viewport meta for responsive sites
- Add description meta for better SEO snippets

## Summary

DOCTYPE enables standards mode; meta tags configure charset, viewport, and metadata. Keep DOCTYPE first, charset early, and viewport for mobile.
