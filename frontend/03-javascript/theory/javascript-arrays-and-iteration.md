# Arrays and Iteration

## Concept

Arrays are ordered, zero-indexed collections. They can hold mixed types and are mutable. Key methods: `push`, `pop`, `map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`. Use `for...of` for values, `for...in` for indices (avoid for arrays—use for objects). Spread (`...`) copies and merges arrays.

## Why It Matters

Arrays are the primary data structure for lists. Map/filter/reduce are the backbone of data transformation. Understanding mutating vs non-mutating methods prevents bugs. Performance matters for large arrays.

## Key Concepts

- `map` – transform each element; returns new array
- `filter` – keep elements that pass test
- `reduce` – reduce to single value
- `find` – first matching element
- `some` / `every` – boolean checks
- Mutating: push, pop, splice, sort; non-mutating: map, filter, slice

## Code Example

```javascript
const nums = [1, 2, 3, 4, 5]

const doubled = nums.map((n) => n * 2)
const evens = nums.filter((n) => n % 2 === 0)
const sum = nums.reduce((acc, n) => acc + n, 0)

const hasLarge = nums.some((n) => n > 4)
const allPositive = nums.every((n) => n > 0)

for (const n of nums) {
  console.log(n)
}
```

## Under the Hood

Arrays are objects with numeric keys and a length property. Sparse arrays have holes. Methods like map create new arrays; mutating methods change in place. Engine optimizes for dense arrays.

## Common Mistakes

- Using `forEach` when you need a returned value (use map/filter)
- Mutating array while iterating
- Forgetting that `sort` mutates (copy first: `[...arr].sort()`)
- Using `for...in` on arrays (iterates indices as strings, includes inherited)

## Best Practices

- Prefer map/filter/reduce over manual loops
- Use `slice()` or spread to copy before mutating
- Use `find` instead of `filter()[0]` when you need one item
- Use `includes` for simple existence checks

## Summary

Arrays: map, filter, reduce for transformation. Know mutating vs non-mutating. Use for...of for iteration. Avoid for...in on arrays.
