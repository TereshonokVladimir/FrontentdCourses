# Batch Processing

## Concept

Batch processing groups multiple operations into fewer round-trips or transactions. Instead of one DB write per item, you insert/update in bulk. Reduces network overhead, connection churn, and transaction cost.

## Why It Matters

Processing 1000 items with 1000 queries is slow and resource-intensive. Batching into 10–50 operations cuts latency and load. Critical for imports, sync jobs, and high-throughput write paths.

## Key Concepts

- **Bulk insert**: INSERT with multiple VALUES or COPY (PostgreSQL)
- **Batch size**: Balance between memory and round-trip count
- **Transaction batching**: One transaction per batch for atomicity
- **Chunking**: Split large datasets into processable batches
- **Backpressure**: Don't overwhelm downstream; limit concurrency

## Code Example

```javascript
// One insert per item (slow)
for (const item of items) {
  await db.query('INSERT INTO logs (data) VALUES ($1)', [item])
}

// Batch insert
const batchSize = 100
for (let i = 0; i < items.length; i += batchSize) {
  const batch = items.slice(i, i + batchSize)
  const values = batch.map((_, j) => `($${j + 1})`).join(', ')
  await db.query(`INSERT INTO logs (data) VALUES ${values}`, batch)
}
```

## Under the Hood

Each query has overhead: parse, plan, execute, network. Batching amortizes this. Bulk INSERT uses a single parse/plan. COPY is even faster for large loads. Transaction per batch limits rollback scope.

## Common Mistakes

- Batch size too large (memory, timeout, lock duration)
- Batch size too small (too many round-trips)
- No error handling per batch (one failure loses all)
- Blocking event loop with synchronous batch processing

## Best Practices

- Batch size 100–1000 for typical workloads
- Use transactions per batch for atomicity
- Process batches asynchronously; don't block request handling
- Log progress; support resume on partial failure

## Summary

Batch processing reduces round-trips and overhead. Use bulk INSERT/UPDATE, tune batch size, and process in chunks for large datasets.
