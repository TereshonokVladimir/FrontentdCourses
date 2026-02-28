# Eager Loading

## Concept

Eager loading fetches related data in the initial query (or a small number of batched queries) instead of on-demand. It prevents N+1 by loading all needed relations upfront.

## Why It Matters

Eager loading turns N+1 into 1–2 queries. For list endpoints and batch jobs, it's essential. The trade-off is potentially over-fetching when relations aren't always needed—but for predictable access patterns, it's the right choice.

## Key Concepts

- **JOIN**: Single query with JOINs; may duplicate parent rows
- **Separate queries**: One for parents, one for children with IN clause
- **Nested relations**: Include multiple levels (e.g., order → user → company)
- **Selective loading**: Eager load only when needed; conditional include

## Code Example

```javascript
// Sequelize
const orders = await Order.findAll({
  include: [{ model: User, attributes: ['id', 'name'] }]
})

// Raw SQL with JOIN
const orders = await db.query(`
  SELECT o.*, u.name as user_name
  FROM orders o
  LEFT JOIN users u ON o.user_id = u.id
  WHERE o.status = 'active'
`)
```

## Under the Hood

ORMs translate include/join into SQL JOINs or separate queries. JOINs can produce row duplication (one order with 3 items = 3 rows); ORMs often de-duplicate. Separate queries use IN (id1, id2, ...) to batch fetch.

## Common Mistakes

- Eager loading deep nesting (cartesian explosion)
- Loading all relations by default (over-fetch)
- Not limiting attributes (SELECT *)
- Eager loading when relation rarely used

## Best Practices

- Eager load relations used in the response
- Limit attributes in includes (avoid SELECT *)
- Use separate queries for one-to-many to avoid row duplication
- Make eager loading explicit per endpoint, not global default

## Summary

Eager loading prevents N+1 by fetching relations upfront. Use JOINs or batched queries; limit to relations you need. Essential for list and batch operations.
