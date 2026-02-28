# N+1 Query Problem

## Concept

The N+1 problem occurs when you fetch a list of N items, then execute one additional query per item to load related data—resulting in 1 + N queries instead of 1 or 2. It's a common ORM anti-pattern.

## Why It Matters

For 100 orders, N+1 causes 101 queries instead of 2. At scale, this overwhelms the database, multiplies latency, and exhausts connection pools. It's one of the most common performance issues in backend applications.

## Key Concepts

- **Lazy loading**: Related data fetched on access; triggers N+1 in loops
- **Eager loading**: Fetch related data in initial query (JOIN or batch)
- **Batch loading**: Single query with IN clause for related IDs
- **DataLoader pattern**: Batching + caching per request

## Code Example

```javascript
// N+1: 1 query for orders + N for users
const orders = await db.query('SELECT * FROM orders')
for (const order of orders) {
  order.user = await db.query('SELECT * FROM users WHERE id = ?', [order.user_id])
}

// Fix: JOIN or batch
const orders = await db.query(`
  SELECT o.*, u.name as user_name
  FROM orders o
  JOIN users u ON o.user_id = u.id
`)
```

## Under the Hood

ORMs often default to lazy loading for flexibility. When you iterate and access a relation, each access triggers a query. Eager loading uses JOINs or separate batched queries to fetch all related data upfront.

## Common Mistakes

- Relying on ORM defaults without checking query count
- Nested loops with relation access
- Not using DataLoader or similar for GraphQL/resolver patterns
- Fetching relations in serial instead of batch

## Best Practices

- Use eager loading (include/join) when you know you need relations
- Implement DataLoader for N+1-prone patterns (e.g., GraphQL)
- Monitor query count per request; alert on spikes
- Prefer explicit batch queries over ORM magic when performance matters

## Summary

N+1 turns one query into hundreds. Use eager loading, JOINs, or batching to fetch related data in bulk. Always verify query count in critical paths.
