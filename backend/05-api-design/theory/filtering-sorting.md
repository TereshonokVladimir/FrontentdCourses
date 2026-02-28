# Filtering and Sorting

## Concept

Filtering narrows results by criteria (status, date range, search term). Sorting controls order (by date, name, relevance). Both use query parameters to keep URLs readable and cacheable. Well-designed filtering and sorting make APIs flexible without exploding endpoint count.

## Why It Matters

Clients need to find relevant data efficiently. Hardcoding filters in endpoints (e.g., `/active-users`, `/users-by-date`) leads to endpoint explosion. Query-based filtering and sorting provide one flexible endpoint that serves many use cases.

## Key Concepts

- **Filter by field**: `?status=active`, `?role=admin`
- **Range filters**: `?createdAfter=2024-01-01`, `?priceMin=10&priceMax=100`
- **Sort**: `?sort=createdAt`, `?sort=-price` (descending)
- **Search**: `?q=keyword` for full-text or simple search

## Code Example

```javascript
// Filtering
GET /api/v1/orders?status=shipped
GET /api/v1/orders?createdAfter=2024-01-01&createdBefore=2024-01-31
GET /api/v1/products?category=electronics&inStock=true

// Sorting (prefix - for descending)
GET /api/v1/orders?sort=createdAt
GET /api/v1/orders?sort=-total
GET /api/v1/users?sort=name,createdAt

// Combined
GET /api/v1/orders?status=pending&sort=-createdAt&limit=20
```

## Under the Hood

Filters map to SQL WHERE clauses; sort maps to ORDER BY. Ensure filtered/sorted columns are indexed to avoid full table scans. Validate and whitelist sort fields to prevent injection. Use parameterized queries for all user input.

## Common Mistakes

- Allowing arbitrary sort fields (SQL injection, performance)
- No index on filtered/sorted columns (slow queries)
- Inconsistent parameter names (?order vs ?sort)
- Exposing internal field names that may change
- No limit on filter combinations (expensive queries)

## Best Practices

- Whitelist allowed filter and sort fields
- Use consistent naming: sort, order, direction
- Document supported filters and sort options
- Index columns used in WHERE and ORDER BY
- Consider search separately (full-text vs exact match)

## Summary

Use query parameters for filtering and sorting. Whitelist allowed fields, index them, and document options. Keep one flexible endpoint instead of many specialized ones.
