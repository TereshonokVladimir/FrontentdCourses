# Meta Tags for SEO

## Concept

Meta tags in `<head>` influence how search engines index and display your pages. Key tags: `title`, `description`, `robots`, canonical `link`, and Open Graph. They don't directly rank pages but affect snippets, crawling, and social sharing.

## Why It Matters

Good meta improves click-through from search results and social feeds. Missing or duplicate meta can hurt visibility. While content matters most, meta tags are low-effort, high-impact optimizations.

## Key Concepts

- `<title>` – primary ranking factor for snippet; 50–60 chars
- `<meta name="description">` – snippet text; 150–160 chars
- `<meta name="robots">` – indexing directives
- `<link rel="canonical">` – preferred URL for duplicate content
- Open Graph and Twitter meta for social previews

## Code Example

```html
<head>
  <title>Page Title - Brand | Clear Value Proposition</title>
  <meta
    name="description"
    content="Concise description that encourages clicks. Include keywords naturally."
  />
  <link rel="canonical" href="https://example.com/page" />

  <meta name="robots" content="index, follow" />
  <!-- Or: noindex, nofollow for private pages -->

  <meta property="og:title" content="Share Title" />
  <meta property="og:description" content="Share description" />
  <meta property="og:image" content="https://example.com/og-image.jpg" />
  <meta property="og:url" content="https://example.com/page" />
</head>
```

## Under the Hood

Crawlers read meta during indexing. Title and description often appear in SERPs. Canonical tells engines which URL to treat as primary. Social platforms fetch og: tags when links are shared.

## Common Mistakes

- Duplicate titles or descriptions across pages
- Keyword stuffing in meta
- Description too short or too long
- Missing or wrong canonical on duplicate content
- No og:image (poor social previews)

## Best Practices

- Unique title and description per page
- Write for humans; include keywords naturally
- Set canonical for duplicate or syndicated content
- Use 1200×630 images for og:image
- Test with Google's Rich Results and Facebook Debugger

## Summary

Meta tags influence snippets and crawling. Use unique title and description, canonical for duplicates, and Open Graph for sharing. Write for users, not just engines.
