# Node.js Util Module

## Concept

The `util` module provides utility functions for debugging, type checking, and async handling. `util.promisify` converts callback-style APIs to Promises. `util.inspect` formats objects for logging. `util.types` checks value types.

## Why It Matters

Legacy APIs use callbacks; util.promisify makes them Promise-friendly. util.inspect produces readable object dumps for debugging. util.types is more reliable than typeof for Node-specific types. Common in backend code.

## Key Concepts

- `util.promisify(fn)` – callback → Promise
- `util.inspect(obj, options)` – string representation
- `util.types.isArrayBuffer()`, `util.types.isDate()`, etc.
- `util.format()` – sprintf-style formatting
- `util.deprecate()` – mark APIs as deprecated

## Code Example

```javascript
const util = require('util')
const fs = require('fs')

const readFile = util.promisify(fs.readFile)
const data = await readFile('config.json', 'utf-8')

console.log(util.inspect(complexObj, { depth: 2 }))
util.types.isPromise(p)  // true if p is a Promise
```

## Under the Hood

promisify wraps a function to return a Promise that resolves/rejects based on the callback's (err, result) convention. inspect recursively traverses objects with depth limit. types checks internal slots.

## Common Mistakes

- promisifying functions with non-standard callback signature
- Using inspect on circular refs without depth limit (stack overflow)
- Relying on util.debuglog in production (use proper logger)

## Best Practices

- Use promisify for callback APIs when async/await preferred
- Set depth in inspect for large objects
- Use util.types over typeof for Buffer, etc.
- Use deprecate for phasing out APIs

## Summary

util: promisify, inspect, types, format. Bridge callbacks to Promises; format objects for debugging.