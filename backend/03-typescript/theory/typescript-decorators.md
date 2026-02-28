# TypeScript Decorators

## Concept

Decorators are functions that modify classes, methods, or properties. They use `@decorator` syntax. Require `experimentalDecorators` in tsconfig. Used in NestJS, TypeORM, and class-based frameworks.

## Why It Matters

NestJS uses decorators for routes, validation, and DI. TypeORM uses them for entities. Decorators reduce boilerplate and enable declarative configuration. Common in enterprise Node backends.

## Key Concepts

- Class, method, property, parameter decorators
- Decorator factory: `@decorator(options)`
- Execution order: bottom-up for same target
- Metadata: `reflect-metadata` for design-time info
- `experimentalDecorators`, `emitDecoratorMetadata`

## Code Example

```typescript
function Controller(path: string) {
  return function (target: Function) {
    Reflect.defineMetadata('path', path, target)
  }
}

@Controller('/users')
class UserController {
  @Get()
  findAll() {}
}
```

## Under the Hood

Decorators are functions called at class definition time. They receive the target and can modify or wrap it. Metadata is stored via reflect-metadata. Decorators run once when the class is loaded.

## Common Mistakes

- Forgetting experimentalDecorators
- Wrong execution order assumptions
- Decorators on arrow functions (not supported)
- Overusing decorators when functions suffice

## Best Practices

- Use for framework integration (NestJS, etc.)
- Keep decorators simple
- Document decorator behavior
- Consider decorator composition

## Summary

Decorators: class/method/property modification. Used in NestJS, TypeORM. Enable experimentalDecorators.