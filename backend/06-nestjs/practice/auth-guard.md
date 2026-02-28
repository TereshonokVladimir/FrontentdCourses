# Practice: Auth Guard

## Tasks

### Task 1
Create an `AuthGuard` that checks for `Authorization: Bearer <token>` header. If missing, throw `UnauthorizedException`. If present, decode the JWT (use `@nestjs/jwt`), attach `payload` to `request.user`, and return `true`. For invalid tokens, throw `UnauthorizedException`. Apply the guard to a `GET /profile` route that returns `req.user`.

### Task 2
Add a `@Public()` decorator using `SetMetadata('isPublic', true)`. Create a `PublicGuard` or extend `AuthGuard` to skip authentication when the route has `@Public()`. Use `Reflector` to read the metadata. Apply `AuthGuard` globally and mark `GET /health` and `POST /auth/login` as public.

### Task 3
Implement a `RolesGuard` that checks `request.user.roles` against required roles. Use `@Roles('admin', 'user')` decorator. If the user has none of the required roles, throw `ForbiddenException`. Combine with `AuthGuard`: apply both to `DELETE /users/:id` so only users with role `admin` can access it.

### Task 4
Create a `ResourceGuard` that checks ownership. For `GET /orders/:id`, verify `request.user.id === order.userId`. Inject `OrdersService` to fetch the order. If the user doesn't own the resource, throw `ForbiddenException`. Support both "admin can access any" and "owner can access own" logic using `@Roles()` and resource check.

### Task 5
Implement API key authentication as an alternative to JWT. Support `X-API-Key` header. Create `ApiKeyGuard` that validates the key against a config value. Use a custom decorator `@AuthStrategy('jwt' | 'apiKey')` to choose the guard per route. Create a guard factory or composite guard that runs the appropriate strategy. Ensure `@Public()` still works.
