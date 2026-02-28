# Practice: Deployment Script

## Tasks

### Task 1
Write a bash script `deploy.sh` that accepts an environment argument (`staging` or `production`). The script should echo the environment, run `npm ci`, `npm run build`, and `npm test`. Exit with code 1 if any step fails. Make the script executable and idempotent (safe to run multiple times).

### Task 2
Extend the script to build a Docker image tagged with the git commit SHA and environment (e.g., `my-api:abc123-staging`). Push the image to a container registry (use env var `REGISTRY`). Add a `--dry-run` flag that prints the commands without executing them. Validate that the working directory is clean (no uncommitted changes) before deploying to production.

### Task 3
Add deployment logic: for a local/VM deployment, use `docker-compose pull` and `docker-compose up -d` with the appropriate compose file. For Kubernetes, use `kubectl set image` or `kubectl apply` with the new image tag. Support a `--rollback` flag that reverts to the previous deployment (store last good version in a file or fetch from registry).

### Task 4
Implement health check after deployment: wait for the new version to respond on `/health` with HTTP 200. Retry up to 10 times with 10-second intervals. If health check fails, automatically rollback and exit with code 1. Add logging with timestamps to a deploy log file. Support `--skip-tests` for emergency hotfixes (with a warning).

### Task 5
Build a production-ready deployment script: use `set -euo pipefail` and trap for cleanup on failure, support config file (YAML/JSON) for environment-specific settings, implement blue-green or canary deployment logic, add Slack/email notification on success/failure, and create a companion rollback script with audit logging. Document the script in a runbook.
