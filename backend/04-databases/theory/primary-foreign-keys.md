# Primary and Foreign Keys

## Concept

A primary key uniquely identifies each row in a table. A foreign key references another table's primary key, enforcing referential integrity. The database rejects inserts/updates that violate these constraints. Keys enable joins and cascade behavior.

## Why It Matters

Without keys, orphaned rows and duplicates creep in. Foreign keys prevent invalid references. Primary keys enable efficient lookups and uniqueness. Cascades (ON DELETE CASCADE) automate cleanup when parent rows are removed.

## Key Concepts

- Primary key: unique, not null, one per table
- Composite primary key: (a, b) together unique
- Foreign key: column(s) referencing parent PK
- ON DELETE CASCADE: delete children when parent deleted
- ON DELETE SET NULL: set FK to null when parent deleted
- ON DELETE RESTRICT: prevent delete if children exist

## Code Example

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10,2)
);

-- Composite PK for junction table
CREATE TABLE order_items (
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT,
  PRIMARY KEY (order_id, product_id)
);
```

## Under the Hood

Primary keys create unique indexes. Foreign keys add triggers or checks on insert/update/delete. Cascades execute additional statements. Indexes on FKs speed joins and cascade lookups.

## Common Mistakes

- No primary key (hard to identify rows, no natural unique index)
- Foreign key without index (slow joins and cascades)
- CASCADE when RESTRICT is safer (accidental mass deletes)
- Using business keys as PK (emails change, etc.)

## Best Practices

- Always define a primary key
- Index foreign key columns
- Use CASCADE only when business logic requires it
- Prefer surrogate keys (SERIAL, UUID) over natural keys

## Summary

PK: unique identifier. FK: referential integrity. Index FKs. Choose ON DELETE behavior deliberately. Surrogate keys for stability.
