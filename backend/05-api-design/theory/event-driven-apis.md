# Event-Driven APIs

## Concept

Event-driven APIs publish events when things happen. Consumers subscribe to event types and react. Unlike request-response, the producer doesn't know or wait for consumers. Enables loose coupling, scalability, and eventual consistency across systems.

## Why It Matters

Traditional APIs are request-driven—client asks, server responds. Event-driven flips this—server announces, interested parties react. Good for audit logs, analytics, notifications, and integrating heterogeneous systems. Fits async, scalable architectures.

## Key Concepts

- **Event**: Immutable record of something that happened
- **Producer**: Publishes events to topic/stream
- **Consumer**: Subscribes and processes events
- **Event store**: Kafka, RabbitMQ, AWS EventBridge
- **Schema**: Event payload structure; version for evolution

## Code Example

```javascript
// Producer: Order service publishes on order creation
await eventBus.publish('order.created', {
  eventId: 'evt_abc123',
  eventType: 'order.created',
  timestamp: new Date().toISOString(),
  data: {
    orderId: 'ord_xyz',
    userId: 'usr_123',
    total: 99.99,
    items: [...]
  }
})

// Consumer: Notification service
eventBus.subscribe('order.created', async (event) => {
  await sendEmail(event.data.userId, `Order ${event.data.orderId} confirmed`)
})

// Consumer: Analytics service
eventBus.subscribe('order.created', async (event) => {
  await analytics.track('purchase', event.data)
})
```

## Under the Hood

Producer publishes to topic. Broker (Kafka, etc.) stores and delivers to consumers. Consumers process at their own pace. Events are append-only; consumers can replay. Schema registry helps with evolution. Ordering per partition/key when needed.

## Common Mistakes

- Events too large (full entity dumps)
- No schema versioning (breaking consumers)
- Assuming exactly-once (design for at-least-once, idempotent consumers)
- Synchronous processing in consumer (blocks others)
- No dead letter for failed events

## Best Practices

- Events should be immutable facts; include timestamp, ID
- Version event schemas; support multiple versions during migration
- Design consumers to be idempotent
- Keep events small; reference by ID for full data
- Use dead letter queue; monitor and alert on failures

## Summary

Event-driven APIs publish events for consumers to process. Enables loose coupling and scalability. Design immutable events with schema versioning. Make consumers idempotent. Use for audit, analytics, and integrations.
