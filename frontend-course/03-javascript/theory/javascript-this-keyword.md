# The `this` Keyword

## Concept

`this` refers to the execution context—usually the object that "owns" the function call. In a method, `this` is the object. In a standalone function, `this` is `undefined` (strict) or `window` (sloppy). Arrow functions don't have their own `this`—they inherit from the enclosing scope. `call`, `apply`, `bind` explicitly set `this`.

## Why It Matters

`this` causes confusion when callbacks lose their context. React class components used `this`; hooks avoid it. Event handlers, especially when passed as callbacks, often need `bind` or arrow functions. Understanding `this` helps debug and design APIs.

## Key Concepts

- Method call: `obj.method()` – this = obj
- Function call: `fn()` – this = undefined (strict) or global
- Arrow function: inherits this from outer scope
- `bind`, `call`, `apply` – set this explicitly
- Constructor: `new Fn()` – this = new object

## Code Example

```javascript
const obj = {
  name: "Obj",
  greet() {
    console.log(this.name)
  }
}
obj.greet() // "Obj"

const greet = obj.greet
greet() // undefined (strict) or error

// Arrow inherits
const obj2 = {
  name: "Obj2",
  greet: () => console.log(this.name) // this from outer scope
}
```

## Under the Hood

`this` is set at call time, not definition time. The engine determines it from the call site. Arrow functions don't have their own this binding—they use the lexical this from where they're defined.

## Common Mistakes

- Expecting this in callback to be the object (use arrow or bind)
- Using arrow for object methods (loses object as this)
- Assuming this in setTimeout/setInterval (use arrow)

## Best Practices

- Use arrow functions for callbacks when you need lexical this
- Use bind or arrow for event handlers
- Avoid this when possible (functional style)
- Use class fields (arrow) for React class components

## Summary

`this` depends on how the function is called. Arrow functions inherit this. Use bind/call/apply when you need to set it. Method vs function call changes this.
