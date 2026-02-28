# Practice: Scaling Strategy

## Tasks

### Task 1
Document a scaling strategy for a monolithic REST API. List the order of operations: (1) vertical scaling (when?), (2) read replicas (when?), (3) horizontal scaling of app (when?). Include a simple decision tree or flowchart. Specify metrics that trigger each step (e.g., CPU > 70%, DB connections > 80%).

### Task 2
Implement health checks for a load balancer. Create `/health/live` (process alive) and `/health/ready` (ready to receive traffic: DB connected, cache connected). The ready check should fail if dependencies are down. Use these in a simple multi-instance setup (e.g., 2 Node processes, nginx or a simple round-robin).

### Task 3
Design a stateless session strategy. Move session storage from in-memory to Redis. Implement a session middleware that reads/writes session by cookie ID to Redis. Ensure that any instance can handle any request. Add session TTL (e.g., 24 hours). Test with 2 instances and verify session persists across instance boundaries.

### Task 4
Create an auto-scaling simulation. Given metrics (CPU, RPS) over time, simulate scale-up and scale-down decisions. Rules: scale up when CPU > 80% for 2 minutes; scale down when CPU < 20% for 5 minutes. Output: at each minute, how many instances. Consider cooldown (don't scale down immediately after scale up).

### Task 5
Build a scaling runbook. Document: (1) how to add/remove instances, (2) how to verify load balancer is routing correctly, (3) how to handle a failing instance (drain, remove from LB), (4) database scaling (read replica, connection pool), (5) cache scaling (Redis cluster). Include commands, checklists, and rollback steps. Add a "chaos" test: kill one instance and verify the system continues serving traffic.
