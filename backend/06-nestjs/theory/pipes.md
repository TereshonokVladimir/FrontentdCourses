# Pipes

## Concept

Pipes transform or validate input data before it reaches a route handler. They run in order: validation, transformation, type coercion. Pipes can be applied globally, per controller, or per parameter.

## Why It Matters

Pipes centralize validation and transformation logic. Instead of manual checks in every handler, you declare rules once. Invalid input is rejected early with consistent error responses, improving security and DX.

## Key Concepts

- ValidationPipe: validates DTOs with class-validator
- ParseIntPipe, ParseUUIDPipe, ParseBoolPipe: type coercion
- Custom pipes: implement `PipeTransform` interface
- Execution order: global → controller → parameter
- `transform(value, metadata)`: receives value and returns transformed/validated value

## Code Example

```typescript
// Built-in pipes
@Get(':id')
findOne(@Param('id', ParseUUIDPipe) id: string) {
  return this.usersService.findOne(id)
}

@Get()
findAll(@Query('page', ParseIntPipe) page: number) {
  return this.usersService.findAll(page)
}

// Custom pipe
@Injectable()
export class ParseJsonPipe implements PipeTransform<string, object> {
  transform(value: string): object {
    try {
      return JSON.parse(value)
    } catch {
      throw new BadRequestException('Invalid JSON')
    }
  }
}
```

## Under the Hood

Pipes implement `PipeTransform<T, R>`. Nest invokes `transform(value, metadata)` before the route handler. If a pipe throws (e.g., ValidationPipe on invalid DTO), Nest converts it to an HTTP error response. Pipes run in the order they are applied.

## Common Mistakes

- Not using ValidationPipe with DTOs; manual validation is error-prone
- Forgetting `whitelist: true` (strips unknown properties)
- Using `forbidNonWhitelisted: true` without documenting allowed fields
- Throwing generic errors instead of BadRequestException

## Best Practices

- Use ValidationPipe globally with `app.useGlobalPipes(new ValidationPipe({ whitelist: true }))`
- Use ParseUUIDPipe for ID params to prevent injection
- Create custom pipes for domain-specific validation
- Keep pipes focused: one concern per pipe

## Summary

Pipes validate and transform input. Use ValidationPipe with DTOs, built-in parse pipes for types, and custom pipes for domain logic. Apply globally for consistency.
