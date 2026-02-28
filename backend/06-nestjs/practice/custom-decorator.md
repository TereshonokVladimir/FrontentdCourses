# Practice: Custom Decorator

## Tasks

### Task 1
Create `@CurrentUser()` parameter decorator using `createParamDecorator`. It extracts `request.user` from the execution context. Support optional data: `@CurrentUser('id')` returns `user.id`, `@CurrentUser()` returns the full user. Use it in a controller: `@Get('me') getMe(@CurrentUser() user) { return user }`.

### Task 2
Create `@Public()` decorator with `SetMetadata('isPublic', true)`. Create `@Roles(...roles)` with `SetMetadata('roles', roles)`. Implement `RolesGuard` that reads `roles` with `Reflector` and checks `request.user.roles`. If no roles metadata, allow all. If user lacks required role, throw `ForbiddenException`. Apply to a controller and test.

### Task 3
Create `@Pagination()` that combines `@Query('page', ParseIntPipe)`, `@Query('limit', ParseIntPipe)` with defaults (page=1, limit=10). Return an object `{ page, limit, skip }` for use in services. Use `applyDecorators` to combine multiple decorators. Create `@PaginationQuery()` that returns the full pagination params from a single decorator.

### Task 4
Implement `@ApiPagination()` that adds `@ApiQuery({ name: 'page', required: false })` and `@ApiQuery({ name: 'limit', required: false })` for Swagger. Create `@ApiPaginatedResponse(model)` that adds `@ApiOkResponse` with a schema for `{ data: T[], total, page, limit }`. Use `applyDecorators` and `getSchemaPath`.

### Task 5
Build a `@CacheKey()` decorator that sets metadata for a custom cache key. The key can be a string or a function `(req) => string`. Create a `CacheInterceptor` that reads the key, checks a cache (in-memory Map), returns cached response if hit, else calls `next.handle()`, caches the result, and returns it. Support TTL via `@CacheTTL(60)`. Use `Reflector` to get both. Apply to `GET /users` and `GET /users/:id` with different keys. Ensure the interceptor works with async handlers and Observables.
