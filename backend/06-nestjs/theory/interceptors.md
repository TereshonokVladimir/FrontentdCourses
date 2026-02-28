# Interceptors

## Concept

Interceptors wrap the execution of route handlers. They can transform the result, extend behavior, override functions, or add cross-cutting concerns. Interceptors implement the Aspect-Oriented Programming pattern: logging, caching, timeout, response mapping.

## Why It Matters

Interceptors handle concerns that span many routes: logging requests/responses, transforming output, adding timeout, caching. One interceptor can apply to many handlers without duplicating code. They run around the handler like a wrapper.

## Key Concepts

- `NestInterceptor` interface: `intercept(context, next) => Observable<T>`
- `next.handle()`: invokes the route handler
- RxJS Observables: interceptors work with streams
- `tap()`, `map()`, `catchError()`: transform or observe
- Execution: before handler (pre), after handler (post), on error

## Code Example

```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest()
    const now = Date.now()
    return next.handle().pipe(
      tap(() => {
        console.log(`${req.method} ${req.url} ${Date.now() - now}ms`)
      }),
    )
  }
}

// Transform response
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({ data, timestamp: new Date().toISOString() })),
    )
  }
}
```

## Under the Hood

Interceptors wrap `next.handle()` which returns an Observable of the handler result. You can pipe RxJS operators to transform, log, or catch errors. Nest runs interceptors in order; the last one's `next.handle()` eventually calls the route handler.

## Common Mistakes

- Forgetting to return `next.handle()` (request never reaches handler)
- Not handling errors in the stream (use `catchError`)
- Blocking with sync code in interceptors; use async/observables
- Applying heavy logic (e.g., DB calls) in interceptors; prefer middleware or guards for some cases

## Best Practices

- Use for cross-cutting concerns: logging, timing, response shaping
- Use `map()` to wrap responses in a standard format
- Use `timeout()` operator for request timeouts
- Keep interceptors focused; chain multiple for different concerns

## Summary

Interceptors wrap handlers with pre/post logic. Use `next.handle()` and RxJS operators. Apply for logging, caching, response transformation, and timeouts.
