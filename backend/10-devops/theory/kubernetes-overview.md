# Kubernetes Overview

## Concept

Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. It provides declarative configuration, self-healing, load balancing, and rolling updates across a cluster of nodes.

## Why It Matters

Containers alone don't scale—you need scheduling, networking, storage, and lifecycle management. Kubernetes is the de facto standard for running production workloads at scale. Understanding it is essential for backend engineers deploying to cloud or on-prem.

## Key Concepts

- **Pods**: Smallest deployable unit; one or more containers sharing network/storage
- **Deployments**: Declarative updates for Pods; rolling updates, rollbacks
- **Services**: Stable network endpoint for a set of Pods (ClusterIP, NodePort, LoadBalancer)
- **ConfigMaps & Secrets**: Configuration and sensitive data injection
- **Namespaces**: Logical isolation within a cluster

## Code Example

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: my-registry/api:v1.2.3
          ports:
            - containerPort: 3000
          envFrom:
            - configMapRef:
                name: api-config
            - secretRef:
                name: api-secrets
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 5
          resources:
            requests:
              memory: "128Mi"
              cpu: "100m"
            limits:
              memory: "256Mi"
              cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector:
    app: api
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP
```

## Under the Hood

The control plane (API server, scheduler, controller manager, etcd) watches desired state vs actual state. Controllers reconcile: they create/update/delete resources to match the spec. kubelet on each node runs containers. kube-proxy handles service networking.

## Common Mistakes

- Not setting resource requests/limits (noisy neighbors, OOM kills)
- Skipping liveness/readiness probes (traffic to unhealthy pods)
- Storing secrets in ConfigMaps
- Using `latest` or mutable tags
- Not using namespaces for multi-tenant isolation

## Best Practices

- Always set resource requests and limits
- Use liveness for restart, readiness for traffic
- Store secrets in Kubernetes Secrets or external vaults
- Use immutable image tags (git SHA, semantic version)
- Apply least-privilege RBAC

## Summary

Kubernetes orchestrates containers at scale. Use Deployments for apps, Services for networking, ConfigMaps/Secrets for config. Declare desired state; Kubernetes reconciles. Set probes and resources for production readiness.
