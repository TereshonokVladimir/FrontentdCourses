# Validation

## Concept

Validation ensures incoming data meets your requirements before it reaches handlers. Nest uses `class-validator` with `ValidationPipe` to validate DTOs. Decorators define rules; invalid data triggers `BadRequestException` with error details.

## Why It Matters

Invalid input causes bugs, security issues, and bad UX. Centralized validation with DTOs catches errors early and returns consistent error messages. Type safety from DTOs improves maintainability.

## Key Concepts

- DTOs: classes with validation decorators
- `class-validator`: `@IsString()`, `@IsEmail()`, `@Min()`, `@MaxLength()`
- `class-transformer`: `@Transform()`, `@Type()` for nested objects
- ValidationPipe: `whitelist`, `forbidNonWhitelisted`, `transform`
- Custom validators: `@Validate(IsUnique)`

## Code Example

```typescript
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(8)
  password: string

  @IsString()
  @MinLength(2)
  name: string

  @IsOptional()
  @IsString()
  role?: string
}

// main.ts - global
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,        // strip unknown properties
  forbidNonWhitelisted: true,  // throw if unknown
  transform: true,       // coerce types (e.g., string to number)
  transformOptions: { enableImplicitConversion: true },
}))
```

## Under the Hood

ValidationPipe receives the body, uses class-transformer to instantiate the DTO, then runs class-validator. If validation fails, it throws BadRequestException with an array of constraint violations. `whitelist` strips properties not in the DTO; `transform` applies TypeScript types.

## Common Mistakes

- Not using `whitelist: true` (allows mass assignment)
- Forgetting to add `@IsOptional()` for optional fields
- Validating in service instead of DTO (duplication)
- Not handling validation errors in exception filter

## Best Practices

- Always use `whitelist: true` in production
- Use `forbidNonWhitelisted` in development to catch typos
- Create separate DTOs for create vs update (e.g., PartialType)
- Use custom validators for unique checks (async)

## Summary

ValidationPipe + class-validator validates DTOs. Use decorators for rules. Enable whitelist and transform. Keep validation in DTOs, not services.
