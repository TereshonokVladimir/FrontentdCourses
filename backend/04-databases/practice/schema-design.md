# Practice: Schema Design

## Tasks

### Task 1
Design a schema for a blog: `users` (id, email, name, created_at), `posts` (id, user_id, title, body, created_at, updated_at), `comments` (id, post_id, user_id, body, created_at). Add appropriate primary keys, foreign keys, and indexes. Create migration files. Add UNIQUE on users(email).

### Task 2
Extend the blog schema: add `tags` (id, name) and `post_tags` (post_id, tag_id) for many-to-many. Add `likes` (user_id, post_id) with composite PK for tracking likes. Ensure no duplicate likes. Add indexes for common queries: posts by user, comments by post, posts by tag.

### Task 3
Design a multi-tenant schema where each tenant has isolated data. Option A: `tenant_id` on every table, composite PKs (tenant_id, id), RLS policies. Option B: schema per tenant. Implement Option A: add `tenants` table, add `tenant_id` to users, posts, comments. Create RLS policy: `tenant_id = current_setting('app.tenant_id')::int`. Document how to set tenant context per request.

### Task 4
Design an audit log: table `audit_log` (id, table_name, record_id, action, old_data JSONB, new_data JSONB, user_id, created_at). Create a trigger function that logs INSERT/UPDATE/DELETE on specified tables. Apply to `posts` and `users`. Use `OLD` and `NEW` in trigger. Add index on (table_name, record_id, created_at) for lookups.

### Task 5
Design a schema for an e-commerce order system with: products (with variants: size, color), inventory per variant, orders, order_items (with variant), payments (multiple per order: partial payments), refunds. Handle: one product many variants, inventory tracking, order state (pending, paid, shipped, refunded). Add constraints: order total = sum of items, payment total <= order total. Create migrations and document the design decisions.
