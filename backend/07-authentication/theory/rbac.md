# RBAC (Role-Based Access Control)

## Concept

Role-Based Access Control assigns permissions to roles; users get roles. Access is checked by role membership (e.g., "is user in admin role?"). Roles group permissions for easier management—add a role to a user instead of assigning many permissions individually.

## Why It Matters

RBAC scales better than per-user permissions. Adding a new "support" role and assigning it to 50 users is simpler than granting 20 permissions to each. Most applications have a natural role structure (admin, editor, viewer). RBAC is the default choice for authorization in backends.

## Key Concepts

- Role: named set of permissions (e.g., `admin`, `editor`, `viewer`)
- Permission: action on resource (e.g., `users:read`, `posts:write`)
- Assignment: user → roles (many-to-many)
- Check: "does user's role include this permission?"

## Code Example

```typescript
const ROLES = {
  admin: ['users:*', 'posts:*', 'settings:*'],
  editor: ['posts:read', 'posts:write', 'users:read'],
  viewer: ['posts:read', 'users:read']
}

function hasPermission(userRoles: string[], permission: string): boolean {
  const userPerms = userRoles.flatMap(r => ROLES[r] ?? [])
  return userPerms.some(p => p === permission || (p.endsWith(':*') && permission.startsWith(p.slice(0, -1))))
}
```

## Under the Hood

Roles and permissions are typically stored in a database. On each request, load the user's roles (or cache them), compute the permission set, and check if the required permission is included. Wildcards (e.g., `users:*`) simplify definitions. Hierarchical roles (role inherits from role) can reduce duplication.

## Common Mistakes

- Too many roles (role explosion); too few (coarse-grained, over-privilege)
- Checking role name instead of permission (brittle; use permissions)
- Not caching role/permission lookups (DB hit per request)
- Hardcoding roles in code instead of config/DB

## Best Practices

- Model permissions, not roles, in checks; roles are a grouping mechanism
- Start with few roles; add as needed
- Cache role-permission mapping; invalidate on role change
- Support role hierarchy if it simplifies your model

## Summary

RBAC assigns permissions to roles; users get roles. Check permissions, not role names. Cache lookups; keep the model simple and extensible.
