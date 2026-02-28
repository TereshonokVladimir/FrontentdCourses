# Contract Testing

## Concept

Contract testing verifies that consumer and provider agree on the API contract—request/response format, status codes, headers. Instead of testing against a live provider, consumers test against a mock that implements the contract; providers verify they satisfy the contract. Tools include Pact and OpenAPI-based approaches.

## Why It Matters

In microservices, services depend on each other's APIs. Integration tests that call real services are slow and flaky. Contract tests ensure compatibility without running the full system. They catch breaking changes before deployment and enable independent deployment of services.

## Key Concepts

- Consumer contract: what the consumer expects from the provider
- Provider verification: provider satisfies the contract
- Pact: consumer defines contract; provider verifies against it
- OpenAPI: contract as spec; both sides can validate
- Run in CI; no need for live provider during consumer tests

## Code Example

```typescript
// Consumer: define expected interaction
const provider = pact({
  consumer: 'OrderService',
  provider: 'UserService'
})

it('fetches user by id', async () => {
  await provider.addInteraction({
    state: 'user exists',
    uponReceiving: 'request for user',
    withRequest: { method: 'GET', path: '/users/123' },
    willRespondWith: { status: 200, body: { id: '123', email: 'a@b.com' } }
  })
  const user = await userClient.getUser('123')
  expect(user.email).toBe('a@b.com')
})

// Provider: verify against contract
// pact verify --pact-dir ./pacts --provider UserService
```

## Under the Hood

Pact: consumer tests generate a pact file (JSON) describing interactions. Provider verification replays those interactions against the real provider (or a thin wrapper). Mismatches fail the build. OpenAPI contract testing validates requests/responses against the schema.

## Common Mistakes

- Testing implementation details in the contract
- Over-specifying (exact headers, optional fields)
- Not running provider verification in provider's CI
- Treating contract as substitute for integration tests
- Breaking contracts without versioning

## Best Practices

- Keep contracts minimal—only what consumers need
- Run consumer tests to publish pact; provider verifies on change
- Use OpenAPI for documentation and contract validation
- Version contracts; handle breaking changes explicitly
- Combine with a few integration tests for critical paths

## Summary

Contract testing ensures consumer and provider agree on the API. Use Pact or OpenAPI; consumers define expectations, providers verify. Keeps services decoupled and catches breaking changes in CI. Complement with integration tests for full-stack confidence.
