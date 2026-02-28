# Normalization

## Concept

Normalization is the process of structuring a database to reduce redundancy and dependency. Forms (1NF, 2NF, 3NF, BCNF) define rules: each cell holds atomic values, no partial dependencies, no transitive dependencies. Higher forms reduce update anomalies.

## Why It Matters

Unnormalized data leads to update anomalies: changing one fact requires multiple updates. Insert and delete anomalies occur when adding/removing data forces unrelated changes. Normalization keeps data consistent and reduces storage.

## Key Concepts

- 1NF: atomic values, no repeating groups
- 2NF: 1NF + no partial dependencies (non-key attributes depend on full key)
- 3NF: 2NF + no transitive dependencies (non-key attributes depend only on key)
- BCNF: every determinant is a candidate key
- Denormalization: intentionally introducing redundancy for read performance

## Code Example

```sql
-- Unnormalized: order stores product name (transitive dependency)
-- order_id -> product_id -> product_name

-- Normalized to 3NF
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  created_at TIMESTAMPTZ
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2)
);
-- product_id in order_items -> products; no product data in order_items
```

## Under the Hood

Normalization affects physical layout: more tables, more joins. The query planner optimizes joins. Denormalization trades write complexity for read speed (fewer joins, materialized views, cached aggregates).

## Common Mistakes

- Over-normalizing (e.g., splitting address into street, city, zip tables)
- Normalizing immutable data that never changes
- Ignoring read patterns when deciding normalization level
- Confusing 2NF and 3NF rules

## Best Practices

- Normalize to 3NF by default
- Denormalize only when profiling shows join bottlenecks
- Use materialized views for read-heavy aggregates
- Document denormalization decisions

## Summary

Normalization reduces redundancy and anomalies. 1NF→2NF→3NF. Denormalize for read performance when needed. Profile before optimizing.
