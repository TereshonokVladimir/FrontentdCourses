# HTTP Protocol Basics

## Concept

HTTP (Hypertext Transfer Protocol) is an application-layer protocol for transmitting data between clients and servers. It is request-response based: the client sends a request with a method, URL, headers, and optional body; the server returns a status, headers, and body.

## Why It Matters

HTTP is the foundation of web APIs. Every REST endpoint, every API call, every webhook uses HTTP. Understanding headers, status codes, and message format is essential for debugging, security, and performance.

## Key Concepts

- Request: method, URL, headers, optional body
- Response: status code, headers, body
- Headers: metadata (Content-Type, Authorization, Cache-Control, etc.)
- HTTP is stateless; each request is independent
- HTTPS adds TLS encryption on top of HTTP

## Code Example

```http
GET /api/users/1 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 42

{"id":1,"name":"Alice","email":"alice@example.com"}
```

## Under the Hood

HTTP runs over TCP. The client opens a TCP connection, sends the request as text (or binary in HTTP/2), and waits. The server parses the request, routes it, generates a response, and sends it back. HTTP/1.1 supports keep-alive connections; HTTP/2 multiplexes multiple streams over one connection.

## Common Mistakes

- Ignoring Content-Type (sending JSON without proper header)
- Forgetting to set Content-Length for fixed-length bodies
- Mixing HTTP and HTTPS in redirects
- Not handling chunked transfer encoding

## Best Practices

- Always set Content-Type and Accept headers
- Use appropriate HTTP methods (GET for idempotent reads, POST for creates)
- Return correct status codes (200, 201, 400, 401, 404, 500)
- Use HTTPS in production

## Summary

HTTP is request-response over TCP. Request has method, URL, headers, body; response has status, headers, body. Headers and status codes are critical for correct API behavior.
