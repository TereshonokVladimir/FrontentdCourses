# Practice: Data Migration

## Tasks

### Task 1
Write a script to migrate data from a CSV file to a PostgreSQL table. Columns: id, name, email, created_at. Use COPY or bulk INSERT. Handle: encoding (UTF-8), date parsing, duplicate ids (ON CONFLICT DO NOTHING or UPDATE). Validate rows before insert (email format, required fields). Report: inserted count, skipped (duplicates), errors.

### Task 2
Implement a migration from one table structure to another: `users_old` (id, email, full_name) to `users_new` (id, email, first_name, last_name). Split full_name on space. Handle edge cases: single name (put in first_name), multiple spaces, null. Run in a transaction. Add a verification query: compare row counts and spot-check data.

### Task 3
Migrate data between databases (e.g., PostgreSQL to PostgreSQL, or MySQL to PostgreSQL). Use a script that: connects to both, reads in batches (e.g., 10k rows), transforms if needed, inserts into target. Preserve order if needed (e.g., for foreign keys). Handle large tables without loading all into memory. Add progress logging (rows migrated, estimated time remaining).

### Task 4
Implement a zero-downtime migration for adding a new required column with a default. Steps: (1) add column nullable, (2) backfill in batches (e.g., 10k per batch, with sleep to reduce load), (3) add NOT NULL constraint. Use a migration script with configurable batch size. Add a "dry run" that reports how many rows need backfill without writing. Support resume (track last migrated id).

### Task 5
Build a migration from PostgreSQL to MongoDB. Schema: users and orders with order_items. In MongoDB: embed order_items in orders, or use references. Design document structure. Script: read from PostgreSQL in batches, transform to MongoDB documents, insert. Handle relationships (user_id as reference or embed user summary). Add id mapping if using different id formats. Verify: row counts, sample data comparison. Support rollback (delete migrated data by batch id).
