# Deployment

## Concept

Nest apps deploy like any Node.js app: build to JavaScript, run with Node, or use Docker. Production considerations: environment variables, process manager (PM2), reverse proxy (nginx), HTTPS, and health checks. Containerization and orchestration (Docker, K8s) are standard.

## Why It Matters

Development and production differ: env config, scaling, logging, monitoring. Proper deployment ensures reliability, performance, and security. Nest doesn't dictate deployment; you choose the stack. Common: Docker + K8s or PM2 + nginx.

## Key Concepts

- Build: `nest build` produces dist/
- Start: `node dist/main` or `nest start`
- PM2: process manager, clustering, restart on crash
- Docker: multi-stage build, non-root user
- Environment: NODE_ENV, PORT, DATABASE_URL, etc.

## Code Example

```dockerfile
# Dockerfile
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
USER node
EXPOSE 3000
CMD ["node", "dist/main"]
```

```json
// ecosystem.config.js (PM2)
module.exports = {
  apps: [{
    name: 'api',
    script: 'dist/main.js',
    instances: 'max',
    exec_mode: 'cluster',
    env_production: { NODE_ENV: 'production' },
  }],
}
```

## Under the Hood

`nest build` compiles TypeScript to JavaScript. The runtime is Node.js. PM2 runs multiple instances (cluster mode) for CPU utilization. Docker isolates the app; multi-stage reduces image size.

## Common Mistakes

- Running as root in Docker
- Not setting NODE_ENV=production
- Missing health checks in K8s/Docker
- Storing secrets in image or env files

## Best Practices

- Use multi-stage Docker builds
- Run as non-root in container
- Use secrets management (K8s secrets, Vault)
- Configure graceful shutdown (SIGTERM)

## Summary

Build with nest build, run with Node. Use PM2 or Docker for production. Set NODE_ENV, use secrets management, enable health checks.
