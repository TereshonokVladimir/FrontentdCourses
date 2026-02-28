# CSS Performance

## Concept

CSS affects performance through size, specificity, and layout triggers. Large stylesheets block rendering. Complex selectors slow matching. Certain properties (width, height, top, left) trigger layout (reflow); transform and opacity only trigger composite. Minimize and critical CSS improve load time.

## Why It Matters

Render-blocking CSS delays First Contentful Paint. Layout thrashing (read-write-read) causes jank. Unused CSS wastes bandwidth. Understanding what triggers layout vs paint vs composite helps optimize.

## Key Concepts

- CSS blocks rendering until parsed (by default)
- Layout triggers: width, height, margin, top, left, etc.
- Paint triggers: color, background, box-shadow
- Composite only: transform, opacity (GPU)
- Critical CSS: above-the-fold styles inline
- Avoid: universal selector in large DOMs, deeply nested selectors

## Code Example

```css
/* Prefer - doesn't trigger layout */
.animate {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Avoid for animation - triggers layout */
.animate-slow {
  left: 100px;
  width: 200px;
}

/* Use contain for isolation */
.widget {
  contain: layout style;
}
```

## Under the Hood

The browser parses CSS, builds the style tree, and computes layout. Layout is expensive—it calculates geometry. Paint draws pixels. Composite layers are cheap. The critical path: HTML → CSSOM → Render tree → Layout → Paint → Composite.

## Common Mistakes

- Animating layout properties (width, height)
- Huge unminified CSS
- No critical CSS (everything blocks)
- Overusing `!important` (forces recalc)

## Best Practices

- Animate transform and opacity only
- Minify and compress CSS
- Inline critical CSS; defer non-critical
- Use `content-visibility` for off-screen content
- Avoid selector complexity in large DOMs

## Summary

CSS affects load (size, blocking) and runtime (layout triggers). Animate transform/opacity. Minimize and defer non-critical CSS. Understand layout vs paint vs composite.
