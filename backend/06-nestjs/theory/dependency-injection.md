# Dependency Injection

## Concept

Dependency Injection (DI) is a design pattern where dependencies are provided to a class rather than created inside it. Nest's DI container manages provider lifecycle, resolves dependencies, and injects them via constructor parameters.

## Why It Matters

DI enables loose coupling, testability (easy to mock), and single responsibility. Services depend on abstractions, not concrete implementations. Nest handles instantiation and scoping so you focus on business logic.

## Key Concepts

- Constructor injection: dependencies passed via constructor
- Provider tokens: class reference or string/symbol for custom tokens
- Scopes: DEFAULT (singleton), REQUEST, TRANSIENT
- `@Injectable()`: marks class as injectable
- Custom providers: `useValue`, `useClass`, `useFactory`

## Code Example

```typescript
// Constructor injection
@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly configService: ConfigService,
  ) {}
}

// Custom provider with useValue
{
  provide: 'CACHE_MANAGER',
  useValue: myCacheInstance,
}

// useFactory for dynamic creation
{
  provide: 'ASYNC_CONNECTION',
  useFactory: async (config: ConfigService) => {
    return await createConnection(config.get('DB_URL'))
  },
  inject: [ConfigService],
}
```

## Under the Hood

Nest builds a metadata graph from constructor parameters. At runtime, when a class is instantiated, Nest looks up each dependency in the module's provider list, creates or reuses instances based on scope, and injects them. Singletons are created once per module.

## Common Mistakes

- Circular dependencies: A injects B, B injects A
- Injecting request-scoped into singleton (scope mismatch)
- Using `@Optional()` and not handling undefined
- Forgetting to register a provider in a module

## Best Practices

- Prefer constructor injection over property injection
- Use interfaces with custom tokens for abstractions
- Avoid circular deps; extract shared logic to a third module
- Use REQUEST scope only when needed (e.g., per-request caching)

## Summary

DI injects dependencies via constructors. Nest manages lifecycle and resolution. Use custom providers for config, mocks, or dynamic creation. Avoid circular dependencies and scope mismatches.
