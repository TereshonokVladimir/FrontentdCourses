# Testing Basics

## Concept

Nest provides a testing module (`@nestjs/testing`) that creates an isolated application context for unit tests. You can override providers with mocks, compile the module, and test services and controllers in isolation. Jest is the default test runner.

## Why It Matters

Unit tests verify logic without hitting the database or network. Nest's Test module makes it easy to mock dependencies and assert behavior. Fast tests enable confident refactoring and catch regressions early.

## Key Concepts

- `Test.createTestingModule()`: build test module
- `overrideProvider()`: replace real providers with mocks
- `compile()`: build the module (async)
- `get()`: retrieve service/controller for testing
- Mock objects: `{ method: jest.fn().mockResolvedValue(...) }`

## Code Example

```typescript
describe('UsersService', () => {
  let service: UsersService
  let repo: MockType<Repository<User>>

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useFactory: () => ({
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          }),
        },
      ],
    }).compile()

    service = module.get(UsersService)
    repo = module.get(getRepositoryToken(User))
  })

  it('should return users', async () => {
    jest.spyOn(repo, 'find').mockResolvedValue([{ id: 1, name: 'John' }])
    const result = await service.findAll()
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('John')
  })
})
```

## Under the Hood

Test.createTestingModule builds a minimal Nest context with only the providers you specify. OverrideProvider replaces dependencies. compile() instantiates the module. get() retrieves the singleton from the DI container.

## Common Mistakes

- Not mocking all dependencies; tests fail or hit real DB
- Testing implementation details instead of behavior
- Shared state between tests; use beforeEach to reset
- Over-mocking; test becomes brittle

## Best Practices

- Mock at boundaries (repository, external API)
- Test behavior: inputs and expected outputs
- Use `overrideProvider` for clean mocks
- Keep tests focused; one assertion per test when possible

## Summary

Use Test.createTestingModule to build isolated context. Override providers with mocks. Test services and controllers in isolation. Mock boundaries, not internals.
