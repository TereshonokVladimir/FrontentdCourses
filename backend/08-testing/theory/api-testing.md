# API Testing

## Concept

API testing verifies that HTTP endpoints behave correctly—status codes, response bodies, headers, and error handling. Tests can be unit-level (controller with mocked service) or integration-level (real server, real DB). The focus is on the contract between client and server.

## Why It Matters

APIs are the primary interface of backends. Broken endpoints break clients. API tests catch regressions in routes, validation, auth, and response format. They are essential for production backends and often run in CI on every PR.

## Key Concepts

- Test status codes, body shape, headers
- Use supertest or similar for HTTP assertions
- Mock or use real services depending on test level
- Test auth, validation, error responses
- Validate OpenAPI/contract if applicable

## Code Example

```typescript
import request from 'supertest'
import { app } from '../app'

describe('GET /users/:id', () => {
  it('returns 200 and user when found', async () => {
    const res = await request(app)
      .get('/users/123')
      .set('Authorization', 'Bearer valid-token')
      .expect(200)

    expect(res.body).toMatchObject({
      id: '123',
      email: expect.any(String)
    })
  })

  it('returns 404 when user not found', async () => {
    await request(app)
      .get('/users/nonexistent')
      .set('Authorization', 'Bearer valid-token')
      .expect(404)
  })

  it('returns 401 without auth', async () => {
    await request(app).get('/users/123').expect(401)
  })
})
```

## Under the Hood

Supertest wraps the app (Express, Fastify, etc.) and sends real HTTP requests. The app runs in-process; no separate server needed for integration tests. For E2E, you hit a running server. Assertions validate status, body (parsed JSON), and headers.

## Common Mistakes

- Only testing happy path
- Not testing auth and authorization
- Ignoring error response format
- Tests that depend on shared DB state
- No validation of response schema

## Best Practices

- Test status, body, and critical headers
- Cover 4xx and 5xx paths
- Use factories for test data
- Validate error response structure
- Consider contract tests for public APIs

## Summary

API testing validates HTTP endpoints—status, body, headers, auth, and errors. Use supertest for in-process tests; cover success and failure paths. API tests are critical for backend quality and should run in CI.
