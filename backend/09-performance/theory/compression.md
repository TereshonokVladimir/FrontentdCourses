# Compression

## Concept

Compression reduces payload size by encoding data more efficiently. For text (JSON, HTML, CSS), gzip and Brotli typically achieve 70–90% size reduction, reducing transfer time and bandwidth.

## Why It Matters

Network transfer is often the dominant latency for large responses. Compressing JSON from 100KB to 15KB cuts transfer time proportionally. Lower bandwidth also reduces costs and improves mobile experience.

## Key Concepts

- **gzip**: Widely supported; good compression ratio
- **Brotli (br)**: Better ratio than gzip; supported by modern clients
- **Content-Encoding**: Response header indicates compression
- **Accept-Encoding**: Client advertises supported schemes
- **Compression level**: Higher = smaller payload, more CPU

## Code Example

```javascript
const zlib = require('zlib')

// Express compression middleware
const compression = require('compression')
app.use(compression({ level: 6 }))

// Manual compression
const gzip = zlib.createGzip({ level: 6 })
res.setHeader('Content-Encoding', 'gzip')
readStream.pipe(gzip).pipe(res)
```

## Under the Hood

Compression algorithms exploit redundancy (repeated patterns). gzip uses DEFLATE; Brotli uses a dictionary. Compression is CPU-bound; decompression is faster. Pre-compressed static assets avoid runtime cost.

## Common Mistakes

- Compressing already compressed data (images, videos)
- No Accept-Encoding check (compress for clients that don't support it)
- Compression level too high (CPU cost > transfer savings for small payloads)
- Double compression (middleware + manual)

## Best Practices

- Compress text responses (JSON, HTML, CSS, JS)
- Skip compression for binary (images, PDFs)
- Use level 5–6 for balance; 9 only for static pre-compression
- Support Brotli for modern clients; gzip as fallback

## Summary

Compression reduces payload size and transfer time. Use gzip/Brotli for text; balance level vs CPU; skip for already-compressed formats.
