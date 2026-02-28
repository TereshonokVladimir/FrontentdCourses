# Practice: Type-Safe API

## Tasks

### Task 1
Define interfaces for a users API: `User`, `CreateUserDto`, `UpdateUserDto`. Create a function `createUser(dto: CreateUserDto): User` that returns a user with generated id and timestamps. Use proper typing (no any).

### Task 2
Add `getUser(id: string): User | null` and `updateUser(id: string, dto: UpdateUserDto): User | null`. Use `Partial<CreateUserDto>` for UpdateUserDto. Ensure all functions are fully typed. Add JSDoc for the API.

### Task 3
Implement a generic `PaginatedResponse<T>` type. Create `listUsers(page: number, limit: number): PaginatedResponse<User>`. Add proper constraints (page >= 1, limit 1-100). Return type should include `data`, `total`, `page`, `limit`, `totalPages`.

### Task 4
Add error types: `NotFoundError`, `ValidationError`. Create a `Result<T, E>` type: `{ ok: true; data: T } | { ok: false; error: E }`. Refactor `getUser` to return `Result<User, NotFoundError>`. Add a type guard `isOk(result)`.

### Task 5
Implement API route types: `Route<Method, Path, Request, Response>`. Create typed route handlers for GET /users, GET /users/:id, POST /users. Use a router type that ensures handler receives correctly typed params and body. Add validation with Zod; infer types from schema.