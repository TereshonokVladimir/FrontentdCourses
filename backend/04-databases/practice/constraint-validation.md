# Practice: Constraint Validation

## Tasks

### Task 1
Add database constraints to an existing schema: NOT NULL on required columns, UNIQUE on email, CHECK for valid status values (e.g., status IN ('active', 'inactive')), CHECK for positive price/quantity. Create migrations for each. Test that invalid data is rejected. Document the constraints in a schema comment or README.

### Task 2
Implement application-level validation that mirrors DB constraints. Before INSERT/UPDATE, validate: required fields, email format, status enum, positive numbers. Return user-friendly errors (e.g., "Email is required", "Status must be active or inactive"). Use a validation library (Zod, Joi) or manual checks. Ensure validation runs before DB call to avoid unnecessary round-trips. Handle DB constraint violations (unique, check) and map to user-friendly messages.

### Task 3
Add foreign key constraints to all relationship columns. Create migrations. Handle existing orphaned data: either clean up (delete orphans) or fix (update to valid parent) before adding FK. Document the migration steps. Add ON DELETE behavior: CASCADE for dependent data (e.g., order_items when order deleted), SET NULL or RESTRICT for optional references. Test cascade behavior.

### Task 4
Implement a CHECK constraint for business rules: e.g., `order_items.quantity > 0`, `orders.total >= 0`, `accounts.balance >= 0`. Add a constraint that `order_items` references products that exist and are in stock (or document why not). Create a constraint for "order total must equal sum of items" using a trigger: on order_items insert/update/delete, recalculate and update orders.total; add CHECK (orders.total = computed_sum). Use a trigger or generated column if supported.

### Task 5
Build a constraint testing suite. For each constraint, write a test that: (1) attempts invalid insert/update, (2) expects specific error (e.g., unique violation, check violation), (3) verifies error code and message. Use a test framework. Cover: NOT NULL, UNIQUE, FK (invalid reference, delete parent with children), CHECK. Add tests for application validation (valid data passes, invalid returns 400 with message). Document how to run the suite. Add a "constraint documentation" generator: query pg_catalog for constraints and output a markdown table of table, constraint, type, definition.
