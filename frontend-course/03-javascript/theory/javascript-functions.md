# Functions

## Concept

Functions encapsulate reusable logic. They can be declared (`function fn() {}`), expressed (`const fn = function () {}`), or arrow (`const fn = () => {}`). They create their own scope. Parameters can have defaults. They can return values or implicitly return `undefined`. Functions are first-class—assignable, passable, returnable.

## Why It Matters

Functions are the primary abstraction in JavaScript. Event handlers, callbacks, and React components are functions. Understanding scope, closures, and `this` prevents subtle bugs. Arrow functions simplify callbacks but change `this` binding.

## Key Concepts

- Function declaration (hoisted); expression (not hoisted)
- Arrow functions: no `this`, no `arguments`, concise syntax
- Parameters: default values, rest (`...args`)
- Return value: explicit or `undefined`
- Scope: function creates scope; block scope with let/const

## Code Example

```javascript
function greet(name) {
  return `Hello, ${name}`
}

const add = (a, b) => a + b

const log = (msg = "No message") => console.log(msg)

const sum = (...nums) => nums.reduce((a, b) => a + b, 0)
```

## Under the Hood

Functions create an execution context with a variable environment. Closures capture the outer scope. Arrow functions don't have their own `this`—they inherit from the enclosing scope. The engine optimizes based on call patterns.

## Common Mistakes

- Using arrow functions for object methods (loses `this`)
- Forgetting to return in arrow functions with block body
- Mutating parameters (objects are passed by reference)
- Confusing rest and spread (`...`)

## Best Practices

- Use arrow functions for callbacks and when you don't need `this`
- Use default parameters instead of `||` fallbacks
- Keep functions small and single-purpose
- Use descriptive names

## Summary

Functions are first-class. Use declarations for hoisting, arrows for callbacks. Understand scope and `this`. Default and rest parameters improve APIs.
