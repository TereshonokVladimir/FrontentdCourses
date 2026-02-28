# Rolling Deployment

## Concept

Rolling deployment updates instances gradually: new ones are started, old ones are terminated, one or a few at a time. The service stays available throughout; total capacity may briefly increase (surge) or decrease (unavailable) depending on configuration.

## Why It Matters

Rolling is the default strategy for most orchestrators (Kubernetes, ECS). It requires no extra capacity, works with any number of replicas, and is simple to reason about. Understanding surge and unavailable settings is critical for zero-downtime deployments.

## Key Concepts

- **Incremental replacement**: Pods/instances updated in batches
- **maxSurge**: Extra capacity allowed during update (e.g., +1 pod)
- **maxUnavailable**: How many can be down during update (0 = always serve)
- **Readiness**: New instances receive traffic only when ready
- **Rollback**: Same process in reverse (revert to previous version)

## Code Example

```yaml
# Kubernetes: Rolling update configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Can have 6 pods during update
      maxUnavailable: 0  # Always keep 5 pods serving
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: api:v2
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 2
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            periodSeconds: 10
```

```bash
# Trigger rolling update
kubectl set image deployment/api api=api:v2
kubectl rollout status deployment/api

# Rollback if needed
kubectl rollout undo deployment/api
```

## Under the Hood

The deployment controller computes how many new pods to create and old ones to terminate based on maxSurge and maxUnavailable. It creates new pods with the updated spec; once they pass readiness, they receive traffic. Old pods are terminated. The process repeats until all pods are updated.

## Common Mistakes

- maxUnavailable > 0 for critical services (reduced capacity during deploy)
- No readiness probe (traffic to starting pods)
- Slow readiness (deploy takes forever)
- Session affinity without considering rolling (users stuck on old pods)
- Not testing rollback (undo can fail)

## Best Practices

- Use maxUnavailable: 0 for user-facing services
- Set fast, accurate readiness probes
- Ensure backward compatibility (old and new can run simultaneously)
- Test rollback procedure regularly
- Use PodDisruptionBudget for extra safety

## Summary

Rolling deployment updates instances gradually. Configure maxSurge and maxUnavailable; use readiness probes. Default choice for stateless services; zero extra capacity required.
