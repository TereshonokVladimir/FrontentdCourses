# Practice: Rate Limit Optimization

## Tasks

### Task 1
Implement a fixed-window rate limiter in memory. Key by client IP or user ID. Allow 100 requests per 60-second window. Return 429 when exceeded. Use a Map: `key -> { count, windowStart }`. Reset count when the window expires.

### Task 2
Upgrade to a sliding window log. Store timestamps of requests (e.g., last 100). On each request, remove timestamps older than 60 seconds, then check if count < 100. Add new timestamp. Implement in memory first. Ensure O(1) or O(k) where k = limit.

### Task 3
Implement a Redis-based rate limiter. Use a single Lua script for atomicity: check count, increment, set expiry. Key format: `ratelimit:{identifier}:{window}`. Support configurable limit and window. Handle Redis connection errors (fail open vs closed: document your choice).

### Task 4
Optimize the Redis limiter for high RPS. Use a single round-trip (Lua script). Consider approximate sliding window: instead of storing all timestamps, use a counter with a sliding window algorithm (e.g., generic cell rate algorithm or sliding window counter). Benchmark: measure latency added per request at 1000 RPS.

### Task 5
Build a distributed rate limiter with multiple limits. Support: (1) per-IP: 100/min, (2) per-user (if authenticated): 1000/min, (3) per-endpoint: 50/min for expensive routes. Apply the most restrictive limit. Add a "cost" parameter: some endpoints consume 10 units instead of 1. Expose metrics: rate limit hits, rejections per key type. Support Redis cluster (multiple keys) if needed.
