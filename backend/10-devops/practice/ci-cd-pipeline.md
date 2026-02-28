# Practice: CI/CD Pipeline

## Tasks

### Task 1
Design a minimal CI pipeline with three stages: Install, Test, Build. Use any CI platform (GitHub Actions, GitLab CI, or Jenkins). Each stage runs sequentially; the pipeline fails if any stage fails. Document the pipeline in a config file (e.g., `.github/workflows/ci.yml`).

### Task 2
Add a deploy stage that runs only when the pipeline is triggered from the default branch. Use a placeholder script `./deploy.sh` that echoes the environment and version. Pass the git commit SHA as the deployment version. Add a manual approval gate before deploy (if the platform supports it).

### Task 3
Implement pipeline caching for dependencies. For Node.js, cache `node_modules` or `~/.npm` with a key derived from `package-lock.json`. Measure and document the build time improvement. Add a job that runs in parallel to generate a coverage report and fail if coverage drops below a threshold.

### Task 4
Add a staging and production deployment. Staging deploys automatically on merge to `develop`; production requires manual approval and deploys from `main`. Use different environment variables (injected as secrets) for each. Add a rollback script that can revert to the previous deployment.

### Task 5
Build a full CI/CD pipeline with: parallel test jobs (unit, integration), Docker image build and push to a registry with tags (branch name, commit SHA, `latest` for main), deployment to Kubernetes or a cloud platform, and post-deploy smoke tests. Add pipeline notifications (Slack/email) for success and failure. Document the entire flow in a runbook.
