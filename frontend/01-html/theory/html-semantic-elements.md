# Semantic HTML Elements

## Concept

Semantic elements describe their meaning, not just appearance. `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` replace generic `<div>` when the content has a clear role. Screen readers and search engines use this structure to understand the page.

## Why It Matters

Semantic HTML improves accessibility (landmarks for navigation), SEO (clear content hierarchy), and maintainability. Developers can style or script by meaning instead of arbitrary class names.

## Key Concepts

- `<header>` – intro content, logo, nav (can repeat per section)
- `<nav>` – major navigation links
- `<main>` – primary content; one per page
- `<article>` – self-contained content (blog post, card)
- `<section>` – thematic grouping with heading
- `<aside>` – tangentially related content
- `<footer>` – footer for page or section

## Code Example

```html
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Article Title</h1>
      </header>
      <p>Content...</p>
      <footer>Published on 2024-01-15</footer>
    </article>

    <aside>
      <h2>Related</h2>
      <ul>...</ul>
    </aside>
  </main>

  <footer>&copy; 2024 Company</footer>
</body>
```

## Under the Hood

Screen readers expose these as landmarks (banner, navigation, main, complementary, contentinfo). Users can jump between landmarks. Search engines use the structure to identify main content vs navigation.

## Common Mistakes

- Using `<section>` for styling only (use div)
- Multiple `<main>` elements
- Confusing `<article>` (standalone) with `<section>` (thematic group)
- Using `<aside>` for any sidebar (must be tangentially related)

## Best Practices

- Prefer semantic elements over div when meaning is clear
- Use one `<main>` per page
- Wrap `<section>` content with a heading
- Use `<article>` for content that could stand alone in an RSS feed

## Summary

Semantic elements (header, nav, main, article, section, aside, footer) describe structure. They improve accessibility, SEO, and code clarity. Use them instead of div when the meaning fits.
