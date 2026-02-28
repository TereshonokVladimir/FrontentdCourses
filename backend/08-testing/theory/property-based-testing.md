# Property-Based Testing

## Concept

Property-based testing generates random inputs and verifies that properties (invariants) hold for all of them. Instead of writing specific examples, you define properties like "sorting any array produces a permutation" or "decoding(encoding(x)) === x". Tools like fast-check generate hundreds of inputs automatically.

## Why It Matters

Example-based tests cover cases you think of; property-based tests find edge cases you didn't. They excel at discovering off-by-one errors, overflow bugs, and invalid state combinations. For parsers, serializers, and validation logic, they significantly improve robustness.

## Key Concepts

- Property = invariant that should hold for all inputs
- Generator = produces random valid inputs
- Shrinking = when a failure is found, minimize the failing input
- Complements example-based tests
- Best for pure functions and data transformations

## Code Example

```typescript
import * as fc from 'fast-check'

describe('sortUsers', () => {
  it('output length equals input length', () => {
    fc.assert(
      fc.property(fc.array(fc.record({ name: fc.string(), age: fc.nat(120) })), (users) => {
        const sorted = sortUsers(users)
        expect(sorted).toHaveLength(users.length)
      })
    )
  })

  it('result is sorted by age', () => {
    fc.assert(
      fc.property(fc.array(fc.record({ name: fc.string(), age: fc.nat(120) })), (users) => {
        const sorted = sortUsers(users)
        for (let i = 1; i < sorted.length; i++) {
          expect(sorted[i].age).toBeGreaterThanOrEqual(sorted[i - 1].age)
        }
      })
    )
  })
})
```

## Under the Hood

fast-check generates random values from arbitraries (e.g., `fc.string()`, `fc.array()`). When a property fails, it shrinks the input—trying smaller arrays, shorter strings—to find a minimal failing case. This makes debugging much easier than a random 10,000-element array.

## Common Mistakes

- Writing properties that are too weak (always pass)
- Using property-based tests for I/O or non-deterministic code
- Not defining good arbitraries (invalid inputs dominate)
- Ignoring the shrunk counterexample
- Running too few iterations (default 100–1000)

## Best Practices

- Start with simple properties (length, types, invariants)
- Use custom arbitraries for domain constraints
- Combine with example-based tests for known edge cases
- Increase numRuns for critical code
- Use `fc.assert` with `seed` for reproducible failures

## Summary

Property-based testing verifies invariants over generated inputs. Use it for pure logic, serializers, and validation. Define clear properties and good generators; leverage shrinking for debugging. It finds bugs that example-based tests miss.
