# TypeScript Async Types

## Concept

Async functions return `Promise<T>`. TypeScript infers the resolved type. `Promise.all` preserves tuple types. Async iterators have `AsyncIterable<T>`. Proper typing prevents async bugs.

## Why It Matters

Backend code is mostly async. Incorrect Promise types hide bugs. `Promise.all` with tuples gives correct inference. Async iterators need proper typing for streams.

## Key Concepts

- `async function f(): Promise<T>` – return type
- `Promise<T>` – generic resolved type
- `Promise.all([a, b])` – `Promise<[A, B]>`
- `AsyncIterable<T>`, `AsyncGenerator<T>`
- `Awaited<T>` – unwrap Promise (TS 4.5+)

## Code Example

```typescript
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`/users/${id}`)
  return res.json()
}

async function fetchUserAndPosts(id: string) {
  const [user, posts] = await Promise.all([
    fetchUser(id),
    fetchPosts(id)
  ])
  return { user, posts }  // { user: User, posts: Post[] }
}

type UserPromise = Awaited<ReturnType<typeof fetchUser>>
```

## Under the Hood

Promise is a generic type. async functions implicitly return Promise. Promise.all with a tuple preserves element types. Awaited recursively unwraps nested Promises.

## Common Mistakes

- Forgetting to type Promise resolve value
- Losing types with Promise.all on array
- Not handling Promise rejection in types
- Incorrect async iterator typing

## Best Practices

- Type async return values
- Use tuple with Promise.all for inference
- Use Awaited for extracting resolved type
- Type async generators explicitly

## Summary

Async types: Promise<T>, Awaited, tuple inference. Type async functions; use Promise.all with tuples.