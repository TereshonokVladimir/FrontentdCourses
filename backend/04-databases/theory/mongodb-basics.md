# MongoDB Basics

## Concept

MongoDB is a document database storing BSON (binary JSON). Collections hold documents with flexible schema. Queries use filter documents and aggregation pipeline. Indexes support fast lookups. Replica sets provide high availability; sharding provides horizontal scale.

## Why It Matters

MongoDB suits flexible or evolving schemas, hierarchical data, and rapid prototyping. Many backends use it for content, logs, or user-generated data. Understanding documents, indexing, and aggregation is essential for production use.

## Key Concepts

- Document: BSON object, nested structures
- Collection: group of documents (like a table)
- Filter: { field: value }, operators ($eq, $gt, $in)
- Aggregation: $match, $group, $lookup (join), $project
- Index: single, compound, text, TTL
- Embed vs reference: denormalize for reads, reference for many

## Code Example

```javascript
// Insert
await db.collection('orders').insertOne({
  user_id: 123,
  items: [{ product_id: 1, quantity: 2, price: 9.99 }],
  total: 19.98,
  created_at: new Date()
})

// Query with filter
const orders = await db.collection('orders')
  .find({ user_id: 123, 'items.quantity': { $gt: 1 } })
  .sort({ created_at: -1 })
  .limit(10)
  .toArray()

// Aggregation
const summary = await db.collection('orders').aggregate([
  { $match: { created_at: { $gte: weekAgo } } },
  { $group: { _id: '$user_id', total: { $sum: '$total' } } }
]).toArray()
```

## Under the Hood

Documents stored in BSON. WiredTiger storage engine: B-tree indexes, document-level locking. Aggregation pipeline runs in stages. Replica set: primary + secondaries, automatic failover.

## Common Mistakes

- No indexes (full collection scan)
- Unbounded arrays (document growth, 16MB limit)
- Over-embedding (large documents, slow updates)
- No connection pooling

## Best Practices

- Index filter and sort fields
- Limit array size; use reference for one-to-many
- Use projection to limit returned fields
- Connection pool; replica set for HA

## Summary

MongoDB: documents, collections, filters, aggregation. Index queries. Embed vs reference. Replica sets for HA.
