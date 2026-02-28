# Practice: Validation Schema

## Tasks

### Task 1
Using Zod, create a schema for `User` with `id` (uuid), `name` (string 1-100), `email` (email format), `role` (enum: 'user' | 'admin'). Infer the type with `z.infer`. Add a `parseUser(input: unknown): User` function.

### Task 2
Create schemas for `CreateUserDto` and `UpdateUserDto`. UpdateUserDto should have all CreateUserDto fields optional. Add custom refinement: email must be unique (simulate with a Set). Return typed validation errors with path.

### Task 3
Implement a generic `validate<T>(schema: z.ZodType<T>, input: unknown): Result<T, ValidationError>`. ValidationError should have `path: string[]` and `message: string`. Use `safeParse` and transform to your Result type.

### Task 4
Create a schema for a paginated request: `page` (number, min 1), `limit` (number, min 1 max 100), `sort` (optional, enum), `order` (optional, 'asc' | 'desc'). Add defaults. Create a schema for `PaginatedResponse<T>` that takes a schema for T.

### Task 5
Build a middleware factory `validateBody<T>(schema: z.ZodType<T>)` that returns a middleware. The middleware should parse the body, attach to `req.body` as T, or return 400 with validation errors. Integrate with Express/Fastify types. Support `validateQuery` and `validateParams` with the same pattern.