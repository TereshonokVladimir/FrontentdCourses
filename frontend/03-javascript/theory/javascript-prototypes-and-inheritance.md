# Prototypes and Inheritance

## Concept

JavaScript uses prototype-based inheritance. Every object has a `[[Prototype]]` (accessed via `__proto__` or `Object.getPrototypeOf`). When a property isn't found, the engine looks up the prototype chain. Functions have a `prototype` property used when called with `new`. Classes are syntactic sugar over prototypes.

## Why It Matters

Understanding prototypes explains how inheritance works, what `instanceof` checks, and how to extend built-ins. React's Component, Array methods—all use the prototype chain. Debugging and extending objects requires this knowledge.

## Key Concepts

- `Object.create(proto)` – create with prototype
- `prototype` on functions – used for `new`
- `instanceof` – checks prototype chain
- `Object.getPrototypeOf`, `Object.setPrototypeOf`
- Class extends sets up prototype chain

## Code Example

```javascript
function Animal(name) {
  this.name = name
}
Animal.prototype.speak = function () {
  console.log(this.name)
}

const dog = new Animal("Rex")
dog.speak() // "Rex"
console.log(dog instanceof Animal) // true
```

## Under the Hood

`new Fn()` creates object, sets prototype to Fn.prototype, runs Fn with this, returns object. Lookup walks the chain. Modifying prototypes affects all instances—use with care.

## Common Mistakes

- Mutating built-in prototypes (Array.prototype)
- Confusing `__proto__` with `prototype`
- Using inheritance when composition is simpler

## Best Practices

- Prefer class syntax over raw prototypes
- Use composition over inheritance when possible
- Don't extend built-in prototypes

## Summary

Prototypes enable inheritance. Functions have prototype; instances have [[Prototype]]. Class syntax abstracts this. Understand for debugging and extension.
