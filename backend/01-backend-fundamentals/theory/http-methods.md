# HTTP Methods

## Concept

HTTP methods (verbs) define the action the client wants to perform on a resource. GET retrieves, POST creates, PUT updates (replace), PATCH updates (partial), DELETE removes. Each method has semantic meaning and idempotency implications.

## Why It Matters

Using the wrong method leads to broken caching, incorrect retries, and confused clients. REST APIs rely on method semantics for correctness. Idempotents (GET, PUT, DELETE) can be retried safely; non-idempotents (POST) may create duplicates.

## Key Concepts

- GET: read, idempotent, cacheable, no body
- POST: create, non-idempotent, not cacheable
- PUT: replace resource, idempotent
- PATCH: partial update, idempotent when applied to same state
- DELETE: remove, idempotent
- HEAD: like GET but headers only
- OPTIONS: CORS preflight, method discovery

## Code Example

```javascript
// RESTful resource usage
// GET - list
GET /api/users

// GET - single
GET /api/users/1

// POST - create
POST /api/users
Body: { "name": "Alice", "email": "alice@example.com" }

// PUT - replace
PUT /api/users/1
Body: { "name": "Alice Updated", "email": "alice@example.com" }

// PATCH - partial update
PATCH /api/users/1
Body: { "name": "Alice Updated" }

// DELETE - remove
DELETE /api/users/1
```

## Under the Hood

The method is the first token in the request line. Servers parse it and route to handlers. Middleware and frameworks often map methods to controller actions. CORS preflight uses OPTIONS to check allowed methods before the actual request.

## Common Mistakes

- Using GET with a body (undefined behavior, many clients ignore it)
- Using POST for everything when PUT/PATCH/DELETE are appropriate
- Treating PUT and PATCH the same (PUT replaces, PATCH merges)
- Not making idempotent operations idempotent (e.g., POST that creates duplicate on retry)

## Best Practices

- Match method to action: GET (read), POST (create), PUT/PATCH (update), DELETE (remove)
- Use PATCH for partial updates; PUT for full replacement
- Design POST endpoints to be idempotent when possible (e.g., idempotency keys)
- Return 405 Method Not Allowed for unsupported methods

## Summary

HTTP methods define intent: GET (read), POST (create), PUT/PATCH (update), DELETE (remove). Use them correctly for caching, retries, and API clarity.
