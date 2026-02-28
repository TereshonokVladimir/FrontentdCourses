# ES Modules

## Concept

ES modules (`import`/`export`) are the standard for organizing code. Each file is a module with its own scope. `export` exposes values; `import` brings them in. Default export: one per module. Named exports: multiple. Dynamic `import()` loads modules at runtime. Modules are deferred and run once.

## Why It Matters

Modules replace script tags and global namespace pollution. React, Vue, and modern bundlers use ES modules. Tree-shaking removes unused exports. Understanding import/export is essential for any project.

## Key Concepts

- `export const x` / `export function fn`
- `export default` – single default export
- `import { x } from './module'`
- `import Default from './module'`
- `import * as ns from './module'`
- `import()` – dynamic import (returns Promise)

## Code Example

```javascript
// utils.js
export const add = (a, b) => a + b
export default function greet() {}

// app.js
import greet, { add } from "./utils"
import * as utils from "./utils"
const mod = await import("./lazy")
```

## Under the Hood

Bundlers (Vite, Webpack) resolve imports at build time. The module graph is built from import statements. Circular dependencies are handled with undefined during initialization. Top-level await is allowed in modules.

## Common Mistakes

- Mixing default and named import syntax
- Circular dependencies (A imports B, B imports A)
- Forgetting .js extension (depends on tooling)
- Dynamic import without await

## Best Practices

- Prefer named exports (better tree-shaking)
- Use default for single main export (React components)
- Avoid circular dependencies
- Use dynamic import for code splitting

## Summary

ES modules use import/export. Each file is a module. Use named exports when possible. Dynamic import() for lazy loading.
