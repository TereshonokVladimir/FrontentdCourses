# Serverless Overview

## Concept

Serverless (Function as a Service, FaaS) runs code in response to events without managing servers. You deploy functions; the platform handles scaling, availability, and billing per invocation. Backend logic runs in short-lived, stateless containers. Often paired with managed services (DB, queue, storage).

## Why It Matters

Serverless reduces operational burden: no servers to patch, no capacity planning for spiky traffic. Pay per use can be cost-effective for variable workloads. It's a fit for APIs, event processing, and scheduled jobs—but not for long-running or stateful workloads.

## Key Concepts

- **Functions**: Stateless, event-triggered units of code
- **Triggers**: HTTP, queue, object storage, schedule, etc.
- **Cold start**: Delay when a function instance spins up from zero
- **Concurrency limits**: Platform caps simultaneous executions
- **Managed services**: Use DynamoDB, SQS, S3 instead of self-hosted

## Code Example

```javascript
// AWS Lambda: HTTP-triggered API
exports.handler = async (event) => {
  const { httpMethod, path, body } = event
  const requestId = event.requestContext.requestId

  if (httpMethod === 'GET' && path === '/health') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'ok', requestId })
    }
  }

  if (httpMethod === 'POST' && path === '/users') {
    const user = JSON.parse(body || '{}')
    // ... create user in DynamoDB
    return {
      statusCode: 201,
      body: JSON.stringify({ id: user.id })
    }
  }

  return { statusCode: 404, body: 'Not Found' }
}
```

```yaml
# Serverless Framework: deployment config
service: api
provider:
  name: aws
  runtime: nodejs20.x
  region: us-east-1
functions:
  api:
    handler: handler.handler
    events:
      - httpApi: '*'
    timeout: 10
    memorySize: 256
```

## Under the Hood

The platform maintains a pool of execution environments. On invocation, it assigns or creates a container, loads your code, runs it, and may reuse the container for subsequent requests (warm). Billing is per request and compute time. Cold starts add latency when no warm instance exists.

## Common Mistakes

- Long-running logic (hits timeout)
- Storing state in memory (instances are ephemeral)
- Not handling cold starts (first request slow)
- Ignoring concurrency limits (throttling)
- Over-provisioning memory (cost)

## Best Practices

- Keep functions small and focused
- Use external storage (DB, cache) for state
- Optimize cold start (minimal deps, keep packages small)
- Set appropriate timeouts and memory
- Use async/event-driven patterns

## Summary

Serverless runs event-triggered, stateless functions. No server management; pay per use. Optimize for cold start and statelessness. Use managed services for persistence.
