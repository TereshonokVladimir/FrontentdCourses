# TypeScript Utility Types

## Concept

TypeScript provides built-in utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, etc. They transform existing types. Essential for DRY type definitions.

## Why It Matters

Backend DTOs often derive from entities (e.g., CreateUser = Omit<User, 'id'>). Utility types avoid duplication. They express common patterns concisely. Used in every non-trivial codebase.

## Key Concepts

- `Partial<T>` – all properties optional
- `Required<T>` – all properties required
- `Pick<T, K>` – subset of properties
- `Omit<T, K>` – exclude properties
- `Record<K, V>` – map keys to value type
- `Exclude<T, U>`, `Extract<T, U>` – union filtering

## Code Example

```typescript
interface User {
  id: number
  name: string
  email: string
}

type CreateUser = Omit<User, 'id'>
type UpdateUser = Partial<CreateUser>
type UserPreview = Pick<User, 'id' | 'name'>
type UserMap = Record<string, User>
```

## Under the Hood

Utility types are mapped types and conditional types. They operate at compile time. No runtime cost. Can be composed: `Partial<Pick<User, 'name'>>`.

## Common Mistakes

- Using Omit with keys that don't exist
- Confusing Pick and Omit
- Over-nesting utility types
- Not using Record for dynamic keys

## Best Practices

- Use for DTOs (Create, Update, Response)
- Prefer Omit over redefining
- Compose when needed
- Create custom utilities for repeated patterns

## Summary

Utility types: Partial, Required, Pick, Omit, Record. Derive DTOs; avoid duplication.