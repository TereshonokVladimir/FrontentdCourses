# Assertion Libraries

## Concept

Assertion libraries provide APIs to express expected outcomes in tests. Beyond basic `expect(x).toBe(y)`, they offer matchers for objects, arrays, errors, async behavior, and custom predicates. Good assertions make tests readable and failure messages actionable.

## Why It Matters

Clear assertions document intent and produce helpful failure output. Vague assertions (`expect(result).toBeTruthy()`) hide bugs; specific ones (`expect(result.status).toBe(201)`) pinpoint failures. Choosing the right matcher improves maintainability.

## Key Concepts

- Matchers: `toBe`, `toEqual`, `toMatchObject`, `toThrow`
- Async: `resolves`, `rejects`
- Negation: `not.toBe`, `not.toHaveBeenCalled`
- Custom matchers for domain-specific checks
- Failure messages guide debugging

## Code Example

```typescript
// Jest built-in matchers
expect(42).toBe(42)
expect({ a: 1 }).toEqual({ a: 1 })
expect({ a: 1, b: 2 }).toMatchObject({ a: 1 })
expect([1, 2, 3]).toContain(2)
expect('hello').toMatch(/hel/)
expect(() => throwError()).toThrow('expected message')

// Async
await expect(promise).resolves.toBe(42)
await expect(promise).rejects.toThrow(Error)

// Custom matcher (Jest)
expect.extend({
  toBeValidEmail(received) {
    const pass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(received)
    return { pass, message: () => `Expected ${received} to be valid email` }
  }
})
```

## Under the Hood

Assertion libraries compare values and throw (or report) on mismatch. Jest's `expect` returns an object with matcher methods; each matcher performs the check and either passes or throws with a formatted message. Custom matchers extend this object.

## Common Mistakes

- Using `toBe` for objects (reference equality, not deep)
- `expect(x).toBeTruthy()` instead of `expect(x).toBe(true)`
- Asserting on implementation details
- Missing `await` with `resolves`/`rejects`
- Overly generic failure messages from custom matchers

## Best Practices

- Use `toEqual` for objects/arrays, `toBe` for primitives
- Prefer specific matchers (`toHaveLength`, `toContain`)
- Use `toMatchObject` for partial object matching
- Add custom matchers for repeated domain checks
- Ensure failure messages include expected vs actual

## Summary

Assertion libraries provide matchers for values, objects, async, and errors. Use specific matchers, prefer `toEqual` for objects, and add custom matchers for domain logic. Good assertions make tests readable and failures debuggable.
