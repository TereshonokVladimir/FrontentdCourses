# Pagination

## Concept

Pagination splits large result sets into manageable pages. Clients request a subset of data using offset/limit or cursor-based parameters. Pagination prevents timeouts, reduces memory usage, and improves response times for large collections.

## Why It Matters

APIs often return collections that can grow to thousands or millions of items. Returning everything causes slow responses, high memory usage, and poor UX. Pagination is essential for production APIs serving large datasets.

## Key Concepts

- **Offset-based**: `?page=2&limit=20`—simple but inconsistent with inserts/deletes
- **Cursor-based**: `?cursor=abc123&limit=20`—stable across changes, better for real-time data
- **Metadata**: Include total count, hasNext, next cursor in response
- **Consistent limits**: Enforce max limit (e.g., 100) to prevent abuse

## Code Example

```javascript
// Offset-based
GET /api/v1/orders?page=2&limit=20
// Response
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}

// Cursor-based (preferred for large/volatile data)
GET /api/v1/orders?cursor=eyJpZCI6MTAwfQ&limit=20
// Response
{
  "data": [...],
  "pagination": {
    "nextCursor": "eyJpZCI6MTIwfQ",
    "hasMore": true,
    "limit": 20
  }
}
```

## Under the Hood

Offset pagination uses `LIMIT n OFFSET m` in SQL; large offsets are slow (database scans skipped rows). Cursor pagination uses `WHERE id > cursor`—index-friendly, O(1) per page. Cursors should be opaque (base64-encoded) to hide implementation and prevent tampering.

## Common Mistakes

- No pagination on list endpoints (returning everything)
- Exposing internal IDs in cursors (leaks info, allows enumeration)
- Inconsistent page size (client requests 1000, server allows it)
- Including total count when expensive (skip for cursor-based)
- Using page numbers for frequently-changing data

## Best Practices

- Default to cursor-based for large or volatile collections
- Enforce max limit (e.g., 100); use sensible default (e.g., 20)
- Use opaque cursors; don't expose internal IDs
- Include hasMore or nextCursor; avoid total when costly
- Document pagination params in API docs

## Summary

Pagination is required for list endpoints. Prefer cursor-based for large or volatile data. Enforce limits, use opaque cursors, and include pagination metadata in responses.
