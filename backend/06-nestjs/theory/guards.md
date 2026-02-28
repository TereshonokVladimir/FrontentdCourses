# Guards

## Concept

Guards determine whether a request should be handled by a route handler. They run after middleware but before pipes and interceptors. Guards return `true` to allow access or throw an exception to deny it. Typical use: authentication and authorization.

## Why It Matters

Guards centralize access control. Instead of checking `req.user` in every handler, you apply `@UseGuards(AuthGuard)` and ensure only authenticated/authorized requests reach your logic. Reduces duplication and enforces security consistently.

## Key Concepts

- `CanActivate` interface: `canActivate(context) => boolean | Promise<boolean>`
- Execution order: after middleware, before pipes
- `@UseGuards()`: controller or method level
- `ExecutionContext`: access request, handler, class
- Throw `UnauthorizedException` or `ForbiddenException` to deny

## Code Example

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractToken(request)
    if (!token) throw new UnauthorizedException()
    try {
      const payload = await this.jwtService.verifyAsync(token)
      request.user = payload
      return true
    } catch {
      throw new UnauthorizedException()
    }
  }
}

// Usage
@UseGuards(AuthGuard)
@Get('profile')
getProfile(@Request() req) {
  return req.user
}
```

## Under the Hood

Nest invokes guards in order before the route handler. If any guard returns `false` or throws, the request is rejected and the handler is not called. Guards have access to `ExecutionContext`, which provides the request, response, and handler metadata.

## Common Mistakes

- Putting business logic in guards; keep them focused on access control
- Not handling async guards properly (return Promise)
- Applying guards globally without excluding public routes
- Leaking sensitive info in error messages

## Best Practices

- Use `@Public()` or similar decorator to mark routes that skip auth
- Separate AuthGuard (who) from RolesGuard (what they can do)
- Inject services (e.g., JwtService) for token validation
- Return clear 401/403 with generic messages in production

## Summary

Guards control access before handlers run. Implement `CanActivate`, return `true` or throw. Use for auth and authorization; keep logic minimal and security-focused.
