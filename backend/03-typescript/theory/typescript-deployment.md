# TypeScript Deployment

## Concept

Deploying TypeScript backends: compile to JS, run with Node. Options: tsc build, esbuild, swc. Include only necessary files. Use production tsconfig (no source maps if desired). Environment-specific builds.

## Why It Matters

Production needs optimized output. Compile step must be fast and correct. Source maps aid debugging. Environment variables affect build. CI/CD needs reproducible builds.

## Key Concepts

- `tsc --build` or `tsc` for compilation
- esbuild/swc for faster builds
- `NODE_ENV=production`
- Exclude dev dependencies
- Source maps for production debugging
- Docker: multi-stage build

## Code Example

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
CMD ["node", "dist/index.js"]
```

## Under the Hood

tsc emits JS to outDir. esbuild is 10-100x faster. Production build typically strips dev deps. Docker multi-stage keeps image small.

## Common Mistakes

- Deploying .ts files
- Including devDependencies in production
- Wrong NODE_ENV
- Missing environment variables

## Best Practices

- Build in CI
- Use multi-stage Docker
- Set NODE_ENV=production
- Validate env at startup

## Summary

Deployment: compile to JS, production build, Docker. Use multi-stage; validate env.