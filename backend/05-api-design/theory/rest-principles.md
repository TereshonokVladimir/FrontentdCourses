# REST Principles

## Concept

REST (Representational State Transfer) is an architectural style that defines six constraints: client-server separation, statelessness, cacheability, uniform interface, layered system, and code on demand. APIs built on REST principles treat resources as addressable entities and use HTTP semantics for operations.

## Why It Matters

REST enables scalable, maintainable APIs that work across languages and platforms. Understanding the principles helps you design APIs that leverage HTTP infrastructure (caching, load balancing), reduce coupling, and provide predictable behavior for clients.

## Key Concepts

- **Client-Server**: Separation of concerns; clients handle UI, servers handle data and business logic
- **Stateless**: Each request contains all context; no server-side session state between requests
- **Cacheable**: Responses must explicitly define cacheability (Cache-Control, ETag)
- **Uniform Interface**: Resources identified by URI, manipulation through representations, self-descriptive messages, HATEOAS
- **Layered System**: Clients cannot tell if connected to end server or intermediary
- **Code on Demand**: Optional; servers can extend client functionality (e.g., JavaScript)

## Code Example

```javascript
// RESTful design: resources, not actions
// Good: Resource-centric
GET    /api/v1/orders/123
PUT    /api/v1/orders/123
DELETE /api/v1/orders/123

// Bad: RPC-style
POST   /api/getOrder
POST   /api/updateOrder
POST   /api/deleteOrder

// Stateless: all context in request
// Client sends auth token every time
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Cacheable response
Cache-Control: public, max-age=60
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

## Under the Hood

REST is not a protocol but a set of constraints. HTTP provides the transport; REST defines how to use it. Statelessness enables horizontal scaling—any server can handle any request. Cacheability reduces load; intermediaries (CDNs, proxies) can cache GET responses. The uniform interface allows generic clients and tooling.

## Common Mistakes

- Storing session state on the server (violates statelessness)
- Using POST for read operations (breaks cacheability)
- Action-oriented URLs instead of resource-oriented
- Ignoring Cache-Control and ETag headers
- Over-nesting resources (/users/1/orders/2/items/3/shipping/4)

## Best Practices

- Design resources as nouns; use HTTP methods for verbs
- Include Cache-Control and ETag for GET responses
- Keep requests self-contained with auth tokens
- Use standard HTTP status codes consistently
- Limit resource nesting to 2–3 levels

## Summary

REST principles emphasize statelessness, cacheability, and a uniform resource-based interface. Design APIs around resources, use HTTP correctly, and leverage the protocol's built-in capabilities for scaling and caching.
