# Practice: Replication Setup

## Tasks

### Task 1
Document or set up PostgreSQL streaming replication (primary + replica). Steps: (1) configure primary for replication (wal_level, archive_mode), (2) create replica via pg_basebackup or restore, (3) configure replica recovery, (4) start replica. Use Docker or VMs for a local setup. Verify: replica receives writes (insert on primary, select on replica). Document the config files and commands.

### Task 2
Implement read/write splitting in your application. Create two connection pools: primary (writes) and replica (reads). Route SELECT to replica, INSERT/UPDATE/DELETE to primary. For "read your own writes": after a write, optionally read from primary for the next request from that user (use a flag or short-lived cache). Add a health check that verifies both primary and replica are reachable. Handle replica unavailable: fallback to primary for reads with a warning.

### Task 3
Add replication lag monitoring. Query the replica for `pg_last_wal_receive_lsn()` and `pg_last_wal_replay_lsn()`, compare with primary's `pg_current_wal_lsn()`. Or use `pg_stat_replication` on primary. Expose a metric or endpoint: `GET /health/db` returns `{ primary: ok, replica: ok, lag_seconds: 0.5 }`. Alert if lag exceeds threshold (e.g., 10 seconds). Implement with a simple polling loop or integrate with your health check.

### Task 4
Implement failover simulation. Document the manual failover procedure: (1) promote replica to primary, (2) update application config to point to new primary, (3) reconfigure old primary as replica. Create a script that automates steps 1-2 for a local Docker setup. Add a "read-only mode" for the application: when primary is unreachable, serve reads from replica and return 503 for writes. Use a feature flag or health-based routing.

### Task 5
Design and document a replication topology for high availability: primary + 2 replicas, with one replica in a different region (geo-replication). Document: sync vs async replication, consistency guarantees, failover order. Implement a simple "replication status" dashboard: for each node, show role (primary/replica), lag, last WAL position. Use `pg_stat_replication` and replica-side queries. Add a concept for "split-brain" prevention: quorum-based writes or fencing. Document the trade-offs.
