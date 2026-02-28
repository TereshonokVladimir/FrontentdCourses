# Node.js Async Patterns

## Concept

Node.js relies on asynchronous I/O. Patterns include callbacks, Promises, async/await, and event-based flows. Understanding when and how to use each prevents callback hell, unhandled rejections, and race conditions.

## Why It Matters

Most Node APIs are async. Mixing patterns incorrectly leads to bugs. Callback hell is unreadable; improper Promise handling causes silent failures. Production code needs consistent, maintainable async patterns.

## Key Concepts

- Callbacks: (err, data) convention
- Promises: .then(), .catch(), .finally()
- async/await: syntactic sugar over Promises
- Promise.all, Promise.allSettled, Promise.race
- Sequential vs parallel execution

## Code Example

```javascript
// Callback (legacy)
fs.readFile('a.txt', (err, data) => {
  if (err) return console.error(err)
  console.log(data)
})

// Promise + async/await
async function readFiles() {
  const [a, b] = await Promise.all([
    fs.promises.readFile('a.txt', 'utf-8'),
    fs.promises.readFile('b.txt', 'utf-8')
  ])
  return { a, b }
}

// Sequential with loop
for (const file of files) {
  await processFile(file)
}
```

## Under the Hood

Promises are microtasks; they run before the next macrotask. async functions return Promises. await suspends the function until the Promise settles. Callbacks are scheduled in the event loop.

## Common Mistakes

- Forgetting await (fire-and-forget)
- Not catching Promise rejections
- Using async in map without Promise.all
- Mixing callbacks and Promises without promisify

## Best Practices

- Prefer async/await for readability
- Use Promise.all for parallel independent work
- Always handle errors (try/catch or .catch())
- Use util.promisify for callback APIs

## Summary

Async patterns: callbacks, Promises, async/await. Prefer async/await; use Promise.all for parallel; handle errors.