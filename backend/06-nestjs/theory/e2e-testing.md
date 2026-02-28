# E2E Testing

## Concept

End-to-end tests run the full application and make real HTTP requests. Nest's `Test.createTestingModule()` can create an `INestApplication` with `supertest` to hit actual endpoints. E2E tests verify the entire stack: routes, validation, guards, database.

## Why It Matters

E2E tests catch integration issues that unit tests miss: wrong status codes, validation not applied, auth bypass. They give confidence that the API works as a whole. Use a test database to avoid affecting production data.

## Key Concepts

- `createNestApplication()`: get full app instance
- `supertest`: `request(app.getHttpServer()).get('/users')`
- Test database: separate DB or in-memory (e.g., SQLite)
- `beforeAll`/`afterAll`: setup and teardown
- `app.init()` or `app.listen()`: bootstrap before tests

## Code Example

```typescript
describe('UsersController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(getConnectionToken())
      .useValue(/* test DB connection */)
      .compile()

    app = module.createNestApplication()
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it('GET /users returns 200', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(res => expect(Array.isArray(res.body)).toBe(true))
  })

  it('POST /users with invalid body returns 400', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ email: 'invalid' })
      .expect(400)
  })
})
```

## Under the Hood

Test module compiles the full app with overrides (e.g., test DB). `createNestApplication()` returns the app; `getHttpServer()` exposes the underlying HTTP server. Supertest sends real HTTP requests and asserts on status and body.

## Common Mistakes

- Using production database; always use test DB
- Not cleaning data between tests; order-dependent failures
- Slow tests; minimize DB operations, use transactions
- Not closing the app in afterAll (hanging process)

## Best Practices

- Use a dedicated test database or in-memory
- Reset DB between tests (transactions or truncate)
- Test happy path and key error cases
- Keep E2E suite focused; unit test the rest

## Summary

E2E tests hit the full app with real HTTP. Use test DB, supertest, and proper setup/teardown. Test critical flows; avoid slow, flaky tests.
