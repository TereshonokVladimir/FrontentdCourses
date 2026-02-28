# Practice: Transactions Practice

## Tasks

### Task 1
Implement a `transferFunds(fromAccountId, toAccountId, amount)` function. Use BEGIN/COMMIT/ROLLBACK. Validate amount > 0 and sufficient balance. UPDATE both accounts. On any error, ROLLBACK and throw. Return success. Use parameterized queries.

### Task 2
Implement "create order with items" in a transaction. Insert into `orders`, get the new order id, insert into `order_items` for each item. If any insert fails (e.g., invalid product_id), rollback entire transaction. Return the created order with items. Validate product existence and stock.

### Task 3
Add retry logic for deadlocks. Wrap the transfer in a loop: on deadlock (error code 40P01 for PostgreSQL), wait with exponential backoff (100ms, 200ms, 400ms), retry up to 3 times. After 3 failures, throw. Log each retry attempt.

### Task 4
Implement a two-phase operation: (1) reserve inventory (UPDATE products SET reserved = reserved + qty WHERE id = X), (2) create order and order_items. Use a single transaction. If order creation fails, the reserved quantity must be released (ROLLBACK handles it). Add a cleanup job concept: orders in 'reserved' status for > 15 minutes should release inventory (separate script).

### Task 5
Implement optimistic locking: add `version` (INT, default 1) to `accounts`. On UPDATE, use `WHERE id = $1 AND version = $2` and `SET version = version + 1`. If no rows affected, another transaction modified the row—retry or return conflict error. Use this in transferFunds. Handle concurrent transfers to the same account correctly.
