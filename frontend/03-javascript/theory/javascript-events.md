# Events and Event Handling

## Concept

Events are actions (click, submit, keydown) that the browser fires. You listen with `addEventListener(type, handler)`. The handler receives an Event object with `target`, `preventDefault()`, `stopPropagation()`. Events bubble (child to parent) by default. Capture phase goes parent to child. Event delegation listens on a parent for child events.

## Why It Matters

Events drive interactivity. Understanding bubbling and delegation prevents bugs and improves performance. Form submission, clicks, and keyboard handling all rely on events. React's synthetic events abstract this but the concepts apply.

## Key Concepts

- `addEventListener(type, handler, options)`
- Bubbling (default) vs capture (`capture: true`)
- `stopPropagation()` – stop bubbling
- `preventDefault()` – prevent default action (e.g., form submit)
- Event delegation – listen on parent, check `event.target`
- `{ once: true }` – run once and remove

## Code Example

```javascript
btn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(e.target)
})

// Delegation
list.addEventListener("click", (e) => {
  if (e.target.matches("button.delete")) {
    removeItem(e.target.dataset.id)
  }
})
```

## Under the Hood

Events go through capture phase, target phase, bubbling phase. Listeners are invoked in registration order. The event object is created once and passed through. Async handlers don't block.

## Common Mistakes

- Forgetting preventDefault on form submit
- Stopping propagation when it affects other listeners
- Adding listeners in loops without cleanup
- Not using delegation for dynamic content

## Best Practices

- Use event delegation for lists
- Use AbortController to remove listeners
- Prefer specific events (input vs keydown for forms)
- Use passive: true for scroll/touch when possible

## Summary

Events bubble by default. Use preventDefault and stopPropagation when needed. Event delegation for dynamic content. addEventListener with options for capture, once, passive.
