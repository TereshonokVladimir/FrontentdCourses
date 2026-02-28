# Dependency Injection Testing

## Concept

Dependency injection (DI) passes dependencies into a function or class instead of having it create them internally. This makes code testable: you can inject mocks, stubs, or fakes during tests. DI is a key enabler for unit testing in backends.

## Why It Matters

Code that directly instantiates database clients, HTTP clients, or file systems is hard to test—you must use real resources or resort to module-level mocking. DI lets you inject test doubles, keeping tests fast, isolated, and deterministic.

## Key Concepts

- Constructor injection, setter injection, or parameter injection
- Depend on abstractions (interfaces), not concretions
- Container or manual wiring for production; inject mocks in tests
- Enables testing without real DB, HTTP, or filesystem

## Code Example

```typescript
// Without DI: hard to test
class OrderService {
  private db = new Database()
  async createOrder(order: Order) {
    return this.db.insert('orders', order)
  }
}

// With DI: testable
interface OrderRepository {
  insert(order: Order): Promise<Order>
}

class OrderService {
  constructor(private repo: OrderRepository) {}
  async createOrder(order: Order) {
    return this.repo.insert(order)
  }
}

// Test
const mockRepo: OrderRepository = {
  insert: jest.fn().mockResolvedValue({ id: '1', ...order })
}
const service = new OrderService(mockRepo)
await service.createOrder(order)
expect(mockRepo.insert).toHaveBeenCalledWith(order)
```

## Under the Hood

DI is a design pattern, not a framework feature. You pass dependencies explicitly. Some frameworks (NestJS, Inversify) provide containers that resolve dependencies by type; in plain Node, manual constructor injection is common. Tests simply pass mocks.

## Common Mistakes

- Injecting too many dependencies (class does too much)
- Service locator instead of injection (hidden dependencies)
- Not defining interfaces for injected dependencies
- Over-using DI containers in simple projects
- Injecting concrete classes instead of abstractions

## Best Practices

- Prefer constructor injection
- Define interfaces for dependencies
- Keep injection simple; avoid deep container config
- Use DI for external boundaries (DB, HTTP, messaging)
- Consider lightweight DI (manual) before heavy frameworks

## Summary

Dependency injection passes dependencies in rather than creating them internally. It enables testing with mocks and keeps code decoupled. Use constructor injection and depend on interfaces. DI is foundational for testable backend code.
