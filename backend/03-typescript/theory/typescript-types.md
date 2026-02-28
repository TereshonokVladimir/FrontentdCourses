# TypeScript Types

## Concept

TypeScript provides primitive types (string, number, boolean), literal types, arrays, tuples, and object types. `type` aliases name complex types. Union and intersection combine types. Types enable precise modeling of data.

## Why It Matters

Accurate types prevent bugs. Literal types restrict to specific values. Tuples model fixed-length arrays. Backend code uses types for request/response shapes, enums, and domain models.

## Key Concepts

- Primitives: string, number, boolean, null, undefined
- Literals: `'active' | 'inactive'`
- Arrays: `string[]` or `Array<string>`
- Tuples: `[string, number]`
- type alias: `type UserId = string`

## Code Example

```typescript
type Status = 'pending' | 'approved' | 'rejected'
type Coord = [number, number]
type User = { id: string; name: string }

const status: Status = 'pending'
const point: Coord = [10, 20]
```

## Under the Hood

Types are erased at compile time. Type checker uses structural typing: compatibility based on shape, not name. Literal types narrow in control flow. Tuples have fixed length and element types.

## Common Mistakes

- Confusing `type` and `interface` (both work for objects)
- Using `object` when you mean `Record<string, unknown>`
- Forgetting `undefined` in optional chains
- Over-narrowing with literals

## Best Practices

- Use type for unions, intersections, primitives
- Use literal types for status, role, etc.
- Prefer `readonly` tuples when immutable
- Avoid `object`; use `Record` or specific shape

## Summary

Types: primitives, literals, tuples, type alias. Model data precisely; use for domain types.