# Lazy Loading

## Concept

Lazy loading defers loading of data until it's actually needed. For database relations, this means fetching the related record only when the property is accessed—reducing initial query cost when relations aren't always used.

## Why It Matters

Not every request needs every relation. Lazy loading avoids over-fetching when you only need the parent. However, it easily leads to N+1 when used in loops. The trade-off is flexibility vs predictable query count.

## Key Concepts

- **Deferred fetch**: Load on first access, not at query time
- **Proxy/getter**: Transparent access triggers load
- **N+1 risk**: Loop + lazy access = many queries
- **When useful**: Single-record views, optional relations
- **When harmful**: List views, batch processing

## Code Example

```javascript
// ORM lazy loading (conceptual)
const order = await Order.findByPk(123)
// order.user not loaded yet
const userName = order.user.name  // Triggers: SELECT * FROM users WHERE id = ?
```

## Under the Hood

ORMs implement lazy loading via getters or proxies. On first access to `order.user`, the ORM executes a query and caches the result. Subsequent access uses the cache. Each distinct order in a loop triggers its own query.

## Common Mistakes

- Using lazy loading in loops (N+1)
- Assuming one query when relations are accessed
- Not disabling lazy load when you need eager
- Lazy loading in hot paths (unpredictable latency)

## Best Practices

- Use lazy loading only when relation is optional and accessed rarely
- Prefer eager loading for list endpoints and batch jobs
- Monitor query count; lazy loading often the culprit
- Document when relations trigger queries

## Summary

Lazy loading saves initial load when relations are optional. Avoid it in loops and list views; use eager loading or batching instead.
