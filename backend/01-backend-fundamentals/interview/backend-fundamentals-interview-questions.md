# Interview Questions: Backend Fundamentals

## Beginner

1. What is the difference between a client and a server in client-server architecture?
2. What are the main HTTP methods and when would you use each?
3. What does a 404 status code mean? What about 500?
4. What is the difference between 401 and 403?
5. What is REST? What does it stand for?
6. What is JSON? Why is it used in APIs?
7. What are environment variables? Why use them instead of hardcoding?
8. What is the request-response cycle?
9. What does stateless mean in the context of web servers?
10. What is rate limiting and why is it used?
11. What is caching? What problem does it solve?
12. What is idempotency? Which HTTP methods are idempotent?
13. What is the difference between horizontal and vertical scaling?
14. What is a health check endpoint?
15. What does Content-Type header indicate?

## Intermediate

1. Explain the difference between stateless and stateful servers. When would you choose each?
2. How would you implement idempotency for a POST endpoint that creates an order?
3. Describe the flow of an HTTP request from client to server and back.
4. What are the trade-offs of fixed window vs sliding window rate limiting?
5. How do you handle graceful shutdown in a Node.js server?
6. What is the cache-aside pattern? When would you invalidate the cache?
7. Explain the difference between liveness and readiness probes.
8. How would you design a production-ready error response format?
9. What security concerns should you address when building a backend API?
10. How do you prevent a single client from overwhelming your server?
11. What is the purpose of the Idempotency-Key header?
12. How would you add request tracing across multiple services?
13. What is the difference between PUT and PATCH? When would you use each?
14. How do you validate and sanitize user input in a backend?
15. What is connection pooling and why is it important?
16. How would you implement structured logging for a backend service?
17. What is the difference between 201 Created and 200 OK? When to use 204?
18. How do you handle secrets in a backend application?
19. What is a circuit breaker and when would you use it?
20. Explain the trade-offs between vertical and horizontal scaling.

## Advanced

1. Design a rate limiting system that works across multiple server instances. What would you use for storage?
2. How would you implement distributed tracing for a microservices architecture?
3. Explain the challenges of cache invalidation. What strategies can you use?
4. How do you design an API for safe retries when the network is unreliable?
5. What is the difference between eventual consistency and strong consistency? When does each apply?
6. How would you handle a thundering herd problem when a cache expires?
7. Design a system that scales to millions of requests per second. What components would you use?
8. How do you ensure zero-downtime deployments for a stateful service?
9. What is the CAP theorem? How does it affect backend design?
10. How would you implement a distributed rate limiter with sliding window?
11. Explain the trade-offs of using JWT vs session-based authentication for scaling.
12. How do you handle partial failures in a distributed system?
13. What is backpressure and how do you handle it in a backend?
14. Design an API versioning strategy for a public API with breaking changes.
15. How would you implement a circuit breaker with half-open state?
16. What is the difference between synchronous and asynchronous replication?
17. How do you design for multi-region deployment?
18. Explain how you would debug a production issue with no logs.
19. What is the split-brain problem and how do you avoid it?
20. How would you design a system to handle 10x traffic spike?
