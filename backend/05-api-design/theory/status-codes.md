# Status Codes

## Concept

HTTP status codes communicate the result of a request in a machine-readable way. They fall into five classes: 2xx success, 3xx redirection, 4xx client error, 5xx server error. Choosing the right code helps clients handle responses correctly and enables proper error handling.

## Why It Matters

Correct status codes enable automatic retry logic (retry 5xx, not 4xx), proper caching (304 Not Modified), and clear error handling. Incorrect codes mislead clients and break tooling that relies on HTTP semantics.

## Key Concepts

- **2xx**: Success—200 OK, 201 Created, 204 No Content
- **3xx**: Redirection—301 Moved, 304 Not Modified
- **4xx**: Client error—400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity
- **5xx**: Server error—500 Internal, 502 Bad Gateway, 503 Unavailable

## Code Example

```javascript
// Success codes
200 OK           // GET, PUT, PATCH success
201 Created      // POST success; include Location header
204 No Content   // DELETE success, or update with no body

// Client errors
400 Bad Request      // Malformed request, invalid JSON
401 Unauthorized     // Missing or invalid auth
403 Forbidden        // Authenticated but not allowed
404 Not Found        // Resource doesn't exist
409 Conflict         // Version conflict, duplicate
422 Unprocessable    // Valid syntax, invalid semantics

// Server errors
500 Internal Server Error  // Unexpected server failure
502 Bad Gateway           // Upstream failure
503 Service Unavailable   // Overloaded, maintenance
```

## Under the Hood

Status codes are the first line of the HTTP response. Clients use them to decide: cache (200, 304), retry (503), or fail (4xx). Load balancers may route 5xx differently. Monitoring systems alert on 5xx rates. The code is more important than the response body for programmatic handling.

## Common Mistakes

- Returning 200 for errors with `{ "error": "..." }` in body
- Using 401 when 403 is correct (auth vs permission)
- Returning 500 for validation errors (use 400 or 422)
- Using 404 for "not found" in search (empty array + 200 is OK)
- Returning 200 for DELETE (use 204)

## Best Practices

- Use 201 for POST creation with Location header
- Use 204 for successful DELETE or update with no body
- Use 422 for validation errors with field-level details
- Use 503 for overload; include Retry-After when possible
- Always return consistent error body format for 4xx/5xx

## Summary

Status codes communicate outcome. Use 2xx for success, 4xx for client errors, 5xx for server errors. Choose precisely—401 vs 403, 400 vs 422—so clients can handle responses correctly.
