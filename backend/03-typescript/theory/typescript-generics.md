# TypeScript Generics

## Concept

Generics parameterize types. `function identity<T>(x: T): T` works for any type. Generics enable reusable, type-safe abstractions. Used for collections, APIs, and utilities.

## Why It Matters

Backend code uses generics for repositories, API clients, and middleware. `Promise<T>`, `Array<T>`, and `Record<K, V>` are generic. Without generics, you lose type information through abstractions.

## Key Concepts

- Generic functions: `<T>(x: T) => T`
- Generic interfaces: `interface Repository<T> { find(id: string): Promise<T> }`
- Constraints: `<T extends User>`
- Default type params: `<T = string>`
- Multiple params: `<T, U>`

## Code Example

```typescript
interface Repository<T> {
  findById(id: string): Promise<T | null>
  save(entity: T): Promise<T>
}

async function getOrThrow<T>(repo: Repository<T>, id: string): Promise<T> {
  const entity = await repo.findById(id)
  if (!entity) throw new Error('Not found')
  return entity
}
```

## Under the Hood

Generics are type-level functions. Type inference fills in type params when possible. Constraints are checked at compile time. No runtime cost; generics are erased.

## Common Mistakes

- Over-constraining generics
- Not inferring when inference works
- Using generics where a union is simpler
- Forgetting default type params

## Best Practices

- Let inference work when obvious
- Use constraints to narrow
- Name type params descriptively (T, K, V)
- Prefer single responsibility per generic

## Summary

Generics: parameterized types, constraints, inference. Use for reusable abstractions; let inference help.