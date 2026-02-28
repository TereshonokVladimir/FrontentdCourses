# GitHub Actions

## Concept

GitHub Actions is a CI/CD platform integrated with GitHub. You define workflows in YAML files stored in `.github/workflows/`. Workflows run on events (push, PR, schedule) and execute jobs on GitHub-hosted or self-hosted runners. It supports secrets, artifacts, and matrix builds.

## Why It Matters

GitHub Actions is free for public repos and has generous limits for private repos. Tight integration with GitHub (PR checks, status badges, deployment environments) makes it the default choice for many teams. No separate CI server to maintain.

## Key Concepts

- **Workflow**: Top-level config; triggered by events
- **Job**: Set of steps; runs on a runner; jobs can depend on each other
- **Step**: Single task; uses an action or runs a script
- **Actions**: Reusable units (checkout, setup-node, deploy)
- **Secrets**: Encrypted env vars for tokens, keys

## Code Example

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [18, 20]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --coverage
      - uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: ./scripts/deploy.sh
```

## Under the Hood

GitHub receives the event, queues the workflow, and allocates a runner. The runner clones the repo, runs each step (actions are JavaScript or Docker), and reports status. Artifacts are uploaded to GitHub storage. Secrets are decrypted only in the runner environment.

## Common Mistakes

- Not caching dependencies (slow builds)
- Using `actions/checkout` without ref for reusable workflows
- Exposing secrets in logs (use `${{ secrets.X }}` correctly)
- Running deploy on every branch (use `if` or branch filters)
- Not setting `working-directory` for monorepos

## Best Practices

- Cache npm/pip/go dependencies
- Use `environment` for deployment approval gates
- Pin actions with full SHA for security
- Use matrix for multi-version testing
- Store artifacts for deployment jobs

## Summary

GitHub Actions runs CI/CD from repo YAML. Define workflows, jobs, and steps; use actions for reuse. Cache deps, use secrets, and gate deploys with environments.
