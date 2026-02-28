# REST API Concepts

## Concept

REST (Representational State Transfer) is an architectural style for APIs. Resources are identified by URLs; operations use HTTP methods. Stateless, cacheable, uniform interface. Data is typically JSON. REST is a set of constraints, not a strict protocol.

## Why It Matters

Most backend APIs are REST or REST-like. Understanding resource design, URL structure, and statelessness helps you build consistent, scalable APIs that clients and tools expect.

## Key Concepts

- Resources as nouns (e.g., /users, /orders)
- HTTP methods as verbs (GET, POST, PUT, PATCH, DELETE)
- Stateless: each request contains everything needed
- Uniform interface: consistent URL and method usage
- HATEOAS (optional): responses include links to related resources

## Code Example

```javascript
// RESTful resource design
// Collection
GET    /api/users          // List users
POST   /api/users          // Create user

// Member
GET    /api/users/1        // Get user 1
PUT    /api/users/1        // Replace user 1
PATCH  /api/users/1        // Partial update
DELETE /api/users/1        // Delete user 1

// Nested resources
GET    /api/users/1/orders // User 1's orders
POST   /api/users/1/orders // Create order for user 1
```

## Under the Hood

REST is convention, not implementation. Servers route by URL and method. Clients use standard HTTP. Caching works because GET is idempotent and cacheable. Load balancers treat requests independently (stateless).

## Common Mistakes

- Verbs in URLs (POST /createUser instead of POST /users)
- Deep nesting (/users/1/orders/2/items/3)—hard to cache, brittle
- Mixing RPC-style in REST (POST /getUserById)
- Not using proper status codes and methods

## Best Practices

- Nouns for resources, HTTP methods for actions
- Limit nesting to 2–3 levels
- Use query params for filtering (GET /users?status=active)
- Version APIs (e.g., /v1/users)

## Summary

REST: resources as URLs, HTTP methods as actions, stateless. Design clean resource hierarchies and use HTTP correctly.
