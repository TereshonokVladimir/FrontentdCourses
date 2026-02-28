# Interview Questions: Testing

## Beginner

1. What is the difference between unit, integration, and E2E testing?
2. What is a mock and when would you use it?
3. What does `describe` and `it` do in Jest?
4. What is the difference between `toBe` and `toEqual` in Jest assertions?
5. How do you test an async function in Jest?
6. What is test coverage and why does it matter?
7. What is the test pyramid and what does it recommend?
8. How do you run a single test file in Jest?
9. What is `beforeEach` used for?
10. What is a test fixture?
11. Why should tests be independent of each other?
12. What is TDD? What does Red-Green-Refactor mean?
13. How do you mock a module in Jest?
14. What is supertest and when do you use it?
15. What is a flaky test and what typically causes it?

## Intermediate

1. Explain the difference between a mock, stub, and fake. When would you use each?
2. How do you test code that depends on a database? What strategies ensure test isolation?
3. How would you test an API endpoint that requires authentication?
4. What is dependency injection and how does it improve testability?
5. How do you handle testing code that uses `setTimeout` or delays?
6. What is snapshot testing and when should you avoid it?
7. How would you set up a CI pipeline to run tests on every PR?
8. What is contract testing and how does it differ from integration testing?
9. How do you test error handling and edge cases in a service?
10. What is the difference between `beforeAll` and `beforeEach`? When would you use each?
11. How would you test a function that calls an external HTTP API?
12. What strategies do you use to fix flaky tests?
13. How do you organize tests in a large backend project?
14. What is property-based testing and when is it useful?
15. How would you test a function that uses random values or `Date.now()`?
16. What are coverage thresholds and how do you set them in Jest?
17. How do you test database transactions (commit vs rollback)?
18. What is the purpose of test doubles in testing?
19. How would you test a rate limiter or middleware?
20. What is the difference between integration tests and E2E tests for an API?

## Advanced

1. Design a testing strategy for a microservice that depends on 3 other services and a database. What would you unit test, integration test, and contract test?
2. How would you implement a test that verifies idempotency of an API endpoint?
3. Explain how you would test a distributed system with eventual consistency.
4. How do you test code that depends on environment variables or secrets?
5. Design a strategy to test a payment flow that involves retries, webhooks, and idempotency keys.
6. How would you test a service that publishes events to a message queue?
7. What is the testing trophy and how does it differ from the test pyramid for backends?
8. How would you reduce the execution time of a large test suite from 10 minutes to under 2 minutes?
9. How do you test a circuit breaker or retry-with-backoff logic?
10. Explain how to test an API that uses rate limiting. How do you avoid rate limits in tests?
11. How would you test a migration script that modifies production data?
12. Design a testing approach for a GraphQL API with resolvers and data loaders.
13. How do you test code that has non-deterministic behavior (e.g., UUID generation, timestamps)?
14. What is mutation testing and how would you use it to improve test quality?
15. How would you test a service that integrates with OAuth or third-party auth?
16. Explain how to test a caching layer (e.g., Redis) and cache invalidation logic.
17. How would you implement parallel test execution while avoiding resource contention?
18. Design a testing strategy for an API with versioning (e.g., /v1, /v2).
19. How do you test graceful shutdown and in-flight request handling?
20. How would you test a system that uses distributed locks or leader election?
