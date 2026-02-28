# Variables and Types

## Concept

JavaScript has seven primitive types: string, number, boolean, null, undefined, symbol, bigint. Everything else is an object (including arrays and functions). Variables hold references for objects; primitives are copied by value. `typeof` returns a string describing the type; it has quirks (e.g., `typeof null === "object"`).

## Why It Matters

Type confusion causes bugs—adding a string and number concatenates instead of adding. Understanding reference vs value prevents unexpected mutations. TypeScript and runtime checks build on this knowledge.

## Key Concepts

- Primitives: immutable, compared by value
- Objects: mutable, compared by reference
- `undefined` – declared but not assigned
- `null` – intentional absence of value
- `typeof`, `instanceof` for type checking
- Falsy values: false, 0, "", null, undefined, NaN

## Code Example

```javascript
const a = 5
const b = a
b = 10 // Error: const

const obj = { x: 1 }
const ref = obj
ref.x = 2 // obj.x is now 2 (same reference)

console.log(typeof "hi")    // "string"
console.log(typeof null)   // "object" (quirk)
console.log(undefined == null)  // true
console.log(undefined === null) // false
```

## Under the Hood

Primitives are stored on the stack; objects on the heap with a reference on the stack. Assignment copies the reference for objects. The engine optimizes based on observed types (JIT).

## Common Mistakes

- Assuming `typeof array` returns "array" (returns "object")
- Using `==` (coerces types)
- Mutating shared object references
- Not distinguishing undefined from null

## Best Practices

- Use `===` and `!==` for comparisons
- Use `Array.isArray()` for arrays
- Use optional chaining (`?.`) for nullable properties
- Prefer explicit null over undefined when appropriate

## Summary

Primitives are value types; objects are reference types. Use strict equality. Know falsy values and typeof quirks. Understand when you're copying vs sharing references.
