# JSX and Elements

## Concept

JSX is a syntax extension for JavaScript that lets you write HTML-like markup. It compiles to `React.createElement()` calls. JSX elements are immutable—once created, you cannot change their children or attributes. Expressions go inside curly braces `{}`.

## Why It Matters

JSX makes React components readable and familiar to HTML. Understanding how it compiles helps debug and avoid pitfalls. Knowing that JSX is just JavaScript prevents confusion about syntax rules.

## Key Concepts

- JSX compiles to `React.createElement(type, props, ...children)`
- Must return a single root element (or Fragment)
- `className` instead of `class`, `htmlFor` instead of `for`
- Expressions in `{}`; strings need quotes
- Self-closing tags: `<img />`, `<input />`

## Code Example

```jsx
const name = "React"
const element = <h1 className="title">Hello, {name}</h1>

function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  )
}

const img = <img src="/logo.png" alt="Logo" />
```

## Under the Hood

Babel (or similar) transforms JSX into `React.createElement("h1", { className: "title" }, "Hello, ", name)`. The resulting object describes the element; React uses it to build the virtual DOM.

## Common Mistakes

- Using `class` instead of `className`
- Forgetting to close self-closing tags
- Putting objects directly in JSX (e.g., `style={{ color: "red" }}` is correct)
- Returning multiple sibling elements without a wrapper or Fragment

## Best Practices

- Use Fragment `<>` when you need multiple roots
- Extract complex expressions into variables
- Use meaningful alt text for images
- Keep JSX readable—extract logic when it gets complex

## Summary

JSX is syntactic sugar for `React.createElement`. Use `{}` for expressions, `className` for class. Return one root or a Fragment. It compiles to plain JavaScript.
