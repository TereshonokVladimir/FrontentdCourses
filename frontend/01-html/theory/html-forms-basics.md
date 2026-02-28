# Forms Basics

## Concept

Forms collect user input. The `<form>` element wraps inputs and defines where data goes (`action`) and how it's sent (`method`). Submitting a form sends a request (GET or POST) to the server. Each input needs a `name` to be included in the submission.

## Why It Matters

Forms power login, search, checkout, and contact pages. Proper structure ensures data reaches the server correctly. Accessibility (labels, grouping) is critical—many users rely on keyboard and screen readers.

## Key Concepts

- `action` is the URL that receives the form data
- `method` is GET (params in URL) or POST (body)
- Every input needs a `name` for submission
- `<label>` associates text with inputs (clickable, accessible)

## Code Example

```html
<form action="/submit" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" required />

  <button type="submit">Sign In</button>
  <button type="reset">Clear</button>
</form>
```

## Under the Hood

On submit, the browser collects all named form controls, encodes them (application/x-www-form-urlencoded or multipart/form-data), and sends an HTTP request. JavaScript can intercept with `preventDefault()` for client-side handling.

## Common Mistakes

- Forgetting `name` on inputs (they won't be submitted)
- Not linking labels with `for` and `id`
- Using `<div>` instead of `<button type="submit">`
- Ignoring `method` (defaults to GET, which exposes data in URL)

## Best Practices

- Always pair `<label for="id">` with `id` on inputs
- Use POST for sensitive data (passwords, payments)
- Use `required` for mandatory fields
- Provide clear error messages and focus management

## Summary

Forms use `action`, `method`, and named inputs. Link labels to inputs for accessibility. Use POST for sensitive data and proper button types.
