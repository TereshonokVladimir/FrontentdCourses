# Practice: Config Types

## Tasks

### Task 1
Define a `Config` interface for a backend: `port`, `nodeEnv`, `db` (host, port, name, user, password), `redis` (url, optional). Create a `loadConfig(): Config` that reads from `process.env`. Use type-safe env parsing with defaults.

### Task 2
Add validation: port must be 1-65535, nodeEnv must be 'development' | 'production' | 'test'. Use Zod to validate. Return typed config or throw ValidationError with details. Support `.env` file loading (document the approach).

### Task 3
Implement `ConfigBuilder` with fluent API: `.port(n)`, `.db(config)`, `.redis(url)`, `.build()`. Each method returns `this`. Add `.validate()` that runs Zod schema. Support `.fromEnv()` to load from process.env. Final config should be readonly.

### Task 4
Add environment-specific config: `Config` has base, `DevelopmentConfig` adds `debug: true`, `ProductionConfig` adds `logLevel: 'warn'`. Use a discriminated union or intersection. Load the appropriate config based on NODE_ENV. Ensure invalid NODE_ENV throws.

### Task 5
Implement config with secrets: some values come from env, others from a secrets manager (simulate with async `getSecret(key)`). Create `loadConfig(): Promise<Config>` that fetches secrets for `db.password`, `apiKey`. Use a type that marks which fields are secret. Ensure secrets are never logged.