# TypeScript Compiler Options

## Concept

`tsconfig.json` configures the TypeScript compiler. Options control output (target, module), strictness, paths, and project structure. Understanding options is essential for backend builds.

## Why It Matters

Wrong target breaks Node compatibility. Module format affects ESM vs CommonJS. Path aliases simplify imports. Source maps enable debugging. Every project needs correct config.

## Key Concepts

- `target` – output JS version (ES2020, etc.)
- `module` – module system (commonjs, esnext)
- `moduleResolution` – how imports resolve
- `paths`, `baseUrl` – path aliases
- `outDir`, `rootDir` – output layout
- `sourceMap`, `declaration` – emit options
- `skipLibCheck` – skip .d.ts checking (faster)

## Code Example

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "outDir": "dist",
    "rootDir": "src",
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Under the Hood

tsc reads tsconfig, compiles included files, and emits to outDir. Paths are rewritten at compile time. Declaration files are generated from types. Source maps link JS to TS.

## Common Mistakes

- target too old for Node version
- module/moduleResolution mismatch
- Forgetting include/exclude
- Not setting rootDir (output structure wrong)

## Best Practices

- Match target to Node version
- Use NodeNext for Node projects
- Enable declaration for libraries
- Use paths for clean imports

## Summary

Compiler options: target, module, paths, strict. Match Node; use NodeNext; enable declaration.