# TypeScript Strict Mode

## Concept

Strict mode enables a set of compiler options that catch more errors: `strictNullChecks`, `strictFunctionTypes`, `noImplicitAny`, etc. `"strict": true` enables all. Essential for production-quality code.

## Why It Matters

Without strict mode, TypeScript allows many JavaScript-style pitfalls. Null/undefined cause runtime errors. Strict mode surfaces these at compile time. Industry standard for new projects.

## Key Concepts

- `strictNullChecks` – null/undefined are separate
- `strictFunctionTypes` – contravariant params
- `noImplicitAny` – error on implicit any
- `strictBindCallApply` – correct this typing
- `strictPropertyInitialization` – class props initialized
- `noUncheckedIndexedAccess` – index access adds undefined

## Code Example

```typescript
// strictNullChecks: string | undefined for optional
function getUser(id: string): User | undefined {
  return users.find(u => u.id === id)
}
const u = getUser('1')
u?.name  // safe access

// noImplicitAny: must type parameters
function process(data: unknown) {
  if (typeof data === 'object' && data && 'id' in data) {
    return (data as { id: string }).id
  }
}
```

## Under the Hood

Strict options add more checks to the type checker. strictNullChecks changes how null/undefined flow. Each option is independent but recommended together. May require code changes when enabling.

## Common Mistakes

- Enabling strict mid-project without incremental migration
- Using `!` to bypass null checks
- Disabling individual strict options without reason
- Not fixing all errors before shipping

## Best Practices

- Enable strict from day one
- Migrate incrementally with `strict: true` and fix
- Use optional chaining and nullish coalescing
- Avoid `!`; handle null properly

## Summary

Strict mode: stricter checks, fewer runtime errors. Enable from start; fix null/undefined properly.