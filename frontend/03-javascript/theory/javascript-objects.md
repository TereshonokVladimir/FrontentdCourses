# Objects

## Concept

Objects store key-value pairs. Keys are strings (or symbols); values can be anything. Create with `{}` or `new Object()`. Access with dot or bracket notation. Add/update with assignment. Delete with `delete`. Objects are reference types—assignment copies the reference. Use `Object.keys`, `Object.values`, `Object.entries` for iteration.

## Why It Matters

Objects model real-world entities and configuration. APIs return objects. React state and props are objects. Understanding references, shallow vs deep copy, and destructuring is essential.

## Key Concepts

- Literal: `{ key: value }`
- Computed property: `[key]: value`
- Destructuring: `const { a, b } = obj`
- Spread: `{ ...obj }` for shallow copy
- `Object.freeze` – prevent mutations
- Optional chaining: `obj?.prop?.nested`

## Code Example

```javascript
const user = {
  name: "Alice",
  age: 30,
  address: { city: "NYC" }
}

const { name, age } = user
const copy = { ...user }
copy.address.city = "LA" // user.address also changes (shallow)

const safe = obj?.prop?.nested ?? "default"
```

## Under the Hood

Objects are hash maps. Properties can be own or inherited. The prototype chain is used for lookup. Engines use hidden classes for optimization. Spread and destructuring are syntactic sugar.

## Common Mistakes

- Shallow copy when deep copy is needed
- Mutating props/state directly in React
- Using `in` when property might be undefined (falsy)
- Forgetting that keys are always strings (except symbols)

## Best Practices

- Use destructuring for clean access
- Use optional chaining for nullable chains
- Use `Object.assign` or spread for immutable updates
- Consider `structuredClone` for deep copy (modern)

## Summary

Objects are key-value collections. Use destructuring, spread, optional chaining. Understand references and shallow vs deep copy. Objects are central to JavaScript programming.
