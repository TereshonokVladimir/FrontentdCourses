# Client-Server Architecture

## Concept

Client-server architecture is a distributed application structure that partitions tasks between service providers (servers) and service requesters (clients). The client initiates requests; the server processes them and returns responses. This separation enables scalability, maintainability, and clear responsibility boundaries.

## Why It Matters

Every backend system you build operates in this model. Web APIs, microservices, databases—all follow client-server patterns. Understanding it helps you design systems that scale, debug request flows, and reason about where logic should live.

## Key Concepts

- Client initiates communication; server listens and responds
- Stateless servers scale horizontally; stateful requires session affinity
- Network latency, timeouts, and retries are first-class concerns
- Load balancers distribute requests across multiple server instances
- Backend services can be clients to other backends (service-to-service)

## Code Example

```javascript
// Minimal client-server mental model
// Server (listens)
const server = createServer((req, res) => {
  const { method, url } = req
  if (method === 'GET' && url === '/health') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'ok' }))
  }
})
server.listen(3000)

// Client (requests)
const response = await fetch('http://localhost:3000/health')
const data = await response.json()
```

## Under the Hood

TCP establishes a connection; HTTP runs on top. The server binds to a port and listens. When a client connects, the OS hands the socket to the server process. The server reads the request, processes it, writes the response, and may close the connection (HTTP/1.0) or keep it alive (HTTP/1.1, HTTP/2).

## Common Mistakes

- Putting business logic in the client when it should be server-side (security, consistency)
- Assuming the network is reliable (no retries, no timeouts)
- Storing sensitive state only on the client
- Not designing for server restarts (stateless where possible)

## Best Practices

- Keep servers stateless when scaling horizontally
- Use connection pooling for database and external API calls
- Implement health checks for load balancers
- Design for partial failure (circuit breakers, graceful degradation)

## Summary

Client-server architecture separates requesters from providers. Backends are servers; they listen, process, and respond. Design for statelessness, network failure, and horizontal scaling.
