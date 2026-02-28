# Practice: Pagination Implementation

## Tasks

### Task 1
Implement offset-based pagination for `GET /api/v1/orders`. Accept `page` (default 1) and `limit` (default 20, max 100). Return `{ "data": [...], "pagination": { "page", "limit", "total", "totalPages" } }`. Validate inputs; return 400 for invalid values.

### Task 2
Add cursor-based pagination as an alternative. Accept `cursor` and `limit`. Cursor is opaque (base64-encoded `{ "id": lastSeenId }`). Return `{ "data": [...], "pagination": { "nextCursor", "hasMore", "limit" } }`. Support both styles via query params (cursor takes precedence over page).

### Task 3
Implement `Link` header for cursor pagination: `Link: <url?cursor=xyz>; rel="next"`. Include `rel="self"` for current page. Parse and expose these in response for HATEOAS-style navigation.

### Task 4
Optimize cursor pagination for large datasets. Use `WHERE id > :cursor ORDER BY id LIMIT :limit` to avoid OFFSET scan. Ensure cursors are stable across concurrent inserts. Add `total` count only when `?includeTotal=true` (expensive; use with caution).

### Task 5
Support multi-column sorting with cursor pagination. Allow `?sort=createdAt,-total` (asc createdAt, desc total). Encode sort state in cursor so "next" page uses same sort. Handle NULL values in sort order consistently. Add integration tests for pagination edge cases (empty result, single page, last page).
