# Test Doubles

## Concept

Test doubles are substitutes for real dependencies used during testing. The term encompasses mocks, stubs, fakes, spies, and dummies—each with different behavior and purpose. Choosing the right double affects test clarity and maintainability.

## Why It Matters

Not every substitute is a "mock." Using the wrong type leads to brittle tests, over-specification, or tests that don't verify what matters. Understanding the taxonomy helps you write tests that are easier to maintain and that catch real bugs.

## Key Concepts

- **Dummy**: Passed but never used (satisfies signature)
- **Stub**: Returns predefined answers, no verification
- **Spy**: Wraps real object, records calls for verification
- **Mock**: Preprogrammed with expectations, verifies interactions
- **Fake**: Working implementation, simplified (e.g., in-memory DB)

## Code Example

```typescript
// Stub: just return values
const stubRepo = {
  findById: () => Promise.resolve({ id: '1', name: 'Test' })
}

// Spy: wrap real, verify calls
const realLogger = { log: (msg: string) => console.log(msg) }
const spy = jest.spyOn(realLogger, 'log')

// Mock: expectations built-in
const mockPayment = {
  charge: jest.fn().mockResolvedValue({ success: true })
}
expect(mockPayment.charge).toHaveBeenCalledWith('ord-1', 100)

// Fake: real behavior, simplified
const fakeDb = new Map<string, User>()
fakeDb.set('1', { id: '1', name: 'Alice' })
```

## Under the Hood

Stubs and mocks are typically implemented as objects with method overrides. Fakes are real classes with simplified implementations (e.g., Map instead of PostgreSQL). Spies use proxy or wrapper patterns to intercept calls while delegating to the real implementation.

## Common Mistakes

- Calling everything a "mock" when a stub or fake would suffice
- Using mocks when fakes provide better confidence
- Over-verifying with mocks (every call, exact order)
- Fakes that diverge from real implementation behavior
- Not cleaning up spies (restore with `spy.mockRestore()`)

## Best Practices

- Use stubs when you only need controlled return values
- Use mocks when interaction verification matters
- Prefer fakes for databases and caches when they're fast
- Use dummies only to satisfy type signatures
- Document the purpose of each double in tests

## Summary

Test doubles come in types: dummy, stub, spy, mock, fake. Choose based on what you need—return values (stub), verification (mock), or real-ish behavior (fake). Use the simplest double that gives sufficient confidence.
