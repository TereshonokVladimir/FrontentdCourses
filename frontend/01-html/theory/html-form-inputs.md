# Form Input Types

## Concept

The `type` attribute on `<input>` determines behavior and validation. Common types: `text`, `email`, `password`, `number`, `tel`, `url`, `date`, `checkbox`, `radio`, `file`, `submit`, `hidden`. HTML5 added types that trigger native validation and keyboard layouts (e.g., `email` shows @ on mobile).

## Why It Matters

The right input type improves UX (keyboard, validation) and reduces custom JavaScript. `type="email"` validates format; `type="number"` restricts to numbers. Mobile users get appropriate keyboards.

## Key Concepts

- `text` – single-line text
- `email`, `url`, `tel` – validated formats, mobile keyboards
- `number`, `range` – numeric input
- `checkbox`, `radio` – multiple/single choice
- `file` – file upload; use `accept` to filter
- `submit`, `button`, `reset` – button behaviors

## Code Example

```html
<input type="text" name="username" placeholder="Username" />
<input type="email" name="email" required />
<input type="password" name="password" minlength="8" />
<input type="number" name="age" min="18" max="120" />
<input type="date" name="birthday" />
<input type="checkbox" name="newsletter" value="yes" id="news" />
<label for="news">Subscribe to newsletter</label>
<input type="radio" name="plan" value="basic" id="basic" />
<input type="radio" name="plan" value="pro" id="pro" />
<input type="file" name="avatar" accept="image/*" />
```

## Under the Hood

Browsers apply built-in validation for types like `email` and `url`. Invalid input blocks form submission and shows a native message. The `pattern` attribute adds regex validation. Mobile browsers show type-specific keyboards.

## Common Mistakes

- Using `type="text"` when a semantic type exists
- Not using `value` on checkboxes/radios
- Forgetting `name` on radio groups (they won't group)
- Using `number` for credit cards (use `text` with pattern)

## Best Practices

- Choose the most specific type (email, url, tel, etc.)
- Use `min`, `max`, `minlength`, `maxlength` when applicable
- Use `accept` on file inputs to guide users
- Pair checkboxes/radios with clear labels

## Summary

Input types control behavior, validation, and mobile keyboards. Use semantic types (email, number, date) over generic text when possible. Always set `name` and link labels.
