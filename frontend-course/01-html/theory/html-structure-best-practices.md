# HTML Structure Best Practices

## Concept

Good HTML structure is logical, semantic, and maintainable. It follows a clear hierarchy, uses appropriate elements, and stays consistent. Structure affects accessibility, SEO, styling, and how easy it is to change the page later.

## Why It Matters

Messy structure leads to fragile CSS, poor accessibility, and hard-to-maintain code. Clean structure makes styling predictable, improves performance (smaller DOM), and helps teams collaborate. It's the foundation everything else builds on.

## Key Concepts

- One main topic per page; one `<h1>`
- Logical heading order (no skipping)
- Semantic containers (main, article, section, nav)
- Consistent patterns (card structure, form layout)
- Minimal nesting (avoid div soup)

## Code Example

```html
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <header>
    <nav aria-label="Main">...</nav>
  </header>

  <main id="main">
    <article>
      <h1>Article Title</h1>
      <section>
        <h2>Section 1</h2>
        <p>...</p>
      </section>
      <section>
        <h2>Section 2</h2>
        <p>...</p>
      </section>
    </article>
  </main>

  <footer>...</footer>
</body>
```

## Under the Hood

Browsers build the DOM from your structure. Screen readers use it for navigation. Search engines use it to understand content. Shallow, semantic trees are easier to style and script.

## Common Mistakes

- Deep nesting of divs
- Multiple h1 or random heading levels
- Mixing layout divs with semantic elements inconsistently
- No skip link for keyboard users

## Best Practices

- Plan structure before writing markup
- Use landmarks (header, main, nav, footer)
- Keep nesting under 4–5 levels when possible
- Add skip links for keyboard navigation
- Validate HTML regularly

## Summary

Structure should be logical, semantic, and shallow. Use landmarks, consistent heading hierarchy, and skip links. Avoid div soup and random nesting. Good structure simplifies everything else.
