# CSS Transforms

## Concept

Transforms modify an element's appearance without affecting layout—the element still occupies its original space. `transform` supports translate, scale, rotate, and skew. Multiple transforms can be combined. Transforms are GPU-accelerated, making them ideal for animations. The transform-origin defines the pivot point.

## Why It Matters

Transforms enable smooth animations without layout thrashing. Translate moves elements; scale zooms; rotate spins. They don't trigger reflow—only repaint and composite. Essential for performant animations and hover effects.

## Key Concepts

- `translate(x, y)` – move element
- `scale(x, y)` – resize (1 = no change)
- `rotate(deg)` – rotate around origin
- `skew(x, y)` – slant
- `transform-origin` – center (default), or custom
- Multiple: `transform: translateX(10px) rotate(5deg)`

## Code Example

```css
.card:hover {
  transform: translateY(-4px) scale(1.02);
}

.modal {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

.icon {
  transform-origin: center;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: rotate(180deg);
}
```

## Under the Hood

Transforms create a new coordinate system and rendering context. The element's layout box doesn't change—neighbors aren't affected. The browser uses the compositor layer for transform animations, avoiding main-thread layout.

## Common Mistakes

- Expecting transform to affect layout (it doesn't)
- Forgetting transform-origin when rotating
- Using translate for layout (use margin or flex/grid)
- Combining with position in confusing ways

## Best Practices

- Use transform for animations (not left/top)
- Use translate for centering (with position)
- Set transform-origin when needed
- Prefer transform over position changes for performance

## Summary

Transforms change appearance without affecting layout. Use translate, scale, rotate for animations. They're GPU-accelerated. Transform-origin sets the pivot. Combine for complex effects.
