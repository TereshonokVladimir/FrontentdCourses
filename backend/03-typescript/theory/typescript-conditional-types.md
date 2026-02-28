# TypeScript Conditional Types

## Concept

Conditional types select one of two types based on a condition: `T extends U ? X : Y`. They enable type-level logic. Used in utility types, overload resolution, and inference.

## Why It Matters

Conditional types power advanced utilities (Exclude, Extract, infer). They model "if T is X then Y else Z". Backend libraries use them for flexible, type-safe APIs.

## Key Concepts

- `T extends U ? X : Y` – conditional
- `infer` – extract type from within a type
- Distributive conditional types (over unions)
- Nested conditionals for complex logic
- Default with `infer` for fallback

## Code Example

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type Exclude<T, U> = T extends U ? never : T
type Flatten<T> = T extends (infer U)[] ? U : T
type ApiResult<T> = T extends Error ? { error: string } : { data: T }
```

## Under the Hood

Conditional types are evaluated lazily. With unions, they distribute: `A | B extends U ? X : Y` becomes `(A extends U ? X : Y) | (B extends U ? X : Y)`. `infer` introduces a type variable.

## Common Mistakes

- Non-distributive when distributive intended (wrap in tuple)
- Infinite recursion in conditional types
- Over-complex conditionals
- Wrong order of conditional branches

## Best Practices

- Use infer for extraction
- Keep conditionals readable
- Test with edge cases
- Document complex conditionals

## Summary

Conditional types: T extends U ? X : Y, infer. Power advanced utilities; use for type extraction.