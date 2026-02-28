# CORS

## Concept

Cross-Origin Resource Sharing (CORS) is a browser mechanism that restricts which origins can access your API from JavaScript. When a frontend at `https://app.example.com` calls `https://api.example.com`, the browser sends a preflight OPTIONS request; the server responds with headers indicating allowed origins, methods, and headers.

## Why It Matters

Browsers enforce same-origin policy; without CORS headers, cross-origin API calls fail. Misconfiguration can block legitimate clients or expose your API to unintended origins. Production backends must configure CORS explicitly—never use `*` for credentialed requests.

## Key Concepts

- Origin: protocol + domain + port (e.g., `https://app.example.com`)
- Preflight: OPTIONS request before PUT/POST with custom headers
- Access-Control-Allow-Origin: which origins can access
- Credentials: `Access-Control-Allow-Credentials: true` allows cookies; requires specific origin, not `*`

## Code Example

```typescript
app.use(cors({
  origin: ['https://app.example.com', 'https://admin.example.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
```

## Under the Hood

For "simple" requests (GET, POST with basic headers), the browser sends the request and checks the response's `Access-Control-Allow-Origin`. For others, it sends OPTIONS first; the server responds with allowed origin, methods, headers. If the actual request matches, the browser allows it. The server must handle OPTIONS and echo the right headers.

## Common Mistakes

- Using `origin: '*'` with `credentials: true` (browsers reject)
- Not including all origins that need access (e.g., staging, mobile web)
- Blocking OPTIONS or not returning correct headers
- Allowing overly broad origins (e.g., `*.example.com` when not needed)

## Best Practices

- Whitelist specific origins; avoid `*` for production
- Use `credentials: true` only when sending cookies; then origin must be specific
- Mirror `Origin` header in response when dynamically allowing
- Document CORS requirements for API consumers

## Summary

CORS controls which origins can call your API from the browser. Whitelist origins; avoid `*` with credentials. Handle preflight OPTIONS correctly.
