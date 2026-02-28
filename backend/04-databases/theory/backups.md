# Backups

## Concept

Backups create copies of data for recovery from failure, corruption, or human error. Types: full (entire DB), incremental (changes since last), and point-in-time recovery (PITR). Backup strategy defines RPO (recovery point objective) and RTO (recovery time objective).

## Why It Matters

Data loss is catastrophic. Ransomware, accidental DELETE, and hardware failure require restores. Backups are the last line of defense. Production systems need tested, automated backups.

## Key Concepts

- Full backup: pg_dump, mongodump, Redis RDB
- Incremental: WAL archiving (PostgreSQL), oplog (MongoDB)
- PITR: restore to specific timestamp using WAL
- Offsite storage: S3, GCS (survive datacenter loss)
- Retention: how long to keep backups
- Restore testing: verify backups work

## Code Example

```bash
# PostgreSQL full backup
pg_dump -Fc mydb > backup.dump

# Restore
pg_restore -d mydb backup.dump

# WAL archiving for PITR (postgresql.conf)
wal_level = replica
archive_mode = on
archive_command = 'cp %p /backup/wal/%f'
```

## Under the Hood

pg_dump reads tables and writes SQL or custom format. WAL contains all changes; replaying WAL after base backup enables PITR. Backup during load can affect performance; use replication for consistent snapshots.

## Common Mistakes

- No backups or untested backups
- Backups only on same host (lost with server)
- No retention policy (disk full, old backups lost)
- Not testing restore procedure

## Best Practices

- Automate backups; run daily at minimum
- Store offsite (different region/cloud)
- Test restore regularly (quarterly)
- Document RPO/RTO and restore procedure

## Summary

Backups: full, incremental, PITR. Automate, offsite storage, retention. Test restores. Define RPO/RTO.
