# Practice: Branded Types

## Tasks

### Task 1
Create branded types: `UserId`, `OrderId`, `Email`. Each is `string & { readonly __brand: unique symbol }`. Create constructor functions `toUserId(s: string): UserId` (with validation). Ensure UserId and OrderId are not assignable to each other.

### Task 2
Implement `createUser(name: string, email: Email): User` and `getOrder(userId: UserId, orderId: OrderId): Order`. The function signatures should prevent passing userId where orderId is expected. Add runtime validation in constructors (e.g., UUID format for ids).

### Task 3
Create a generic `Brand<T, B>` type: `T & { readonly __brand: B }`. Use it to define `UserId = Brand<string, 'UserId'>`. Create `brand<T, B>(value: T, _brand: B): Brand<T, B>`. Ensure the brand is a type-level only; runtime value is unchanged.

### Task 4
Implement a repository that uses branded ids: `UserRepository.findById(id: UserId)`. The in-memory store uses `Map<UserId, User>`. Ensure you can't pass OrderId to findById. Create a `IdGenerator<Id>()` that returns `() => Id` for generating new ids.

### Task 5
Build a type-safe API client: `ApiClient` has methods `getUser(id: UserId)` and `getOrder(id: OrderId)`. The client constructs URLs. Ensure the path is correct: `/users/${id}` for UserId. Use template literal types. Add a generic `getResource<R, Id>(path: string, id: Id): Promise<R>` that preserves the id type in the path.