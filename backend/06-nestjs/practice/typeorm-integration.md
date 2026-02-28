# Practice: TypeORM Integration

## Tasks

### Task 1
Set up `TypeOrmModule.forRoot()` with SQLite for development. Create a `User` entity with `id`, `email`, `name`, `createdAt`. Create `UsersModule` with `TypeOrmModule.forFeature([User])`, `UsersService`, and `UsersController`. Implement `GET /users` and `POST /users` with full CRUD. Use `synchronize: true` only for this task (dev only).

### Task 2
Add a `Product` entity with `id`, `name`, `price`, `userId` (foreign key to User). Create `ProductsModule` with repository. Implement `GET /users/:id/products` to return products for a user. Use `@ManyToOne` and `@OneToMany` relations. Add `GET /products/:id` with `relations: ['user']` to include the owner.

### Task 3
Implement transactions. Create an `OrdersModule` with `Order` and `OrderItem` entities. `POST /orders` should accept `{ userId, items: [{ productId, quantity }] }` and create the order with items in a single transaction. Use `queryRunner` or `@Transaction()`. Rollback on any failure.

### Task 4
Add migrations. Disable `synchronize`. Create a migration that adds a `roles` table and a `user_roles` many-to-many relation to `User`. Use the TypeORM migration CLI. Implement `UsersService.addRole(userId, roleName)` and `UsersService.removeRole(userId, roleName)`. Add `GET /users/:id/roles`.

### Task 5
Implement soft delete for `User`. Add `deletedAt` column and use `@DeleteDateColumn()`. Override `find` to exclude soft-deleted by default. Create a `UsersRepository` that extends `Repository<User>` with a custom `findWithDeleted()` method. Add `PATCH /users/:id/restore` to restore soft-deleted users. Ensure unique constraints (e.g., email) don't conflict with soft-deleted records. Add indexes for common queries (email, createdAt).
