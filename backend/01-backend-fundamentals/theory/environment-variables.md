# Environment Variables

## Concept

Environment variables are key-value pairs available to a process at runtime. They configure behavior without changing code: database URLs, API keys, feature flags, log levels. Different values per environment (dev, staging, prod).

## Why It Matters

Secrets and config must not be in code. Environment variables keep them out of version control. Twelve-Factor App recommends config in env. Every production backend uses them.

## Key Concepts

- Set before process starts (shell, systemd, Docker, K8s)
- Accessed via process.env (Node.js)
- .env files for local dev (never commit .env with secrets)
- Validation at startup (fail fast if required vars missing)

## Code Example

```javascript
// Access
const port = process.env.PORT || 3000
const dbUrl = process.env.DATABASE_URL

// Validation at startup
const required = ['DATABASE_URL', 'JWT_SECRET']
for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required env: ${key}`)
  }
}

// Typed config
const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production'
}
```

## Under the Hood

The OS passes env vars to the process at fork/exec. Node.js exposes them in process.env. .env files are loaded by libraries (dotenv) at startup—they're not part of the OS; they're read and set in process.env.

## Common Mistakes

- Committing .env with secrets
- Not validating required vars (fail at runtime instead of startup)
- Using env for large config (use config files or remote config)
- Assuming env vars are set (always have defaults or validate)

## Best Practices

- Validate all required vars at startup
- Use .env.example (no secrets) as template
- Never log env vars with secrets
- Use different .env per environment

## Summary

Environment variables configure apps without code changes. Validate at startup, never commit secrets, use .env for local dev.
