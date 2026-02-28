# HTML Attributes

## Concept

Attributes provide additional information to elements. They appear as `name="value"` pairs in the opening tag. Some attributes are global (id, class, lang, data-*); others are element-specific (href, src, type). Boolean attributes (disabled, readonly) are present or absent—no value needed in HTML5.

## Why It Matters

Attributes control behavior (href, src), styling hooks (class, id), accessibility (aria-*), and metadata (data-*). Knowing which attributes exist and how they work prevents bugs and improves code quality.

## Key Concepts

- Global: `id`, `class`, `lang`, `title`, `tabindex`, `data-*`, `aria-*`
- `id` must be unique per page; `class` can repeat
- Boolean attributes: `disabled`, `readonly`, `required`, `checked`
- Custom data: `data-*` for JavaScript and styling

## Code Example

```html
<div id="main" class="container active" data-user-id="42" lang="en">
  Content
</div>

<input type="text" disabled readonly required />
<button type="submit" aria-label="Submit form">Submit</button>

<a href="#section" title="Jump to section">Link</a>
```

## Under the Hood

The parser reads attributes and attaches them to DOM nodes. `id` creates a global variable in legacy browsers (avoid). `data-*` is exposed via `element.dataset`. Boolean attributes are true when present, false when absent.

## Common Mistakes

- Using `id` for styling (use class; id is for uniqueness)
- Duplicate `id` values (invalid HTML)
- Writing `disabled="false"` (presence = true, use removeAttribute to disable)
- Invalid attribute names (spaces, special chars)

## Best Practices

- Use `id` for unique identifiers (anchors, form labels, JS hooks)
- Use `class` for reusable styling
- Use `data-*` for custom metadata; access via dataset
- Use `aria-*` when native semantics aren't enough

## Summary

Attributes extend elements with behavior and metadata. Use global attributes consistently, boolean attributes without values, and data-* for custom data. Prefer semantic attributes over generic ones.
