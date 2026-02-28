# Relational Model

## Concept

The relational model organizes data into tables (relations) of rows (tuples) and columns (attributes). Each row is uniquely identified. Relationships between tables are expressed through shared attributes. Codd's model (1970) underpins SQL databases.

## Why It Matters

Relational databases dominate production systems. The model enforces structure, reduces redundancy, and enables powerful querying via joins. Understanding it helps design schemas that scale and stay consistent.

## Key Concepts

- Relation: a table with named columns and unordered rows
- Tuple: a single row
- Attribute: a column with a domain (type)
- Candidate key: minimal set of attributes that uniquely identify a row
- Primary key: chosen candidate key
- Foreign key: attribute referencing another table's primary key
- Normalization: reducing redundancy via decomposition

## Code Example

```sql
-- Relations: orders and order_items
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  total DECIMAL(10,2)
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL REFERENCES orders(id),
  product_id INT NOT NULL REFERENCES products(id),
  quantity INT NOT NULL
);

-- Relationship: one order has many items
SELECT o.id, oi.product_id, oi.quantity
FROM orders o
JOIN order_items oi ON o.id = oi.order_id;
```

## Under the Hood

Tables are stored as files or pages. Rows are laid out sequentially or in B-trees. Indexes map key values to row locations. Joins are implemented via nested loops, hash joins, or merge joins depending on data size and indexes.

## Common Mistakes

- Denormalizing too early (premature optimization)
- Missing foreign keys (orphaned rows, no referential integrity)
- Over-normalizing (too many joins, poor performance)
- Using natural keys that can change (e.g., email as PK)

## Best Practices

- Use surrogate keys (SERIAL, UUID) for primary keys
- Define foreign keys for referential integrity
- Normalize to 3NF unless performance demands otherwise
- Document relationships in schema comments

## Summary

Relational model: tables, rows, columns, keys, relationships. Design with normalization and foreign keys. Surrogate keys for stability.
