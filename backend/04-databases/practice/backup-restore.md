# Practice: Backup and Restore

## Tasks

### Task 1
Write a script to create a PostgreSQL backup using `pg_dump`. Support: full DB dump, custom format (-Fc) for compressed output. Save to a file with timestamp: `backup_YYYYMMDD_HHMMSS.dump`. Add a config for DB connection (env vars). Run and verify the backup file is created. Document restore command: `pg_restore -d dbname backup.dump`.

### Task 2
Implement automated backups: run the backup script on a schedule (cron or node-cron). Add retention: keep last N backups (e.g., 7 daily, 4 weekly). Delete older backups. Add a pre-backup check: verify DB is reachable. On failure, log and optionally send alert (simulate with console). Store backups in a configurable directory. Add a `backup list` command to show existing backups with size and date.

### Task 3
Implement backup to cloud storage (S3 or GCS). After local backup, upload to a bucket. Use SDK (aws-sdk, @google-cloud/storage) or CLI. Add config: bucket name, path prefix. Support optional server-side encryption. Add a `backup upload` command. Implement `backup download` to fetch a backup from cloud to local.

### Task 4
Implement point-in-time recovery (PITR) setup for PostgreSQL. Document and script: (1) enable WAL archiving in postgresql.conf, (2) create archive script that copies WAL to a directory or S3, (3) create a base backup (pg_basebackup or pg_dump), (4) document restore procedure: restore base backup, then replay WAL to target timestamp. Provide a script that restores to "latest" or to a specific timestamp. Use a test DB to verify.

### Task 5
Build a backup verification system. After backup: (1) restore to a temporary DB (create new DB, pg_restore), (2) run verification queries (row counts, checksum of critical tables), (3) drop temp DB. Report: backup valid or invalid. Run as part of backup job or separately. Add a "restore test" that restores the latest backup to a staging DB periodically (e.g., weekly) and runs smoke tests. Document the full backup/restore/verify workflow.
