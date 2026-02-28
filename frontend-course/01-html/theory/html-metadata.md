# Metadata and the Head Element

## Concept

The `<head>` contains metadata—information about the document that isn't displayed. This includes title, character encoding, viewport, stylesheets, scripts, and Open Graph/Twitter cards. Search engines and social platforms use this data for indexing and previews.

## Why It Matters

Metadata affects SEO, social sharing, and how your page appears in search results and link previews. Missing or incorrect metadata leads to poor snippets, wrong character encoding, and broken mobile layouts.

## Key Concepts

- `<title>` – page title (browser tab, bookmarks, SEO)
- `<meta charset>` – character encoding (UTF-8)
- `<meta name="viewport">` – responsive behavior
- `<link rel="stylesheet">` – CSS
- `<script>` – JavaScript (use defer/async)
- Open Graph and Twitter meta for social previews

## Code Example

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title | Site Name</title>
  <meta name="description" content="Brief description for search results" />

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Description" />
  <meta property="og:image" content="https://example.com/image.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="stylesheet" href="styles.css" />
  <link rel="icon" href="favicon.ico" />
</head>
```

## Under the Hood

Browsers parse the head first. The title appears in the tab and history. Crawlers read meta tags for indexing. Social platforms fetch og:image and og:title when links are shared. Scripts with defer load after parsing; async loads and executes immediately.

## Common Mistakes

- Duplicate or missing title
- Wrong or missing charset
- No viewport meta (breaks mobile)
- Missing og:image (poor social previews)
- Blocking scripts in head without defer/async

## Best Practices

- Unique, descriptive title per page (50–60 chars)
- UTF-8 charset, viewport meta
- Meaningful description (150–160 chars)
- Open Graph and Twitter meta for shareable pages
- Defer non-critical scripts

## Summary

The head holds metadata: title, charset, viewport, styles, scripts, and social meta. Proper metadata improves SEO, sharing, and rendering. Keep it complete and accurate.
