# Embedding External Content

## Concept

HTML offers several ways to embed external content: `<iframe>` for full pages, `<embed>` and `<object>` for plugins and fallbacks, `<picture>` for responsive images, and `<svg>` for inline vector graphics. Each has specific use cases and security considerations.

## Why It Matters

Embeds power maps, videos, payment forms, and third-party widgets. Wrong choices lead to security issues (XSS via iframes), poor performance, or broken fallbacks. Knowing when to use each method matters in production.

## Key Concepts

- `<iframe>` – embed another document (use sandbox, allow)
- `<object>` / `<embed>` – plugins, PDFs (legacy)
- `<picture>` – responsive images with source selection
- `<svg>` – inline vector graphics
- `srcdoc` – inline HTML in iframe

## Code Example

```html
<!-- Secure iframe -->
<iframe
  src="https://example.com/widget"
  title="Embedded widget"
  sandbox="allow-scripts allow-same-origin"
  loading="lazy"
></iframe>

<!-- Responsive picture -->
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>

<!-- Inline SVG -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="currentColor" />
</svg>
```

## Under the Hood

Iframes create a separate browsing context. Sandbox restricts capabilities. Picture lets the browser pick the best source based on support and media queries. SVG can be styled with CSS and is resolution-independent.

## Common Mistakes

- Unrestricted iframes (security risk)
- Missing `title` on iframes (accessibility)
- Using object/embed for modern use cases (prefer iframe or native elements)
- Picture without fallback img

## Best Practices

- Use `sandbox` and `allow` on iframes
- Always provide `title` for iframes
- Use picture for art direction and format selection
- Prefer inline SVG when you need to style or animate

## Summary

Iframes embed documents; use sandbox for security. Picture handles responsive images. Inline SVG is good for icons and graphics. Choose the right tool for the content type.
