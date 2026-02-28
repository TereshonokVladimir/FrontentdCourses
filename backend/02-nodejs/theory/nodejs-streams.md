# Node.js Streams

## Concept

Streams are abstractions for handling data in chunks. Readable (source), Writable (sink), Transform (process), Duplex (both). Used for files, HTTP, compression. Memory-efficient for large data.

## Why It Matters

Loading a 1GB file into memory crashes; streaming processes it in chunks. HTTP request/response bodies are streams. Logs, file uploads, and database exports use streams. Essential for scalable backends.

## Key Concepts

- Readable: .on('data'), .pipe(), flowing vs paused
- Writable: .write(), .end(), backpressure
- Transform: read → process → write
- pipe() handles backpressure automatically
- Streams are EventEmitters

## Code Example

```javascript
const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))

// HTTP response stream
app.get('/download', (req, res) => {
  fs.createReadStream('large-file.csv').pipe(res)
})
```

## Under the Hood

Streams use buffers. When writable is slow, readable pauses (backpressure). pipe() wires up 'data' and 'drain' events. Streams can be object mode (objects instead of chunks).

## Common Mistakes

- Not handling 'error' events (unhandled errors)
- Piping without error handling on both streams
- Blocking the stream with sync processing
- Not using pipeline() for multiple streams (better error handling)

## Best Practices

- Use stream.pipeline() for multiple streams
- Handle errors on all streams
- Use streams for large payloads
- Prefer async iterators for modern code

## Summary

Streams: Readable, Writable, Transform. Use for large data. pipe() or pipeline(). Handle errors.
