# ABAC (Attribute-Based Access Control)

## Concept

Attribute-Based Access Control decides access based on attributes of the user, resource, action, and environment. Unlike RBAC (role-based), ABAC can express rules like "users can edit their own posts" or "managers can approve if amount < $10k." Policies combine attributes with logical conditions.

## Why It Matters

RBAC alone cannot express resource-level rules (e.g., "own data only") or context (time, IP, device). ABAC handles fine-grained, dynamic policies. Used in healthcare, finance, and multi-tenant systems where access depends on relationships and context, not just roles.

## Key Concepts

- Subject attributes: user ID, role, department, clearance
- Resource attributes: owner, type, sensitivity, created_at
- Environment attributes: time, IP, device, location
- Policy: boolean expression over attributes (e.g., `resource.owner == subject.id`)

## Code Example

```typescript
function canEditPost(user: User, post: Post): boolean {
  if (user.roles.includes('admin')) return true
  if (user.roles.includes('editor') && post.ownerId === user.id) return true
  if (post.visibility === 'public' && post.status === 'draft') return false
  return post.ownerId === user.id
}
```

## Under the Hood

ABAC engines evaluate policies against a context (subject, resource, action, environment). Simple implementations use functions; complex ones use policy languages (XACML, Rego, Cedar). The engine returns allow/deny. Performance depends on policy complexity and attribute resolution.

## Common Mistakes

- Over-engineering with a full ABAC engine when simple checks suffice
- Not caching attribute resolution (e.g., loading resource for every check)
- Inconsistent policy logic across endpoints (copy-paste errors)
- Failing to audit or test policy combinations

## Best Practices

- Start with explicit checks in code; introduce policy engine when rules multiply
- Cache resource and user attributes where possible
- Centralize policy logic; avoid duplicating checks
- Document and test policy combinations; use property-based tests

## Summary

ABAC uses attributes (user, resource, environment) for fine-grained access. Use when RBAC is insufficient (ownership, context). Start simple; adopt a policy engine when complexity grows.
