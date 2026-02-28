# Links and Anchors

## Concept

The `<a>` (anchor) element creates hyperlinks. Use `href` for the destination URL. Links can point to other pages, same-page sections (via `id`), files, or `mailto:`/`tel:` URIs. The `target` attribute controls where the link opens (same tab vs new tab).

## Why It Matters

Links are the backbone of the web. Proper use of `rel`, `target`, and accessibility attributes prevents security issues (tabnabbing), improves SEO, and makes navigation clear for all users.

## Key Concepts

- `href` is required for navigation links
- `target="_blank"` opens in new tab; pair with `rel="noopener noreferrer"` for security
- Use `#id` for same-page anchors
- `rel` describes the relationship (external, nofollow, etc.)

## Code Example

```html
<!-- External link (secure) -->
<a href="https://example.com" rel="noopener noreferrer" target="_blank">
  Visit Example
</a>

<!-- Same-page anchor -->
<a href="#section-2">Jump to Section 2</a>
<section id="section-2">Content here</section>

<!-- Download link -->
<a href="/files/report.pdf" download>Download PDF</a>
```

## Under the Hood

Clicking a link triggers navigation. With `target="_blank"`, the new page can access `window.opener` unless you use `rel="noopener"`, which prevents tabnabbing attacks. Browsers prefetch links on hover for faster navigation.

## Common Mistakes

- Using `target="_blank"` without `rel="noopener noreferrer"`
- Using "click here" as link text (bad for accessibility)
- Forgetting `id` on target elements for anchor links
- Using `javascript:void(0)` instead of `#` or proper `href`

## Best Practices

- Use descriptive link text (not "click here")
- Add `rel="noopener noreferrer"` when using `target="_blank"`
- Use `rel="nofollow"` for untrusted or paid links when appropriate
- Ensure anchor targets have unique `id` attributes

## Summary

Links use `<a href="...">`. For new tabs, add `rel="noopener noreferrer"`. Use descriptive text and proper `rel` values for security and SEO.
