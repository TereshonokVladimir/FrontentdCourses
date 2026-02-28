# Practice: ORM Integration

## Tasks

### Task 1
Set up an ORM (Prisma, TypeORM, or Drizzle) with PostgreSQL. Define models: User (id, email, name, createdAt), Post (id, userId, title, body, createdAt). Create migrations. Implement repository methods: createUser, findUserById, findPostsByUserId. Use the ORM's query API. Ensure no raw SQL for basic CRUD.

### Task 2
Add relationships: User hasMany Post, Post belongsTo User. Implement `getUserWithPosts(userId)` that eager loads posts in a single query (include/relations). Implement `createPost(userId, data)` that creates a post and returns it with user. Avoid N+1: verify with query logging that one or two queries are used, not N+1.

### Task 3
Implement pagination with the ORM: `findPosts({ page, limit, sortBy, order })`. Use skip/take or cursor-based pagination. Add filtering: by userId, by title (contains). Use the ORM's query builder. Return `{ data, total, hasMore }`. Add index hints if the ORM supports them.

### Task 4
Implement a transaction that creates a user and their first post atomically. Use the ORM's transaction API (e.g., `prisma.$transaction`). If the post creation fails (e.g., validation), the user should not be created. Add a soft delete: add `deletedAt` to Post, implement `softDeletePost` and ensure all finders exclude deleted by default. Add `findDeletedPosts` for admin.

### Task 5
Build a hybrid approach: use ORM for CRUD, raw SQL for a complex report. Implement `getUserOrderSummary(userId)` with raw SQL: total orders, total spent, last order date, favorite category (most ordered). Use the ORM's raw query method. Map results to a typed DTO. Add a method that uses a raw query with a CTE for "users who bought X also bought Y". Document when to use ORM vs raw in the codebase.
