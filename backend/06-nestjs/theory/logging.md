# Logging

## Concept

Nest has a built-in `Logger` service with log levels (log, error, warn, debug, verbose). Logs can be formatted, prefixed, and sent to external systems. Use for request tracing, error tracking, and audit. Production logging should be structured and centralized.

## Why It Matters

Logs are essential for debugging and monitoring. Unstructured logs are hard to search; missing context makes diagnosis slow. Nest's Logger integrates with the app; you can replace it with Pino, Winston, or Datadog for production.

## Key Concepts

- `Logger`: built-in service; `logger.log()`, `logger.error()`
- Log levels: log, error, warn, debug, verbose
- Context: `new Logger('UsersService')` for component name
- Interceptors: log requests/responses automatically
- Structured logging: JSON format for log aggregators

## Code Example

```typescript
@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  async create(dto: CreateUserDto) {
    this.logger.log(`Creating user ${dto.email}`)
    try {
      const user = await this.repo.save(dto)
      this.logger.log(`User created: ${user.id}`)
      return user
    } catch (err) {
      this.logger.error(`Failed to create user`, err.stack)
      throw err
    }
  }
}

// Custom logger (e.g., Pino)
const app = await NestFactory.create(AppModule, {
  logger: new PinoLogger(),
})
```

## Under the Hood

Nest's Logger writes to stdout by default. It prefixes messages with timestamp and context. You can override the logger in NestFactory.create(). Interceptors can wrap handlers to log request/response and duration.

## Common Mistakes

- Logging sensitive data (passwords, tokens)
- Too verbose in production; impacts performance
- No correlation ID; can't trace requests across services
- Inconsistent format; hard to parse

## Best Practices

- Use structured JSON in production
- Add request ID/correlation ID to all logs
- Never log secrets or PII
- Use appropriate levels: error for failures, debug for dev

## Summary

Use Nest Logger with context. Replace with Pino/Winston for production. Add correlation IDs. Never log secrets. Structure logs for aggregation.
