# Practice: Stored Procedure

## Tasks

### Task 1
Create a PostgreSQL function `get_user_orders(user_id INT)` that returns a table: order_id, total, created_at. Use `RETURNS TABLE` and a simple SELECT with JOIN. Call it from your application: `SELECT * FROM get_user_orders($1)`. Handle user not found (return empty).

### Task 2
Create a procedure `create_order_with_items(p_user_id INT, p_items JSONB)` that inserts an order and order_items in a single transaction. JSONB format: `[{"product_id": 1, "quantity": 2}, ...]`. Validate product existence and stock. Return the new order id. Use a function with RETURNING or OUT parameter. Handle invalid product_id (raise exception, rollback).

### Task 3
Create a function `transfer_funds(from_id INT, to_id INT, amount DECIMAL)` with full error handling. Check: amount > 0, sufficient balance, both accounts exist. Use explicit BEGIN/COMMIT/ROLLBACK in the function (or rely on caller's transaction). Raise descriptive exceptions. Add a CHECK constraint on accounts.balance >= 0. Test concurrent transfers (two transfers to same account).

### Task 4
Create a trigger and function: on `orders.status` change to 'shipped', update `products` inventory (decrease by order_items quantities). Use a trigger on orders or order_items. Handle race conditions: use row-level locking (SELECT FOR UPDATE) when updating inventory. Add a function `ship_order(order_id INT)` that sets status and lets the trigger handle inventory. Ensure idempotency (shipping same order twice doesn't double-decrement).

### Task 5
Implement a scheduled job using pg_cron or a similar extension (or simulate with a Node script). Create a function `archive_old_orders()` that: (1) moves orders older than 1 year to `orders_archive` table, (2) moves corresponding order_items to `order_items_archive`, (3) deletes from main tables. Run in a transaction. Add a function `restore_archived_order(order_id)` that moves data back. Log archived count. If pg_cron unavailable, create a Node script that runs the function on a schedule.
