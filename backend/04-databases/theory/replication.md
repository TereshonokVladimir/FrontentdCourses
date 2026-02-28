# Replication

## Concept

Replication copies data from a primary node to one or more replicas. Reads can be distributed to replicas; writes go to the primary. Used for high availability (failover), read scaling, and geographic distribution. Async replication is common; sync trades latency for durability.

## Why It Matters

Single-node databases are a single point of failure. Replication provides failover and read capacity. Understanding replication lag, consistency, and failover procedures is critical for production reliability.

## Key Concepts

- Primary-replica (master-slave): one writer, many readers
- Sync vs async: sync waits for replica ack; async is faster but lag
- Replication lag: delay between primary and replica
- Read-after-write: read your own writes (consistency)
- Failover: promote replica to primary when primary fails
- Split-brain: multiple primaries (avoid with quorum)

## Code Example

```javascript
// Route reads to replica, writes to primary
const primaryPool = new Pool({ host: 'primary.db' })
const replicaPool = new Pool({ host: 'replica.db' })

async function getOrder(id) {
  return replicaPool.query('SELECT * FROM orders WHERE id = $1', [id])
}

async function createOrder(data) {
  const result = await primaryPool.query('INSERT INTO orders ...', [...])
  // Read from primary for read-after-write consistency
  return primaryPool.query('SELECT * FROM orders WHERE id = $1', [result.rows[0].id])
}
```

## Under the Hood

Primary writes to WAL; replicas stream WAL and apply changes. Async: primary returns after local write. Sync: primary waits for replica ack. Lag depends on network and apply speed.

## Common Mistakes

- Reading from replica immediately after write (stale read)
- Assuming zero lag (always possible)
- No failover testing (manual promotion under pressure)
- Writes to replica (only primary accepts writes)

## Best Practices

- Route reads to replica, writes to primary
- Handle replication lag (read-after-write from primary)
- Automate failover; test regularly
- Monitor lag and replica health

## Summary

Replication: primary + replicas, read scaling, HA. Async common; understand lag. Read-after-write from primary. Automate failover.
