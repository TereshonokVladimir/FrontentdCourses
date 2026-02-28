# Practice: RBAC Implementation

## Tasks

### Task 1
Define a roles and permissions schema: create `roles` (id, name) and `permissions` (id, resource, action) tables. Create `role_permissions` (roleId, permissionId) and `user_roles` (userId, roleId). Seed roles: `admin` (all permissions), `editor` (posts:read, posts:write), `viewer` (posts:read).

### Task 2
Add middleware `requirePermission('posts:write')` that loads the user's roles from the database (or cache), computes the set of permissions, and returns 403 if the required permission is not included. Support wildcards: `posts:*` matches `posts:read` and `posts:write`. Cache the role-permission mapping per user with a short TTL.

### Task 3
Implement `requireRole('admin')` as a convenience, but prefer permission checks. Add `GET /admin/users` that requires `users:read` and `GET /admin/users/:id` that requires `users:read`. Add `PUT /admin/users/:id/role` that requires `users:write` and allows changing a user's roles.

### Task 4
Support resource-scoped permissions: e.g., `posts:123:edit` for editing a specific post. Implement a `requireResourcePermission('posts', 'edit')` middleware that loads the resource, checks if the user owns it or has a global `posts:edit` permission, and returns 403 otherwise. Use this for `PUT /posts/:id`.

### Task 5
Add permission inheritance: allow roles to inherit from other roles (e.g., `editor` inherits from `viewer`). Store `parentRoleId` in the roles table. When computing permissions, traverse the inheritance chain and aggregate. Invalidate the permission cache when roles or assignments change. Add an admin UI or API to manage roles and permissions.