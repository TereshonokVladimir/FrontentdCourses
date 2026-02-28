# TypeScript with Node.js

## Concept

Running TypeScript in Node requires compilation or a loader. Options: `tsc` then `node dist/`, `ts-node`, `tsx`, or `node --loader ts-node/esm`. Module resolution and ESM vs CommonJS matter.

## Why It Matters

Backend developers need a smooth dev experience. Compile step adds latency. ESM vs CJS affects imports. Production may run compiled JS or use a runtime. Essential for project setup.

## Key Concepts

- `tsc --build` for incremental builds
- `ts-node` – run TS directly (dev)
- `tsx` – fast TS execution
- `node --loader` for ESM
- `types` in package.json for Node types
- `@types/node` for Node API types

## Code Example

```json
// package.json
{
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

```typescript
// ESM with Node
import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
```

## Under the Hood

ts-node compiles on the fly. tsx uses esbuild for speed. Node's loader hooks allow transforming before execution. ESM uses import/export; CJS uses require.

## Common Mistakes

- Mixing ESM and CJS incorrectly
- Missing @types/node
- Wrong module in tsconfig for Node
- __dirname undefined in ESM (use fileURLToPath)

## Best Practices

- Use tsx for dev, tsc for production build
- Match package.json type and tsconfig module
- Install @types/node
- Use path and fileURLToPath for __dirname in ESM

## Summary

TypeScript + Node: tsx/ts-node for dev, tsc for prod. Match ESM/CJS; use @types/node.