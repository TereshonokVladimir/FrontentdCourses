# Configuration

## Concept

Nest's `ConfigModule` loads configuration from environment variables, `.env` files, and custom sources. Configuration is validated and typed, making it safe to use across the app. Supports multiple environments (dev, staging, prod) and lazy loading.

## Why It Matters

Configuration should be centralized, validated, and environment-aware. Hardcoding secrets or using `process.env` directly is error-prone. ConfigModule provides a single source of truth with schema validation and type safety.

## Key Concepts

- `ConfigModule.forRoot()`: load from env and .env files
- `ConfigService`: inject to read config values
- `validationSchema`: Joi or class-validator for validation
- `envFilePath`: custom .env location
- `ignoreEnvFile`: for production (use real env vars)

## Code Example

```typescript
// app.module.ts
ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: ['.env.local', '.env'],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test'),
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().required(),
  }),
})

// In service
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getPort() {
    return this.config.get<number>('PORT', 3000)
  }

  getDbUrl() {
    return this.config.getOrThrow<string>('DATABASE_URL')
  }
}
```

## Under the Hood

ConfigModule reads `process.env` and merges with .env file contents. Validation runs at startup; the app fails fast if required vars are missing. ConfigService is a wrapper that provides typed access; `getOrThrow` ensures the value exists.

## Common Mistakes

- Not validating config; missing vars cause runtime errors
- Committing .env with secrets; use .env.example as template
- Using `get()` without default for optional values
- Loading config too late; some modules need it at bootstrap

## Best Practices

- Use `validationSchema` to fail fast on invalid config
- Keep .env out of git; document required vars in .env.example
- Use `getOrThrow()` for required config
- Use `isGlobal: true` to avoid importing ConfigModule everywhere

## Summary

ConfigModule centralizes and validates configuration. Use ConfigService for typed access. Validate at startup. Never commit secrets.
