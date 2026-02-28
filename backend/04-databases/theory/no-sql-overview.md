# NoSQL Overview

## Concept

NoSQL encompasses non-relational databases: document (MongoDB), key-value (Redis), wide-column (Cassandra), and graph (Neo4j). They relax ACID or relational structure for scale, flexibility, or specialized access patterns. "NoSQL" means "not only SQL"—many support query languages.

## Why It Matters

Relational databases don't fit every use case. High write throughput, flexible schema, caching, and graph traversals often use NoSQL. Backends commonly combine PostgreSQL with Redis (cache) and MongoDB (documents). Choosing the right tool matters.

## Key Concepts

- Document: JSON-like documents, schema-flexible (MongoDB, CouchDB)
- Key-value: simple get/set, often in-memory (Redis, Memcached)
- Wide-column: column families, good for time-series (Cassandra, ScyllaDB)
- Graph: nodes and edges, relationship queries (Neo4j)
- CAP: Consistency, Availability, Partition tolerance—pick two
- BASE: Basically Available, Soft state, Eventually consistent

## Code Example

```javascript
// Redis: cache
await redis.set('user:123', JSON.stringify(user), 'EX', 3600)
const cached = await redis.get('user:123')

// MongoDB: document
await db.collection('orders').insertOne({
  user_id: 123,
  items: [{ product_id: 1, quantity: 2 }],
  created_at: new Date()
})
```

## Under the Hood

Document stores use B-trees or LSM trees. Key-value stores are often in-memory with optional persistence. Wide-column stores partition by key. Graph stores use adjacency lists or native graph storage.

## Common Mistakes

- Using NoSQL when relational fits (premature choice)
- Assuming strong consistency (many are eventually consistent)
- No schema design (documents still need structure)
- Treating Redis as primary store (data loss on restart)

## Best Practices

- Choose by access pattern, not hype
- Use Redis for cache/session; persist elsewhere
- Design document schema (embed vs reference)
- Understand consistency guarantees

## Summary

NoSQL: document, key-value, wide-column, graph. Choose by use case. Redis for cache. Understand CAP and consistency.
