# Backend Developer Bootcamp — Roadmap

## Learning Path

This course follows a structured progression from fundamentals to production deployment.

### 01. Backend Fundamentals
Client-server architecture, HTTP protocol, REST concepts, JSON, environment variables, logging, error handling, security basics, concurrency, process management, stateless design, idempotency, rate limiting, caching, debugging, production readiness, scaling.

**Mini-projects:** Simple HTTP server, CLI application, file processing script.

### 02. Node.js
Event loop, CommonJS modules, streams, Buffer, child processes, worker threads, cluster, path/fs, HTTP module, events, async patterns, error handling, npm, debugging, process, util, crypto, URL, timers.

**Mini-projects:** REST API server, middleware system, logging service, rate limiter.

### 03. TypeScript
Basics, interfaces, types, generics, union/intersection, utility types, decorators, type guards, strict mode, compiler options, Node integration, validation, project references, backend patterns, API types.

**Mini-projects:** Type-safe API, generic utilities, validation schemas, DTO creation.

### 04. Databases
SQL basics, PostgreSQL, indexes, transactions, joins, constraints, primary/foreign keys, schema design, migrations, raw queries, backups, security, MongoDB, Redis.

**Mini-projects:** CRUD API with PostgreSQL, relational schema design, query optimization.

### 05. API Design
REST principles, resource naming, HTTP methods, pagination, filtering, sorting, versioning, content negotiation, idempotency, authentication basics, OpenAPI/Swagger, event-driven APIs.

**Mini-projects:** REST API with pagination, filtering and sorting, versioned API.

### 06. NestJS
Modules, dependency injection, controllers, services, database integration, validation, exception filters, guards, file upload, Swagger, background jobs, event-driven architecture.

**Mini-projects:** Modular API architecture, authentication module, background jobs, event-driven module.

### 07. Authentication
JWT, refresh tokens, bcrypt/argon2, session-based auth, OAuth, RBAC, ABAC, brute-force protection, account lockout, SSO.

**Mini-projects:** JWT authentication, refresh tokens, role-based authorization, session-based auth.

### 08. Testing
Unit tests, integration tests, mocking, fixtures, async testing, coverage, test isolation, flaky tests, contract testing, performance testing, E2E, CI pipeline.

**Mini-projects:** Unit tests, integration tests, API testing.

### 09. Performance
Caching strategies, connection pooling, N+1 queries, eager/lazy loading, indexing, throughput, horizontal scaling, garbage collection, batch processing.

**Mini-projects:** Caching layer, query optimization, scaling strategy.

### 10. DevOps
Docker, CI/CD, deployment strategies, rolling/blue-green deployments, secrets management, monitoring, alerting, disaster recovery, backup, log aggregation.

**Mini-projects:** Dockerized backend, CI pipeline, deployment configuration.

---

## File Structure

Each module contains:

- **theory/** — 20–40 lessons with Concept, Why It Matters, Key Concepts, Code Example, Under the Hood, Common Mistakes, Best Practices, Summary
- **practice/** — 15–25 tasks (5 per file, increasing difficulty)
- **interview/** — 50+ questions (Beginner, Intermediate, Advanced)

## Naming Convention

- Lowercase, hyphen-separated: `nodejs-event-loop.md`, `sql-indexes.md`
- Theory: `topic-name.md`
- Practice: `practice-topic.md`
- Interview: `section-interview-questions.md`

## Total Course Size

~418 lessons across 10 modules. Theory + practice + interview coverage for professional backend development.
