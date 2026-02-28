# Custom Decorators

## Concept

Custom decorators encapsulate repeated logic: parameter extraction, metadata for guards, or composition of existing decorators. Nest uses `createParamDecorator` for parameters and standard TypeScript/Reflect metadata for class and method decorators. Decorators reduce boilerplate and improve readability.

## Why It Matters

Repeated patterns (e.g., `@Request() req` then `req.user`) clutter controllers. Custom decorators like `@CurrentUser()` make intent clear. Metadata decorators (`@Public()`, `@Roles()`) enable guards to make decisions without hardcoding. Cleaner, more maintainable code.

## Key Concepts

- `createParamDecorator()`: parameter decorator factory
- `ExecutionContext`: access request, handler
- `SetMetadata()`: attach key-value to handler/class
- `Reflector`: read metadata in guards
- Composing decorators: `applyDecorators()`

## Code Example

```typescript
// Parameter decorator
export const CurrentUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user
    return data ? user?.[data] : user
  },
)

// Usage: @CurrentUser() user or @CurrentUser('id') id

// Metadata decorator
export const Public = () => SetMetadata('isPublic', true)

// Roles decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles)

// In guard
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', ctx.getHandler())
    if (!roles) return true
    const user = ctx.switchToHttp().getRequest().user
    return roles.some(role => user.roles?.includes(role))
  }
}
```

## Under the Hood

`createParamDecorator` returns a parameter decorator. Nest invokes the factory with `(data, ctx)` when resolving the parameter. `SetMetadata` stores data in Reflect metadata; `Reflector` reads it. Guards and interceptors use Reflector to get custom metadata.

## Common Mistakes

- Decorator runs at class definition time; don't do async or I/O
- Forgetting to add decorator to a custom decorator's metadata
- Overusing decorators; simple logic may not need one

## Best Practices

- Use for repeated parameter extraction
- Use SetMetadata + Reflector for guard/interceptor config
- Keep decorators pure and simple
- Document decorator behavior

## Summary

Custom decorators reduce boilerplate. Use createParamDecorator for params, SetMetadata for guards. Reflector reads metadata. Keep decorators simple.
