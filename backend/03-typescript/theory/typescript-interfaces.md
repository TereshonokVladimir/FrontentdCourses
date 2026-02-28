# TypeScript Interfaces

## Concept

Interfaces define the shape of objects. They support optional properties, readonly, index signatures, and extension. Interfaces are open: multiple declarations merge. Used for contracts between modules.

## Why It Matters

Interfaces document API contracts. They enable autocomplete and refactoring. Backend DTOs, API responses, and database models are typically defined as interfaces. Essential for type-safe APIs.

## Key Concepts

- `interface User { id: number; name: string }`
- Optional: `email?: string`
- Readonly: `readonly id: number`
- Extends: `interface Admin extends User { role: string }`
- Index signature: `[key: string]: unknown`

## Code Example

```typescript
interface CreateUserDto {
  name: string
  email: string
  role?: 'user' | 'admin'
}

interface User extends CreateUserDto {
  readonly id: number
  createdAt: Date
}
```

## Under the Hood

Interfaces exist only at compile time. They are structural: an object satisfies an interface if it has the required properties. Declaration merging allows augmenting interfaces across files.

## Common Mistakes

- Using interface for primitives (use type alias)
- Overusing optional when required is intended
- Forgetting readonly for immutable data
- Circular interface references

## Best Practices

- Prefer interfaces for object shapes
- Use readonly for IDs and immutable fields
- Extend rather than duplicate
- Document with JSDoc when needed

## Summary

Interfaces: object shapes, optional, readonly, extends. Use for DTOs and contracts.