# Container Orchestration

## Concept

Container orchestration automates the deployment, scaling, networking, and lifecycle management of containers across a cluster of machines. It handles scheduling (where to run), health monitoring (restart failed containers), load balancing, and rolling updates.

## Why It Matters

Running one container is easy; running hundreds with dependencies, scaling, and failure recovery is not. Orchestrators provide the control plane that makes containerized backends production-ready at scale.

## Key Concepts

- **Scheduling**: Place containers on nodes based on resources, affinity, constraints
- **Self-healing**: Restart failed containers, replace unhealthy nodes
- **Service discovery**: Containers find each other by name, not IP
- **Scaling**: Manual or automatic (HPA) based on load
- **Rolling updates**: Deploy new versions with zero or minimal downtime

## Code Example

```yaml
# Kubernetes: scaling and update strategy
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
        - name: api
          image: api:v2
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "500m"
              memory: "512Mi"
---
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

## Under the Hood

Orchestrators use a control loop: observe current state, compare to desired state, take actions to reconcile. Schedulers score nodes (resources, affinity, taints) and place pods. Controllers watch for failures and scale events. Networking plugins provide pod-to-pod and service discovery.

## Common Mistakes

- No resource limits (one pod can starve the cluster)
- Aggressive rolling update (all pods down at once)
- Ignoring node affinity for stateful workloads
- No pod disruption budgets (evictions during updates)
- Over-relying on single-node orchestrators (Docker Swarm) for large scale

## Best Practices

- Set resource requests and limits on all workloads
- Use PodDisruptionBudgets for critical services
- Configure maxSurge/maxUnavailable for safe rollouts
- Use HPA for traffic-based scaling
- Separate stateless and stateful workloads

## Summary

Container orchestration automates scheduling, healing, scaling, and updates. Use declarative config, set resources, and plan for failure. Kubernetes is the dominant choice for production orchestration.
