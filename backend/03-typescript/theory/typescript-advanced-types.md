# TypeScript Advanced Types

## Concept

Advanced types include template literal types, recursive types, and branded types. Template literals build string types. Recursive types model trees. Branded types prevent mixing similar primitives.

## Why It Matters

Template literals enable type-safe route matching. Branded types prevent ID confusion (userId vs orderId). Recursive types model JSON, trees. Used in advanced backend type design.

## Key Concepts

- Template literals: `` `get${string}` `` for route types
- Recursive: `type Json = string | number | Json[] | { [k: string]: Json }`
- Branded: `type UserId = string & { readonly brand: unique symbol }`
- `unique symbol` for nominal typing
- Recursive conditional types

## Code Example

```typescript
type UserId = string & { readonly __brand: 'UserId' }
function toUserId(s: string): UserId {
  return s as UserId
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type Route = `/${string}` | `/${string}/${string}`

type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json }
```

## Under the Hood

Branded types use intersection with a unique object. Runtime value is unchanged. Template literals combine string literal types. Recursive types have a base case to avoid infinite expansion.

## Common Mistakes

- Infinite recursion in recursive types
- Branded types not enforced at runtime
- Over-complex template literals
- Missing base case in recursion

## Best Practices

- Use branded types for IDs
- Keep recursive types simple
- Document branded type usage
- Consider runtime validation for brands

## Summary

Advanced types: template literals, recursive, branded. Use for IDs, routes, JSON shapes.