# Practice: DTO Creation

## Tasks

### Task 1
Given an entity `User { id, name, email, passwordHash, createdAt }`, create `UserResponse` (exclude passwordHash), `CreateUserDto` (exclude id, createdAt), `UpdateUserDto` (partial CreateUserDto). Use utility types. Add a `toResponse(user: User): UserResponse` function.

### Task 2
Create `ListUsersQuery` for query params: page, limit, search?, sort?, order?. Create `ListUsersResponse` with data, total, page, limit. Ensure types are consistent with the API. Add a `fromQuery(query: unknown): ListUsersQuery` using Zod.

### Task 3
Implement nested DTOs: `Order` has `user: User`, `items: OrderItem[]`. Create `OrderResponse` with `user: UserResponse` and `items: OrderItemResponse[]`. Create `CreateOrderDto` with `userId` and `items: { productId, quantity }[]`. Add transformation functions.

### Task 4
Add API versioning: `UserResponseV1` (id, name, email) and `UserResponseV2` (adds createdAt, updatedAt). Create a generic `VersionedResponse<T, V>` or overloaded `toResponse(user, version)`. Support version from header or query.

### Task 5
Implement a DTO builder: `DtoBuilder<T>()` with `.pick(...keys)`, `.omit(...keys)`, `.extend<U>(extra)`, `.build()`. The builder should produce a type and a runtime transformer. Use for generating CreateUserDto from User with a fluent API. Ensure type safety throughout.