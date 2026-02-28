# Docker Compose

## Concept

Docker Compose is a tool for defining and running multi-container Docker applications. You describe services, networks, and volumes in a YAML file and run them with a single command. It's ideal for local development and small deployments.

## Why It Matters

Backends rarely run alone—they need databases, caches, message queues. Compose lets you spin up the full stack locally with one command, matching production topology without manual container orchestration.

## Key Concepts

- **Services**: Each container is a service with its own config
- **Networks**: Services communicate over a default or custom network
- **Volumes**: Persistent storage for databases and shared data
- **Dependencies**: `depends_on` controls startup order
- **Environment**: Inject env vars per service

## Code Example

```yaml
# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/app
      REDIS_URL: redis://redis:6379
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: app
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine

volumes:
  pgdata:
```

## Under the Hood

Compose reads the YAML, creates a project network, starts containers in dependency order, and injects env vars. Health checks delay dependent services until upstream is ready. Volumes are named and persist across `compose down` unless `-v` is used.

## Common Mistakes

- Using `depends_on` without health checks (db may not be ready)
- Hardcoding secrets in compose files
- Not using volumes for database data (data lost on restart)
- Running Compose in production for large-scale systems (use Kubernetes)

## Best Practices

- Use health checks for services that others depend on
- Store secrets in `.env` (gitignored) or external secret managers
- Use `build.context` and `build.dockerfile` for clarity
- Separate dev and prod compose files (override pattern)
- Pin image versions for reproducibility

## Summary

Docker Compose runs multi-container apps from a single config. Define services, networks, volumes, and dependencies in YAML. Use health checks and external secrets for production-like local development.
