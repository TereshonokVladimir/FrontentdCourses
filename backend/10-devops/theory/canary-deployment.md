# Canary Deployment

## Concept

Canary deployment routes a small percentage of traffic to the new version while the majority stays on the old version. You observe metrics (errors, latency) on the canary; if they look good, gradually increase traffic. If not, roll back with minimal impact.

## Why It Matters

Canary reduces risk by limiting blast radius. A bad release affects only a fraction of users. You validate with real production traffic before full rollout. Essential for high-traffic services where even a small failure could impact many users.

## Key Concepts

- **Traffic splitting**: Route X% to new, (100-X)% to old
- **Gradual rollout**: Increase canary % over time (5% → 25% → 50% → 100%)
- **Automated rollback**: Revert if error rate or latency exceeds threshold
- **Metrics-driven**: Use real observability data, not just "it looks fine"
- **User segmentation**: Can target by region, user ID, or random

## Code Example

```yaml
# Kubernetes: Istio VirtualService for canary
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: api
spec:
  hosts:
    - api.example.com
  http:
    - match:
        - headers:
            canary:
              exact: "true"
      route:
        - destination:
            host: api
            subset: v2
          weight: 100
    - route:
        - destination:
            host: api
            subset: v1
          weight: 90
        - destination:
            host: api
            subset: v2
          weight: 10
```

```yaml
# Nginx Ingress: canary by weight
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "10"
spec:
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: api-v2
                port:
                  number: 80
```

## Under the Hood

Ingress controllers or service meshes split traffic based on weight, headers, or cookies. They route to different backend services (v1 vs v2). Monitoring compares canary metrics to baseline; automated systems can roll back if SLOs are violated.

## Common Mistakes

- Starting with too much traffic (50% canary = 50% users at risk)
- Not monitoring the right metrics (latency, error rate, business metrics)
- No automated rollback (manual reaction is too slow)
- Canary and baseline sharing state (sessions, caches)
- Ignoring statistical significance (5% traffic may not show issues)

## Best Practices

- Start with 1–5% traffic; increase gradually
- Define clear success/failure criteria before rollout
- Automate rollback on SLO violation
- Use sticky sessions or avoid them (depending on app)
- Run canary long enough to capture edge cases

## Summary

Canary routes a small % of traffic to the new version. Increase gradually based on metrics; roll back automatically on failure. Limits blast radius and validates with real traffic.
