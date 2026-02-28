# Accessibility Basics

## Concept

Accessibility (a11y) means your site works for everyone—keyboard users, screen reader users, people with motor or cognitive differences. HTML provides built-in accessibility: semantic elements, labels, alt text, heading hierarchy. Good HTML is the foundation; ARIA fills gaps when needed.

## Why It Matters

Over 1 billion people have disabilities. Accessible sites rank better, work in more environments, and often have better UX for everyone. Legal requirements (ADA, WCAG) apply to many projects. It's easier to build in from the start than retrofit.

## Key Concepts

- Use semantic HTML (headings, lists, landmarks)
- Provide text alternatives for images (alt)
- Ensure keyboard operability (tab order, focus)
- Use sufficient color contrast
- Label form controls
- Don't rely on color alone to convey information

## Code Example

```html
<!-- Semantic structure -->
<main>
  <h1>Page Title</h1>
  <nav aria-label="Main navigation">...</nav>
</main>

<!-- Labeled form -->
<label for="search">Search</label>
<input type="search" id="search" aria-describedby="search-hint" />
<span id="search-hint">Enter at least 3 characters</span>

<!-- Skip link -->
<a href="#main" class="skip-link">Skip to main content</a>
```

## Under the Hood

Screen readers traverse the DOM and announce elements based on roles, names, and states. Keyboard users tab through focusable elements. Browsers expose the accessibility tree to assistive tech. Semantic HTML maps to correct roles automatically.

## Common Mistakes

- Missing alt on images
- Unlabeled form inputs
- Poor heading hierarchy
- Low contrast text
- Clickable elements that aren't focusable
- Removing focus outline without replacement

## Best Practices

- Test with keyboard only (no mouse)
- Test with a screen reader (NVDA, VoiceOver)
- Use the accessibility tree in DevTools
- Follow WCAG 2.1 Level AA as a target
- Add skip links for keyboard users

## Summary

Accessibility starts with semantic HTML, labels, alt text, and keyboard support. Test early and often. Use ARIA when native HTML isn't enough. Good a11y benefits everyone.
