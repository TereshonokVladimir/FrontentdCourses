# File Systems and Backend

## Concept

Backends interact with file systems for config, logs, uploads, and temp files. Paths differ across OS (Windows vs Unix). Use path.join, avoid hardcoded separators. For uploads, use streams and temp directories. Production often uses object storage (S3) instead of local disk.

## Why It Matters

File paths break across environments. Sync file I/O blocks the event loop. Large uploads can exhaust memory. Understanding file handling prevents path bugs and performance issues.

## Key Concepts

- path.join, path.resolve for cross-platform paths
- fs.promises for async file I/O
- Streams for large files (avoid loading into memory)
- Temp directories: os.tmpdir(), clean up after
- Object storage for production uploads

## Code Example

```javascript
const path = require('path')
const fs = require('fs').promises

const configPath = path.join(process.cwd(), 'config', 'app.json')
const config = JSON.parse(await fs.readFile(configPath, 'utf-8'))

// Stream upload
const writeStream = fs.createWriteStream(path.join(tmpDir, filename))
req.pipe(writeStream)
```

## Under the Hood

Node's fs module wraps libuv file operations. Sync methods block the event loop. Promises use thread pool. Streams process data in chunks. Object storage (S3) uses HTTP APIs, not local filesystem.

## Common Mistakes

- Hardcoding paths with / or \\
- Using sync fs methods in request handlers
- Loading large files into memory
- Not cleaning temp files

## Best Practices

- Use path module, never hardcode separators
- Prefer async/streams
- Use object storage for user uploads in production
- Set upload size limits

## Summary

File systems: use path module, async I/O, streams for large files. Prefer object storage in production.
