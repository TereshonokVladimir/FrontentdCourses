# Deployment Strategies

## Concept

Deployment strategies define how new versions of an application replace old ones in production. They balance risk, downtime, rollback speed, and resource usage. The right strategy depends on traffic, statefulness, and tolerance for failure.

## Why It Matters

Bad deployments cause outages, data loss, and user impact. Choosing and implementing the right strategy reduces risk, enables fast rollbacks, and supports continuous delivery. Backend engineers must understand trade-offs.

## Key Concepts

- **Rolling**: Replace instances gradually; no extra capacity
- **Blue-Green**: Two identical environments; switch traffic at once
- **Canary**: Route a small % of traffic to new version first
- **Recreate**: Stop all, deploy all; simple but causes downtime
- **A/B**: Route by user segment for experimentation

## Code Example

```yaml
# Kubernetes: Rolling deployment (default)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Allow 1 extra pod during update
      maxUnavailable: 0  # Never take down existing pods
  template:
    spec:
      containers:
        - name: api
          image: api:v2
```

```yaml
# Blue-Green: Two deployments, switch service selector
# Blue (current)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-blue
spec:
  replicas: 5
  template:
    metadata:
      labels:
        app: api
        version: blue
---
# Green (new)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-green
spec:
  replicas: 5
  template:
    metadata:
      labels:
        app: api
        version: green
---
# Service switches by changing selector
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector:
    app: api
    version: green  # Switch from blue to green
  ports:
    - port: 80
      targetPort: 3000
```

## Under the Hood

Rolling: orchestrator replaces pods one-by-one (or in batches) while keeping the rest running. Blue-Green: two full environments; load balancer or service selector switches. Canary: ingress/servicemesh splits traffic by weight. Each strategy has different resource and rollback characteristics.

## Common Mistakes

- Using Recreate for user-facing services (downtime)
- Blue-Green without database migration strategy
- Canary with too small a sample (false confidence)
- Not testing rollback procedure
- Ignoring session affinity during rolling updates

## Best Practices

- Prefer rolling for stateless services; blue-green for critical releases
- Use canary when validating new versions with real traffic
- Always have a tested rollback plan
- Consider database migrations (backward compatible)
- Use feature flags for gradual rollout of behavior

## Summary

Deployment strategies control how new versions replace old ones. Rolling is default; blue-green for instant switch; canary for validation. Choose based on risk tolerance and resources.
