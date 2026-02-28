# Coverage

## Concept

Code coverage measures how much of your code is executed during tests. Common metrics include line coverage, branch coverage, function coverage, and statement coverage. Coverage helps identify untested code but does not guarantee correctness.

## Why It Matters

Coverage highlights gaps in testing—dead code, untested branches, and missed edge cases. It is a useful metric for CI gates and quality dashboards. However, high coverage alone does not mean good tests; it must be combined with meaningful assertions.

## Key Concepts

- **Line coverage**: % of lines executed
- **Branch coverage**: % of branches (if/else) taken
- **Function coverage**: % of functions called
- **Statement coverage**: Similar to line, varies by tool
- Coverage thresholds for CI (e.g., fail if < 80%)

## Code Example

```typescript
// service.ts
export function processOrder(order: Order) {
  if (!order.items?.length) {
    throw new Error('Empty order')
  }
  const total = order.items.reduce((s, i) => s + i.price, 0)
  return total > 100 ? total * 0.9 : total
}

// jest.config.js
module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}
```

## Under the Hood

Coverage tools instrument code (insert counters) or use VM hooks to track execution. Istanbul (used by Jest) instruments at the AST level. Each line/branch has a counter; after tests run, the tool computes percentages. Source maps map back to original TypeScript.

## Common Mistakes

- Chasing 100% coverage at the cost of test quality
- Testing getters/setters or trivial code for coverage
- Ignoring branch coverage (only watching line %)
- Coverage on generated or third-party code
- Assuming coverage means "tested well"

## Best Practices

- Set realistic thresholds (80% is a common target)
- Exclude test files, config, and generated code
- Focus on critical paths and business logic
- Use branch coverage to catch untested conditionals
- Treat coverage as a signal, not a goal

## Summary

Coverage measures executed code. Use line and branch coverage, set CI thresholds, and exclude non-production code. High coverage is useful but not sufficient—tests must assert meaningful behavior.
