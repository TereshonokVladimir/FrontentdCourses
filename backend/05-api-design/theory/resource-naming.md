# Resource Naming

## Concept

Resource naming defines how you identify and address entities in your API. Good naming uses nouns (not verbs), plural forms for collections, and hierarchical paths that reflect relationships. URLs should be predictable and self-documenting.

## Why It Matters

Consistent, intuitive naming reduces client integration time, improves discoverability, and makes APIs easier to maintain. Poor naming leads to confusion, inconsistent patterns, and harder-to-use APIs.

## Key Concepts

- **Nouns, not verbs**: `/users` not `/getUsers`
- **Plural for collections**: `/orders` not `/order`
- **Hierarchical relationships**: `/users/123/orders` for user's orders
- **Lowercase and hyphens**: `/order-items` not `/orderItems`
- **Avoid file extensions**: `/api/users` not `/api/users.json`

## Code Example

```javascript
// Good resource naming
GET    /api/v1/users              // Collection
GET    /api/v1/users/42           // Single resource
GET    /api/v1/users/42/orders    // Sub-resource
POST   /api/v1/users/42/orders    // Create sub-resource

// Query params for filtering, not path segments
GET    /api/v1/orders?status=shipped
GET    /api/v1/users?role=admin

// Bad naming
GET    /api/getUsers              // Verb in URL
GET    /api/user/42                // Singular for single (OK for member, but collection should be plural)
GET    /api/users/42/getOrders     // Verb in URL
POST   /api/createOrder            // Action in URL
```

## Under the Hood

URLs are the primary identifier for REST resources. Clients and caches use them as keys. Consistent naming enables predictable routing, easier documentation, and better tooling support. Hierarchical paths map to nested routing and authorization models.

## Common Mistakes

- Verbs in URLs (getUser, createOrder, deleteItem)
- Singular for collections (/user instead of /users)
- Inconsistent casing (orderItems vs order-items)
- Putting filter criteria in path (/orders/shipped instead of ?status=shipped)
- Deep nesting (/a/1/b/2/c/3/d/4)

## Best Practices

- Use plural nouns for collections
- Use 2–3 levels max for nesting; flatten when possible
- Use hyphens for multi-word resources
- Keep URLs stable; avoid exposing internal IDs in paths when possible
- Use query params for filtering, sorting, pagination

## Summary

Resource naming should use plural nouns, hierarchical paths for relationships, and query params for operations. Keep URLs predictable, consistent, and shallow to build maintainable APIs.
