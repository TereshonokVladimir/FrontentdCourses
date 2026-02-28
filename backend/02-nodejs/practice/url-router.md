# Practice: URL Router

## Tasks

### Task 1
Create a simple router: `router.get(path, handler)` and `router.route(req)`. Match exact paths. Return the handler for `GET /users` when registered. Return null or 404 handler for no match. Support `POST`, `PUT`, `DELETE` as well. Store routes in a Map keyed by `method:path`.

### Task 2
Add path parameters: `/users/:id` matches `/users/123` and provides `{ id: '123' }` to the handler. Use a simple regex or split and compare. Support multiple params: `/users/:userId/posts/:postId`. Parse the path and extract values by position.

### Task 3
Implement wildcard routes: `/files/*` matches `/files/a/b/c`. Capture the rest as a single param. Support optional segments: `/users/:id?` matches both `/users` and `/users/123`. For optional, pass `undefined` when not present.

### Task 4
Add middleware per route: `router.get('/admin', authMiddleware, handler)`. Middlewares run before the handler. Support multiple middlewares. If any middleware calls `next(err)`, skip to error handler. Support route-level and global error handlers.

### Task 5
Implement route precedence: more specific routes before generic. E.g., `/users/me` before `/users/:id`. Add support for regex routes: `router.get(/^\/v(\d+)\//, handler)` for versioned paths. Build a trie or sorted list for efficient matching. Support `router.all(path, handler)` for any method. Add a `router.match(method, path)` that returns `{ handler, params, middlewares }` for testing.