# Practice: REST API Basics

## Tasks

### Task 1
Implement a REST API for a "tasks" resource. In-memory store. Endpoints: `GET /tasks` (list), `POST /tasks` (create with `{ "title": "..." }`), `GET /tasks/:id` (get one). Return appropriate status codes (200, 201, 404).

### Task 2
Add `PUT /tasks/:id` (full replace) and `PATCH /tasks/:id` (partial update). Validate that `id` exists. Return 400 for invalid body.

### Task 3
Add `DELETE /tasks/:id`. Return 204 on success, 404 if not found. Add `GET /tasks?status=active` filtering by query parameter.

### Task 4
Implement pagination: `GET /tasks?page=1&limit=10`. Return `{ "data": [...], "total": 50, "page": 1, "limit": 10 }`. Validate page and limit (positive integers, max limit 100).

### Task 5
Add request validation: for POST/PUT/PATCH, require `title` (string, 1-200 chars). Return 400 with `{ "error": "Validation failed", "details": [...] }` for invalid input. Add a global 405 handler for unsupported methods.
