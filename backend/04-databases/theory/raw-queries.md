# Raw Queries

## Concept

Raw queries execute SQL directly instead of through an ORM. They give full control over the query, support complex logic (CTEs, window functions, dynamic SQL), and can outperform ORM-generated SQL. Parameterization is mandatory to prevent injection.

## Why It Matters

ORMs don't handle every case. Complex reporting, bulk operations, and performance-critical paths often need raw SQL. Backend developers must write safe, efficient raw queries. Knowing when to bypass the ORM is a key skill.

## Key Concepts

- Parameterized queries: $1, $2 or ? placeholders
- Never concatenate user input into SQL
- Query builder vs raw: sometimes raw is simpler
- Transactions: wrap multiple raw statements
- Result mapping: map rows to application types
- SQL injection: attacker-controlled input in query string

## Code Example

```typescript
// Parameterized - safe
const result = await db.query(
  'SELECT * FROM users WHERE email = $1 AND status = $2',
  [email, 'active']
)

// CTE - complex logic
const orders = await db.query(`
  WITH ranked AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) as rn
    FROM orders
  )
  SELECT * FROM ranked WHERE rn <= 5
`)

// Transaction
await db.query('BEGIN')
await db.query('INSERT INTO orders ...', [...])
await db.query('INSERT INTO order_items ...', [...])
await db.query('COMMIT')
```

## Under the Hood

Driver sends parameterized query to database; parameters are bound separately. Database parses once, executes many (prepared statement). Concatenation sends full query each time and is vulnerable to injection.

## Common Mistakes

- String concatenation for parameters (SQL injection)
- Not handling NULL in parameters
- Forgetting to release connection in pool
- Raw SQL without type mapping (runtime errors)

## Best Practices

- Always use parameterized queries
- Validate/sanitize input before passing
- Use transactions for multi-statement operations
- Map results to typed DTOs

## Summary

Raw queries: full SQL control. Always parameterize. Use for complex logic. Transactions for multi-statement. Never concatenate user input.
