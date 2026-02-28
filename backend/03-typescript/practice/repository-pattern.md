# Practice: Repository Pattern

## Tasks

### Task 1
Define a generic `Repository<T, Id = string>` interface: `findById(id: Id): Promise<T | null>`, `findAll(): Promise<T[]>`, `save(entity: T): Promise<T>`, `delete(id: Id): Promise<boolean>`. Assume T has `id: Id`. Create an in-memory implementation for `User`.

### Task 2
Add `findBy(filter: Partial<T>): Promise<T[]>`. Add `exists(id: Id): Promise<boolean>`. Create a generic `createInMemoryRepository<T extends { id: Id }, Id = string>(): Repository<T, Id>`. Support any entity type.

### Task 3
Implement `PaginatedRepository<T>` extending Repository with `findPage(page: number, limit: number): Promise<{ data: T[]; total: number }>`. Create an in-memory implementation. Add optional `sortBy` and `order` parameters.

### Task 4
Create a `CachedRepository<T>` that wraps a Repository and caches findById. Cache key = id. Add TTL (optional). Invalidate on save/delete. Use a generic decorator pattern: `new CachedRepository(userRepo, { ttl: 60 })`.

### Task 5
Build a `TransactionalRepository<T>` that supports `withTransaction<R>(fn: (repo: Repository<T>) => Promise<R>): Promise<R>`. For in-memory, "transaction" means all operations in fn see a snapshot; on success commit, on error rollback. Simulate with a copy-on-write approach. Document limitations.