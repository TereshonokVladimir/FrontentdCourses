# Database Design

## Concept

Database design defines schema, relationships, constraints, and indexes to support application requirements. It balances normalization, performance, and maintainability. Good design anticipates access patterns, growth, and failure modes.

## Why It Matters

Poor design leads to slow queries, data inconsistency, and painful migrations. Schema changes in production are costly. Investing in design upfront reduces technical debt and operational incidents.

## Key Concepts

- Requirements: entities, relationships, access patterns
- ER modeling: entities, attributes, relationships (1:1, 1:N, N:M)
- Normalization level: 3NF default, denormalize for reads
- Naming: consistent (snake_case, plural tables)
- Partitioning strategy: by time, range, hash
- Growth: indexing, archiving, sharding

## Code Example

```sql
-- E-commerce: users, orders, products, order_items
-- 1:N user -> orders, N:M orders <-> products via order_items

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL,
  PRIMARY KEY (order_id, product_id)
);
```

## Under the Hood

Design influences physical layout: table size, index count, join complexity. Query planner uses schema and statistics. Poor design forces full scans or excessive joins.

## Common Mistakes

- Designing for hypothetical future needs
- Ignoring access patterns (query-first design)
- No naming convention
- Missing indexes on foreign keys

## Best Practices

- Start from access patterns and queries
- Normalize first, denormalize when measured
- Consistent naming; document decisions
- Plan for growth (partitioning, archiving)

## Summary

Database design: schema, relationships, constraints. Query-first. Normalize then denormalize. Plan for growth. Document decisions.
