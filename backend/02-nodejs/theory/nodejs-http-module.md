# Node.js HTTP Module

## Concept

The built-in `http` (and `https`) module provides low-level HTTP server and client APIs. Create servers with `http.createServer()`, make requests with `http.request()`. Handles request/response streams, headers, and status codes.

## Why It Matters

Express and Fastify wrap this module. Understanding the raw API helps debug frameworks, build lightweight servers, and understand how HTTP works in Node. Useful when frameworks add unnecessary overhead.

## Key Concepts

- `http.createServer((req, res) => {})` – create server
- `req` – IncomingMessage (readable stream, headers, url, method)
- `res` – ServerResponse (writable stream, setHeader, writeHead, end)
- `http.request()` – make outgoing requests
- `req.pipe()` for streaming request body

## Code Example

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }
  res.writeHead(404)
  res.end('Not Found')
})

server.listen(3000, () => console.log('Listening on 3000'))
```

## Under the Hood

http uses the net module (TCP). Parses HTTP messages; req and res are streams. Keep-alive reuses connections. HTTPS uses TLS on top. Node handles chunked encoding and connection management.

## Common Mistakes

- Not calling res.end() (hanging connection)
- Not setting Content-Type
- Blocking in handler (use async)
- Not handling errors on req/res

## Best Practices

- Always end the response
- Use streams for large bodies
- Set proper headers (Content-Type, Content-Length when known)
- Handle client disconnect (req.on('aborted'))

## Summary

http module: createServer, req/res streams, low-level control. Foundation for Express and other frameworks.