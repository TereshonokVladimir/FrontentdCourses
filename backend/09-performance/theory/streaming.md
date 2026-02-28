# Streaming

## Concept

Streaming processes data in chunks as it arrives, rather than buffering everything in memory. For large responses, file uploads, or database result sets, streaming avoids memory spikes and reduces time-to-first-byte.

## Why It Matters

Loading a 1GB file into memory can OOM a Node process. Streaming keeps memory bounded. For API responses, streaming enables progressive rendering and faster perceived latency. Essential for large payloads and real-time data.

## Key Concepts

- **Backpressure**: Slow consumer slows producer; prevents memory buildup
- **Chunked transfer**: HTTP chunked encoding for response streaming
- **Readable/Writable streams**: Node.js stream API
- **Pipe**: Connect streams; backpressure flows automatically
- **Time-to-first-byte (TTFB)**: Streaming improves TTFB for large data

## Code Example

```javascript
// Stream DB result to response
const { Readable } = require('stream')
const stream = db.query(new QueryStream('SELECT * FROM large_table'))
res.setHeader('Content-Type', 'application/json')
res.write('[')
let first = true
stream.on('data', (row) => {
  if (!first) res.write(',')
  res.write(JSON.stringify(row))
  first = false
})
stream.on('end', () => {
  res.write(']')
  res.end()
})
```

## Under the Hood

Streams are pull-based: consumer requests data. When consumer is slow, producer pauses (backpressure). Node.js streams implement this via highWaterMark and pause/resume. HTTP chunked encoding sends chunks as they're ready.

## Common Mistakes

- Buffering entire response before sending (defeats streaming)
- Ignoring backpressure (memory growth)
- Not handling stream errors (unclosed connections)
- Streaming without proper headers (Content-Length vs Transfer-Encoding)

## Best Practices

- Use streams for payloads > 1MB or unbounded size
- Pipe when possible; handle errors on both ends
- Set appropriate highWaterMark for throughput
- Use async iterators for modern stream consumption

## Summary

Streaming keeps memory bounded and improves TTFB. Use Node.js streams, respect backpressure, and stream large or unbounded data.
