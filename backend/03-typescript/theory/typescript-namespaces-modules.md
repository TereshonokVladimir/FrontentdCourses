# TypeScript Namespaces and Modules

## Concept

TypeScript supports ES modules (import/export) and legacy namespaces. Modules are preferred. Namespaces group types in a single global scope. Use modules for modern code; namespaces for legacy .d.ts files.

## Why It Matters

Most code uses ES modules. Understanding module resolution (Node, bundler) is critical. Namespaces appear in older type definitions. Backend uses Node module resolution.

## Key Concepts

- ES modules: `import x from 'y'`, `export default`
- `namespace X { }` – legacy grouping
- Module resolution: Node, NodeNext, Bundler
- Declaration merging in namespaces
- `/// <reference path="..." />` for ambient refs

## Code Example

```typescript
// module
export function createUser(data: CreateUserDto): User {
  return { id: uuid(), ...data }
}
export type { User, CreateUserDto }

// namespace (legacy)
declare namespace Express {
  interface Request {
    user?: User
  }
}
```

## Under the Hood

Modules are file-based. Each file is a module. Namespaces can span files with declaration merging. Module resolution follows Node or bundler rules. Types are imported for type-only usage.

## Common Mistakes

- Mixing namespace and module in same file
- Wrong moduleResolution for environment
- Using namespace for new code
- Circular module dependencies

## Best Practices

- Use ES modules exclusively for new code
- Use NodeNext resolution for Node
- Namespaces only for .d.ts augmentation
- Prefer `import type` for type-only imports

## Summary

Modules: ES import/export, file-based. Namespaces: legacy. Use modules; NodeNext for Node.