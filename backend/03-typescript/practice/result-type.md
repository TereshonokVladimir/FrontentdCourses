# Practice: Result Type

## Tasks

### Task 1
Implement `Result<T, E = Error>` as `{ ok: true; data: T } | { ok: false; error: E }`. Create `ok<T>(data: T)` and `err<E>(error: E)` constructors. Create `isOk` and `isErr` type guards. Add `unwrap(): T` that throws if err.

### Task 2
Implement `map<T, U, E>(result: Result<T, E>, fn: (t: T) => U): Result<U, E>` and `mapErr<T, E, F>(result: Result<T, E>, fn: (e: E) => F): Result<T, F>`. Add `flatMap` (andThen): `(result, fn: (t: T) => Result<U, E>): Result<U, E>`.

### Task 3
Create `Result.fromPromise<T, E>(promise: Promise<T>): Promise<Result<T, E>>` that catches and wraps. Create `Result.all<T, E>(results: Result<T, E>[]): Result<T[], E>` – ok if all ok, first error otherwise. Add `Result.any` – ok if any ok.

### Task 4
Implement `asyncResult<T, E>(fn: () => Promise<T>): Promise<Result<T, E>>` – async version of fromPromise. Create a `tryCatch` wrapper: `tryCatch<T, E>(fn: () => T): Result<T, E>`. Add `match<T, E, R>(result, { ok: (t) => R, err: (e) => R }): R`.

### Task 5
Build a `ResultAsync<T, E>` – a Promise-like that resolves to Result. Support `.map()`, `.flatMap()`, `.mapErr()`. Add `ResultAsync.fromPromise(promise)`. Support `ResultAsync.all()` and `ResultAsync.any()`. Implement `race` – first to settle wins. Ensure full type safety.