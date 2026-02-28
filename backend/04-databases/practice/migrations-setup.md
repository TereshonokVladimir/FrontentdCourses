# Practice: Migrations Setup

## Tasks

### Task 1
Set up a migration system using a library (e.g., node-pg-migrate, db-migrate, or Knex). Create a `migrations` folder. Implement: run pending migrations (up), track applied migrations in a `schema_migrations` table. First migration: create `schema_migrations` with `version` and `applied_at`.

### Task 2
Create migration `002_create_users`: table `users` with `id` (SERIAL PK), `email` (VARCHAR 255 UNIQUE NOT NULL), `password_hash` (VARCHAR 255), `created_at` (TIMESTAMPTZ). Write the corresponding down migration (DROP TABLE). Verify up and down work.

### Task 3
Create migration `003_add_users_status`: add column `status` (VARCHAR 20, default 'active') to users. Use `ADD COLUMN IF NOT EXISTS` for idempotency. Down migration: `ALTER TABLE users DROP COLUMN IF EXISTS status`. Add migration `004_create_index_users_email` for index on `users(email)`.

### Task 4
Implement zero-downtime migration for adding a NOT NULL column: (1) add column nullable with default, (2) backfill existing rows, (3) add NOT NULL constraint. Create migrations `005_add_users_phone` that add `phone` (VARCHAR 20) as NOT NULL. Handle the three-step process. Down: drop column.

### Task 5
Add a migration runner CLI: `migrate up`, `migrate down` (rollback last), `migrate status` (list applied vs pending). Support `--to VERSION` for migrating to a specific version. Use a single transaction per migration. Log each migration start and completion. Handle partial failures (mark migration as failed, don't re-run).
