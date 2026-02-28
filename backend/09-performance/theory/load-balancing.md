# Load Balancing

## Concept

Load balancing distributes incoming requests across multiple server instances to improve throughput, availability, and resource utilization. It can operate at L4 (TCP) or L7 (HTTP) and use various algorithms.

## Why It Matters

A single server has finite capacity. Load balancers enable horizontal scaling—add more instances to handle more load. They also provide health-based routing, SSL termination, and high availability.

## Key Concepts

- **Round-robin**: Rotate through servers evenly
- **Least connections**: Send to server with fewest active connections
- **IP hash**: Same client to same server (session affinity)
- **Health checks**: Remove unhealthy instances from rotation
- **L4 vs L7**: L4 (TCP) is faster; L7 (HTTP) enables path-based routing, headers

## Code Example

```javascript
// Simple round-robin in-app (for illustration; use nginx/ALB in production)
const servers = ['http://host1:3000', 'http://host2:3000', 'http://host3:3000']
let idx = 0
function getNextServer() {
  const server = servers[idx % servers.length]
  idx++
  return server
}
const target = getNextServer()
const res = await fetch(`${target}/api/data`)
```

## Under the Hood

Load balancers maintain a pool of backend connections. They run health checks (TCP, HTTP). On new request, they select a backend via the algorithm, optionally maintain stickiness via cookie or IP, and forward the request.

## Common Mistakes

- No health checks (traffic to dead instances)
- Sticky sessions without considering instance failure
- Single load balancer (SPOF)
- Wrong algorithm for workload (e.g., IP hash when requests vary widely)

## Best Practices

- Use managed load balancers (ALB, nginx, HAProxy)
- Enable health checks; remove unhealthy backends
- Prefer stateless backends to avoid session affinity
- Consider geographic distribution for global users

## Summary

Load balancing distributes load across instances for scale and availability. Choose the right algorithm, enable health checks, and design for statelessness.
