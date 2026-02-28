# Practice: Conditional Types

## Tasks

### Task 1
Implement `UnwrapPromise<T>` – if T is Promise<U>, return U, else T. Implement `UnwrapArray<T>` – if T is U[], return U, else T. Create `DeepUnwrapPromise<T>` that recursively unwraps nested promises.

### Task 2
Create `Exclude<T, U>` – from union T, remove members assignable to U. Create `Extract<T, U>` – from union T, keep only members assignable to U. Use conditional types. Verify with `Exclude<'a'|'b'|'c', 'a'>` = `'b'|'c'`.

### Task 3
Implement `NonNullable<T>` – exclude null and undefined from T. Implement `RequiredKeys<T>` – keys of T that are required. Implement `OptionalKeys<T>` – keys that are optional. Use mapped types and conditional types.

### Task 4
Create `ApiMethod<T>` – if T is a function, extract its return type (unwrapping Promise). Create `ResponseType<T>` for an API client: given a route map `{ '/users': () => Promise<User[]> }`, `ResponseType<'/users'>` = `User[]`. Use conditional types and infer.

### Task 5
Build a type-level `If<C, T, F>` – if C is true, T, else F. Build `Equals<A, B>` – true if A and B are the same type. Use conditional types. Create `Assert<T, U>` – compile error if T is not assignable to U (use `T extends U ? T : never` in a constraint). Document the pattern.