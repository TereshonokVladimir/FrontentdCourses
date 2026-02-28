# Node.js File System (fs)

## Concept

The `fs` module provides synchronous and asynchronous APIs for file operations: read, write, append, delete, stat, mkdir, readdir. Both callback and Promise (fs.promises) variants exist. Supports streams for large files.

## Why It Matters

Backends read config, logs, uploads, and exports. File I/O is common. Sync APIs block the event loop; async is preferred. Understanding fs is essential for file-based features and debugging.

## Key Concepts

- `fs.readFile` / `fs.writeFile` – whole file
- `fs.readFileSync` / `fs.writeFileSync` – blocking
- `fs.promises` – Promise-based API
- `fs.createReadStream` / `fs.createWriteStream` – streams
- `fs.stat`, `fs.mkdir`, `fs.readdir`, `fs.unlink`
- `fs.copyFile`, `fs.rename`

## Code Example

```javascript
const fs = require('fs').promises
const path = require('path')

async function loadConfig() {
  const configPath = path.join(__dirname, 'config.json')
  const data = await fs.readFile(configPath, 'utf-8')
  return JSON.parse(data)
}

async function saveLog(entry) {
  await fs.appendFile('app.log', `${new Date().toISOString()} ${entry}\n`)
}

// Stream for large files
const readStream = require('fs').createReadStream('large.csv')
```

## Under the Hood

fs calls libuv for async operations. Sync methods use blocking syscalls. File descriptors are managed by the OS. Streams use buffers and emit events. fs.promises wraps callbacks in Promises.

## Common Mistakes

- Using sync methods in request handlers
- Not handling ENOENT (file not found)
- Assuming file exists before read
- Not closing file descriptors (use streams or high-level APIs)

## Best Practices

- Prefer fs.promises or callbacks; avoid sync in hot path
- Use streams for files > ~100KB
- Validate paths; prevent path traversal
- Use fs.access for existence checks (or try/catch)

## Summary

fs: read, write, stat, mkdir, streams. Prefer async; use streams for large files. Handle errors.