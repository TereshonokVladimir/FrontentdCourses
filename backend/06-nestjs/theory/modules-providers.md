# Modules and Providers

## Concept

Modules are the building blocks of a NestJS application. Each module encapsulates related controllers, providers, and imports. Providers are injectable classes (services, repositories) that can be shared within a module or exported for use elsewhere.

## Why It Matters

Modules define boundaries and enable lazy loading, testing isolation, and clear dependency graphs. Providers are the units of business logic; DI makes them testable and reusable without tight coupling.

## Key Concepts

- `@Module()`: declares controllers, providers, imports, exports
- `providers`: injectable classes; Nest creates singletons by default
- `exports`: make providers available to importing modules
- `imports`: bring in other modules
- `@Injectable()`: marks a class as a provider

## Code Example

```typescript
// users.module.ts
import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// app.module.ts
@Module({
  imports: [UsersModule],
})
export class AppModule {}

// users.service.ts
@Injectable()
export class UsersService {
  findAll() {
    return [{ id: 1, name: 'John' }]
  }
}
```

## Under the Hood

Nest builds a dependency graph at startup. Each provider is instantiated once (singleton scope) unless configured otherwise. When a controller or another provider requests `UsersService`, Nest resolves it from the module's provider list or from an imported module's exports.

## Common Mistakes

- Forgetting to export a provider needed by other modules
- Circular imports: ModuleA imports ModuleB, ModuleB imports ModuleA
- Putting everything in `AppModule` instead of feature modules
- Using `forwardRef()` as a quick fix instead of restructuring

## Best Practices

- One feature = one module (UsersModule, OrdersModule)
- Export only what other modules need
- Use `@Global()` sparingly; prefer explicit imports
- Keep modules small and focused

## Summary

Modules organize the app; providers hold logic. Export providers to share them; import modules to use their exports. Avoid circular dependencies and keep modules focused.
