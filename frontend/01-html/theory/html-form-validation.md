# HTML Form Validation

## Concept

HTML5 provides built-in validation without JavaScript. Use the `required` attribute, `type` (email, url, number), `min`, `max`, `minlength`, `maxlength`, and `pattern` (regex). Invalid fields block submission and show native error messages. You can customize with the Constraint Validation API.

## Why It Matters

Native validation improves UX (instant feedback), works without JS, and is accessible. It reduces custom validation code. For production, combine with server-side validation—never trust client input alone.

## Key Concepts

- `required` – field must have a value
- `min`, `max`, `minlength`, `maxlength` – numeric and length constraints
- `pattern` – regex validation
- `:invalid` and `:valid` CSS pseudo-classes
- `setCustomValidity()` for custom messages

## Code Example

```html
<form>
  <input type="email" required placeholder="Email" />
  <input type="number" min="0" max="100" value="50" />
  <input type="text" minlength="3" maxlength="20" required />
  <input
    type="text"
    pattern="[A-Za-z]{2,}"
    title="At least 2 letters"
  />
  <input type="url" required />
  <button type="submit">Submit</button>
</form>
```

## Under the Hood

On submit, the browser checks each form control against its constraints. If any fail, submission stops and the first invalid field gets focus. The `validity` object exposes validation state. `checkValidity()` triggers validation programmatically.

## Common Mistakes

- Relying only on client validation (always validate on server)
- Vague or missing `title` on pattern (users see it in error)
- Styling `:invalid` on load (use `:user-invalid` or check `touched`)
- Blocking valid input with overly strict patterns

## Best Practices

- Use the most specific type and constraints
- Provide clear `title` for pattern errors
- Validate on server; use client validation for UX
- Use `novalidate` when implementing custom validation

## Summary

HTML5 validation uses required, type, min/max, minlength/maxlength, and pattern. It's accessible and works without JS. Always validate on the server. Use setCustomValidity for custom messages.
