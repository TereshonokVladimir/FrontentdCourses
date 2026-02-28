# Practice: N+1 Fix

## Tasks

### Task 1
Identify the N+1 in this pattern: fetch 50 orders, then for each order fetch the user. Rewrite using a single query with JOIN. Return the same structure (orders with nested user). Compare query count: before (51) vs after (1).

### Task 2
Fix an N+1 in a nested structure. Given orders with line items (one-to-many), fetch 20 orders with their line items. Use either (1) two queries: orders + line items with `WHERE order_id IN (...)`, or (2) one query with JOIN and group in application code. Implement both and compare.

### Task 3
Implement a generic batch loader for a GraphQL-like resolver. Given a `User` type with a `posts` field, the resolver receives `userIds` and must return `posts` for each user. Write a `batchLoadPosts(userIds)` that fetches all posts in one query and returns a map `userId -> posts`. Ensure correct order and handling of users with no posts.

### Task 4
Integrate DataLoader into an Express + GraphQL (or REST) API. Create a User loader and a Post loader. Ensure each request gets a fresh DataLoader instance (no cross-request caching). Handle errors: if one user fails to load, others should still resolve. Add a test that verifies only 2 queries run for 10 users with posts.

### Task 5
Build a production-ready N+1 prevention system. Support: (1) automatic eager loading based on route or query params (e.g., `?include=user,items`), (2) ORM integration or a thin wrapper that parses include and builds batched queries, (3) logging when N+1 is detected (e.g., >1 query per parent in a loop). Add a middleware that wraps the DB layer and logs query count per request; alert if count exceeds a threshold (e.g., 10).
