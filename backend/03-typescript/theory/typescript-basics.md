# TypeScript Basics

## Concept

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking, interfaces, and better tooling. Types are checked at compile time; runtime behavior is standard JavaScript.

## Why It Matters

Backend code benefits from types: fewer bugs, better IDE support, self-documenting APIs. TypeScript catches errors before deployment. Large codebases and teams rely on types for maintainability. Industry standard for Node.js backends.

## Key Concepts

- Type annotations: `let x: number = 5`
- Interfaces and type aliases
- Compiler: `tsc` produces `.js`
- `tsconfig.json` for configuration
- Strict mode for stronger checks

## Code Example

```typescript
interface User {
  id: number
  name: string
  email?: string
}

function getUser(id: number): Promise<User> {
  return db.query('SELECT * FROM users WHERE id = ?', [id])
}
```

## Under the Hood

TypeScript compiler (tsc) parses TS, type-checks, and emits JS. Types are erased at compile time. Source maps link JS back to TS for debugging. No runtime type checking unless you add it (e.g., Zod).

## Common Mistakes

- Using `any` to bypass type errors
- Ignoring strict mode
- Not configuring paths/aliases
- Mixing TS and JS without declaration files

## Best Practices

- Enable strict mode
- Avoid `any`; use `unknown` when type is unclear
- Use interfaces for object shapes
- Generate declaration files for libraries

## Summary

TypeScript: static types, compile-time checks, interfaces. Enable strict; avoid any; use for maintainability.