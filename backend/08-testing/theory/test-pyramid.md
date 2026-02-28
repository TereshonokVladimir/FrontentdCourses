# Test Pyramid

## Concept

The test pyramid is a model for balancing test types: many fast unit tests at the base, fewer integration tests in the middle, and few slow E2E tests at the top. The idea is to maximize feedback speed and coverage while minimizing maintenance cost.

## Why It Matters

Too many E2E tests lead to slow, flaky suites. Too few integration tests miss real integration bugs. The pyramid guides you to invest in fast, reliable unit tests and use higher-level tests strategically for critical paths.

## Key Concepts

- **Base (wide)**: Many unit tests, fast, isolated
- **Middle**: Integration tests, moderate count, real DB/HTTP
- **Top (narrow)**: Few E2E tests, critical user flows
- Ratio guidance: ~70% unit, ~20% integration, ~10% E2E
- Adjust for context (e.g., API-heavy vs UI-heavy)

## Code Example

```
        /\
       /  \     E2E (5–15 tests): checkout, auth flow
      /----\
     /      \   Integration (50–100): API + DB, service + repo
    /--------\
   /          \ Unit (500+): services, utils, validation
  /------------\
```

```typescript
// Pyramid in practice
// Unit: user-service.test.ts (20 tests)
// Integration: users-api.test.ts (10 tests)
// E2E: checkout-flow.e2e.ts (3 tests)
```

## Under the Hood

The pyramid is a heuristic, not a rule. Some systems invert it (e.g., "testing trophy" for frontends). Backends typically benefit from a classic pyramid: unit tests for logic, integration for API+DB, E2E for a few critical flows. Tooling (Jest, supertest, Playwright) supports each layer.

## Common Mistakes

- Ice cream cone: many E2E, few unit tests
- Treating the pyramid as rigid (70/20/10)
- Writing integration tests that are really unit tests with a DB
- No E2E at all (deployment surprises)
- Unit tests that mock everything (testing mocks)

## Best Practices

- Prioritize unit tests for business logic
- Use integration tests for boundaries (API, DB)
- Limit E2E to critical user journeys
- Run unit on every save; integration on PR; E2E on merge
- Refactor tests when the balance feels wrong

## Summary

The test pyramid balances many fast unit tests with fewer integration and E2E tests. Invest in the base for speed and coverage; use the top for critical flows. Adjust ratios for your system. The pyramid guides test strategy for maintainable, reliable backends.
