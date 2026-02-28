# Practice: REST Endpoints

## Tasks

### Task 1
Implement a REST API for a "products" resource with in-memory storage. Endpoints: `GET /api/v1/products` (list all), `POST /api/v1/products` (create with `{ "name": "...", "price": 0 }`), `GET /api/v1/products/:id` (get one). Return appropriate status codes (200, 201, 404).

### Task 2
Add `PUT /api/v1/products/:id` (full replace) and `PATCH /api/v1/products/:id` (partial update). Validate that `id` exists. Return 400 for invalid or missing required fields. Ensure PUT requires all fields; PATCH accepts subset.

### Task 3
Add `DELETE /api/v1/products/:id`. Return 204 No Content on success, 404 if not found. Add `GET /api/v1/products?category=electronics` filtering by query parameter. Support multiple categories if provided.

### Task 4
Implement pagination: `GET /api/v1/products?page=1&limit=10`. Return `{ "data": [...], "pagination": { "page": 1, "limit": 10, "total": 50, "totalPages": 5 } }`. Validate page and limit (positive integers, max limit 100). Add sorting: `?sort=price` or `?sort=-name` (descending).

### Task 5
Add nested resource: `GET /api/v1/products/:id/reviews` and `POST /api/v1/products/:id/reviews` with `{ "rating": 1-5, "comment": "..." }`. Implement proper 404 when product doesn't exist. Add `GET /api/v1/products?minPrice=10&maxPrice=100` for range filtering. Document all endpoints in a README with request/response examples.
