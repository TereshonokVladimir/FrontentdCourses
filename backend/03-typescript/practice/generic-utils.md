# Practice: Generic Utilities

## Tasks

### Task 1
Create `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`. Create `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`. Ensure they work with nested object types. Add proper constraints.

### Task 2
Implement `deepPartial<T>` – a recursive Partial that makes all nested properties optional. Handle arrays (array elements become partial). Handle primitives. Ensure it works with `{ a: { b: number } }`.

### Task 3
Create `Nullable<T>` that makes all properties `T[K] | null`. Create `RequiredKeys<T>` – a type that extracts keys of required (non-optional) properties. Use conditional types.

### Task 4
Implement a generic `Repository<T, Id = string>` interface with `findById(id: Id): Promise<T | null>`, `save(entity: T): Promise<T>`, `delete(id: Id): Promise<boolean>`. Create a generic `createInMemoryRepository<T extends { id: Id }, Id = string>(): Repository<T, Id>`.

### Task 5
Build a generic `ApiClient<T>` where T is an object mapping route paths to `{ request: Req; response: Res }`. Implement `get<K extends keyof T>(path: K, params?: T[K]['request']): Promise<T[K]['response']>`. Use conditional types to extract request/response. Add type-safe error handling.