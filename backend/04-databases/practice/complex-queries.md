# Practice: Complex Queries

## Tasks

### Task 1
Given `orders` (id, user_id, total, created_at) and `order_items` (order_id, product_id, quantity, price), write a query that returns each order with its total item count and total revenue. Use a subquery or JOIN with aggregation. Return: order_id, user_id, item_count, total.

### Task 2
Write a query using a CTE (WITH) to find the top 5 users by total order value in the last 30 days. CTE: `recent_orders` filters by date. Main query: GROUP BY user_id, SUM(total), ORDER BY sum DESC, LIMIT 5. Include user email (JOIN users).

### Task 3
Implement a "running total" query: for each order, show order_id, created_at, total, and the cumulative sum of total for that user up to that order. Use window function: `SUM(total) OVER (PARTITION BY user_id ORDER BY created_at)`.

### Task 4
Write a query to find "users who bought X also bought Y": for a given product_id, find other products frequently bought in the same order. Use self-join on order_items (same order_id, different product_id). Return product pairs with co-purchase count, ordered by count DESC. Exclude the given product from results.

### Task 5
Implement a recursive CTE: given an `employees` table (id, name, manager_id), find the full management chain from a given employee up to the CEO. Return: employee_id, employee_name, level (1 = self, 2 = manager, etc.), manager_name. Use `WITH RECURSIVE`. Handle cycles (limit depth or detect).
