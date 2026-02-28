# TypeScript Union and Intersection Types

## Concept

Union types (`A | B`) represent values that can be one of several types. Intersection types (`A & B`) combine types into one. Unions enable modeling alternatives; intersections combine requirements.

## Why It Matters

APIs return different shapes (success vs error). Request bodies can have variants. Intersections compose mixins and extend types. Essential for modeling real-world data.

## Key Concepts

- Union: `string | number` – value is string OR number
- Discriminated union: common field (e.g., `type`) to narrow
- Intersection: `A & B` – value has both A and B
- Union with `never` for exhaustiveness
- `in` operator for narrowing

## Code Example

```typescript
type Success = { ok: true; data: User }
type Error = { ok: false; error: string }
type Result = Success | Error

function handle(r: Result) {
  if (r.ok) console.log(r.data)
  else console.error(r.error)
}

type WithId = T & { id: string }
```

## Under the Hood

Union: value must satisfy at least one member. Intersection: value must satisfy all members. Discriminated unions narrow via control flow. Exhaustiveness checking catches missing cases.

## Common Mistakes

- Forgetting to narrow before property access
- Using intersection where union is needed
- Not using discriminated unions for variants
- Overlapping union members causing confusion

## Best Practices

- Use discriminated unions for variants
- Add exhaustiveness check with `never`
- Prefer union over overloads when possible
- Document union semantics

## Summary

Union: A | B for alternatives. Intersection: A & B for composition. Use discriminated unions for variants.