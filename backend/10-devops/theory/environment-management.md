# Environment Management

## Concept

Environment management is the practice of maintaining separate configurations for development, staging, and production. Each environment has its own infrastructure, config, and secrets. Changes flow through environments (dev → staging → prod) with validation at each stage.

## Why It Matters

Running production config in dev causes "works in prod" surprises. Sharing databases or secrets across envs risks data leaks and test pollution. Proper environment separation reduces risk and enables safe experimentation.

## Key Concepts

- **Environments**: dev, staging, production (and sometimes preview)
- **Configuration**: Env-specific vars (API URLs, feature flags, log levels)
- **Infrastructure**: Separate clusters, DBs, or namespaces per env
- **Promotion**: Code/config moves through envs after validation
- **Preview envs**: Ephemeral envs per PR for testing

## Code Example

```yaml
# GitHub Actions: Deploy to env based on branch
jobs:
  deploy:
    environment: ${{ github.ref == 'refs/heads/main' && 'production' || 'staging' }}
    steps:
      - name: Deploy
        run: |
          if [ "${{ github.ref }}" = "refs/heads/main" ]; then
            ./deploy.sh production
          else
            ./deploy.sh staging
          fi
```

```javascript
// Config per environment
const config = {
  development: {
    logLevel: 'debug',
    databaseUrl: process.env.DATABASE_URL || 'postgres://localhost:5432/dev',
    apiBaseUrl: 'http://localhost:3000'
  },
  staging: {
    logLevel: 'info',
    databaseUrl: process.env.DATABASE_URL,
    apiBaseUrl: process.env.API_BASE_URL
  },
  production: {
    logLevel: 'warn',
    databaseUrl: process.env.DATABASE_URL,
    apiBaseUrl: process.env.API_BASE_URL
  }
}

const env = process.env.NODE_ENV || 'development'
module.exports = config[env]
```

## Under the Hood

Environments are typically distinguished by env vars (NODE_ENV, ENV) or deployment targets (different K8s namespaces, AWS accounts). Config is loaded from env vars, config files, or secret managers. IaC uses workspaces or folders to provision per-env resources.

## Common Mistakes

- Using production data in staging (GDPR, corruption)
- Same secrets across envs (staging breach = prod breach)
- No staging environment (testing only in prod)
- Hardcoding env-specific values in code
- Drift between env configs (staging != prod)

## Best Practices

- Use separate infrastructure per env (or strong isolation)
- Never use production data outside production
- Keep staging config as close to prod as possible
- Use feature flags for gradual rollout
- Document env-specific setup and differences

## Summary

Environment management separates dev, staging, and production. Each has its own config and infrastructure. Promote changes through envs; keep staging prod-like.
