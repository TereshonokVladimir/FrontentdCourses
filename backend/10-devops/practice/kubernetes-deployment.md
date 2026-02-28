# Practice: Kubernetes Deployment

## Tasks

### Task 1
Create a Kubernetes Deployment for a Node.js API. Use a public image (e.g., `nginx` or a simple Node image) for testing. Set replicas to 2, add a label `app: api`, expose port 3000. Create a ClusterIP Service to route traffic to the deployment. Apply with `kubectl` and verify pods are running.

### Task 2
Add liveness and readiness probes to the Deployment. Use HTTP GET on `/health` for both, with `initialDelaySeconds: 10` and `periodSeconds: 5`. Configure resource requests and limits (e.g., 128Mi memory, 100m CPU request; 256Mi, 500m limit). Add a ConfigMap for non-sensitive config (e.g., `LOG_LEVEL`).

### Task 3
Create a Secret for sensitive data (e.g., `DATABASE_URL`) and inject it as an environment variable into the deployment. Use a RollingUpdate strategy with `maxSurge: 1` and `maxUnavailable: 0`. Add a HorizontalPodAutoscaler to scale between 2 and 10 replicas based on CPU utilization (target 70%).

### Task 4
Deploy a full stack: API deployment, PostgreSQL (or use an external DB), and Redis as a sidecar or separate deployment. Use an Ingress resource to expose the API externally with a hostname. Add a PodDisruptionBudget to ensure at least 1 pod is available during voluntary disruptions. Use namespaces to isolate the application.

### Task 5
Implement a production-ready Kubernetes setup: use External Secrets Operator or sealed-secrets for secret management, add NetworkPolicy to restrict pod-to-pod traffic, configure Pod Security Standards (restrict root, read-only filesystem), add resource quotas and limit ranges for the namespace, and document the deployment and rollback procedures.
