# Template Literals

## Concept

Template literals use backticks and `${}` for interpolation. They support multi-line strings without escape. Tagged templates allow custom parsing: `tag`str``. Use for dynamic strings, SQL-like queries (with care), and i18n. Nested templates and expressions work inside `${}`.

## Why It Matters

Template literals replace string concatenation. React, GraphQL, and CSS-in-JS use them. Tagged templates enable DSLs (styled-components). Clean, readable string building.

## Key Concepts

- Backticks: `` `Hello ${name}` ``
- Multi-line: no \n needed
- Expression: `${a + b}`, `${fn()}`
- Tagged: `tag`str`` – tag receives strings and values
- Escape: `` `\` `` for backtick in string

## Code Example

```javascript
const name = "World"
const msg = `Hello, ${name}!`

const html = `
  <div>
    <h1>${title}</h1>
  </div>
`

function tag(strings, ...values) {
  return strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "")
}
```

## Under the Hood

The engine parses template literals and evaluates expressions. Tagged templates pass an array of string parts and interpolated values. No special runtime cost.

## Common Mistakes

- Injecting user input without sanitization (XSS)
- Overusing for simple concatenation
- Confusing tagged template syntax

## Best Practices

- Use for dynamic strings
- Sanitize user input in HTML templates
- Use tagged templates for DSLs
- Prefer over + concatenation

## Summary

Template literals: backticks, ${} for interpolation. Multi-line and expressions. Tagged templates for custom parsing. Use for dynamic strings.
