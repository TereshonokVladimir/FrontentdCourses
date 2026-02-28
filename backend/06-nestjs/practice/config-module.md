# Practice: Config Module

## Tasks

### Task 1
Set up `ConfigModule` with `forRoot({ isGlobal: true })`. Load from `.env`. Create a `DatabaseConfig` service that wraps `ConfigService` and provides typed getters: `getHost()`, `getPort()`, `getDatabase()`. Use it in a mock `DatabaseModule` that logs the config on `onModuleInit`.

### Task 2
Add Joi validation to `ConfigModule`. Validate `NODE_ENV` (enum: development, production, test), `PORT` (number, default 3000), `DATABASE_URL` (required string). The app should fail to start if validation fails. Add a custom `REDIS_URL` (optional) with a URL validator.

### Task 3
Create a `ConfigFactory` pattern: a `database.config.ts` that exports `registerAs('database', () => ({ host, port, ... }))`. Use `ConfigModule.forRoot({ load: [databaseConfig] })`. Access via `configService.get('database.host')`. Support multiple config namespaces (database, redis, jwt).

### Task 4
Implement environment-specific config files: `.env.development`, `.env.production`, `.env.test`. Use `envFilePath` based on `NODE_ENV`. Add a `validate` function that uses `class-validator` with a `EnvSchema` class instead of Joi. Ensure all required vars are documented in `.env.example`.

### Task 5
Build a `SecretsModule` that loads secrets from a simulated external service (e.g., a function that returns `{ dbPassword: 'secret' }`). Use `useFactory` to async load secrets at bootstrap. Merge secrets with `ConfigService` so `configService.get('DB_PASSWORD')` returns the secret. Handle loading failure (retry, fallback) and ensure the app doesn't start with invalid secrets. Add a health check that verifies secrets are loaded.
