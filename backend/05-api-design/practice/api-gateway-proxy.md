# Practice: API Gateway Proxy

## Tasks

### Task 1
Build a simple reverse proxy: forward requests from `GET /api/*` to a backend service. Config: backend URL (e.g., http://localhost:3001). Preserve path, method, headers, body. Return backend response to client. Handle connection errors with 502.

### Task 2
Add path rewriting: `/api/orders` -> backend `/orders`, `/api/users` -> different backend `/users`. Support multiple backends in config. Add timeout (10s) for backend calls. Forward `X-Request-Id` and `X-Forwarded-For`. Add health check that proxies to backend `/health`.

### Task 3
Implement authentication at gateway: validate JWT before forwarding. Add `X-User-Id` to request for backend. Reject 401 if invalid/missing. Optionally support API key validation. Make auth optional per route (some paths public). Add rate limiting: 100 req/min per IP before proxying.

### Task 4
Add circuit breaker: if backend returns 5xx or times out repeatedly (e.g., 5 in 10s), open circuit. While open, return 503 immediately without calling backend. Periodically try half-open (one request) to see if backend recovered. Log circuit state changes.

### Task 5
Implement response caching for GET requests. Cache key: method + path + query + auth. TTL configurable per path (e.g., /products 60s, /orders no cache). Respect `Cache-Control` from backend. Add cache invalidation webhook or manual purge endpoint. Support multiple backend routing with load balancing (round-robin). Add Prometheus metrics: request count, latency, error rate, circuit state. Write integration tests with mock backend.
