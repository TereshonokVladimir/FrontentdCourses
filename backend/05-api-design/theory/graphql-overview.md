# GraphQL Overview

## Concept

GraphQL is a query language and runtime for APIs. Clients request exactly the fields they need in one request. A single endpoint serves all operations. The schema defines types and operations; resolvers fetch data. GraphQL is an alternative to REST for flexible, client-driven data fetching.

## Why It Matters

REST can over-fetch (returning full objects when only a few fields are needed) or under-fetch (requiring multiple round-trips). GraphQL lets clients specify shape and depth of data in one request. It suits complex UIs, mobile apps with bandwidth constraints, and aggregating multiple backends.

## Key Concepts

- **Schema**: Types, queries, mutations, subscriptions
- **Queries**: Read operations; clients specify fields
- **Mutations**: Write operations
- **Resolvers**: Functions that fetch data for each field
- **Single endpoint**: Typically POST /graphql

## Code Example

```graphql
# Schema
type User {
  id: ID!
  name: String!
  email: String!
  orders: [Order!]!
}

type Query {
  user(id: ID!): User
  users(limit: Int): [User!]!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
}

# Client query - fetches only requested fields
query {
  user(id: "123") {
    name
    orders {
      id
      total
    }
  }
}
```

## Under the Hood

Client sends a POST with query string. Server parses, validates against schema, and executes resolvers. Resolvers can be async; N+1 queries are a common pitfall (use DataLoader). GraphQL does not replace REST—it's a different paradigm with different trade-offs.

## Common Mistakes

- N+1 queries in resolvers (fetch orders per user)
- No query depth/complexity limits (DoS via deeply nested queries)
- Exposing internal implementation details in schema
- Using GraphQL for simple CRUD (REST may be simpler)
- No pagination on list fields (returning unbounded arrays)

## Best Practices

- Use DataLoader or batching to avoid N+1
- Implement query depth and complexity limits
- Paginate list fields (connections/cursors)
- Version schema carefully; avoid breaking changes
- Consider REST for simple resources; GraphQL for complex graphs

## Summary

GraphQL enables flexible, client-specified data fetching. Use it when clients need varied shapes of data or when aggregating multiple sources. Mitigate N+1 and DoS risks. Choose GraphQL or REST based on use case.
