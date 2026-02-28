# TypeScript Mapped Types

## Concept

Mapped types iterate over keys of a type and produce a new type. `{ [K in keyof T]: T[K] }` transforms each property. Used to build Partial, Required, Pick, and custom transformations.

## Why It Matters

Mapped types power utility types. Custom transformations (e.g., all strings to optional) use mapped types. Backend code uses them for API versioning, DTO generation, and schema derivation.

## Key Concepts

- `keyof T` – union of keys
- `[K in keyof T]: T[K]` – map over keys
- `+` and `-` modifiers for readonly/optional
- `as` clause for key remapping (TS 4.1+)
- Template literal types for key transforms

## Code Example

```typescript
type Nullable<T> = { [K in keyof T]: T[K] | null }
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }
type ApiResponse<T> = { data: T; meta: { page: number } }
```

## Under the Hood

Mapped types are type-level loops. The compiler expands them. Key remapping with `as` allows transforming key names. Template literals enable `get${Key}`-style keys.

## Common Mistakes

- Mapping over non-object types
- Forgetting optional/readonly modifiers
- Over-complex key remapping
- Circular mapped types

## Best Practices

- Use for systematic transformations
- Combine with conditional types
- Document custom mapped types
- Test with real types

## Summary

Mapped types: iterate keys, transform values. Power utility types; use for DTO generation.