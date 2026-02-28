# Practice: CRUD Operations

## Tasks

### Task 1
Create a `products` table with columns: `id` (SERIAL PRIMARY KEY), `name` (VARCHAR 255), `price` (DECIMAL 10,2), `created_at` (TIMESTAMPTZ default NOW()). Write parameterized INSERT, SELECT by id, UPDATE, and DELETE. Use a PostgreSQL connection (pg or similar).

### Task 2
Add a `categories` table with `id` and `name`. Add `category_id` foreign key to `products`. Implement: create product with category, list products by category, update product category. Handle "category not found" with proper error response.

### Task 3
Implement pagination for product listing. Accept `page` (1-based) and `limit` (default 10, max 100). Return products with total count. Use OFFSET/LIMIT. Add optional `sort` by `name` or `price` (asc/desc).

### Task 4
Add soft delete: add `deleted_at` (TIMESTAMPTZ, nullable) to products. UPDATE sets `deleted_at = NOW()` instead of DELETE. All SELECTs must filter `WHERE deleted_at IS NULL`. Implement "restore" (set deleted_at to null) and "list deleted" endpoint.

### Task 5
Implement bulk operations: `bulkCreate` (insert multiple products in one query), `bulkUpdate` (update multiple by id with different values using unnest or VALUES), and `bulkDelete` (delete by array of ids). Use a single transaction for each bulk operation. Return affected row counts.
