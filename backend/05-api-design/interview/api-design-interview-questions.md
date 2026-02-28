# Interview Questions: API Design

## Beginner

1. What is REST? What are its main principles?
2. What is the difference between GET and POST? When would you use each?
3. What does a 404 status code mean? What about 500?
4. What is the difference between 401 Unauthorized and 403 Forbidden?
5. Why use plural nouns for resource URLs (e.g., /users instead of /user)?
6. What is the purpose of the Content-Type header?
7. What is API versioning and why is it important?
8. What is pagination and why do we need it for list endpoints?
9. What is rate limiting? What HTTP status code indicates rate limit exceeded?
10. What is the difference between PUT and PATCH?
11. What does idempotent mean? Which HTTP methods are idempotent?
12. What is an API key and how is it typically used?
13. What is the purpose of the Location header in a 201 response?
14. What is OpenAPI (Swagger) and what is it used for?
15. What is the difference between authentication and authorization?

## Intermediate

1. Explain the trade-offs between offset-based and cursor-based pagination. When would you choose each?
2. How would you design an error response format for a production API? What fields would you include?
3. Describe three API versioning strategies. What are the pros and cons of each?
4. How would you implement idempotency for a POST endpoint that creates a payment?
5. What is HATEOAS? When would you use it in an API design?
6. How do you prevent N+1 queries when designing a REST API that returns related resources?
7. Explain the difference between sync and async API communication. When would you use webhooks vs polling?
8. How would you design rate limiting for a multi-instance deployment? What storage would you use?
9. What security concerns should you address when building a public API?
10. How would you validate and document that your API implementation matches its OpenAPI spec?
11. What is content negotiation? How do Accept and Content-Type headers work?
12. How would you design a webhook system? What about retries, signing, and idempotency?
13. Explain the difference between liveness and readiness probes. Why does Kubernetes need both?
14. What is an API gateway? What concerns does it typically handle?
15. How would you design filtering and sorting for a list endpoint? What about SQL injection?
16. What is the difference between 400 Bad Request and 422 Unprocessable Entity? When would you use each?
17. How do you handle breaking changes in an API? What is a deprecation strategy?
18. What metrics would you track for an API in production?
19. How would you implement request tracing across multiple microservices?
20. What is the difference between REST and GraphQL? When would you choose each?

## Advanced

1. Design a rate limiting system that works across multiple regions with minimal latency. What are the trade-offs?
2. How would you implement distributed idempotency for payment processing? Consider race conditions and failure recovery.
3. Design an API versioning strategy for a public API with millions of active integrators. How do you deprecate gracefully?
4. Explain the trade-offs of using a single API gateway vs per-service gateways in a microservices architecture.
5. How would you design an event-driven API for order processing? Consider ordering, exactly-once semantics, and schema evolution.
6. Design a webhook delivery system that guarantees at-least-once delivery. How do you handle retries, dead letter, and client verification?
7. How would you implement API compatibility checks in CI? What constitutes a breaking change, and how do you detect it automatically?
8. Design an API for a high-throughput system (100k req/s). What would you optimize (caching, connection pooling, serialization)?
9. How do you design an API that supports both REST and GraphQL from the same backend? What are the challenges?
10. Explain the trade-offs of synchronous vs asynchronous communication between microservices. When does each cause cascading failures?
11. How would you implement zero-downtime API deployments with breaking changes?
12. Design an API authentication system that supports API keys, JWT, and OAuth2. How do you handle token revocation?
13. How would you design partial response (field selection) for a large resource? Consider caching and security.
14. What is the bulkhead pattern? How would you apply it to protect your API from downstream failures?
15. Design an API for real-time collaboration. Consider conflict resolution, offline support, and eventual consistency.
16. How do you design an API that aggregates data from multiple microservices? What about latency and partial failures?
17. Explain how you would implement request deduplication for a distributed system. What are the consistency implications?
18. How would you design an API that supports multi-tenancy with different rate limits and feature flags per tenant?
19. Design an API evolution strategy that allows adding new fields without breaking old clients. What about removing fields?
20. How would you debug a production API issue with no logs? What observability would you have built in?
