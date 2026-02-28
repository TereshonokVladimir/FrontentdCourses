# DOM Manipulation

## Concept

The DOM (Document Object Model) is a tree representation of HTML. JavaScript accesses it via `document` and methods like `querySelector`, `getElementById`, `createElement`, `appendChild`, `removeChild`. You read and modify properties (textContent, innerHTML, classList, style). Events are attached with `addEventListener`.

## Why It Matters

DOM manipulation is how you make pages interactive. Even with frameworks, understanding the DOM helps debug and optimize. Direct manipulation is still used for performance-critical updates and non-React code.

## Key Concepts

- `querySelector` / `querySelectorAll` – CSS selectors
- `createElement`, `append`, `remove`, `replaceWith`
- `textContent` (safe) vs `innerHTML` (XSS risk)
- `classList.add`, `remove`, `toggle`, `contains`
- `dataset` for data attributes
- `addEventListener` – type, handler, options (capture, once)

## Code Example

```javascript
const btn = document.querySelector(".btn")
const list = document.getElementById("list")

btn.addEventListener("click", () => {
  const li = document.createElement("li")
  li.textContent = "New item"
  list.append(li)
})

const el = document.querySelector(".card")
el.classList.toggle("active")
el.dataset.id = "123"
```

## Under the Hood

The browser builds the DOM from HTML. Changes trigger reflow (layout) and repaint. Batch reads before writes to minimize reflows. Virtual DOM (React) batches updates for efficiency.

## Common Mistakes

- Using `innerHTML` with user input (XSS)
- Adding listeners in loops without cleanup
- Forgetting that querySelectorAll returns a static NodeList
- Causing layout thrashing (read-write-read pattern)

## Best Practices

- Prefer `textContent` over `innerHTML` for user content
- Use event delegation for dynamic lists
- Remove listeners when elements are removed (or use AbortController)
- Batch DOM updates

## Summary

DOM: querySelector, createElement, append, classList, addEventListener. Prefer textContent. Use event delegation. Batch updates for performance.
