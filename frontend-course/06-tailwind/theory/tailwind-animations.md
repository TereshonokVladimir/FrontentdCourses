# Animations

## Concept

Tailwind includes animation utilities: `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`. Define custom animations in config. Use `transition` for property changes. Combine with `duration-*` and `ease-*` for timing. Use `@keyframes` in config for custom animations.

## Why It Matters

Animations provide feedback (loading spinners) and polish (transitions). Tailwind's built-in animations cover common cases. Custom animations handle brand-specific motion. Transitions make state changes smooth.

## Key Concepts

- animate-spin, animate-ping, animate-pulse, animate-bounce
- transition: `transition`, `transition-colors`, `duration-300`, `ease-in-out`
- Custom: theme.extend.animation, theme.extend.keyframes
- Transform: `transform`, `transition-transform`
- Delay: `delay-150`, `delay-300`

## Code Example

```html
<div class="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full">
  Loading
</div>
<button class="transition-colors duration-200 hover:bg-blue-600">
  Hover
</button>
```

```js
// config
theme: {
  extend: {
    animation: { 'fade-in': 'fadeIn 0.5s ease-out' },
    keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }
  }
}
```

## Under the Hood

Tailwind generates @keyframes and animation/transition CSS. Custom keyframes are in theme. Transitions use the transition property with specified duration and easing.

## Common Mistakes

- Animating too many properties (performance)
- No reduced-motion support (prefers-reduced-motion)
- Long durations (feels slow)
- Forgetting transition on the base state (only on hover, etc.)

## Best Practices

- Use transition for hover/focus
- Prefer transform over layout properties (performance)
- Add motion-reduce: for accessibility
- Keep animations subtle

## Summary

animate-* for built-in. transition for property changes. Custom in config. duration, ease, delay. Prefer transform. Support reduced motion.
