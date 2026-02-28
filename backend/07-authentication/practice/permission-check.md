# Practice: Permission Check

## Tasks

### Task 1
Create a `checkPermission(userId, permission)` function that loads the user's roles, fetches permissions for those roles, and returns true if the permission is in the set. Support `resource:action` format and wildcard matching (`users:*` matches `users:read`). Use a simple in-memory or DB-backed role-permission map.

### Task 2
Implement a declarative permission decorator or wrapper: `withPermission('posts:write', handler)` that runs the handler only if the user has the permission. Return 403 with a clear error message if not. Integrate with your auth middleware so `req.user` is available.

### Task 3
Add support for conditional permissions based on resource ownership: `checkResourcePermission(userId, 'posts', 'edit', post)` returns true if the user has `posts:edit` globally or owns the post. Use this in a `GET /posts/:id` handler to allow read for owner or users with `posts:read`.

### Task 4
Implement permission caching: cache the user's permission set in Redis with a 5-minute TTL. Key by `userId`. Invalidate the cache when the user's roles change. Ensure the cache is bypassed for permission checks that depend on resource ownership (or include resource ID in the cache key).

### Task 5
Add an audit log for permission denials: when a user attempts an action they lack permission for, log the event (userId, permission, resource, timestamp, IP). Create an endpoint `GET /admin/audit/denials` (admin only) to view recent denials. Use this to detect misconfigurations or attack attempts.