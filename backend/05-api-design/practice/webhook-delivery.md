# Practice: Webhook Delivery

## Tasks

### Task 1
Implement webhook subscription: `POST /api/v1/webhooks` with `{ "url": "...", "events": ["order.created"] }`. Store subscriptions in memory. Create an event emitter that notifies when events occur. On `order.created`, iterate subscriptions and log the URL that would receive the event.

### Task 2
Implement webhook delivery: when event occurs, POST JSON payload to subscriber URL. Payload: `{ "id", "type", "timestamp", "data" }`. Add `X-Webhook-Id` and `X-Webhook-Timestamp` headers. Handle timeout (5s). Log success/failure. Process deliveries synchronously for now.

### Task 3
Add HMAC signature: `X-Webhook-Signature: sha256=<hex>`. Compute with shared secret stored per subscription. Document verification steps for clients. Add retry logic: retry on 4xx/5xx or timeout with exponential backoff (1m, 5m, 30m). Store delivery attempts with status.

### Task 4
Move delivery to background job queue. Event triggers job; worker performs HTTP POST. Support at-least-once delivery (may retry). Add idempotency: include `X-Webhook-Id` so clients can deduplicate. Implement max retries (e.g., 5); after that, mark failed and optionally notify. Add `GET /api/v1/webhooks/:id/deliveries` to inspect delivery history.

### Task 5
Add webhook verification: `GET /webhooks/verify` challenge (e.g., return `challenge` query param for subscription verification). Support multiple events per subscription. Add webhook secret rotation. Implement circuit breaker: if URL fails repeatedly, pause deliveries and alert. Add metrics: delivery success rate, latency, retry count. Write integration tests with mock HTTP server.
