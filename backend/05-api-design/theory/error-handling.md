# Error Handling

## Concept

API error handling returns consistent, actionable error responses. Clients need enough information to understand what went wrong and how to fix it. A standard error format includes error code, message, details, and optional trace ID for debugging.

## Why It Matters

Inconsistent errors frustrate integrators and make debugging difficult. Good error responses reduce support burden, enable client-side handling, and improve developer experience. Production APIs need structured, secure error responses.

## Key Concepts

- **Consistent structure**: Same shape for all errors
- **Machine-readable codes**: `VALIDATION_ERROR`, `NOT_FOUND`, `RATE_LIMITED`
- **Human-readable message**: User-facing description
- **Details**: Field-level validation errors, context
- **Trace ID**: For support and log correlation

## Code Example

```javascript
// Standard error response
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      { "field": "email", "message": "Invalid email format" },
      { "field": "age", "message": "Must be a positive number" }
    ],
    "traceId": "req_abc123xyz"
  }
}

// 404
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Order with id 'xyz' not found",
    "traceId": "req_def456"
  }
}

// 429 Rate limit
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests",
    "retryAfter": 60
  }
}
```

## Under the Hood

Errors flow through a central error handler middleware. Validation errors (400, 422) include field details. Server errors (500) hide internal details but include trace ID for support. Log full error server-side; return sanitized version to client.

## Common Mistakes

- Returning stack traces or internal errors to clients
- Inconsistent error structure across endpoints
- Generic messages ("Something went wrong") with no actionable info
- Missing trace ID for 5xx errors
- Returning 200 with error in body (breaks HTTP semantics)

## Best Practices

- Use consistent error envelope for all 4xx/5xx
- Include trace ID for debugging; never expose internals
- Use specific error codes for client handling
- Include Retry-After for 429, 503
- Log full context server-side; sanitize for client

## Summary

Return structured errors with code, message, optional details, and trace ID. Never expose internals. Use proper HTTP status codes. Include actionable information for clients.
