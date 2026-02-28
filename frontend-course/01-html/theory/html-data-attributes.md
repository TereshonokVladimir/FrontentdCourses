# Data Attributes

## Concept

`data-*` attributes store custom data on elements. Any attribute starting with `data-` is valid. Access them in JavaScript via `element.dataset.propertyName` (hyphens become camelCase). Use them for configuration, state, or metadata that doesn't belong in visible content.

## Why It Matters

Data attributes bridge HTML and JavaScript without polluting classes or IDs. They're used by analytics, testing tools, and component libraries. They're valid, flexible, and easy to query. Perfect for "this element needs this value for JS."

## Key Concepts

- Format: `data-name` or `data-multi-word`
- JavaScript: `element.dataset.multiWord` (camelCase)
- Values are always strings
- Use for config, IDs, state—not for styling

## Code Example

```html
<div
  data-user-id="42"
  data-role="admin"
  data-config='{"theme":"dark"}'
>
  User panel
</div>

<button data-action="delete" data-item-id="123">Delete</button>
```

```javascript
const div = document.querySelector('div')
console.log(div.dataset.userId) // "42"
console.log(div.dataset.role)   // "admin"
div.dataset.theme = 'light'     // Sets data-theme="light"
```

## Under the Hood

Data attributes are stored as properties on the DOM node. `dataset` returns a live object—changes reflect in the HTML. Values are strings; parse JSON when needed. Browsers ignore unknown attributes, so data-* is safe.

## Common Mistakes

- Storing complex objects as strings without parsing
- Using data-* for styling (use CSS custom properties or classes)
- Inconsistent naming (stick to kebab-case)
- Storing sensitive data (visible in HTML source)

## Best Practices

- Use for non-visible metadata and configuration
- Keep names lowercase with hyphens
- Parse JSON when storing objects
- Don't store large or sensitive data

## Summary

Data attributes (`data-*`) store custom data. Access via `dataset` in JavaScript. Use for config and state, not styling. Values are strings; parse when needed.
