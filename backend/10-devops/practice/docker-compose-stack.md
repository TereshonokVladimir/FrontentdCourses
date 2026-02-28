# Practice: Docker Compose Stack

## Tasks

### Task 1
Create a `docker-compose.yml` with two services: `api` (Node.js app from a Dockerfile in the current directory) and `redis` (official Redis image). Expose the API on port 3000. Ensure the API can connect to Redis at `redis://redis:6379` via environment variable.

### Task 2
Add a PostgreSQL service with a named volume for data persistence. Configure the API to use `DATABASE_URL=postgresql://user:pass@db:5432/app`. Add a health check to the database so the API starts only after the DB is ready. Use `depends_on` with `condition: service_healthy`.

### Task 3
Create a custom network for the stack. Add an Nginx service as a reverse proxy in front of the API. Configure Nginx to proxy `/` to the API and serve static files from a volume. Use environment-specific config via `.env` file (gitignored).

### Task 4
Implement a full stack: API, PostgreSQL, Redis, and a background worker service that consumes from Redis. Use separate compose override files for `docker-compose.override.yml` (dev) and `docker-compose.prod.yml` (production) with different resource limits and env vars. Add a `Makefile` with targets: `up`, `down`, `logs`, `restart`.

### Task 5
Build a production-like compose stack with: secrets from files (not env), resource limits (CPU/memory) on all services, restart policies, logging driver configuration, and a `docker-compose.healthcheck.yml` that runs a smoke test against the full stack. Document the architecture and deployment steps in a README.
