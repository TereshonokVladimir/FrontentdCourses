# Horizontal Scaling

## Concept

Horizontal scaling adds more machines (nodes) to handle increased load, as opposed to vertical scaling (bigger machines). It provides near-linear capacity growth and better fault tolerance.

## Why It Matters

Vertical scaling hits hardware limits and creates single points of failure. Horizontal scaling is the foundation of cloud-native systems—add instances behind a load balancer to handle traffic growth and survive instance failures.

## Key Concepts

- **Stateless design**: Instances interchangeable; no local session state
- **Shared nothing**: Each instance independent; state in DB/cache
- **Auto-scaling**: Add/remove instances based on metrics (CPU, RPS)
- **Data partitioning**: Sharding when single DB can't handle load
- **CAP trade-offs**: Distribution adds consistency/availability trade-offs

## Code Example

```javascript
// Stateless: no in-memory session
// Bad: session in memory
const sessions = new Map() // Lost on restart, not shared across instances

// Good: session in Redis
const session = await redis.get(`session:${sessionId}`)
```

## Under the Hood

Load balancer routes to any healthy instance. Each instance runs the same code; state lives in databases, caches, or object storage. Scaling adds instances; the load balancer distributes new connections.

## Common Mistakes

- Storing session or cache in process memory
- Assuming single-instance (file locks, in-memory queues)
- Not designing for partial failure (one instance down)
- Ignoring data locality when sharding

## Best Practices

- Keep instances stateless; externalize state
- Use distributed cache (Redis) for shared data
- Design for at least one instance failure
- Test with multiple instances before production

## Summary

Horizontal scaling adds capacity by adding instances. Requires stateless design and externalized state. It's the primary scaling strategy for cloud backends.
