# Forms and Validation

## Concept

Form elements are in the DOM; access via `document.forms` or `querySelector`. Get values: `input.value`, `checkbox.checked`, `select.selectedOptions`. Submit: `form.submit()` or listen for `submit` event. Use `preventDefault()` to handle with JS. HTML5 validation: `checkValidity()`, `reportValidity()`, `setCustomValidity()`. Constraint Validation API for custom messages.

## Why It Matters

Forms are central to user input. Client-side validation improves UX; server validation is mandatory. Understanding the FormData API and validation prevents security issues and bad UX.

## Key Concepts

- `form.elements` – all form controls
- `form.addEventListener("submit", handler)`
- `e.preventDefault()` – stop default submit
- `form.checkValidity()`, `input.validity`
- `FormData` – `new FormData(form)` for key-value pairs
- `setCustomValidity("message")` – custom validation

## Code Example

```javascript
form.addEventListener("submit", async (e) => {
  e.preventDefault()
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }
  const data = Object.fromEntries(new FormData(form))
  await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify(data)
  })
})
```

## Under the Hood

The browser runs built-in validation before submit. Validity state is updated on input. FormData collects name-value pairs. Submit triggers a request unless prevented.

## Common Mistakes

- Relying only on client validation (always validate server-side)
- Not preventing default on custom submit handler
- Forgetting to clear setCustomValidity when valid
- Not handling async submit (disable button, show loading)

## Best Practices

- Validate on server; use client for UX
- Use reportValidity for native error display
- Disable submit during async to prevent double submit
- Use FormData for file uploads

## Summary

Forms: elements, submit event, preventDefault. Use checkValidity and FormData. Client validation for UX; server for security. Handle async submit properly.
