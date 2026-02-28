# Mocking

## Concept

Mocking replaces real dependencies with controllable substitutes during tests. Mocks record calls and return predefined values, allowing you to isolate the code under test and simulate external behavior (APIs, databases, time) without side effects.

## Why It Matters

Real dependencies are slow, flaky, or impossible to use in tests (payment gateways, external APIs). Mocking lets you test logic in isolation, simulate failures, and verify that your code calls dependencies correctly. It is essential for unit testing backends.

## Key Concepts

- Mock = fake implementation with call tracking
- Stub = returns predefined values, no verification
- Spy = wraps real implementation, records calls
- Control inputs and outputs without real I/O
- Verify interactions (called with X, called N times)

## Code Example

```typescript
// order-service.ts
export async function createOrder(repo: OrderRepo, payment: PaymentGateway, order: Order) {
  const saved = await repo.save(order)
  await payment.charge(saved.id, order.total)
  return saved
}

// order-service.test.ts
const mockRepo = {
  save: jest.fn().mockResolvedValue({ id: 'ord-1', total: 100 })
}
const mockPayment = {
  charge: jest.fn().mockResolvedValue(undefined)
}

it('saves order and charges payment', async () => {
  await createOrder(mockRepo, mockPayment, { total: 100 })
  expect(mockRepo.save).toHaveBeenCalledWith({ total: 100 })
  expect(mockPayment.charge).toHaveBeenCalledWith('ord-1', 100)
})
```

## Under the Hood

Jest mocks replace module exports at require/import time. `jest.fn()` creates a function that records arguments and return values. `jest.mock('module')` replaces the entire module. Mocks are reset between tests via `jest.clearAllMocks()` or `jest.resetAllMocks()`.

## Common Mistakes

- Mocking too much—testing the mock, not real logic
- Not resetting mocks between tests (leaking state)
- Mocking the wrong layer (mocking internal helpers instead of boundaries)
- Over-specifying mock calls (brittle tests)
- Using mocks when a real lightweight implementation would suffice

## Best Practices

- Mock at boundaries (DB, HTTP, file system)
- Prefer dependency injection for testability
- Verify essential interactions, not every call
- Use `mockResolvedValue` / `mockRejectedValue` for async
- Consider real test doubles (in-memory DB) when practical

## Summary

Mocking replaces real dependencies with controllable fakes. Use it at boundaries to isolate logic, simulate failures, and verify interactions. Avoid over-mocking and prefer real implementations when they are fast and deterministic.
