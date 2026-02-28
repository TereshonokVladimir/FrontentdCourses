# JavaScript Introduction

## Concept

JavaScript is a dynamic, single-threaded language that runs in browsers and on servers (Node.js). It's used for interactivity, DOM manipulation, APIs, and building applications. Variables are loosely typed; you use `let`, `const`, or `var`. Functions are first-class—they can be passed around and returned.

## Why It Matters

JavaScript powers the interactive web. Every click handler, form validation, and dynamic content uses it. Modern frameworks (React, Vue) are built on it. Understanding the basics—variables, functions, control flow—is essential for any frontend developer.

## Key Concepts

- `let` and `const` for variables (block-scoped); avoid `var`
- Functions: declarations, expressions, arrow functions
- Primitive types: string, number, boolean, null, undefined, symbol, bigint
- Objects and arrays for structured data
- Control flow: if/else, loops, switch

## Code Example

```javascript
const name = "World"
let count = 0

function greet(person) {
  return `Hello, ${person}!`
}

const double = (n) => n * 2

if (count === 0) {
  console.log(greet(name))
}
```

## Under the Hood

JavaScript runs in a single thread with an event loop. The engine (V8, SpiderMonkey) parses, compiles, and executes. Memory is managed via garbage collection. Async operations (fetch, setTimeout) use the event loop and callback queue.

## Common Mistakes

- Using `var` (function-scoped, hoisted)
- Mutating `const` objects (const prevents reassignment, not mutation)
- Loose equality (`==`) when strict (`===`) is intended
- Forgetting that arrays and objects are reference types

## Best Practices

- Use `const` by default; `let` when reassignment is needed
- Prefer arrow functions for callbacks
- Use template literals for string interpolation
- Avoid global variables

## Summary

JavaScript is dynamic and single-threaded. Use const/let, understand types, and write clear functions. It powers the interactive web and modern frameworks.
