# Exception Filters

## Concept

Exception filters catch errors thrown during request processing and format the HTTP response. They handle both built-in `HttpException` and custom errors. Filters can be global or route-specific, giving you control over error shape and status codes.

## Why It Matters

Consistent error responses improve API usability and debugging. Without filters, unhandled errors may leak stack traces or return inconsistent formats. Filters ensure all errors become predictable JSON with appropriate status codes.

## Key Concepts

- `ExceptionFilter` interface: `catch(exception, host)`
- `ArgumentsHost`: access request/response
- `HttpException`: base for HTTP errors (status, message)
- `@Catch()`: target specific exception types
- Global filter: `app.useGlobalFilters(new HttpExceptionFilter())`

## Code Example

```typescript
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: typeof exceptionResponse === 'object'
        ? (exceptionResponse as any).message
        : exceptionResponse,
    })
  }
}

// Catch all
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR
    response.status(status).json({ statusCode: status, message: 'Internal server error' })
  }
}
```

## Under the Hood

When an exception is thrown, Nest looks for a matching filter. Filters are checked in order (most specific first). The filter receives the exception and `ArgumentsHost` to access the response. If no filter catches it, Nest uses the default exception handler.

## Common Mistakes

- Catching too broadly and hiding real errors
- Leaking stack traces or internal details in production
- Not setting proper status codes for different error types
- Forgetting to handle non-HTTP errors (e.g., TypeScript errors)

## Best Practices

- Use a global `AllExceptionsFilter` for unknown errors
- Log errors before sending response; never log sensitive data
- Return consistent shape: `{ statusCode, message, error? }`
- Use `@Catch(NotFoundException)` for 404-specific formatting

## Summary

Exception filters format error responses. Catch `HttpException` or all exceptions. Use global filter for consistency. Never leak stack traces in production.
