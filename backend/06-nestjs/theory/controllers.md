# Controllers

## Concept

Controllers handle incoming HTTP requests and return responses. They define routes, extract parameters, and delegate business logic to services. Controllers are thin: they validate input, call services, and format output.

## Why It Matters

Controllers are the entry point for your API. Well-designed controllers keep routing logic separate from business logic, making the codebase testable and maintainable. Nest's decorators reduce boilerplate for params, body, and headers.

## Key Concepts

- `@Controller('path')`: defines base route
- `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Patch()`: HTTP methods
- `@Param()`, `@Query()`, `@Body()`, `@Headers()`: extract request data
- Route parameters: `:id` in path, `@Param('id')`
- Status codes: `@HttpCode()`, `@Res()` for manual control

## Code Example

```typescript
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('page') page: number) {
    return this.usersService.findAll(page)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
```

## Under the Hood

Nest maps decorators to Express/Fastify route handlers. When a request matches a route, Nest invokes the handler, resolves DI for the controller, and runs pipes/guards/interceptors in order. The return value is serialized to JSON by default.

## Common Mistakes

- Putting business logic in controllers
- Using `@Res()` without `passthrough: true` (breaks Nest response handling)
- Not validating `@Body()` with DTOs and ValidationPipe
- Returning raw strings/numbers instead of objects for consistency

## Best Practices

- Keep controllers thin; delegate to services
- Use DTOs for `@Body()` and validate with ValidationPipe
- Use `@Param()` with type transformation (e.g., ParseUUIDPipe)
- Prefer returning objects; let Nest handle serialization

## Summary

Controllers define routes and handle HTTP. Use decorators for params, query, and body. Keep logic in services; use DTOs and pipes for validation.
