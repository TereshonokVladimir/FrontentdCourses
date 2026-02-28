# React Introduction

## Concept

React is a JavaScript library for building user interfaces. It uses a component-based architecture where UIs are composed of reusable, declarative components. React manages a virtual DOM and efficiently updates the real DOM only when state changes. It emphasizes unidirectional data flow and composition over inheritance.

## Why It Matters

React powers millions of web apps and is the foundation for ecosystems like Next.js. Understanding React's mental model—components, props, state—is essential for modern frontend development. Its declarative approach reduces bugs and makes UIs easier to reason about.

## Key Concepts

- Components: functions or classes that return JSX
- JSX: syntax extension that looks like HTML
- Virtual DOM: lightweight representation of the real DOM
- Unidirectional data flow: props flow down, events flow up
- Declarative: describe what the UI should look like, not how to update it

## Code Example

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

function App() {
  return (
    <div>
      <Greeting name="World" />
    </div>
  )
}
```

## Under the Hood

React creates a tree of React elements (virtual DOM). When state changes, React builds a new tree, diffs it with the previous one, and applies minimal updates to the real DOM. This reconciliation process is optimized for performance.

## Common Mistakes

- Mutating state directly instead of using setState
- Forgetting keys in lists
- Using index as key when list order can change
- Overusing class components when functional components suffice

## Best Practices

- Prefer functional components
- Keep components small and single-purpose
- Use composition over inheritance
- Avoid prop drilling—consider context or composition

## Summary

React is a component-based UI library. Components receive props and return JSX. The virtual DOM enables efficient updates. Think declaratively and compose small, reusable components.
