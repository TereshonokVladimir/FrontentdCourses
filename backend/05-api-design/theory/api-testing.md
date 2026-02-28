# API Testing

## Concept

API testing validates that endpoints behave correctly—status codes, response structure, error handling, and business logic. Tests can be unit (isolated handlers), integration (with DB, auth), or contract (against OpenAPI spec). Automated tests catch regressions before production.

## Why It Matters

APIs are contracts. Breaking changes break clients. Tests document expected behavior and prevent regressions. Integration tests catch issues unit tests miss (DB, auth, middleware). Contract tests ensure implementation matches spec.

## Key Concepts

- **Unit tests**: Mock dependencies; test handler logic in isolation
- **Integration tests**: Real DB, auth; test full request flow
- **Contract tests**: Validate responses against OpenAPI schema
- **E2E tests**: Test critical flows against deployed API
- **Test pyramid**: Many unit, fewer integration, few E2E

## Code Example

```javascript
// Integration test with supertest
describe('POST /api/v1/orders', () => {
  it('creates order and returns 201', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .set('Authorization', `Bearer ${validToken}`)
      .set('Idempotency-Key', uuidv4())
      .send({ items: [{ productId: 'prod_1', quantity: 2 }] })

    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({
      id: expect.any(String),
      status: 'pending',
      total: expect.any(Number)
    })
    expect(res.headers.location).toContain('/orders/')
  })

  it('returns 400 without idempotency key', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .set('Authorization', `Bearer ${validToken}`)
      .send({ items: [] })

    expect(res.status).toBe(400)
  })
})
```

## Under the Hood

Tests run in CI on every commit. Use test DB (or transactions) for isolation. Seed data for consistent tests. Mock external services (payments, email). Contract tests parse OpenAPI and validate response structure.

## Common Mistakes

- Only testing happy path
- No tests for error cases (400, 401, 404, 500)
- Tests depend on each other (order matters)
- Slow tests (no DB cleanup, real external calls)
- No contract tests (spec and code diverge)

## Best Practices

- Test status codes, response shape, and key fields
- Test auth (missing token, invalid token, wrong user)
- Test validation (invalid input, missing required)
- Use test DB with transactions or truncate
- Run contract tests against OpenAPI in CI

## Summary

API testing prevents regressions and documents behavior. Use integration tests for full flows, unit tests for logic, contract tests for spec compliance. Test errors and auth. Automate in CI.
