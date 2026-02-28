# HTTP Status Codes

## Concept

HTTP status codes are three-digit numbers in the response that indicate the result of the request. 2xx success, 3xx redirect, 4xx client error, 5xx server error. The client and intermediaries use them for routing, caching, and error handling.

## Why It Matters

Wrong status codes break client logic, caching, and monitoring. Retries are often triggered by 5xx; 4xx means "don't retry." Load balancers and health checks use status codes. Proper codes are essential for production correctness.

## Key Concepts

- 2xx: success (200 OK, 201 Created, 204 No Content)
- 3xx: redirect (301 Moved Permanently, 302 Found, 304 Not Modified)
- 4xx: client error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
- 5xx: server error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
- 204: success with no body (delete, update)

## Code Example

```javascript
// Correct status code usage
res.status(200).json(user)           // GET success
res.status(201).json(createdUser)    // POST created
res.status(204).send()               // DELETE success
res.status(400).json({ error: 'Invalid input' })
res.status(401).json({ error: 'Unauthorized' })
res.status(403).json({ error: 'Forbidden' })
res.status(404).json({ error: 'Not found' })
res.status(500).json({ error: 'Internal server error' })
```

## Under the Hood

The status line is the first line of the HTTP response. Clients parse it and branch behavior. Caching uses 304; redirects use 3xx; error handlers use 4xx/5xx. Monitoring systems often alert on 5xx rates.

## Common Mistakes

- Returning 200 for errors (with error in body)—breaks clients and monitoring
- Using 500 for validation errors (should be 400)
- Using 401 when you mean 403 (401 = not authenticated, 403 = not authorized)
- Returning 404 for "resource exists but user can't see it" (use 403 or 404 depending on security)

## Best Practices

- 2xx for success, 4xx for client mistakes, 5xx for server failures
- 201 for created resources; include Location header
- 204 for successful delete/update with no body
- Use 503 when overloaded (retry-after header)

## Summary

Status codes communicate result: 2xx success, 4xx client error, 5xx server error. Use them correctly for clients, caching, and operations.
