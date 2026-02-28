# Practice: Backup Strategy

## Tasks

### Task 1
Create a backup script for a PostgreSQL database. Use `pg_dump` to create a full backup, compress with gzip, and upload to S3 (or equivalent object storage). Add a timestamp to the filename. Run the script manually and verify the backup can be restored. Document the restore procedure.

### Task 2
Schedule the backup script to run daily via cron (or a cloud scheduler). Add retention: keep daily backups for 7 days, weekly for 4 weeks. Implement retention in the script (delete old backups) or use S3 lifecycle rules. Add a notification (email or Slack) on backup failure. Log backup success/failure with size and duration.

### Task 3
Implement a backup strategy for application state: backup Redis (RDB or AOF) if used for critical data, backup uploads directory (S3 sync) or file storage. Ensure backups are consistent (e.g., use `pg_dump` with transaction isolation). Add a weekly full backup and daily incremental backups for large datasets (document the approach).

### Task 4
Use a managed backup service (e.g., AWS RDS automated backups, point-in-time recovery). Configure the backup window, retention period, and cross-region copy. Document the RTO and RPO. Create a restore test procedure: restore to a new instance, verify data integrity, and run smoke tests. Schedule quarterly restore tests.

### Task 5
Build a production backup strategy: define RTO and RPO for each component (database, files, config), implement automated backups with retention policy, store backups in a different region (disaster recovery), encrypt backups at rest, add backup verification (checksum, test restore), document runbooks for restore and disaster recovery, and automate backup monitoring (alert if backup fails or is older than expected).
