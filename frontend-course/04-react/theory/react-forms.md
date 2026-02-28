# Forms

## Concept

React forms can be controlled or uncontrolled. Controlled inputs have their value set by React state—`value={state}` and `onChange` updates state. Uncontrolled inputs use refs to read DOM values. Controlled forms give React full control over the input.

## Why It Matters

Forms are central to most apps. Controlled inputs enable validation, conditional UI, and dynamic behavior. Understanding controlled vs uncontrolled helps choose the right approach for each use case.

## Key Concepts

- Controlled: `value={state}` + `onChange={(e) => setState(e.target.value)}`
- Uncontrolled: `ref` + `defaultValue` (or no value)
- Form submit: `onSubmit` on form, `e.preventDefault()` to stop default
- Checkbox: `checked={state}` + `onChange`
- Select: `value={state}` + `onChange` on select

## Code Example

```jsx
function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Under the Hood

Controlled inputs are "single source of truth"—React owns the value. Each keystroke triggers onChange, state update, re-render, and new value. Uncontrolled inputs let the DOM own the value; React reads it only when needed (e.g., on submit).

## Common Mistakes

- Mixing controlled and uncontrolled (value + defaultValue)
- Forgetting `e.preventDefault()` on form submit
- Not handling disabled state during submit
- Using `value` without `onChange` (makes input read-only, React warns)

## Best Practices

- Use controlled for most cases (validation, dynamic UI)
- Use uncontrolled for file inputs or simple one-off forms
- Extract form logic into custom hooks (useForm)
- Debounce validation for better UX

## Summary

Controlled inputs: value + onChange. Uncontrolled: ref + defaultValue. Prevent default on form submit. Use controlled for validation and dynamic behavior.
