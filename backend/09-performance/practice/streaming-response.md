# Practice: Streaming Response

## Tasks

### Task 1
Create an endpoint that streams a large JSON array. Instead of building the entire array in memory and sending it, use a database cursor or a Readable stream. Stream format: `[{"id":1},{"id":2},...]`. Set `Transfer-Encoding: chunked`. Ensure valid JSON (commas between items).

### Task 2
Implement Server-Sent Events (SSE) for real-time updates. `GET /events` should keep the connection open and send events every second: `data: {"timestamp": ...}\n\n`. Support client disconnect: stop sending when the connection closes. Use `res.write()` and `res.flushHeaders()`.

### Task 3
Stream a large file download with backpressure. For `GET /download/:fileId`, open a file stream and pipe it to the response. Use `fs.createReadStream` and `stream.pipe(res)`. Handle backpressure: if the client is slow, the file read should pause. Add `Content-Disposition` for download filename.

### Task 4
Implement streaming with compression. For a large JSON response, pipe through gzip before sending. Set `Content-Encoding: gzip`. Ensure the client receives compressed data. Use `zlib.createGzip()` and pipe: `sourceStream.pipe(gzip).pipe(res)`.

### Task 5
Build a streaming search API. `GET /search?q=term` returns results as they're found (e.g., from a DB cursor or multiple sources). Stream NDJSON (newline-delimited JSON): one object per line. Support pagination via cursor: `?cursor=xyz` continues from the previous position. Handle client disconnect: clean up DB cursor and close resources. Add timeout for long-running streams (e.g., 5 minutes max).
