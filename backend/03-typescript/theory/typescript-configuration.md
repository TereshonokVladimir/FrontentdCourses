# TypeScript Configuration

## Concept

`tsconfig.json` is the main config file. It extends base configs, includes/excludes files, and sets compiler options. Multiple configs (tsconfig.build.json) support different build targets.

## Why It Matters

Correct config enables strict checking, proper output, and tool integration. Wrong config causes subtle bugs. Backend projects need Node-appropriate settings. Shared across team.

## Key Concepts

- `extends` – inherit from base config
- `include`, `exclude` – which files to compile
- `files` – explicit file list
- `compilerOptions` – all tsc options
- `references` – project references
- `tsconfig.build.json` for build-only

## Code Example

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

## Under the Hood

tsc merges config with extends. include/exclude use globs. Default exclude includes node_modules. Options are merged; later override earlier.

## Common Mistakes

- Excluding too much
- Wrong rootDir (output structure)
- Not extending a base
- Include and files both set (confusing)

## Best Practices

- Use base config for shared options
- Explicit include for apps
- Separate build config
- Document non-obvious options

## Summary

Configuration: extends, include, exclude, compilerOptions. Use base config; explicit include.