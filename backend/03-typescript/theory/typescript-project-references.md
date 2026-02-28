# TypeScript Project References

## Concept

Project references split a codebase into multiple tsconfig projects. Each project compiles independently. Dependencies are declared via `references`. Enables incremental builds and faster compilation.

## Why It Matters

Monorepos use project references. Shared packages compile once. Apps depend on packages. Build times improve with incremental compilation. Common in backend monorepos.

## Key Concepts

- `references` in tsconfig – dependent projects
- `composite: true` – project can be referenced
- `tsc --build` – build with references
- `prepend` – output of dependency prepended
- Incremental: `.tsbuildinfo` for cache

## Code Example

```json
// packages/db/tsconfig.json
{
  "compilerOptions": { "composite": true, "outDir": "dist" },
  "include": ["src/**/*"]
}

// apps/api/tsconfig.json
{
  "compilerOptions": { "outDir": "dist" },
  "references": [{ "path": "../db" }],
  "include": ["src/**/*"]
}
```

## Under the Hood

tsc --build builds dependencies first. Output goes to outDir. Referenced projects' declaration files are used. .tsbuildinfo stores incremental state.

## Common Mistakes

- Forgetting composite on referenced projects
- Wrong paths in references
- Not using --build (skips reference order)
- Circular references

## Best Practices

- Use for monorepos
- Separate packages (shared, app)
- Use --build for full builds
- Clean .tsbuildinfo on clean

## Summary

Project references: composite, references, --build. Use for monorepos; faster incremental builds.