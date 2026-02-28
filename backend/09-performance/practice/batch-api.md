# Practice: Batch API

## Tasks

### Task 1
Create a batch GET endpoint: `POST /batch/users` with body `{ "ids": [1, 2, 3, ...] }`. Fetch all users in one query (`WHERE id IN (...)`) and return `{ "users": [...] }` in the same order as requested IDs. For missing IDs, include `null` or omit. Limit to 100 IDs per request.

### Task 2
Implement batch create: `POST /batch/users` with body `{ "users": [{ "name": "A" }, { "name": "B" }, ...] }`. Use a single INSERT with multiple VALUES or a bulk insert method. Return created IDs. Validate input (max 50 items, required fields). Use a transaction.

### Task 3
Add batch update: `PATCH /batch/users` with body `{ "updates": [{ "id": 1, "name": "A1" }, { "id": 2, "name": "B1" }] }`. Use a single query with CASE/WHEN or multiple statements in a transaction. Return updated count. Handle partial failures (some IDs not found).

### Task 4
Implement a batch endpoint that supports multiple operations: `POST /batch` with body `{ "operations": [{ "op": "get", "type": "users", "ids": [1,2] }, { "op": "create", "type": "orders", "data": [...] }] }`. Execute in order; support dependency (e.g., create returns IDs used in next op). Limit total operations (e.g., 20) and items per op.

### Task 5
Build a batch API with rate limiting and backpressure. Accept a queue of batch jobs; process with a worker pool (e.g., 5 concurrent batch jobs). Each job can have up to 100 items. If the queue exceeds 1000 jobs, return 503. Add metrics: queue depth, processing time per batch, throughput (items/sec). Expose `/batch/status` for queue depth and health.
