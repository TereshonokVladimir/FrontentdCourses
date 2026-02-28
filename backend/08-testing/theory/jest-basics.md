# Jest Basics

## Concept

Jest is a JavaScript test framework that provides test runners, assertions, mocking, and coverage out of the box. It is widely used for Node.js and TypeScript backends, offering fast execution and a rich API for organizing and running tests.

## Why It Matters

Jest is the de facto standard for Node.js testing. Understanding its basics—describe/it blocks, matchers, lifecycle hooks, and configuration—enables you to write maintainable tests and integrate with CI pipelines effectively.

## Key Concepts

- `describe` / `it` / `test` for structure
- `expect` matchers for assertions
- `beforeAll`, `beforeEach`, `afterEach`, `afterAll` for setup/teardown
- `jest.fn()`, `jest.mock()` for mocking
- Configurable via `jest.config.js` or package.json

## Code Example

```typescript
// math.test.ts
describe('Math utilities', () => {
  beforeEach(() => {
    // Runs before each test
  })

  it('adds two numbers', () => {
    expect(1 + 2).toBe(3)
  })

  it('handles async', async () => {
    const result = await Promise.resolve(42)
    expect(result).toBe(42)
  })

  it('matches objects', () => {
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 })
  })

  it('checks thrown errors', () => {
    expect(() => {
      throw new Error('fail')
    }).toThrow('fail')
  })
})
```

## Under the Hood

Jest runs tests in parallel by default (across files), using a worker pool. Each file runs in isolation. Jest compiles TypeScript via ts-jest or babel-jest. It uses a custom resolver for `jest.mock()` to hoist mocks before imports.

## Common Mistakes

- Using `toBe` for objects (use `toEqual`)
- Forgetting `return` or `await` in async tests
- Shared mutable state between tests
- Overusing `beforeAll` when `beforeEach` is safer
- Not configuring `testEnvironment: 'node'` for Node projects

## Best Practices

- Use `toEqual` for objects/arrays, `toBe` for primitives
- Prefer `beforeEach` for isolation; use `beforeAll` only when setup is expensive
- Set `testTimeout` for integration tests
- Use `--runInBand` for tests that share resources
- Configure `moduleNameMapper` for path aliases

## Summary

Jest provides structure (describe/it), assertions (expect), and lifecycle hooks. Use `toEqual` for objects, handle async properly, and configure for Node. It is the standard choice for backend testing in the Node ecosystem.
