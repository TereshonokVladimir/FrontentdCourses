# Promises

## Concept

A Promise represents a value that may be available now, later, or never. States: pending, fulfilled, rejected. Create with `new Promise((resolve, reject) => {})`. Consume with `.then()`, `.catch()`, `.finally()`. Chain with return from then. `Promise.all` waits for all; `Promise.race` returns first. Promises are eager—they start immediately.

## Why It Matters

Promises are the foundation of async JavaScript. Fetch, async/await, and most async APIs use them. Understanding then/catch and error propagation prevents unhandled rejections. Promise.all is essential for parallel requests.

## Key Concepts

- `new Promise(executor)` – executor runs immediately
- `resolve(value)` / `reject(reason)`
- `.then(onFulfilled, onRejected)` – returns new Promise
- `.catch()` – handles rejections
- `Promise.all([...])` – all must resolve
- `Promise.race([...])` – first to settle wins

## Code Example

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 1000)
})

p.then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(() => console.log("cleanup"))

Promise.all([fetch("/a"), fetch("/b")]).then(([a, b]) => {})
```

## Under the Hood

Promises queue callbacks as microtasks. Once settled, state doesn't change. Then/catch return new Promises for chaining. Rejections propagate until caught.

## Common Mistakes

- Not returning from then (next then gets undefined)
- Forgetting catch (unhandled rejection)
- Mixing callbacks and Promises awkwardly
- Using Promise constructor when fetch/async exists

## Best Practices

- Prefer async/await over raw then/catch
- Use Promise.all for parallel work
- Always handle rejections
- Use Promise.resolve/reject for wrapping

## Summary

Promises represent async results. Use then/catch/finally. Promise.all for parallel. Prefer async/await. Always handle errors.
