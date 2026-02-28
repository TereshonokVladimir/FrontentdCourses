# Interview Questions: NestJS

## Beginner

1. What is NestJS and how does it differ from Express?
2. What is a NestJS module and what does it contain?
3. What is the purpose of `@Injectable()`?
4. How do you define a route in a NestJS controller?
5. What is the difference between `@Param()` and `@Query()`?
6. What does `ValidationPipe` do and why use it?
7. How do you inject a service into a controller?
8. What is the purpose of `@Module()` decorator?
9. How do you handle 404 errors in NestJS?
10. What is the role of `main.ts` in a NestJS application?
11. How do you enable CORS in NestJS?
12. What is the difference between a guard and middleware?
13. How do you access environment variables in NestJS?
14. What does `@Get()`, `@Post()`, `@Put()`, `@Delete()` do?
15. How do you export a provider from a module for use in another module?

## Intermediate

1. Explain the request lifecycle in NestJS (middleware, guards, interceptors, pipes, handler).
2. How do you implement JWT authentication in NestJS?
3. What is the difference between `MessagePattern` and `EventPattern` in microservices?
4. How do you handle circular dependencies between modules?
5. Explain the purpose and usage of `@UseGuards()` vs global guards.
6. How do you create a custom pipe and when would you use one?
7. What is the difference between `REQUEST` and `DEFAULT` scope for providers?
8. How do you set up TypeORM with NestJS and inject a repository?
9. How do you implement global exception filters?
10. What is the purpose of `ConfigModule` and `ConfigService`?
11. How do you write unit tests for a NestJS service with mocked dependencies?
12. Explain how interceptors work and when to use them vs middleware.
13. How do you implement rate limiting in NestJS?
14. What is the difference between `@Body()` and `@Param()` validation?
15. How do you set up Swagger/OpenAPI documentation in NestJS?
16. How do you implement graceful shutdown in NestJS?
17. What are lifecycle hooks (`OnModuleInit`, `OnApplicationShutdown`) and when to use them?
18. How do you create a custom parameter decorator with `createParamDecorator`?
19. How do you use `SetMetadata` and `Reflector` for custom guard logic?
20. How do you configure Bull queues for background job processing?

## Advanced

1. Design a multi-tenant NestJS application where each request is scoped to a tenant. How would you implement tenant resolution and ensure data isolation?
2. How would you implement a distributed tracing system (e.g., OpenTelemetry) across NestJS services and microservices?
3. Explain the trade-offs between using `synchronize: true` in TypeORM vs migrations in production.
4. How would you implement a circuit breaker for external API calls in a NestJS service?
5. Design a strategy for zero-downtime deployment of a NestJS application behind a load balancer.
6. How would you implement request-scoped providers for per-request caching or connection pooling?
7. Explain how to achieve horizontal scaling with NestJS microservices when using Redis as a message broker.
8. How would you implement idempotency for POST endpoints to handle duplicate requests safely?
9. Design a NestJS architecture that supports both REST and GraphQL from the same business logic layer.
10. How would you implement API versioning (e.g., /v1/users, /v2/users) in NestJS?
11. Explain the security implications of using `whitelist: true` vs `forbidNonWhitelisted: true` in ValidationPipe.
12. How would you implement a custom transport for NestJS microservices (e.g., AWS SQS)?
13. Design a NestJS application with multiple databases (e.g., PostgreSQL for users, MongoDB for logs). How do you configure and use multiple TypeORM connections?
14. How would you implement soft delete with unique constraints in TypeORM (e.g., unique email including soft-deleted records)?
15. Explain how to use `@Transaction()` or `queryRunner` for complex multi-entity transactions with rollback.
16. How would you implement a custom validation that requires an async database check (e.g., unique email)?
17. Design a NestJS middleware/guard that implements IP-based rate limiting with Redis for distributed deployments.
18. How would you structure a large NestJS monorepo with shared libraries and multiple applications?
19. Explain how to handle WebSocket authentication and reconnection with JWT token refresh.
20. How would you implement a health check that verifies all dependencies (DB, Redis, external APIs) with proper timeout and caching for production?
