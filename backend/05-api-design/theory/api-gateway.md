# API Gateway

## Concept

An API gateway is a reverse proxy that sits in front of backend services. It handles cross-cutting concerns: routing, authentication, rate limiting, request/response transformation, and logging. Clients talk to the gateway; the gateway forwards to appropriate services.

## Why It Matters

In microservices, each service could implement auth, rate limiting, and logging. A gateway centralizes these concerns, simplifies clients (one entry point), and enables consistent policies. It also decouples client-facing API from internal service structure.

## Key Concepts

- **Routing**: Route by path, method, header to backend services
- **Authentication**: Validate tokens at gateway; forward user context
- **Rate limiting**: Enforce limits before hitting backends
- **Load balancing**: Distribute across service instances
- **Transformation**: Rewrite paths, aggregate responses

## Code Example

```yaml
# Kong / Nginx-style config
routes:
  - path: /api/v1/orders
    service: orders-service
    plugins:
      - rate-limiting: 100/min
      - jwt-auth
  - path: /api/v1/users
    service: users-service
    plugins:
      - rate-limiting: 200/min
      - jwt-auth

# Request flow
# Client -> Gateway (auth, rate limit) -> Orders Service
# Gateway adds X-User-Id, X-Request-Id to forwarded request
```

## Under the Hood

Gateway receives request, runs middleware (auth, rate limit), matches route, forwards to backend. Backend responds; gateway may transform or aggregate. Gateway can cache responses. Single point of failure—deploy redundantly.

## Common Mistakes

- Gateway as bottleneck (ensure it scales)
- Duplicating logic in gateway and services
- No circuit breaker for backend failures
- Gateway too smart (complex aggregation, business logic)
- Skipping TLS termination at gateway

## Best Practices

- Use gateway for cross-cutting concerns only
- Keep business logic in services
- Implement circuit breaker for backend calls
- Scale gateway horizontally
- Use gateway for TLS termination and request logging

## Summary

API gateway centralizes routing, auth, rate limiting, and logging. It simplifies clients and enforces consistent policies. Keep it thin—no business logic. Scale it and protect backends with circuit breakers.
