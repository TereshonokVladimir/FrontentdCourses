# Practice: API Versioning

## Tasks

### Task 1
Add URL path versioning to an existing API. Route `/api/v1/users` and `/api/v2/users` to separate handlers. Both return user data; v1 returns `{ id, name }`, v2 returns `{ id, name, email, createdAt }`. Use a shared in-memory store.

### Task 2
Implement version selection via `Accept` header: `Accept: application/vnd.myapi.v2+json`. If no version specified, default to v1. Return 406 Not Acceptable for unsupported version. Support both URL path and header versioning (path takes precedence).

### Task 3
Add deprecation headers for v1: `Deprecation: true` and `Sunset: <date 6 months from now>`. Log a warning when v1 is used. Add a `X-API-Version` response header indicating the version served.

### Task 4
Create a version compatibility layer: v2 introduces a breaking change (field rename `name` -> `displayName`). v1 continues to receive `name`; v2 receives `displayName`. Implement a shared data layer that both versions use, with a mapping layer per version.

### Task 5
Build a version router that supports multiple versioning strategies (path, header, query param) with configurable precedence. Add a `GET /api/versions` endpoint that returns available versions and their sunset dates. Implement automatic redirect from `/api` to `/api/v1` with 302. Add integration tests for all versioning scenarios.
