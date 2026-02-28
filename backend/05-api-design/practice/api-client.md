# Practice: API Client

## Tasks

### Task 1
Build a minimal API client for your REST API. Methods: `get(path)`, `post(path, body)`, `put(path, body)`, `patch(path, body)`, `delete(path)`. Handle JSON serialization. Accept base URL and API key in constructor. Return parsed JSON; throw on non-2xx with error body.

### Task 2
Add retry logic: retry on 5xx and network errors (exponential backoff: 1s, 2s, 4s). Max 3 retries. Do not retry 4xx (except 429). For 429, respect `Retry-After` header. Add timeout (default 10s). Make retry configurable (max attempts, backoff).

### Task 3
Implement request/response interceptors: add auth header, log requests, transform errors. Support custom headers per request. Add TypeScript types for request/response based on endpoint. Implement `listOrders(options)` with pagination: auto-follow next page when `hasMore` is true.

### Task 4
Add idempotency key support: optional `idempotencyKey` param for POST. Client generates UUID if not provided for mutating operations. Handle 409 (key conflict) by returning cached response. Add request signing (HMAC) for additional security if API supports it.

### Task 5
Implement full SDK: typed methods for each resource (`orders.create()`, `orders.list()`, `orders.get(id)`). Generate from OpenAPI spec or maintain manually. Add webhook signature verification helper. Support multiple environments (sandbox, production). Add comprehensive error types. Write integration tests against real or mocked API.
