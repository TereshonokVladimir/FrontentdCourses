# Security in DevOps

## Concept

DevSecOps integrates security into the DevOps lifecycle. Security is not a separate phase but embedded in design, CI/CD, and operations. This includes secure coding, dependency scanning, secrets management, infrastructure hardening, and incident response.

## Why It Matters

Security breaches cause reputational and financial damage. Catching vulnerabilities early (in CI) is cheaper than in production. DevOps speed without security creates risk; DevSecOps balances both.

## Key Concepts

- **Shift left**: Security earlier in the pipeline (design, code, build)
- **Supply chain**: Scan dependencies (npm audit, Snyk, Dependabot)
- **Image scanning**: Check container images for CVEs
- **Secrets scanning**: Detect leaked credentials in code
- **Infrastructure security**: Least privilege, encryption, network policies

## Code Example

```yaml
# GitHub Actions: Security scanning in CI
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm audit --audit-level=high
      - uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          command: test
      - uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'my-registry/api:${{ github.sha }}'
          format: 'sarif'
          output: 'trivy-results.sarif'
```

```yaml
# Kubernetes: Network policy (restrict pod traffic)
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-policy
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: ingress
      ports:
        - protocol: TCP
          port: 3000
  egress:
    - to:
        - podSelector:
            matchLabels:
              app: database
      ports:
        - protocol: TCP
          port: 5432
```

## Under the Hood

Security tools run in CI: dependency scanners parse lockfiles; image scanners inspect layers for known CVEs; SAST analyzes code. Results can block the pipeline or create tickets. In production, network policies, RBAC, and encryption limit blast radius.

## Common Mistakes

- No dependency scanning (known vulns in production)
- Ignoring scan results ("we'll fix it later")
- Broad network access (pods can talk to anything)
- Running as root in containers
- No security in deployment (anyone can deploy)

## Best Practices

- Run npm audit, Snyk, or Dependabot in CI
- Scan container images before deploy
- Use network policies to restrict pod traffic
- Run containers as non-root
- Require security approval for production deploys

## Summary

DevSecOps integrates security into DevOps. Scan dependencies and images in CI; use network policies and least privilege in production. Shift left—catch issues early.
