# TypeScript and Runtime Validation

## Concept

TypeScript types are erased at runtime. Runtime validation (Zod, io-ts, etc.) validates data and can infer types. Combines compile-time safety with runtime checks. Essential for API boundaries.

## Why It Matters

User input, DB, and external APIs are untyped at runtime. Types alone don't catch invalid data. Validation libraries validate and provide types. Backend must validate every external input.

## Key Concepts

- Types are compile-time only
- Zod: `z.object({ name: z.string() })` – schema + type inference
- `z.infer<typeof schema>` – type from schema
- Parse vs safeParse – throw or return result
- Validation at boundaries (API, DB, config)

## Code Example

```typescript
import { z } from 'zod'

const CreateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email()
})

type CreateUser = z.infer<typeof CreateUserSchema>

function createUser(body: unknown): CreateUser {
  return CreateUserSchema.parse(body)
}
```

## Under the Hood

Zod schemas are objects that describe structure. parse() traverses and validates. Type inference extracts TypeScript type from schema structure. No runtime cost after validation.

## Common Mistakes

- Trusting types without validation at boundaries
- Validating too late (after use)
- Not handling validation errors
- Duplicating validation logic and types

## Best Practices

- Validate at API/DB boundaries
- Use Zod for schema + type inference
- Return clear validation errors
- Single source of truth: schema defines type

## Summary

Validation: types + runtime. Use Zod at boundaries; infer types from schema.
