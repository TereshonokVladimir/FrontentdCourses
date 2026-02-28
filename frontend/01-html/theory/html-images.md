# Images

## Concept

The `<img>` element embeds images. It's a void (self-closing) element. Required attributes: `src` (image URL) and `alt` (text description). The `alt` attribute is critical for accessibility—screen readers use it, and it displays when the image fails to load.

## Why It Matters

Images without `alt` break accessibility. Missing `alt` also hurts SEO. Proper use of `width`/`height` prevents layout shift (CLS). Lazy loading with `loading="lazy"` improves performance.

## Key Concepts

- `alt` is required; use empty string `alt=""` only for decorative images
- `width` and `height` help browsers reserve space (avoid CLS)
- `loading="lazy"` defers off-screen images
- Use modern formats (WebP, AVIF) when supported

## Code Example

```html
<!-- Informative image -->
<img
  src="hero.jpg"
  alt="Team members collaborating at a whiteboard"
  width="800"
  height="450"
  loading="lazy"
/>

<!-- Decorative image -->
<img src="decoration.svg" alt="" role="presentation" />
```

## Under the Hood

Browsers fetch images asynchronously. Without dimensions, the layout shifts when the image loads. The `loading="lazy"` attribute uses the native Intersection Observer to load images when they're near the viewport.

## Common Mistakes

- Omitting `alt` entirely
- Using vague alt text like "image" or "photo"
- Not setting width/height (causes layout shift)
- Using images for text (use real text + CSS instead)

## Best Practices

- Always provide meaningful `alt` for content images
- Use `alt=""` and `role="presentation"` for decorative images
- Set width and height to prevent CLS
- Use `loading="lazy"` for below-the-fold images

## Summary

Images need `src` and `alt`. Add width/height to avoid layout shift, and use `loading="lazy"` for performance. Alt text is essential for accessibility.
