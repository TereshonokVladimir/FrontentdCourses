# Integration Testing

## Concept

Integration testing verifies that multiple components work together correctly. Unlike unit tests, integration tests use real (or near-real) dependencies—databases, HTTP servers, message queues—to validate that components integrate as expected.

## Why It Matters

Unit tests pass, but the system can still fail when components interact. Integration tests catch interface mismatches, configuration errors, and real-world behavior that mocks cannot simulate. They are essential for production confidence.

## Key Concepts

- Tests multiple components together (service + DB, API + auth)
- Uses real or test doubles for external systems
- Slower than unit tests, fewer in number
- Validates contracts between components
- Often uses test databases or in-memory alternatives

## Code Example

```typescript
// integration/user-api.test.ts
import request from 'supertest'
import { app } from '../app'
import { db } from '../db'

beforeAll(async () => {
  await db.migrate()
})

afterEach(async () => {
  await db.raw('TRUNCATE users CASCADE')
})

describe('POST /users', () => {
  it('creates user and returns 201', async () => {
    const res = await request(app)
      .post('/users')
      .send({ email: 'test@example.com', name: 'Test' })
      .expect(201)

    expect(res.body).toMatchObject({ email: 'test@example.com' })
    const [user] = await db('users').where({ email: 'test@example.com' })
    expect(user).toBeDefined()
  })
})
```

## Under the Hood

Integration tests spin up real processes or connections: a test database, an HTTP server, or a message broker. Test containers (e.g., Testcontainers) can run real PostgreSQL or Redis. The test runner coordinates setup, execution, and teardown, often with longer timeouts.

## Common Mistakes

- Sharing state between tests (database not cleaned)
- Using production database or credentials
- Tests that depend on external services being available
- No isolation—one failing test cascades to others
- Treating integration tests as slow unit tests (testing too much)

## Best Practices

- Use a dedicated test database, reset between tests
- Keep integration tests focused on component boundaries
- Use Testcontainers or similar for real DB/Redis when needed
- Run integration tests in CI, not on every local save
- Document setup requirements (Docker, env vars)

## Summary

Integration tests verify that components work together using real or near-real dependencies. Use test databases, ensure isolation, and focus on component boundaries. They are slower than unit tests but critical for production readiness.
