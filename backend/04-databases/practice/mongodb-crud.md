# Practice: MongoDB CRUD

## Tasks

### Task 1
Connect to MongoDB using the native driver or Mongoose. Create a `products` collection. Implement: insertOne (name, price, category), findById (by _id), find with filter (by category), updateOne, deleteOne. Use parameterized queries. Handle ObjectId conversion for id lookup.

### Task 2
Implement pagination for product listing: `findProducts({ page, limit, sort, order })`. Use skip and limit. Add total count with `countDocuments` (or estimatedDocumentCount for large collections). Return `{ data, total, page, limit }`. Create index on commonly filtered/sorted fields (e.g., category, price).

### Task 3
Implement an aggregation pipeline: "top 5 categories by total sales". Assume `orders` collection with `items: [{ product_id, quantity, price }]` and products have `category`. Use $lookup to join orders with products, $unwind items, $group by category, $sum (quantity * price), $sort, $limit 5. Return category name and total sales.

### Task 4
Implement full-text search on products: add text index on `name` and `description`. Use `$text: { $search: "query" }` with `$meta: "textScore"` for relevance sorting. Support multiple words. Return products sorted by text score. Handle no matches (empty array). Add a fallback: if no full-text results, use regex search on name (less efficient, document as fallback).

### Task 5
Implement a change stream or polling-based "recent changes" API. Use MongoDB change streams (if available) to watch the products collection. On insert/update/delete, push to an in-memory buffer (or Redis). Expose `GET /products/changes?since=timestamp` that returns changes since the given timestamp. If change streams not available, poll with `find({ updated_at: { $gt: since } })` and track last seen. Include operation type (insert, update, delete) and document id in response.
