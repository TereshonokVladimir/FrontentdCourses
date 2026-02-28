# E2E Testing

## Concept

End-to-end (E2E) testing validates the entire system from the user's perspective. A real client sends real requests through the full stack—API, database, caches, external services—and assertions verify the complete flow.

## Why It Matters

E2E tests are the closest to production behavior. They catch integration gaps, deployment misconfigurations, and environment-specific bugs that unit and integration tests miss. They provide the highest confidence that the system works as a whole.

## Key Concepts

- Tests the full stack as a black box
- Real HTTP requests, real database, real dependencies
- Slowest and fewest tests in the pyramid
- Simulates real user flows (signup → login → create resource)
- Often run against a staging environment

## Code Example

```typescript
// e2e/checkout-flow.test.ts
import request from 'supertest'

const BASE = process.env.E2E_BASE_URL || 'http://localhost:3000'

describe('Checkout E2E', () => {
  it('completes full checkout flow', async () => {
    const signup = await request(BASE)
      .post('/auth/signup')
      .send({ email: 'e2e@test.com', password: 'Secure123!' })
    expect(signup.status).toBe(201)

    const token = signup.body.token
    const cart = await request(BASE)
      .post('/cart/items')
      .set('Authorization', `Bearer ${token}`)
      .send({ productId: 'prod-1', quantity: 2 })
    expect(cart.status).toBe(201)

    const checkout = await request(BASE)
      .post('/checkout')
      .set('Authorization', `Bearer ${token}`)
    expect(checkout.status).toBe(200)
    expect(checkout.body.orderId).toBeDefined()
  })
})
```

## Under the Hood

E2E tests typically run against a deployed or locally started application. The test process is separate from the app—it acts as an external client. Some setups use Docker Compose to bring up the full stack; others hit a shared staging environment. Timeouts are longer (10–30+ seconds per test).

## Common Mistakes

- Too many E2E tests—slow feedback, flakiness
- Testing implementation details via E2E
- No cleanup—tests leave data that breaks subsequent runs
- Brittle selectors or hardcoded waits
- Running E2E on every commit instead of on merge/PR

## Best Practices

- Limit E2E to critical user journeys (5–15 flows)
- Use idempotent test data (unique emails, UUIDs)
- Implement retries for flaky network assertions
- Run E2E in CI on merge to main, not on every push
- Document environment requirements and startup order

## Summary

E2E tests validate the full system from the client's perspective. Use them sparingly for critical flows, ensure cleanup and idempotency, and run them in CI. They provide the highest confidence but at the cost of speed and maintenance.
