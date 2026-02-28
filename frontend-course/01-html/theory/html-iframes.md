# Iframes Deep Dive

## Concept

An `<iframe>` embeds another HTML document inside your page. It creates an isolated browsing context—the embedded page has its own window, document, and origin. Use for maps, videos, payment forms, or third-party widgets. Iframes have significant security and performance implications.

## Why It Matters

Iframes are common for embeds (YouTube, Google Maps, Stripe). Unrestricted iframes can be abused for clickjacking. Cross-origin iframes can't be scripted (same-origin policy). Proper configuration is essential for security and UX.

## Key Concepts

- `src` – URL of the embedded document
- `sandbox` – restricts iframe capabilities
- `allow` – feature policy (camera, fullscreen, etc.)
- `loading="lazy"` – defer loading until near viewport
- `srcdoc` – inline HTML (alternative to src)

## Code Example

```html
<!-- YouTube embed -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  width="560"
  height="315"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
  allowfullscreen
  loading="lazy"
></iframe>

<!-- Sandboxed third-party content -->
<iframe
  src="https://third-party.com/widget"
  sandbox="allow-scripts allow-forms"
  allow="payment"
  title="Payment form"
></iframe>
```

## Under the Hood

Each iframe is a separate document. Same-origin iframes can be accessed via `contentWindow`; cross-origin cannot (security). Sandbox disables features by default; you enable what's needed. Lazy loading uses Intersection Observer.

## Common Mistakes

- No sandbox on untrusted content
- Missing `title` (accessibility)
- Blocking main thread with synchronous iframe loads
- Using iframe for same-origin content that could be included directly

## Best Practices

- Always set `title` for accessibility
- Use `sandbox` with minimal permissions
- Use `loading="lazy"` for below-the-fold iframes
- Prefer `allow` for specific features over broad permissions

## Summary

Iframes embed external documents. Use sandbox and allow for security. Add title for accessibility. Lazy load when appropriate. Understand same-origin restrictions.
