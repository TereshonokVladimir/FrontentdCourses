# Destructuring and Spread

## Concept

Destructuring extracts values from arrays or properties from objects into variables. Array: `const [a, b] = arr`. Object: `const { a, b } = obj`. Default values: `const { a = 1 } = obj`. Renaming: `const { a: alias } = obj`. Rest: `const [first, ...rest] = arr`. Spread (`...`) copies and merges. Used for immutable updates and function params.

## Why It Matters

Destructuring is everywhere—React props, hook returns, API responses. Spread enables immutable updates without mutating. It's idiomatic modern JavaScript. Clean, readable code.

## Key Concepts

- Array: `[a, b] = arr`; skip: `[a, , c] = arr`
- Object: `{ a, b } = obj`; rename: `{ a: x }`
- Defaults: `{ a = 1 }`; `[a = 0]`
- Rest: `...rest` in destructuring
- Spread: `[...arr]`, `{ ...obj }` for copy/merge

## Code Example

```javascript
const [x, y] = [1, 2]
const { name, age } = user
const { name: userName } = user
const [a, ...rest] = [1, 2, 3] // rest = [2, 3]

const copy = [...arr]
const merged = { ...defaults, ...overrides }

// React
const { data, isLoading } = useQuery()
```

## Under the Hood

Destructuring is syntactic sugar for property access and assignment. Spread uses iterator protocol for arrays. Object spread copies enumerable own properties. Shallow copy only.

## Common Mistakes

- Destructuring undefined (throws); use default
- Spread order matters for objects (later overrides)
- Deep nesting—spread is shallow
- Rest must be last in destructuring

## Best Practices

- Use for clean variable extraction
- Use spread for immutable updates
- Provide defaults for optional props
- Use rest for variadic params

## Summary

Destructuring extracts values. Spread copies and merges. Use for props, state, API data. Shallow copy—nested objects need care.
