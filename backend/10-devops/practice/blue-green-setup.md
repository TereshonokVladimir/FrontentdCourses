# Practice: Blue-Green Setup

## Tasks

### Task 1
Create two Kubernetes Deployments: `api-blue` and `api-green`, each with 2 replicas and distinct version labels (`version: blue`, `version: green`). Create a Service that selects the active deployment via `version` label. Manually switch traffic by updating the Service selector. Verify that only the selected deployment receives traffic.

### Task 2
Write a script `switch.sh` that accepts `blue` or `green` as argument. The script should update the Service selector to route traffic to the specified deployment. Add a pre-switch validation: verify the target deployment has all pods ready. Exit with an error if the target is not healthy. Add a `--dry-run` option.

### Task 3
Implement a full blue-green deployment flow: build new image, deploy to the idle environment (e.g., green when blue is live), run smoke tests against the idle environment's endpoint (use a separate Service or port), and only then run the switch script. Store the "last deployed" version in a ConfigMap or annotation for rollback reference.

### Task 4
Add database migration support: before switching, run migrations against the database (both blue and green share the same DB). Ensure migrations are backward compatible so the old version still works. Add a `--skip-migrations` flag for cases when no schema changes exist. Document the expand-contract migration pattern.

### Task 5
Build a blue-green system with automation: use GitHub Actions or similar to deploy to idle env, run integration tests, and switch on success. Add automated rollback if error rate or latency spikes within 5 minutes of switch (use Prometheus metrics or a simple script). Implement connection draining (wait for in-flight requests to complete) before terminating old pods. Create a runbook for manual rollback.
