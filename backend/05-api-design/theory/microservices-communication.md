# Microservices Communication

## Concept

Microservices communicate to fulfill requests. Synchronous communication uses HTTP/gRPC—request-response, blocking. Asynchronous uses message queues—fire-and-forget, eventual consistency. Choice depends on coupling, latency, and consistency requirements.

## Why It Matters

Service boundaries define your system. Sync is simple but creates coupling and latency chains. Async decouples but adds complexity (ordering, idempotency, dead letter). Choosing the right pattern affects scalability and reliability.

## Key Concepts

- **Sync (HTTP/gRPC)**: Request-response; caller waits; tight coupling
- **Async (message queue)**: Producer publishes; consumer processes later
- **Request-reply over queue**: Async request with correlation ID for response
- **Circuit breaker**: Stop calling failing service; fail fast
- **Service mesh**: Handles discovery, load balancing, retries at infrastructure layer

## Code Example

```javascript
// Synchronous: Orders service calls Inventory
const response = await fetch(`http://inventory-service/check`, {
  method: 'POST',
  body: JSON.stringify({ productId, quantity })
})
const { available } = await response.json()

// Async: Publish event, don't wait
await eventBus.publish('order.created', {
  orderId: order.id,
  items: order.items,
  userId: order.userId
})
// Inventory service subscribes and updates stock
```

## Under the Hood

Sync: HTTP client in service A calls service B. Network latency adds up. Failure in B fails A. Async: Producer publishes to Kafka/RabbitMQ. Consumer processes when ready. Decoupled but need to handle duplicates, ordering, and retries.

## Common Mistakes

- Sync chains (A->B->C->D) causing latency and cascade failures
- No timeout on sync calls (hanging requests)
- Async without idempotency (duplicate processing)
- No dead letter queue for failed messages
- Mixing sync and async without clear boundaries

## Best Practices

- Prefer async for non-critical path; sync for user-facing
- Set timeouts on all sync calls
- Use circuit breaker for sync to failing services
- Make async consumers idempotent
- Use correlation ID for tracing across services

## Summary

Sync is simple but couples services. Async decouples but needs idempotency and error handling. Use sync for request-response needs; async for events and background work. Set timeouts, use circuit breakers, and trace across services.
