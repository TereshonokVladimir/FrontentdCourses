# Transitions and Animations

## Concept

CSS transitions animate property changes over time. `transition: property duration timing-function delay`. Animations use `@keyframes` to define steps and `animation` to run them. Transitions are for state changes (hover, focus); animations are for continuous or multi-step effects.

## Why It Matters

Motion improves UX when used subtly—feedback on hover, loading states, micro-interactions. Overuse causes motion sickness for some users. `prefers-reduced-motion` lets users opt out. Performance: animate `transform` and `opacity` (GPU-accelerated).

## Key Concepts

- `transition`: property, duration, timing-function, delay
- `transition-property: all` (avoid for performance)
- `@keyframes` – define animation steps
- `animation`: name, duration, timing-function, delay, iteration-count, direction
- `animation-fill-mode` – before/after state
- `prefers-reduced-motion` – respect user preference

## Code Example

```css
.button {
  transition: background 0.2s ease, transform 0.2s ease;
}

.button:hover {
  background: blue;
  transform: scale(1.05);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loader {
  animation: spin 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Under the Hood

Transitions interpolate between old and new computed values. Animations apply keyframe values at specified times. Browsers use the compositor for transform/opacity (smooth). Layout properties (width, height) trigger reflow—avoid for animation.

## Common Mistakes

- Animating width/height (causes reflow)

- Using `transition: all` (animates everything)

- Ignoring `prefers-reduced-motion`

- Too many simultaneous animations

## Best Practices

- Animate only `transform` and `opacity` when possible
- Keep duration short (200–300ms for micro-interactions)
- Respect `prefers-reduced-motion`
- Use `will-change` sparingly (only when needed)

## Summary

Transitions animate property changes; animations use keyframes. Prefer transform and opacity. Respect reduced motion. Keep animations subtle and purposeful.
