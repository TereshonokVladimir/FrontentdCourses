# Node.js Path Module

## Concept

The `path` module provides utilities for working with file and directory paths. It handles cross-platform differences (Windows vs Unix), path joining, resolution, and parsing. Paths are strings; the module does not access the filesystem.

## Why It Matters

Paths differ between OSes (backslash vs forward slash, drive letters). Hardcoding paths breaks portability. The path module ensures your code works on Windows, Linux, and macOS. Essential for file-based backends.

## Key Concepts

- `path.join()` – join segments with correct separator
- `path.resolve()` – resolve to absolute path
- `path.dirname()`, `path.basename()`, `path.extname()`
- `path.parse()` – object with root, dir, base, ext, name
- `path.posix` / `path.win32` for specific behavior

## Code Example

```javascript
const path = require('path')

path.join('/foo', 'bar', 'baz')           // /foo/bar/baz
path.resolve('config', 'env.json')        // /cwd/config/env.json
path.dirname('/foo/bar/file.js')          // /foo/bar
path.basename('/foo/bar/file.js')         // file.js
path.extname('file.js')                   // .js
path.parse('/foo/bar/file.js')            // { root, dir, base, name, ext }
path.join(__dirname, 'data', 'users.json') // safe for require context
```

## Under the Hood

path uses string manipulation. It normalizes separators based on `process.platform`. resolve() works from CWD; join() does not. No I/O; purely string operations.

## Common Mistakes

- Using string concatenation for paths
- Assuming forward slashes work on Windows
- Using `path.resolve` when `path.join` is intended
- Forgetting `__dirname` in dynamic paths

## Best Practices

- Always use path.join or path.resolve
- Use path.join(__dirname, ...) for files relative to module
- Use path.posix for URLs or cross-platform APIs
- Validate/sanitize user-provided paths

## Summary

Path module: cross-platform path handling. join, resolve, dirname, basename, extname. Never concatenate paths manually.