# Permissions Model

## Concept

A permissions model defines how access is represented and checked. Common patterns: flat permissions (`users:read`), hierarchical (`users:read`, `users:*`), resource-scoped (`posts:123:edit`), and relationship-based (`own posts`). The model should match your domain and scale with growth.

## Why It Matters

A poorly designed model leads to over-privilege, under-privilege, or unmaintainable checks. Too coarse (admin vs user) limits flexibility; too fine (per-resource) explodes complexity. Production systems need a model that is expressive, auditable, and performant.

## Key Concepts

- Action + resource: `resource:action` (e.g., `posts:create`, `users:delete`)
- Wildcards: `*` for all (e.g., `users:*`); use sparingly
- Scoping: tenant, project, or resource ID in the permission
- Inheritance: roles inherit from roles; permissions aggregate

## Code Example

```typescript
type Permission = `${string}:${string}` // e.g., 'posts:read'

function matches(required: Permission, granted: Permission): boolean {
  if (granted === '*:*') return true
  const [rRes, rAct] = required.split(':')
  const [gRes, gAct] = granted.split(':')
  return (gRes === '*' || gRes === rRes) && (gAct === '*' || gAct === rAct)
}
```

## Under the Hood

Permissions are stored as strings or structured records. Checks compare the required permission against the user's set (from roles or direct assignment). Wildcard matching can be done with string comparison or regex. For large permission sets, use a trie or bitmask for efficiency.

## Common Mistakes

- Inconsistent naming (`read_users` vs `users:read`)
- No hierarchy or wildcards (repetitive role definitions)
- Checking at UI only (always enforce server-side)
- Storing permissions in JWT without re-validation (stale permissions)

## Best Practices

- Use consistent `resource:action` format; document the schema
- Support wildcards for admin-style roles
- Enforce server-side on every protected operation
- Cache permission sets; invalidate on role/permission change

## Summary

Design permissions as `resource:action`; support wildcards and scoping. Enforce server-side; cache and invalidate correctly. Match the model to your domain complexity.
