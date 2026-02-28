# TypeScript Error Handling

## Concept

TypeScript models errors with `Error` and custom classes. `unknown` is preferred over `any` in catch. Typed errors enable exhaustive handling. Result types (`Ok | Err`) avoid exceptions.

## Why It Matters

Catch clauses receive `unknown` in strict mode. Custom error classes enable `instanceof` checks. Result types make error handling explicit. Backend APIs need consistent error responses.

## Key Concepts

- `catch (e: unknown)` – type-safe catch
- Custom errors: `class NotFoundError extends Error`
- `instanceof` for error discrimination
- Result type: `{ ok: true; data: T } | { ok: false; error: E }`
- `never` for exhaustive checks

## Code Example

```typescript
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number
  ) {
    super(message)
    this.name = 'AppError'
  }
}

function handleError(e: unknown): AppError {
  if (e instanceof AppError) return e
  if (e instanceof Error) return new AppError(e.message, 'INTERNAL', 500)
  return new AppError('Unknown error', 'INTERNAL', 500)
}
```

## Under the Hood

JavaScript catch receives any value. TypeScript 4.4+ allows `unknown` in catch. Custom errors use prototype chain. Result types are discriminated unions.

## Common Mistakes

- Using `any` in catch
- Not checking error type before use
- Throwing non-Error values
- Swallowing errors

## Best Practices

- Use unknown in catch
- Create custom error hierarchy
- Use Result type for expected failures
- Document thrown errors in JSDoc

## Summary

Error handling: unknown in catch, custom errors, Result types. Type errors explicitly; avoid swallowing.