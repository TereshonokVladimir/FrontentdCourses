# Practice: Discriminated Unions

## Tasks

### Task 1
Create a `ApiResponse<T>` discriminated union: `{ success: true; data: T } | { success: false; error: string; code: string }`. Add a type guard `isSuccess`. Create `handleResponse<T>(res: ApiResponse<T>): T` that returns data or throws.

### Task 2
Model a state machine: `State = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: Error }`. Create `transition(current: State, event: Event): State`. Use exhaustive switch with `never` for compile-time check.

### Task 3
Implement `Event` union: `UserCreated | UserUpdated | UserDeleted` each with `type` and specific fields. Create `handleEvent(event: Event): void` with switch. Add a new event type and ensure the switch fails to compile until you handle it (exhaustiveness).

### Task 4
Create a `Command` union for CQRS: `CreateUser | UpdateUser | DeleteUser`. Each has `type` and command-specific payload. Create `CommandHandler<C>` interface with `handle(cmd: C): Promise<void>`. Build a dispatcher that routes to the right handler. Use type narrowing.

### Task 5
Implement a parser result: `ParseResult<T> = { ok: true; value: T; rest: string } | { ok: false; error: string; position: number }`. Create combinators: `map`, `flatMap`, `or` (try first, then second). Build a simple expression parser that returns ParseResult<Expr>. Use discriminated union for Expr (Literal | BinaryOp | etc.).