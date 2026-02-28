# Interview Questions: Performance

## Beginner

1. What is the difference between latency and throughput?
2. What does P95 or P99 latency mean? Why is it important?
3. What is connection pooling and why is it used?
4. What is caching? What problem does it solve?
5. What is the N+1 query problem? How do you fix it?
6. What is the difference between horizontal and vertical scaling?
7. What does "time to first byte" (TTFB) mean?
8. Why would you use gzip or Brotli compression for API responses?
9. What is a load balancer? What does it do?
10. What is an index in a database? Why add one?
11. What is lazy loading vs eager loading?
12. What does "stateless" mean in the context of scaling?
13. What is a CDN? When would you use one?
14. What is rate limiting? Why is it important for performance?
15. What is the difference between CPU-bound and I/O-bound work?

## Intermediate

1. How would you identify a performance bottleneck in a production API?
2. Explain the cache-aside pattern. When would you invalidate the cache?
3. How do you prevent a cache stampede when a popular key expires?
4. What is the trade-off between fixed-window and sliding-window rate limiting?
5. How would you implement a rate limiter that works across multiple server instances?
6. Explain the trade-offs of connection pool size. What happens if it's too small or too large?
7. How do you optimize a slow database query? What tools do you use?
8. What is tail latency and why does it matter more than average latency?
9. How would you design an API to handle 10x traffic spike?
10. What is backpressure in streaming? How do you handle it?
11. How do you measure and reduce memory usage in a Node.js application?
12. What is the critical path in request processing? How do you optimize it?
13. When would you use batch processing vs streaming for large data?
14. How do you ensure a rate limiter doesn't become a bottleneck?
15. What is the thundering herd problem? How do you mitigate it?
16. How would you implement distributed tracing for a microservice?
17. What metrics would you track for a production API? What SLOs would you set?
18. Explain the trade-offs of in-memory vs Redis caching.
19. How do you profile a Node.js application? What do you look for?
20. What is the difference between load balancing algorithms (round-robin, least connections, IP hash)?

## Advanced

1. Design a system that handles 1 million requests per second. What components and trade-offs?
2. How would you implement a distributed cache with consistency guarantees?
3. Explain how you would debug a production latency spike with no obvious code changes.
4. How do you design for zero-downtime scaling (adding/removing instances)?
5. What is the CAP theorem? How does it affect caching and database design for performance?
6. How would you implement a rate limiter with sliding window that scales to millions of keys?
7. Design a batch API that handles 100,000 items without overwhelming the database.
8. How do you prevent GC pauses from affecting P99 latency in Node.js?
9. Explain the trade-offs of synchronous vs asynchronous replication for read replicas.
10. How would you implement a cache that supports both TTL and LRU eviction?
11. What is connection pool exhaustion? How do you detect and prevent it?
12. Design a load test that accurately simulates production traffic patterns.
13. How do you optimize a system where the database is the bottleneck?
14. What is the difference between sampling and instrumentation in profiling? When is each appropriate?
15. How would you implement a circuit breaker for an external API to improve resilience and performance?
16. Explain how to tune a database (PostgreSQL or MySQL) for a read-heavy vs write-heavy workload.
17. How do you handle partial failures when a cache is unavailable? What are the trade-offs?
18. Design a streaming API that handles backpressure and client disconnects gracefully.
19. How would you implement approximate rate limiting (e.g., for very high RPS) with minimal storage?
20. What is the split-brain problem in distributed systems? How does it affect performance and consistency?
