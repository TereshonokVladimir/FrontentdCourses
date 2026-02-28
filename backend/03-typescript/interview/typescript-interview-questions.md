# Interview Questions: TypeScript

## Beginner

1. What is TypeScript and how does it differ from JavaScript?
2. What is the difference between `interface` and `type`?
3. What does `strict` mode do in tsconfig?
4. How do you define optional properties in an interface?
5. What is the purpose of `readonly`?
6. How do you type a function's parameters and return value?
7. What is `any` and why should you avoid it?
8. How do you import types in TypeScript?
9. What is the difference between `null` and `undefined` in TypeScript?
10. How do you type an array?
11. What is a union type?
12. How do you use generics in TypeScript?
13. What is `keyof` used for?
14. How do you make a property optional with `Partial`?
15. What is the purpose of `tsconfig.json`?

## Intermediate

1. Explain the difference between `Pick`, `Omit`, and `Partial`.
2. What are type guards and when would you use them?
3. How do conditional types work? Give an example.
4. What is the `infer` keyword used for?
5. Explain mapped types and provide an example.
6. How do you handle errors in TypeScript (typed catch)?
7. What is the difference between `extends` in interfaces vs conditional types?
8. How do you create a type-safe event emitter?
9. What are discriminated unions and why are they useful?
10. How do you type async functions and Promises?
11. Explain the difference between `unknown` and `any`.
12. How do you implement a generic repository pattern?
13. What is declaration merging?
14. How do you use `satisfies` (TS 4.9+)?
15. What are project references and when would you use them?
16. How do you type a REST API client?
17. What is the difference between `Record<string, T>` and `{ [key: string]: T }`?
18. How do you validate external data at runtime with TypeScript?
19. What are branded types and when would you use them?
20. How do you type a middleware function in Express?

## Advanced

1. Design a type-safe builder pattern with method chaining.
2. How would you implement a type-level state machine?
3. Explain how to create a type-safe dependency injection container.
4. Design a generic API client that infers response types from routes.
5. How do you implement exhaustive switch with discriminated unions?
6. Create a type that extracts the resolved type from a nested Promise.
7. How would you type a streaming parser that emits typed chunks?
8. Design a type-safe event bus with typed events and handlers.
9. Explain how to implement recursive types (e.g., JSON type).
10. How do you create a type that makes only specific keys optional?
11. Design a validation library that infers types from schemas.
12. How would you implement type-safe routing with path params?
13. Create a type that converts camelCase keys to snake_case.
14. How do you handle circular type references?
15. Design a Result type with full type safety and combinators.
16. How would you type a plugin system with extensible hooks?
17. Explain the trade-offs of nominal typing with branded types.
18. How do you create a type that deep-freezes an object?
19. Design a type-safe SQL query builder.
20. How would you implement type-level arithmetic or string manipulation?