# TypeScript API Types

## Concept

API types define request and response shapes. Use DTOs for input validation and output serialization. Version types for API evolution. Shared types between client and server when using OpenAPI/GraphQL codegen.

## Why It Matters

APIs need consistent, documented types. DTOs separate internal models from API contract. Versioning requires type evolution. Type-safe APIs reduce integration bugs.

## Key Concepts

- Request DTO: body, query, params
- Response DTO: success and error shapes
- Pagination: `{ data: T[]; total: number; page: number }`
- API versioning: separate types per version
- OpenAPI/GraphQL codegen for shared types

## Code Example

```typescript
interface CreateUserRequest {
  name: string
  email: string
}

interface UserResponse {
  id: string
  name: string
  email: string
  createdAt: string
}

interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

type UsersResponse = PaginatedResponse<UserResponse>
```

## Under the Hood

Types document the contract. Validation (Zod) enforces at runtime. Codegen can produce types from OpenAPI. Serialization (e.g., date to ISO string) happens at boundary.

## Common Mistakes

- Exposing internal entities
- Inconsistent error response shape
- No validation of request body
- Forgetting to exclude sensitive fields

## Best Practices

- DTOs at API boundary
- Validate with Zod
- Consistent error format
- Document with OpenAPI

## Summary

API types: request/response DTOs, pagination, versioning. Validate at boundary; document contract.