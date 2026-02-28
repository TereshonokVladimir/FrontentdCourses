# Middleware

## Concept

Middleware functions run before route handlers. They have access to the request, response, and a `next()` function. Middleware can modify the request/response, end the request-response cycle, or pass control to the next middleware. In Nest, middleware is configured per module.

## Why It Matters

Middleware handles cross-cutting concerns that run before routing: logging, request ID, body parsing, CORS. Nest's middleware is Express/Fastify middleware, so you get the full ecosystem. Use it for concerns that don't need route-level context.

## Key Concepts

- `NestMiddleware` interface: `use(req, res, next)`
- `configure()` in module: apply middleware to routes
- `Consumer` and `MiddlewareConsumer`: apply to specific routes/methods
- `forRoutes()`, `exclude()`: route targeting
- Functional middleware: simple `(req, res, next) => {}`

## Code Example

```typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next()
  }
}

// In module
@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'health', method: RequestMethod.GET })
      .forRoutes('*')
  }
}

// Functional middleware
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.url}`)
  next()
}
```

## Under the Hood

Nest registers middleware with the underlying Express/Fastify app. The order of `apply()` and `forRoutes()` determines execution. Middleware runs before guards, interceptors, and pipes. `next()` must be called or the request hangs.

## Common Mistakes

- Forgetting to call `next()`; request hangs indefinitely
- Using middleware for auth when guards are more appropriate (guards have ExecutionContext)
- Applying middleware globally without excluding health checks or static assets
- Putting heavy logic in middleware; it runs on every matching request

## Best Practices

- Use middleware for: logging, request ID, raw body access
- Use guards for: auth, authorization (they have route metadata)
- Exclude health checks and public routes from logging middleware
- Prefer functional middleware when no DI is needed

## Summary

Middleware runs before route handlers. Configure via `NestModule.configure()`. Use for logging, request ID, CORS. Call `next()` or end the response. Prefer guards for auth.
