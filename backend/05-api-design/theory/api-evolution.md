# API Evolution

## Concept

API evolution is how you change an API over time without breaking existing clients. Strategies include additive changes (new fields, endpoints), deprecation with notice, and versioning for breaking changes. The goal is to support old clients while enabling new functionality.

## Why It Matters

APIs live for years. Requirements change. Breaking changes without strategy cause outages and angry integrators. Thoughtful evolution lets you improve the API while maintaining stability and trust.

## Key Concepts

- **Additive**: New optional fields, new endpoints—no breaking change
- **Deprecation**: Mark old as deprecated; sunset date; migrate clients
- **Versioning**: New major version for breaking changes
- **Compatibility**: Default values for removed required fields; ignore unknown
- **Communication**: Changelog, email, headers (Deprecation, Sunset)

## Code Example

```javascript
// Additive: new optional field
// Old clients ignore; new clients use
{ "id": "1", "name": "Jane", "preferences": { "theme": "dark" } }

// Deprecation headers
Deprecation: true
Sunset: Sat, 01 Jun 2025 00:00:00 GMT
Link: <https://api.example.com/v2/docs>; rel="successor-version"

// Versioning for breaking change
// v1: "price" in cents
// v2: "amount" in dollars (breaking)
GET /api/v1/products  -> { "price": 999 }
GET /api/v2/products  -> { "amount": 9.99 }
```

## Under the Hood

Additive changes are safe if clients ignore unknown fields. Removing fields or changing types is breaking. Deprecation gives clients time to migrate. Versioning isolates breaking changes. Backward compatibility requires discipline—every change evaluated for impact.

## Common Mistakes

- Breaking changes without version bump
- No deprecation period (remove immediately)
- Changing field meaning (price format) without version
- Not communicating changes to integrators
- Too many versions to maintain

## Best Practices

- Prefer additive changes; avoid breaking when possible
- Deprecate with 6–12 month notice
- Use Sunset header with date
- Version only for breaking changes
- Maintain changelog; notify integrators of deprecations

## Summary

Evolve APIs additively when possible. Deprecate with notice and sunset date. Use versioning for breaking changes. Communicate changes clearly. Balance innovation with stability.
