# TypeScript Type Guards

## Concept

Type guards narrow types in conditional branches. `typeof`, `instanceof`, `in`, and custom guard functions (`x is T`) tell the compiler that a value has a specific type. Essential for safe type narrowing.

## Why It Matters

Union types require narrowing before property access. Without guards, you get type errors or unsafe casts. Custom guards encapsulate validation logic and type narrowing. Used everywhere with unions.

## Key Concepts

- `typeof x === 'string'` – primitive narrowing
- `x instanceof Error` – class narrowing
- `'key' in obj` – property existence
- Custom: `function isUser(x: unknown): x is User`
- Assertion: `x as User` (unsafe; avoid when possible)

## Code Example

```typescript
function isUser(x: unknown): x is User {
  return typeof x === 'object' && x !== null && 'id' in x && 'name' in x
}

function process(input: string | User) {
  if (isUser(input)) {
    console.log(input.name)
  } else {
    console.log(input.toUpperCase())
  }
}
```

## Under the Hood

Type guards are boolean-returning functions. The `x is T` return type is a type predicate: when true, the compiler narrows x to T. Control flow analysis uses guards in if/else.

## Common Mistakes

- Incomplete guard (missing checks)
- Using `as` instead of proper guard
- Guard that doesn't actually validate
- Forgetting null/undefined checks

## Best Practices

- Prefer type guards over `as`
- Make guards exhaustive
- Reuse guards (single source of truth)
- Combine with Zod/io-ts for runtime validation

## Summary

Type guards: typeof, instanceof, in, custom `x is T`. Narrow unions safely; avoid unsafe casts.