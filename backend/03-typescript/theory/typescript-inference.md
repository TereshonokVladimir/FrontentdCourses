# TypeScript Type Inference

## Concept

TypeScript infers types when not explicitly annotated. Inference works for variables, function returns, and generics. Understanding inference helps write less code and avoid unnecessary annotations.

## Why It Matters

Good inference reduces annotation burden. Wrong inference causes confusing errors. Generics infer from usage. Backend code benefits from inferring API response types.

## Key Concepts

- Variable inference: `const x = 5` → number
- Return type inference: function return type inferred
- Generic inference: type params from arguments
- Contextual typing: from expected type
- `satisfies` operator – check without widening (TS 4.9+)

## Code Example

```typescript
const users = [{ id: 1, name: 'a' }]  // { id: number; name: string }[]
function first<T>(arr: T[]): T | undefined {
  return arr[0]
}
const u = first(users)  // { id: number; name: string } | undefined

const config = {
  port: 3000,
  host: 'localhost'
} satisfies { port: number; host: string }
```

## Under the Hood

Inference follows the flow of values. Return types are inferred from return statements. Generics infer from usage. Contextual typing flows from the expected type (e.g., callback params).

## Common Mistakes

- Over-annotating when inference works
- Losing inference with too many generics
- Inference widening (e.g., string literal to string)
- Not using satisfies when needed

## Best Practices

- Let inference work when obvious
- Use explicit return types for public APIs
- Use satisfies for config objects
- Add type params only when inference fails

## Summary

Inference: variables, returns, generics. Let it work; use satisfies; add types when needed.