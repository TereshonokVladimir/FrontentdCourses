# CI/CD Basics

## Concept

Continuous Integration (CI) is the practice of merging code changes frequently and automatically running tests on each merge. Continuous Delivery/Deployment (CD) extends this by automatically deploying validated code to staging or production. Together they form a pipeline from commit to production.

## Why It Matters

Manual builds and deployments are slow, error-prone, and don't scale. CI/CD catches bugs early, reduces deployment anxiety, and enables teams to ship dozens of times per day with confidence.

## Key Concepts

- **CI**: Build + test on every push; fail fast on broken code
- **CD (Delivery)**: Deploy to staging automatically; production requires approval
- **CD (Deployment)**: Deploy to production automatically after passing gates
- **Pipeline stages**: Lint → Build → Test → Package → Deploy
- **Artifacts**: Immutable build outputs (images, binaries) stored for deployment

## Code Example

```yaml
# GitHub Actions: CI pipeline
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

## Under the Hood

CI systems spin up isolated runners (VMs or containers), clone the repo, install dependencies, and execute steps. Each step can fail the pipeline. Artifacts are uploaded to storage. CD stages consume those artifacts and run deployment scripts against target environments.

## Common Mistakes

- Running tests in random order (flaky tests)
- Not caching dependencies (slow builds)
- Deploying without running the same tests locally
- Skipping security scans in the pipeline
- Using mutable tags (e.g., `latest`) for production

## Best Practices

- Keep pipelines fast (< 10 min for CI)
- Use deterministic builds (lockfiles, pinned versions)
- Run the same tests in CI as locally
- Store artifacts with versioned tags
- Use branch protection and required status checks

## Summary

CI runs build and tests on every change; CD deploys validated code. Automate the path from commit to production, use immutable artifacts, and fail fast.
