# Interview Questions: Databases

## Beginner

1. What is the difference between SQL and NoSQL databases?
2. What are the main SQL commands for CRUD operations?
3. What is a primary key and why is it important?
4. What is a foreign key and what does it enforce?
5. What is an index and when would you add one?
6. What is a transaction and why use one?
7. What does ACID stand for?
8. What is SQL injection and how do you prevent it?
9. What is the difference between INNER JOIN and LEFT JOIN?
10. What is normalization and what is 1NF, 2NF, 3NF?
11. What is connection pooling and why is it used?
12. What is the difference between CHAR and VARCHAR?
13. What is a migration and why use migrations?
14. What is the N+1 query problem and how do you avoid it?
15. What is the difference between DELETE and TRUNCATE?

## Intermediate

1. Explain the difference between Read Committed and Repeatable Read isolation levels. What anomalies does each prevent?
2. How would you optimize a slow query that does a full table scan?
3. What is the difference between a clustered and non-clustered index?
4. How does connection pooling work and what are the trade-offs of pool size?
5. Explain the difference between synchronous and asynchronous replication. When would you use each?
6. What is a composite index and how does column order affect its usefulness?
7. How would you implement zero-downtime schema migration for adding a NOT NULL column?
8. What is the difference between Redis and PostgreSQL? When would you use each?
9. Explain the CAP theorem and how it applies to database choice.
10. What is a deadlock and how do you handle it in application code?
11. How does PostgreSQL's MVCC work for concurrency?
12. What is a partial index and when would you use one?
13. How would you design a multi-tenant database schema?
14. What is the difference between horizontal and vertical partitioning?
15. How do you prevent cache stampede when using Redis for caching?
16. What is row-level security (RLS) and when would you use it?
17. Explain the trade-offs between ORM and raw SQL. When would you use each?
18. How would you implement soft delete and ensure it's applied consistently?
19. What is eventual consistency and when is it acceptable?
20. How would you design an audit log for tracking changes to sensitive tables?

## Advanced

1. Design a system that handles 10,000 writes per second with strong consistency. What database, replication, and application patterns would you use?
2. How would you implement distributed transactions across multiple databases? What are the trade-offs?
3. Explain how PostgreSQL's query planner chooses between nested loop, hash join, and merge join. What statistics does it use?
4. How would you migrate a 100GB table with zero downtime and minimal locking?
5. Design a schema and indexing strategy for a time-series analytics workload (events with timestamps, filters by dimension).
6. How would you implement read-your-writes consistency in a system with primary-replica replication?
7. What is a phantom read and which isolation level prevents it? How does PostgreSQL implement Serializable isolation?
8. Design a rate limiter using Redis that works across multiple application instances. How do you handle clock skew?
9. How would you shard a relational database? What are the challenges with joins and transactions?
10. Explain the trade-offs between document (MongoDB) and relational models for an e-commerce product catalog with variants.
11. How would you implement point-in-time recovery (PITR) for PostgreSQL? What is WAL and how does it enable PITR?
12. Design a cache invalidation strategy for a read-heavy API with complex queries. How do you handle related data?
13. What is a covering index and how does it enable index-only scans?
14. How would you detect and resolve split-brain in a replicated database cluster?
15. Design a database schema for a multi-tenant SaaS with data isolation, cross-tenant analytics, and compliance (GDPR deletion).
16. How does MongoDB's aggregation pipeline differ from SQL joins? When would you prefer one over the other?
17. Explain the trade-offs of using stored procedures vs application-level logic for business rules.
18. How would you implement optimistic locking and handle concurrent updates? What about pessimistic locking?
19. Design a backup and restore strategy that meets RPO of 1 hour and RTO of 4 hours. What components are needed?
20. How would you profile and fix a production database that has sudden query slowdowns? What tools and steps would you use?
