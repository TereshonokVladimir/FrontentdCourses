# Hypermedia

## Concept

Hypermedia (HATEOAS—Hypermedia as the Engine of Application State) means API responses include links to related resources and actions. Clients discover next steps from the response instead of hardcoding URLs. Responses are self-describing and navigable.

## Why It Matters

Hypermedia reduces client-server coupling. When URLs change, clients follow links instead of breaking. It enables discoverable APIs and can simplify client logic. Not all APIs need it—REST purists value it; pragmatic APIs often omit it for simplicity.

## Key Concepts

- **Links**: URLs to related resources, next/prev for pagination
- **Actions**: Links with method and metadata for state transitions
- **Embedded resources**: Related data inline with links
- **Link relations**: Standard (self, next, prev) or custom (edit-form, archive)

## Code Example

```javascript
// Response with hypermedia links
{
  "data": {
    "id": "123",
    "status": "pending",
    "total": 99.99,
    "_links": {
      "self": { "href": "/api/v1/orders/123" },
      "customer": { "href": "/api/v1/customers/456" },
      "cancel": {
        "href": "/api/v1/orders/123",
        "method": "DELETE"
      },
      "pay": {
        "href": "/api/v1/orders/123/payment",
        "method": "POST"
      }
    }
  },
  "_links": {
    "self": { "href": "/api/v1/orders?page=1" },
    "next": { "href": "/api/v1/orders?page=2" }
  }
}
```

## Under the Hood

Links are generated per response based on resource state and user permissions. Clients parse _links and follow hrefs. Server must generate correct links for each context. Adds response size and server logic; payoff is flexibility and reduced coupling.

## Common Mistakes

- Including links clients never use (bloat)
- Inconsistent link structure across endpoints
- Links that 404 or require auth client doesn't have
- Over-engineering for simple CRUD APIs
- No documentation of link relations

## Best Practices

- Use hypermedia when URLs may change or clients need discovery
- Standardize link structure (e.g., _links object)
- Use standard relations (self, next, prev) where applicable
- Only include links the client can use (respect auth)
- Document custom link relations

## Summary

Hypermedia embeds links in responses for discoverability and loose coupling. Use when URLs evolve or clients benefit from discovery. Standardize structure and document relations. Skip for simple, stable APIs.
