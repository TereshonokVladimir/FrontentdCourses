# Closures

## Concept

A closure is a function that "remembers" the environment where it was created. When a function is defined inside another, it captures the outer function's variables. Those variables stay in memory as long as the inner function exists. Closures enable data privacy, partial application, and callbacks that need state.

## Why It Matters

Closures are everywhere: event handlers, React hooks, callbacks. They're how you create private variables in JavaScript. Misunderstanding leads to classic bugs (e.g., loop variable in setTimeout). They're fundamental to async and functional patterns.

## Key Concepts

- Inner function captures outer scope
- Variables persist after outer function returns
- Each closure has its own "snapshot" of captured variables
- Loop + closure: create new scope per iteration (use let or IIFE)

## Code Example

```javascript
function createCounter() {
  let count = 0
  return function () {
    count++
    return count
  }
}

const counter = createCounter()
counter() // 1
counter() // 2

// Classic loop bug (var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100) // 3, 3, 3
}

// Fix: let creates block scope per iteration
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100) // 0, 1, 2
}
```

## Under the Hood

The engine maintains a scope chain. When a function is created, it stores a reference to its lexical environment. When the function runs, it looks up variables along that chain. Garbage collection can't free captured variables while the closure exists.

## Common Mistakes

- Loop + closure with `var` (all share same variable)
- Creating closures in hot paths (memory)
- Expecting closure to capture value at call time (captures variable)

## Best Practices

- Use `let` in for loops when creating closures
- Use closures for encapsulation and factories
- Be aware of memory (closures hold references)
- Use IIFE when you need a one-off scope

## Summary

Closures capture the outer scope. They enable private state and callbacks with memory. Use `let` in loops to avoid the classic bug. Understand what gets captured and when.
