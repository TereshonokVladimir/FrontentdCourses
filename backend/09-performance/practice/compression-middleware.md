# Practice: Compression Middleware

## Tasks

### Task 1
Create a simple compression middleware. For responses with `Content-Type: application/json` or `text/*`, compress the body with gzip before sending. Check `Accept-Encoding` from the request; only compress if the client supports gzip. Set `Content-Encoding: gzip`. Use `zlib.createGzip()` and buffer the response (or stream if possible).

### Task 2
Implement streaming compression. Don't buffer the entire response. Use a transform stream: `responseStream.pipe(gzip).pipe(res)`. Handle the case where the response is already a stream (e.g., from `res.json()` which may buffer—use a custom approach or wrap). Ensure backpressure flows correctly.

### Task 3
Add Brotli support. If the client sends `Accept-Encoding: br, gzip`, prefer Brotli when the response is above a threshold (e.g., 1KB). Use `zlib.createBrotliCompress()`. Fall back to gzip for older clients. Add a compression level option (e.g., 1–9 for gzip, 1–11 for Brotli).

### Task 4
Skip compression for already-compressed or binary content. Do not compress when `Content-Type` is `image/*`, `video/*`, `application/octet-stream`, or when `Content-Encoding` is already set. Add a minimum size threshold: don't compress responses smaller than 256 bytes (overhead may exceed savings).

### Task 5
Build a production-ready compression middleware with metrics. Track: (1) compressed vs uncompressed size per response, (2) compression ratio, (3) CPU time spent compressing. Expose via a `/metrics` endpoint or integrate with Prometheus. Add configurable options: level, threshold, content types to compress/skip. Support pre-compressed static files (serve .gz/.br if client accepts and file exists).
