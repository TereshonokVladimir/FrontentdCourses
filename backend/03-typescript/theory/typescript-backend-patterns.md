# TypeScript Backend Patterns

## Concept

Common patterns in backend TypeScript: repository pattern, DTOs, service layer, dependency injection. Types enforce contracts. Use interfaces for abstraction. Result types for error handling.

## Why It Matters

Patterns provide structure. Types document contracts. Repositories abstract data access. DTOs separate API from domain. Essential for maintainable backends.

## Key Concepts

- Repository: `interface UserRepository { findById(id: string): Promise<User | null> }`
- DTO: request/response shapes, separate from entity
- Service: business logic, uses repositories
- Result type: `{ ok: true; data } | { ok: false; error }`
- Dependency injection: inject interfaces

## Code Example

```typescript
interface UserRepository {
  findById(id: string): Promise<User | null>
  save(user: User): Promise<User>
}

class UserService {
  constructor(private repo: UserRepository) {}
  async getUser(id: string): Promise<Result<User, NotFoundError>> {
    const user = await this.repo.findById(id)
    return user ? { ok: true, data: user } : { ok: false, error: new NotFoundError() }
  }
}
```

## Under the Hood

Interfaces enable swapping implementations. DTOs are plain types. Services orchestrate. Result types are discriminated unions. DI can be manual or via a framework.

## Common Mistakes

- Leaking entities to API
- No repository abstraction
- Throwing instead of Result
- Over-abstracting small projects

## Best Practices

- Use DTOs at API boundary
- Repository per aggregate
- Result type for expected failures
- Inject dependencies for testability

## Summary

Backend patterns: Repository, DTO, Service, Result. Types enforce contracts; inject for testability.