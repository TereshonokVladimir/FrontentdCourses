# Horizontal vs Vertical Scaling

## Concept

Vertical scaling (scale up): add more CPU, RAM to one machine. Horizontal scaling (scale out): add more machines. Vertical has limits; horizontal scales further. Stateless design enables horizontal scaling. Load balancers distribute traffic.

## Why It Matters

Traffic grows. Vertical scaling hits hardware limits and single points of failure. Horizontal scaling adds capacity by adding instances. Most production systems scale horizontally. Design for it from the start.

## Key Concepts

- Vertical: bigger machine, simpler, limited
- Horizontal: more machines, requires stateless design
- Load balancer: distributes requests
- Database often the bottleneck when scaling app tier
- Auto-scaling: add/remove instances based on load

## Code Example

```javascript
// Stateless design enables horizontal scaling
// No in-memory session; use Redis
app.use(session({ store: redisStore }))

// No local file storage; use object storage (S3)
await s3.upload(file)

// Connection pooling (each instance has pool)
const pool = new Pool({ max: 20 })
```

## Under the Hood

Load balancer (nginx, ALB, cloud LB) receives requests, forwards to healthy instances. Health checks determine which instances get traffic. Auto-scaler monitors CPU/memory, adds instances when high, removes when low. Database may need read replicas for read scaling.

## Common Mistakes

- Storing state in memory (lost when instance replaced)
- Assuming single instance (file locks, in-memory queues)
- Not using connection pooling (exhaust DB connections)
- Scaling app but not DB

## Best Practices

- Stateless app tier
- External state (DB, Redis, S3)
- Connection pooling
- Scale DB (replicas, sharding) when needed

## Summary

Vertical: bigger machine. Horizontal: more machines. Prefer horizontal; design stateless. Use load balancer and auto-scaling.
