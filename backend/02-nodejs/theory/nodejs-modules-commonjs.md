# Node.js Modules: CommonJS

## Concept

CommonJS is Node's original module system. `require()` loads modules; `module.exports` exports. Synchronous loading. Modules are cached by path. Used by most npm packages and Node's built-in modules.

## Why It Matters

Most Node code uses CommonJS. Understanding require resolution, caching, and circular dependency behavior is essential. ESM is the future, but CommonJS is still dominant in backend.

## Key Concepts

- require('module') loads and returns module.exports
- module.exports = x or exports.x = y
- Resolution: node_modules, NODE_PATH, built-ins
- Caching: same path returns same instance
- Circular deps: partial exports during load

## Code Example

```javascript
// math.js
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
}

// app.js
const { add, multiply } = require('./math')
console.log(add(2, 3))  // 5
```

## Under the Hood

require() is synchronous. Node reads the file, wraps in a function, executes, and caches the result in require.cache. Resolution follows the algorithm: core module, path, node_modules. Circular refs can expose incomplete exports.

## Common Mistakes

- exports = something (breaks; use module.exports)
- Requiring same module with different paths (no shared cache)
- Sync require in async context (blocks)
- Circular deps with mutual dependency

## Best Practices

- Use module.exports for single export
- Avoid circular dependencies; extract shared code
- Prefer ESM for new code when possible
- Use require() for dynamic paths; ESM has import()

## Summary

CommonJS: require(), module.exports, synchronous, cached. Understand resolution and circular deps.
