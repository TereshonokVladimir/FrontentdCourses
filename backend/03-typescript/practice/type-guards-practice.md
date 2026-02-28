# Practice: Type Guards

## Tasks

### Task 1
Create `isString(x: unknown): x is string`, `isNumber(x: unknown): x is number`, `isObject(x: unknown): x is Record<string, unknown>`. Create `isUser(x: unknown): x is User` that checks for required User properties. Use in a function that narrows the type.

### Task 2
Implement `hasKey<K extends string>(obj: unknown, key: K): obj is Record<K, unknown>`. Implement `hasKeys<K extends string>(obj: unknown, keys: K[]): obj is Record<K, unknown>`. Use these to safely access nested properties.

### Task 3
Create `isArrayOf<T>(arr: unknown, guard: (x: unknown) => x is T): arr is T[]`. Use it to validate `unknown` input as `User[]`. Create `parseJson<T>(json: string, guard: (x: unknown) => x is T): T` that parses and validates.

### Task 4
Implement a generic `assertType<T>(guard: (x: unknown) => x is T, value: unknown): asserts value is T`. It throws if guard returns false. Use for validation at API boundaries. Create `validateOrThrow<T>(schema: z.ZodType<T>, input: unknown): T` using Zod's parse.

### Task 5
Build a type guard registry: `GuardRegistry` with `register<T>(name: string, guard: (x: unknown) => x is T)` and `get<T>(name: string): ((x: unknown) => x is T) | undefined`. Create a `validateUnion<T>(value: unknown, guards: Array<(x: unknown) => x is T>): T` that tries each guard and returns on first match or throws. Use for discriminated union validation.