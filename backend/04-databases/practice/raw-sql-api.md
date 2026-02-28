# Practice: Raw SQL API

## Tasks

### Task 1
Build a minimal REST API using raw SQL (no ORM). Endpoints: `GET /users`, `GET /users/:id`, `POST /users` (body: { email, name }). Use Express (or similar) and `pg`. All queries must be parameterized. Return JSON. Handle 404 for GET by id.

### Task 2
Add `GET /users/:id/orders` that returns orders for a user with order items. Use a single query with JOINs or a CTE. Return nested structure: `{ id, total, items: [{ product_id, quantity }] }`. Build the structure in code from flat rows. Ensure no N+1 (one query).

### Task 3
Implement filtering and sorting for `GET /users`: query params `?status=active&sort=created_at&order=desc&limit=10&offset=0`. Build the SQL dynamically but safely: whitelist column names for sort, validate limit/offset as integers. Use parameterized query for status. Prevent SQL injection via whitelist.

### Task 4
Add a search endpoint `GET /users/search?q=alice`. Use `ILIKE` or full-text search. For ILIKE: `WHERE email ILIKE $1 OR name ILIKE $1` with `%${sanitized}%`. Add a GIN index on `to_tsvector('english', email || ' ' || name)` and use `to_tsquery` for better performance. Support both simple and full-text modes via `?mode=simple|fulltext`.

### Task 5
Implement a generic query endpoint for admin (use with caution): `POST /admin/query` with body `{ sql: "SELECT ...", params: [] }`. Restrict to SELECT only: parse SQL, reject if it contains INSERT/UPDATE/DELETE/DROP. Use a read-only DB user for this endpoint. Add row limit (max 1000). Return `{ columns, rows }`. Add authentication (API key or JWT). Document security considerations.
