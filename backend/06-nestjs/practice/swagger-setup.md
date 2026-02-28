# Practice: Swagger Setup

## Tasks

### Task 1
Install and configure `@nestjs/swagger`. Set up `DocumentBuilder` with title, description, version, and `SwaggerModule.setup('api', app, document)`. Add `@ApiTags('users')` to `UsersController` and `@ApiProperty()` to `CreateUserDto` (email, name). Verify the Swagger UI at `/api` shows the endpoints and schemas.

### Task 2
Add `@ApiResponse()` for 200, 201, 400, 404 to all endpoints. Add `@ApiBearerAuth()` to protected routes. Configure `addBearerAuth()` in the document. Add `@ApiOperation({ summary: '...' })` to each endpoint. Document query params with `@ApiQuery()` for pagination (page, limit).

### Task 3
Create a `UserResponseDto` that excludes the password. Use `@ApiProperty({ example: ... })` for all fields. Add `@ApiExtraModels()` and `@ApiOkResponse({ schema: { $ref: getSchemaPath(UserResponseDto) } })` for proper response schemas. Document nested objects (e.g., `address: { street, city }`) with `@Type()` and `@ApiProperty({ type: () => AddressDto })`.

### Task 4
Add examples for request bodies using `@ApiBody({ schema: { example: { ... } } })`. Create a custom decorator `@ApiPaginatedResponse(model)` that adds the standard paginated response schema `{ data: T[], total, page, limit }`. Apply it to `GET /users` and `GET /products`.

### Task 5
Implement Swagger plugin to auto-infer schema from `class-validator` decorators (e.g., `@IsEmail()` → format: email). Conditionally enable Swagger only in development (check `NODE_ENV`). Add security schemes for both Bearer JWT and API Key. Document which endpoints use which auth. Add a custom `@ApiFileUpload()` decorator for file upload endpoints that documents the multipart form and file constraints.
