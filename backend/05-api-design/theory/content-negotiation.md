# Content Negotiation

## Concept

Content negotiation lets clients and servers agree on the format of request and response bodies. Clients use Accept and Content-Type headers to request and send specific formats (JSON, XML, etc.). Servers respond with the best match they support.

## Why It Matters

APIs may support multiple formats (JSON for apps, XML for legacy). Versioning can use content types (application/vnd.api.v2+json). Proper negotiation ensures clients get data in the format they expect and enables format evolution.

## Key Concepts

- **Accept**: What response format the client wants
- **Content-Type**: Format of request/response body
- **Accept-Language**: Preferred language (for localized messages)
- **Quality values**: `Accept: application/json;q=1, application/xml;q=0.5`
- **Vendor types**: `application/vnd.myapi.v1+json` for versioned formats

## Code Example

```javascript
// Client requests JSON
GET /api/v1/users
Accept: application/json

// Client sends JSON
POST /api/v1/users
Content-Type: application/json
Body: { "name": "Jane", "email": "jane@example.com" }

// Server responds with Content-Type
Content-Type: application/json; charset=utf-8

// Version in content type
Accept: application/vnd.myapi.v2+json

// Multiple preferences
Accept: application/json;q=1.0, application/xml;q=0.8
```

## Under the Hood

Server parses Accept, matches against supported types, picks best match. Default to JSON if no Accept or no match. Content-Type on request tells server how to parse body. Mismatched Content-Type can cause 415 Unsupported Media Type or 406 Not Acceptable.

## Common Mistakes

- Ignoring Accept header (always returning JSON)
- Not setting Content-Type on response
- Accepting any Content-Type on POST (security risk)
- No 415/406 for unsupported formats
- Inconsistent charset (utf-8) in Content-Type

## Best Practices

- Support JSON by default; document other formats
- Validate Content-Type on requests with body
- Return 415 for unsupported request format
- Return 406 if no Accept match (or default to JSON)
- Use vendor types for versioned formats

## Summary

Content negotiation uses Accept and Content-Type. Support JSON by default. Validate request format, return proper 415/406 when unsupported. Use vendor types for API versioning in content type.
