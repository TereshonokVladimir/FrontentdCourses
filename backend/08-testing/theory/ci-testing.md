# CI Testing

## Concept

CI (Continuous Integration) testing runs the test suite automatically on every commit or pull request. It ensures that changes don't break existing functionality before merge. CI testing includes unit, integration, and optionally E2E tests, with results reported back to the developer.

## Why It Matters

Manual testing doesn't scale. CI catches regressions immediately, blocks bad merges, and provides a safety net for refactoring. A well-configured CI pipeline is standard for production backends—teams rely on it for deployment confidence.

## Key Concepts

- Run on push/PR; report status (pass/fail)
- Parallel jobs for speed
- Caching dependencies (npm, Docker layers)
- Fail fast: unit tests first, then integration
- Artifacts: coverage reports, test results

## Code Example

```yaml
# GitHub Actions
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
      - run: npm run test:unit
      - run: npm run test:integration
        env:
          DATABASE_URL: ${{ secrets.TEST_DB_URL }}
      - uses: codecov/codecov-action@v4
        with:
          files: ./coverage/lcov.info
```

## Under the Hood

CI systems (GitHub Actions, GitLab CI, Jenkins) spin up ephemeral environments, install dependencies, run commands, and capture exit codes and output. Caching reduces install time. Secrets (DB URLs, API keys) are injected as env vars. Parallel jobs run in separate VMs/containers.

## Common Mistakes

- No caching (slow installs every run)
- Running all tests in one job (slow feedback)
- Using production credentials
- No test database or services for integration
- Ignoring flaky tests instead of fixing

## Best Practices

- Cache node_modules, Docker layers
- Split unit (fast) and integration (slower) jobs
- Use dedicated test DB; never production
- Set timeouts for long-running tests
- Publish coverage; fail on threshold regression
- Run E2E on merge to main, not every PR

## Summary

CI testing runs tests automatically on every change. Configure caching, parallel jobs, and proper secrets. Use a test database; split fast and slow tests. CI is essential for production-ready backends and deployment confidence.
