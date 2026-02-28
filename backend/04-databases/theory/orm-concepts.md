# ORM Concepts

## Concept

Object-Relational Mapping (ORM) maps database tables to application objects. Developers work with classes and instances instead of raw SQL. ORMs handle queries, relationships, and migrations. Examples: Prisma, TypeORM, Sequelize, Drizzle.

## Why It Matters

ORMs reduce boilerplate and SQL injection risk. They provide type safety and migrations. But they can generate inefficient SQL (N+1, over-fetching). Understanding ORM behavior helps avoid performance pitfalls and when to drop to raw SQL.

## Key Concepts

- Model/Entity: class mapping to table
- Repository/Query builder: find, create, update, delete
- Relationships: hasOne, hasMany, belongsTo, manyToMany
- Lazy vs eager loading: when related data is fetched
- N+1 problem: one query per related record
- Raw SQL escape hatch: when ORM falls short

## Code Example

```typescript
// Prisma
const user = await prisma.user.findUnique({
  where: { id: userId },
  include: { orders: { take: 10 } }  // Eager load, avoids N+1
})

// TypeORM
const orders = await orderRepo.find({
  where: { user: { id: userId } },
  relations: ['items'],
  take: 10
})
```

## Under the Hood

ORMs build SQL from method calls. Relationship loading triggers additional queries or JOINs. Migrations generate SQL from schema diff. Connection pooling is typically built-in.

## Common Mistakes

- N+1 from lazy loading in loops
- Over-fetching (select all when few columns needed)
- Ignoring generated SQL (inspect with logging)
- Complex queries in ORM when raw SQL is clearer

## Best Practices

- Eager load relationships when needed (include, relations)
- Use select to limit columns
- Enable query logging in development
- Use raw SQL for complex queries; ORM for CRUD

## Summary

ORM: objects map to tables. Avoid N+1 with eager loading. Inspect generated SQL. Raw SQL for complex queries.
