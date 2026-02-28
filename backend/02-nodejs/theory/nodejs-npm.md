# Node.js npm

## Concept

npm (Node Package Manager) is the default package manager for Node.js. It manages dependencies in `package.json`, installs from the registry, runs scripts, and handles versioning. `npm install`, `npm run`, and `package.json` are core workflows.

## Why It Matters

Virtually every Node project uses npm (or yarn/pnpm). Understanding dependencies, scripts, and the registry prevents security issues, broken builds, and dependency hell. Essential for backend development.

## Key Concepts

- `package.json` – name, version, dependencies, scripts
- Semver: ^, ~, exact versions
- `npm install`, `npm ci` (clean install)
- `npm run <script>`, `npm start`, `npm test`
- `npm audit`, `npm outdated`
- `npx` – run packages without global install

## Code Example

```json
{
  "name": "my-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "test": "node test/run.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

## Under the Hood

npm stores packages in node_modules with a flat or nested layout. package-lock.json locks exact versions. The registry (registry.npmjs.org) serves packages. npm uses a dependency resolution algorithm.

## Common Mistakes

- Committing node_modules (use .gitignore)
- Using `npm install` in CI (use `npm ci`)
- Ignoring audit vulnerabilities
- Overusing `^` leading to breaking changes

## Best Practices

- Use npm ci in CI/CD
- Run npm audit regularly
- Pin versions for production when needed
- Use devDependencies for build/test tools
- Prefer npx over global installs

## Summary

npm: package.json, install, scripts, semver. Use npm ci in CI; audit dependencies; manage scripts.