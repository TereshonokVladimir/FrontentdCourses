# Versioning

## Concept

API versioning allows you to evolve an API while maintaining backward compatibility. When you introduce breaking changes, clients on old versions continue to work while new clients adopt the new version. Versioning strategies include URL path, header, query parameter, and content negotiation.

## Why It Matters

APIs evolve. Without versioning, breaking changes break all clients simultaneously. Versioning lets you ship improvements gradually, deprecate old versions with notice, and support multiple client generations in production.

## Key Concepts

- **URL path**: `/api/v1/users`, `/api/v2/users`—most common, explicit
- **Header**: `Accept: application/vnd.api+json;version=2`—clean URLs
- **Query param**: `/api/users?version=2`—simple but discouraged
- **Content-Type**: `application/vnd.myapi.v1+json`—tied to representation

## Code Example

```javascript
// URL path versioning (recommended)
GET /api/v1/users
GET /api/v2/users  // Breaking changes in v2

// Header versioning
GET /api/users
Accept: application/vnd.myapi.v2+json

// Routing logic
app.get('/api/:version/users', (req, res) => {
  const version = req.params.version
  if (version === 'v1') return handleV1Users(req, res)
  if (version === 'v2') return handleV2Users(req, res)
  res.status(404).json({ error: 'Unknown API version' })
})
```

## Under the Hood

Versioning is implemented at the routing layer. Path versioning is easiest to route and cache. Header versioning keeps URLs stable but requires client cooperation. Version selection happens before request processing; different versions may use different handlers, schemas, or databases.

## Common Mistakes

- No versioning until breaking change forces it
- Versioning every endpoint independently (fragments API)
- Removing old versions without deprecation period
- Using query param for version (breaks caching, easy to forget)
- Over-versioning (v1.1, v1.2 for non-breaking changes)

## Best Practices

- Version from day one; start with v1
- Use URL path versioning for simplicity and visibility
- Support at least two versions during deprecation (e.g., 6–12 months)
- Document deprecation in headers: `Deprecation: true`, `Sunset: <date>`
- Avoid breaking changes when possible; extend instead

## Summary

Version APIs to support evolution. Use URL path versioning for clarity. Support multiple versions during deprecation. Document sunset dates and avoid breaking changes when you can extend the API instead.
