# SQL Basics

## Concept

SQL (Structured Query Language) is the standard language for managing relational databases. It provides declarative commands for defining schema (DDL), manipulating data (DML), and querying (DQL). CRUD operations map to SELECT, INSERT, UPDATE, DELETE.

## Why It Matters

Every backend interacts with databases. SQL is universal across PostgreSQL, MySQL, SQLite. Understanding SQL fundamentals prevents N+1 queries, injection vulnerabilities, and inefficient data access. Most ORMs still generate SQL under the hood.

## Key Concepts

- DDL: CREATE, ALTER, DROP for schema
- DML: INSERT, UPDATE, DELETE for data
- DQL: SELECT with WHERE, ORDER BY, LIMIT
- Filtering: WHERE, AND, OR, IN, LIKE, BETWEEN
- Aggregation: COUNT, SUM, AVG, MIN, MAX, GROUP BY
- Subqueries and set operations (UNION, INTERSECT)

## Code Example

```sql
-- Create table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert
INSERT INTO users (email) VALUES ('alice@example.com');

-- Query with filter and aggregation
SELECT email, COUNT(*) OVER () as total
FROM users
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC
LIMIT 10;
```

## Under the Hood

SQL is declarative: you specify what you want, not how. The query planner parses SQL, builds an execution plan (scans, joins, sorts), and executes it. Indexes influence plan choice. Prepared statements parse once and execute many times.

## Common Mistakes

- SQL injection via string concatenation
- SELECT * in production (wastes bandwidth, breaks when schema changes)
- Missing WHERE on UPDATE/DELETE (accidental mass updates)
- Confusing GROUP BY with ORDER BY
- Not using transactions for multi-statement operations

## Best Practices

- Use parameterized queries always
- Select only needed columns
- Add indexes for WHERE and JOIN columns
- Use transactions for atomic operations
- Avoid N+1: use JOINs or IN with batched IDs

## Summary

SQL: DDL, DML, DQL. Parameterize queries, select explicitly, use transactions. Foundation for all database work.
