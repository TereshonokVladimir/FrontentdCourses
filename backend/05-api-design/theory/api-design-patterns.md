# API Design Patterns

## Concept

API design patterns are recurring solutions to common problems: pagination, bulk operations, partial responses, async jobs, and file uploads. Applying consistent patterns across endpoints improves predictability and reduces client integration effort.

## Why It Matters

Consistency reduces cognitive load. When all list endpoints use the same pagination format, clients write one pagination handler. Patterns also encode lessons from production—e.g., async for long-running operations.

## Key Concepts

- **List + pagination**: Cursor or offset; consistent metadata
- **Bulk operations**: POST with array; return array of results/errors
- **Partial response**: Fields query param to reduce payload
- **Async job**: POST returns 202 + job ID; GET job status
- **File upload**: Multipart or presigned URL

## Code Example

```javascript
// Bulk create: same pattern as single, array in body
POST /api/v1/products
Body: [{ "name": "A", "price": 10 }, { "name": "B", "price": 20 }]
Response: 207 Multi-Status
[
  { "id": "p1", "status": 201 },
  { "id": null, "status": 400, "error": "Invalid price" }
]

// Async job
POST /api/v1/reports
Response: 202 Accepted
{ "jobId": "job_abc", "status": "pending", "statusUrl": "/api/v1/jobs/job_abc" }

GET /api/v1/jobs/job_abc
Response: 200
{ "status": "completed", "resultUrl": "/api/v1/reports/report_xyz" }

// Partial response
GET /api/v1/users/123?fields=id,name,email
```

## Under the Hood

Patterns are conventions implemented in handlers and middleware. Bulk endpoints may process in parallel or sequential. Async jobs use background workers; status endpoint polls DB or queue. Partial response filters serialization by field list.

## Common Mistakes

- Inconsistent pagination across endpoints
- No bulk endpoint when clients need it (N requests instead of 1)
- Sync for long operations (timeout, poor UX)
- No job status endpoint for async
- Over-fetching when partial response would help

## Best Practices

- Standardize pagination, filtering, sorting across list endpoints
- Offer bulk when clients frequently create/update multiple
- Use 202 + job for operations > 5–10 seconds
- Document patterns in API guide
- Support fields param for large resources

## Summary

Design patterns provide consistency. Use standard pagination, bulk when needed, async for long operations, and partial response for large resources. Document and apply patterns uniformly.
