# Swagger / OpenAPI

## Concept

Nest's `@nestjs/swagger` generates OpenAPI (Swagger) documentation from your decorators and DTOs. It provides interactive API docs, client generation, and request/response schemas. Decorators like `@ApiProperty()` and `@ApiTags()` enrich the spec.

## Why It Matters

API documentation stays in sync with code when generated from decorators. Consumers get accurate schemas for client generation. Swagger UI provides interactive testing. Reduces manual doc maintenance and mismatches.

## Key Concepts

- `SwaggerModule.setup()`: mount docs at a path
- `@ApiTags()`: group endpoints
- `@ApiProperty()`: document DTO properties
- `@ApiResponse()`, `@ApiBearerAuth()`: response and auth docs
- `DocumentBuilder`: title, version, description

## Code Example

```typescript
// main.ts
const config = new DocumentBuilder()
  .setTitle('Users API')
  .setVersion('1.0')
  .addBearerAuth()
  .build()
const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('api', app, document)

// DTO
export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string
}

// Controller
@ApiTags('users')
@Controller('users')
export class UsersController {
  @Post()
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiBearerAuth()
  create(@Body() dto: CreateUserDto) {}
}
```

## Under the Hood

SwaggerModule scans controllers and DTOs, uses reflection to build the OpenAPI JSON. `@ApiProperty()` adds schema for each field. The setup mounts Swagger UI and serves the spec at the configured path. Plugins can infer types from class-validator decorators.

## Common Mistakes

- Not adding `@ApiProperty()` to DTOs (schema incomplete)
- Forgetting to document auth (Bearer, API key)
- Exposing Swagger in production without auth
- Inconsistent examples between docs and tests

## Best Practices

- Add ApiProperty to all DTO fields with examples
- Use `@ApiHideProperty()` for sensitive fields
- Disable or protect Swagger in production
- Use `SwaggerPlugin` for automatic schema from validation decorators

## Summary

SwaggerModule generates OpenAPI from decorators. Use ApiProperty, ApiTags, ApiResponse. Document auth. Protect or disable in production.
