# Webhooks

## Concept

Webhooks are HTTP callbacks—your API sends POST requests to a URL the client provides when events occur. Instead of polling, the client receives real-time notifications. Common for payment confirmations, order updates, and sync events.

## Why It Matters

Polling is inefficient and adds latency. Webhooks push events to clients as they happen. They reduce server load (no repeated polling) and improve UX (instant notifications). Essential for event-driven integrations.

## Key Concepts

- **Subscription**: Client registers URL and event types
- **Delivery**: Server POSTs payload to URL on event
- **Signing**: HMAC signature so client verifies authenticity
- **Retries**: Retry with backoff on failure (4xx/5xx, timeout)
- **Idempotency**: Client may receive duplicate deliveries; use idempotency keys

## Code Example

```javascript
// Client subscribes
POST /api/v1/webhooks
{
  "url": "https://client.com/webhooks/orders",
  "events": ["order.created", "order.shipped"],
  "secret": "whsec_..."  // For signature verification
}

// Server delivers on event
POST https://client.com/webhooks/orders
X-Webhook-Signature: sha256=abc123...
X-Webhook-Id: evt_xyz789
X-Webhook-Timestamp: 1640000000
Content-Type: application/json

{
  "id": "evt_xyz789",
  "type": "order.shipped",
  "createdAt": "2024-01-15T10:00:00Z",
  "data": {
    "orderId": "ord_123",
    "trackingNumber": "1Z999..."
  }
}

// Client verifies signature
const signature = req.headers['x-webhook-signature']
const payload = JSON.stringify(req.body)
const expected = 'sha256=' + crypto.createHmac('sha256', secret).update(payload).digest('hex')
if (signature !== expected) return res.status(401).send('Invalid signature')
```

## Under the Hood

Event occurs → queue webhook delivery → worker POSTs to URL. Store delivery attempts; retry with exponential backoff. Mark success on 2xx. After max retries, mark failed; optionally notify client. Sign payload so client can verify source.

## Common Mistakes

- No signature verification (client can't trust payload)
- No retries (transient failures lose events)
- No idempotency (duplicate deliveries cause duplicate processing)
- Synchronous delivery (blocks event processing)
- Not logging delivery attempts for debugging

## Best Practices

- Sign payloads with HMAC; document verification
- Retry with backoff (e.g., 1m, 5m, 30m, 2h)
- Include webhook ID for idempotent processing
- Return 200 quickly; process async if needed
- Provide delivery logs and replay in dashboard

## Summary

Webhooks push events to client URLs. Sign payloads for verification. Retry on failure with backoff. Clients should process idempotently. Essential for real-time integrations.
